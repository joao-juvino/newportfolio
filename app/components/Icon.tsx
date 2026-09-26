import type { CSSProperties } from "react";
export type IconName =
  | "arrow"
  | "mail"
  | "code"
  | "shield"
  | "cart"
  | "database"
  | "cloud"
  | "tools"
  | "github"
  | "linkedin"
  | "pin"
  | "education"
  | "menu"
  | "close"
  | "server"
  | "download"
  | "architecture"
  | "queue"
  | "globe"
  | "building";
const paths: Record<IconName, React.ReactNode> = {
  download: (
    <>
      <path d="M12 3v12m-4-4 4 4 4-4M4 16v5h16v-5" />
    </>
  ),
  architecture: (
    <>
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <path d="M12 8v4M5 16v-4h14v4" />
    </>
  ),
  queue: (
    <>
      <path d="M4 4v16M20 4v16M4 8h16M4 16h16M8 5l3 3-3 3m6 2 3 3-3 3" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <path d="M3 12h18M5 6h14M5 18h14" />
    </>
  ),
  building: (
    <>
      <path d="m3 21 1-13 8-5 8 5 1 13H3Zm6 0V11h6v10M1 8l11-7 11 7M12 11v10" />
    </>
  ),
  arrow: (
    <>
      <path d="M4 12h15M13 5l7 7-7 7" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </>
  ),
  code: (
    <>
      <path d="m7 6-5 6 5 6m10-12 5 6-5 6m-3-15-4 18" />
    </>
  ),
  shield: (
    <>
      <path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  cart: (
    <>
      <path d="M2 3h3l3 13h11l3-10H6M9 20h.01M18 20h.01" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" />
    </>
  ),
  cloud: (
    <>
      <path d="M6 18a5 5 0 0 1-1-10 7 7 0 0 1 13-2 6 6 0 0 1 1 12M12 12v10m-3-7 3-3 3 3" />
    </>
  ),
  tools: (
    <>
      <path d="M14 4a6 6 0 0 0-7 8L2 17l5 5 6-6a6 6 0 0 0 7-8l-4 4-4-4 4-4Z" />
    </>
  ),
  github: (
    <>
      <path d="M9 20c-5 1-5-3-7-3m14 5v-4c0-1-.4-2-1-2 4-.5 6-2 6-6a5 5 0 0 0-1-3 5 5 0 0 0 0-4s-2 0-4 2a13 13 0 0 0-8 0C6 3 4 3 4 3a5 5 0 0 0 0 4 5 5 0 0 0-1 3c0 4 2 5.5 6 6-.6 0-1 1-1 2v4" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7m0-10v.01M11 17v-7m0 3c0-4 6-4 6 0v4" />
    </>
  ),
  pin: (
    <>
      <path d="M19 9c0 6-7 12-7 12S5 15 5 9a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="9" r="2" />
    </>
  ),
  education: (
    <>
      <path d="m2 9 10-6 10 6-10 6-10-6Zm4 3v6c4 3 8 3 12 0v-6m4-3v8" />
    </>
  ),
  menu: (
    <>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </>
  ),
  close: (
    <>
      <path d="m5 5 14 14M19 5 5 19" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="3" width="18" height="7" rx="2" />
      <rect x="3" y="14" width="18" height="7" rx="2" />
      <path d="M7 6.5h.01M7 17.5h.01M12 7h5M12 18h5" />
    </>
  ),
};
export default function Icon({
  name,
  className,
  style,
}: {
  name: IconName;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {paths[name]}
    </svg>
  );
}
