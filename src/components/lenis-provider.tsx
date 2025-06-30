"use client";

import { ReactLenis } from "lenis/react";

const preventScroll = (node: Element) => {
  const style = window.getComputedStyle(node);
  return (
    style.overflow === "scroll" ||
    style.overflowY === "scroll" ||
    style.overflow === "auto" ||
    style.overflowY === "auto"
  );
};

export function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        prevent: preventScroll,
      }}
    >
      {children}
    </ReactLenis>
  );
}
