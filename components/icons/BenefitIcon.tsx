import type { IconName } from "@/lib/benefits";

const paths: Record<IconName, React.ReactNode> = {
  cotton: (
    <>
      <path d="M12 7a3 3 0 0 1 3-3 3 3 0 0 1 1 5 3 3 0 0 1-1 5 3 3 0 0 1-3-3 3 3 0 0 1-3 3 3 3 0 0 1-1-5 3 3 0 0 1 1-5 3 3 0 0 1 3 3Z" />
      <path d="M12 12v8M9 20h6" />
    </>
  ),
  wrinkle: (
    <>
      <path d="M4 8h13l3 3v5H7l-3-3V8Z" />
      <path d="M4 14c2 0 2-1 4-1s2 1 4 1 2-1 4-1" />
    </>
  ),
  feather: (
    <>
      <path d="M20 5c0 7-5 12-12 12H4c0-7 5-12 12-12 2 0 4 0 4 0Z" />
      <path d="M16 8 6 18M14 9h-3M15 12h-4" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-8 6-13 14-13 0 8-6 13-14 13Z" />
      <path d="M5 19c3-4 6-6 10-8" />
    </>
  ),
  airflow: (
    <>
      <path d="M3 8h11a3 3 0 1 0-3-3" />
      <path d="M3 12h15a3 3 0 1 1-3 3" />
      <path d="M3 16h8" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  handLeaf: (
    <>
      <path d="M3 21h6l9-2a1.5 1.5 0 0 0-1-3l-4 1-2-1" />
      <path d="M3 14h2l3 2M14 10c0-4 3-6 7-6 0 4-3 6-7 6Z" />
    </>
  ),
  thermometer: (
    <>
      <path d="M12 4a2 2 0 0 1 2 2v8a4 4 0 1 1-4 0V6a2 2 0 0 1 2-2Z" />
      <path d="M12 14v3" />
    </>
  ),
  droplet: (
    <>
      <path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11Z" />
      <path d="M9 14a3 3 0 0 0 3 3" />
    </>
  ),
};

export function BenefitIcon({
  name,
  className = "h-6 w-6",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}
