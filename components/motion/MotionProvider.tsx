"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/** Honours the user's "reduce motion" OS setting across all animations. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
