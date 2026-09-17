"use client"

import { useEffect } from "react"

/**
 * RevealObserver — mounts once and drives every plain `.reveal` element
 * (section headers use the CSS class directly, not the <Reveal> wrapper).
 * Adds `.visible` on intersect to match the `.reveal.visible` rule in
 * globals.css. Without this, `.reveal` elements stay at opacity:0 forever.
 */
export function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    )

    const observe = () => {
      document.querySelectorAll(".reveal:not(.visible)").forEach((el) => io.observe(el))
    }
    observe()

    // Sections mount lazily (client components) after the initial pass —
    // watch for newly added .reveal nodes too.
    const mo = new MutationObserver(observe)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])

  return null
}

export default RevealObserver
