"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  const isAboutPage = pathname === "/about"

  // Base text styling + animated underline pseudo-element
  const linkClasses =
    "relative py-1 text-sm uppercase sm:text-sm font-bold tracking-wide text-neutral-300 transition-colors hover:text-white " +
    // Mobile: Permanent underline
    "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-foreground after:w-full " +
    // Desktop (md:): Starts at width 0 and smoothly animates to 100% on hover
    "md:after:w-0 md:hover:after:w-full md:after:transition-all md:after:duration-300 md:after:ease-out"

  return (
    <header className="z-20 flex w-full items-center justify-between pb-4">
      {/* Logo on the left */}
      <Link href="/">
        <img
          src="/time-logo.svg"
          alt="T.I.M.E Youth Ministry Logo"
          className="h-10 object-contain drop-shadow-2xl md:h-12"
        />
      </Link>

      {/* Dynamic Animated Link */}
      {isAboutPage ? (
        <Link href="/" className={linkClasses}>
          ← Back Home
        </Link>
      ) : (
        <Link href="/about" className={linkClasses}>
          About TIME Camps
        </Link>
      )}
    </header>
  )
}
