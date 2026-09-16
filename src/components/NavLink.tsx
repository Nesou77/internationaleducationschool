"use client"

import { forwardRef, useEffect, useState } from "react"
import { cn } from "../lib/utils"

interface NavLinkProps {
  to: string
  className?: string
  activeClassName?: string
  children?: React.ReactNode
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(({ to, className, activeClassName, children, ...props }, ref) => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const check = () => {
      try {
        setActive(window.location.hash === to || window.location.pathname + window.location.hash === to)
      } catch {
        setActive(false)
      }
    }
    check()
    window.addEventListener("hashchange", check)
    return () => window.removeEventListener("hashchange", check)
  }, [to])

  return (
    <a ref={ref} href={to} className={cn(className, active && activeClassName)} {...props}>
      {children}
    </a>
  )
})

NavLink.displayName = "NavLink"

export { NavLink }
