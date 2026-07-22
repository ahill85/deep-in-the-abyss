"use client";

import { Component, useEffect, useRef, type ReactNode } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

const EMPTY = new Set(["unfilled", "unfill-optimized"]);

type Props = {
  /** Placement marker for layout / debugging */
  placement?: "mid" | "bottom";
};

/** Keeps a blocked/broken ad from taking down the page (Brave Shields, etc.). */
class AdErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed) return null;
    return this.props.children;
  }
}

function AdSlotInner({ placement = "bottom" }: Props) {
  const slotRef = useRef<HTMLDivElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    const slot = slotRef.current;
    if (!slot) return;
    const ins = slot.querySelector<HTMLElement>(".adsbygoogle");
    if (!ins) return;

    // If Brave/adblock removed or blocked the loader, hide the slot and stop.
    if (typeof window.adsbygoogle === "undefined") {
      const timer = window.setTimeout(() => {
        if (typeof window.adsbygoogle === "undefined") {
          slot.classList.add("is-empty");
          slot.setAttribute("aria-hidden", "true");
        }
      }, 2500);
      return () => window.clearTimeout(timer);
    }

    const already =
      pushed.current ||
      ins.getAttribute("data-adsbygoogle-status") != null ||
      ins.getAttribute("data-ad-status") != null;

    if (!already) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushed.current = true;
      } catch {
        slot.classList.add("is-empty");
        slot.setAttribute("aria-hidden", "true");
        return;
      }
    }

    const sync = () => {
      const status = (ins.getAttribute("data-ad-status") || "").toLowerCase();
      slot.classList.toggle("is-filled", status === "filled");
      slot.classList.toggle("is-empty", EMPTY.has(status));
      if (EMPTY.has(status)) slot.setAttribute("aria-hidden", "true");
      else slot.removeAttribute("aria-hidden");
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(ins, { attributes: true, attributeFilter: ["data-ad-status"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={slotRef}
      className={`ad-slot ad-slot-${placement}`}
      data-ad={placement}
      aria-label="Advertisement"
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-9167552007992876"
        data-ad-slot="2160710155"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

/** Shared AdSense unit (same ca-pub / slot as other Astar Media apps). */
export function AdSlot(props: Props) {
  return (
    <AdErrorBoundary>
      <AdSlotInner {...props} />
    </AdErrorBoundary>
  );
}
