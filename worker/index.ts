/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  MATCH_REFRESH_SECRET: string;
  DB: D1Database;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const BASE_PATH = "/deep-in-the-abyss";
const MATCHES_URL = `https://deep-in-the-abyss.adhill6.workers.dev${BASE_PATH}/api/matches?v=daily`;

async function refreshDailyMatches(env: Env) {
  await fetch(MATCHES_URL, {
    headers: { "x-match-refresh": env.MATCH_REFRESH_SECRET || "dia-daily-refresh-v1" },
  });
}

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/_vinext/image" || url.pathname === `${BASE_PATH}/_vinext/image`) {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    // Strip basePath so /deep-in-the-abyss/assets/foo.css → /assets/foo.css
    if (
      env.ASSETS &&
      url.pathname.startsWith(`${BASE_PATH}/`) &&
      /\.(css|js|mjs|map|png|jpe?g|gif|webp|svg|ico|woff2?|ttf|otf|txt|xml|webmanifest|json)$/i.test(url.pathname)
    ) {
      const stripped = new URL(request.url);
      stripped.pathname = url.pathname.slice(BASE_PATH.length) || "/";
      const asset = await env.ASSETS.fetch(stripped);
      if (asset.status !== 404) return asset;
    }

    return handler.fetch(request, env, ctx);
  },

  // Once a day — crawl feeds and refresh the cache. Visitors never trigger this.
  async scheduled(_controller: unknown, env: Env, ctx: ExecutionContext) {
    ctx.waitUntil(refreshDailyMatches(env));
  },
};

export default worker;
