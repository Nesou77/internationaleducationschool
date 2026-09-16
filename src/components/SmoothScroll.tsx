import { useEffect, useRef, ReactNode } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface SmoothScrollProps {
  children: ReactNode
  /** Lenis smoothness — higher = more inertia. Default 1.2 (cinematic). */
  lerp?: number
  /** Disable smooth scroll entirely (for users who prefer no motion). */
  disabled?: boolean
}

/**
 * SmoothScroll — Lenis smooth scroll provider wrapped around the app.
 *
 * Wrap <App/> or <main/> in this component exactly once. It:
 *   1. Enables buttery Lenis smooth scrolling site-wide
 *   2. Connects Lenis to GSAP ScrollTrigger (so pinned sections work correctly)
 *   3. Respects `prefers-reduced-motion` and the `disabled` prop (instant fallback)
 *   4. Keeps the STANDARD scroll APIs working while Lenis is active:
 *      `window.scrollTo`, `element.scrollIntoView()` and `<a href="#…">`
 *      clicks are routed through Lenis (they would otherwise be swallowed by
 *      the scroll animation). Write ordinary scroll code — it just works.
 *   5. Cleans up all listeners and restores the native APIs on unmount
 *
 * DO NOT nest multiple instances — one per page.
 */
export function SmoothScroll({ children, lerp = 0.12, disabled = false }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (disabled || reducedMotion) return

    // CSS 'scroll-behavior: smooth' fights Lenis: Lenis writes a small scroll
    // step every frame and CSS smooth re-animates EACH step, so the browser
    // never lands where Lenis put it (rubbery / laggy / stuck scrolling —
    // live case: project 86d90d2a, 2026-07-23). Lenis requires native scroll
    // behavior while it drives the page. Enforce it at the source: the inline
    // style beats any stylesheet rule; the author's value is restored on
    // unmount.
    const prevScrollBehavior = document.documentElement.style.scrollBehavior
    document.documentElement.style.scrollBehavior = 'auto'

    const lenis = new Lenis({
      lerp,
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.5,
    })
    lenisRef.current = lenis
    // Expose the active Lenis instance so ScrollToTop can reset scroll THROUGH
    // Lenis on route change. Cleared on unmount.
    ;(window as unknown as { __lenis?: Lenis }).__lenis = lenis

    lenis.on('scroll', ScrollTrigger.update)

    let lastRafAt = 0
    const raf = (time: number) => {
      lastRafAt = performance.now()
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    // rAF-starvation fallback: some embed contexts suspend requestAnimationFrame
    // entirely — an occluded or render-throttled cross-origin iframe (the
    // builder's preview pane), battery saver, background tabs. Lenis owns the
    // wheel (preventDefault) and moves the page ONLY from its rAF tick, so a
    // suspended rAF leaves the site 100% scroll-dead while a plain site would
    // still scroll natively. Plain timers keep firing in those states: when the
    // ticker goes quiet, drive Lenis from an interval so scrolling degrades to
    // timer rate instead of dying. No-op while rAF is healthy.
    const rafFallback = window.setInterval(() => {
      if (performance.now() - lastRafAt > 200) lenis.raf(performance.now())
    }, 100)

    // ── Standard-API bridge ──────────────────────────────────────────────
    // While Lenis animates document scroll, direct writes to scrollTop are
    // overwritten on the next frame. Bridge the standard APIs through
    // lenis.scrollTo so ordinary component code keeps working.
    const nativeScrollTo = window.scrollTo.bind(window)
    const nativeScrollIntoView = Element.prototype.scrollIntoView

    window.scrollTo = ((...args: unknown[]) => {
      let top = 0
      let smooth = true
      const a = args[0]
      if (typeof a === 'object' && a !== null) {
        const o = a as ScrollToOptions
        top = o.top ?? 0
        smooth = o.behavior !== 'auto' && o.behavior !== 'instant'
      } else if (args.length >= 2) {
        top = Number(args[1]) || 0
      }
      lenis.scrollTo(top, smooth ? undefined : { immediate: true })
    }) as typeof window.scrollTo

    // Elements inside a nested scrollable container (dialog bodies, chat
    // lists, carousels) keep native behavior — Lenis only owns the document.
    const hasScrollableAncestor = (el: Element): boolean => {
      let n = el.parentElement
      while (n && n !== document.body) {
        const s = getComputedStyle(n)
        if (/(auto|scroll)/.test(s.overflowY) && n.scrollHeight > n.clientHeight + 1) return true
        n = n.parentElement
      }
      return false
    }

    Element.prototype.scrollIntoView = function (this: Element, arg?: boolean | ScrollIntoViewOptions) {
      if (!document.documentElement.contains(this) || hasScrollableAncestor(this)) {
        return nativeScrollIntoView.call(this, arg)
      }
      let offset = 0
      if (typeof arg === 'object' && arg !== null && arg.block === 'center') {
        offset = -Math.max(0, (window.innerHeight - this.getBoundingClientRect().height) / 2)
      }
      lenis.scrollTo(this as HTMLElement, { offset })
    }

    // Plain anchor links: the browser's instant jump is also swallowed, so
    // route same-page href="#…" clicks through Lenis too.
    const onAnchorClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const anchor = (e.target as Element | null)?.closest?.('a[href^="#"]')
      if (!anchor) return
      const id = decodeURIComponent((anchor.getAttribute('href') || '').slice(1))
      if (!id) return
      const el = document.getElementById(id)
      if (!el) return
      e.preventDefault()
      lenis.scrollTo(el)
    }
    document.addEventListener('click', onAnchorClick)

    return () => {
      document.documentElement.style.scrollBehavior = prevScrollBehavior
      document.removeEventListener('click', onAnchorClick)
      window.scrollTo = nativeScrollTo
      Element.prototype.scrollIntoView = nativeScrollIntoView
      window.clearInterval(rafFallback)
      gsap.ticker.remove(raf)
      lenis.destroy()
      lenisRef.current = null
      const w = window as unknown as { __lenis?: Lenis }
      if (w.__lenis === lenis) w.__lenis = undefined
    }
  }, [lerp, disabled])

  return <>{children}</>
}

export default SmoothScroll
