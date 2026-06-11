import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
}) {
  const max =
    size === "wide" ? "max-w-[1400px]" : size === "narrow" ? "max-w-3xl" : "max-w-[1200px]";
  return <div className={`mx-auto w-full ${max} container-px ${className}`}>{children}</div>;
}
