import fs from "fs";

const path = "dist/server/wrangler.json";
const config = JSON.parse(fs.readFileSync(path, "utf8"));
config.name = "deep-in-the-abyss";
config.topLevelName = "deep-in-the-abyss";
config.assets = { ...(config.assets || {}), directory: "../client", binding: "ASSETS" };
// Daily feed crawl at 12:00 UTC — visitors only read the KV snapshot
config.triggers = { crons: ["0 12 * * *"] };
config.vars = { ...(config.vars || {}), MATCH_REFRESH_SECRET: "dia-daily-refresh-v1" };
config.kv_namespaces = [
  {
    binding: "MATCHES_CACHE",
    id: "77ce294732914eeca9b9da1fb7601155",
  },
];
fs.writeFileSync(path, JSON.stringify(config));
