"use client"

import { LazyMotion } from "framer-motion"
import type { ReactNode } from "react"

// Load framer-motion's animation features after hydration instead of
// shipping them in the initial bundle. Components use `m` (see sections).
const loadFeatures = () =>
  import("framer-motion").then((mod) => mod.domAnimation)

export default function MotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>
}
