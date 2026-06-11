import type { SVGProps } from "react";

/**
 * Elemental Episodes monogram — an interlocking "EE" mark.
 * Recreated as vector from the brand label. Uses currentColor so it adapts
 * to any background (silver on dark, ink on light).
 */
export function Monogram({ title = "Elemental Episodes", ...props }: SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="currentColor"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Two "E" letterforms overlapped with a diagonal offset — the
          layered double-E mark from the Elemental Episodes label. */}
      {/* Front E (lower-left) */}
      <rect x="24" y="31" width="10" height="74" />
      <rect x="24" y="31" width="48" height="10" />
      <rect x="24" y="63" width="42" height="10" />
      <rect x="24" y="95" width="48" height="10" />
      {/* Back E (upper-right) */}
      <rect x="48" y="15" width="10" height="74" />
      <rect x="48" y="15" width="48" height="10" />
      <rect x="48" y="47" width="42" height="10" />
      <rect x="48" y="79" width="48" height="10" />
    </svg>
  );
}

/**
 * Full lockup: monogram + wordmark, stacked. Inherits text color.
 */
export function Logo({
  className = "",
  showTagline = true,
  monogramClassName = "h-8 w-8",
}: {
  className?: string;
  showTagline?: boolean;
  monogramClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Monogram className={monogramClassName} />
      <span className="flex flex-col leading-none">
        <span className="text-[0.95rem] font-medium uppercase tracking-[0.34em] text-platinum">
          Elemental Episodes
        </span>
        {showTagline && (
          <span className="mt-1 text-[0.55rem] uppercase tracking-[0.55em] text-steel">
            Supreme Basics
          </span>
        )}
      </span>
    </span>
  );
}
