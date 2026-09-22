"use client";

import dynamic from "next/dynamic";
import { Component, type ReactNode, useEffect, useState } from "react";

const SceneCanvas = dynamic(() => import("./SceneCanvas"), {
  ssr: false,
  loading: () => <SceneFallback state="loading" />,
});

function SceneFallback({ state = "static" }: { state?: "loading" | "static" }) {
  return (
    <div className="scene-fallback" aria-hidden="true" data-state={state}>
      <span className="fallback-spine" />
      <span className="fallback-module fallback-module-a" />
      <span className="fallback-module fallback-module-b" />
      <span className="fallback-module fallback-module-c" />
    </div>
  );
}

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? <SceneFallback /> : this.props.children;
  }
}

export default function HeroScene() {
  const [ready, setReady] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const decide = () => {
      setEnabled(!reducedMotion.matches && supportsWebGL());
      setReady(true);
    };

    const idleWindow = window as Window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    const idleId = idleWindow.requestIdleCallback?.(decide, { timeout: 900 });
    const timeoutId = idleId === undefined ? window.setTimeout(decide, 180) : undefined;

    const onChange = () => decide();
    reducedMotion.addEventListener("change", onChange);

    return () => {
      reducedMotion.removeEventListener("change", onChange);
      if (idleId !== undefined) idleWindow.cancelIdleCallback?.(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  if (!ready || !enabled) return <SceneFallback state={ready ? "static" : "loading"} />;

  return (
    <div className="scene-canvas" aria-hidden="true">
      <SceneBoundary>
        <SceneCanvas />
      </SceneBoundary>
    </div>
  );
}
