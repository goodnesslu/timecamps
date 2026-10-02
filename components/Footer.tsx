import React from "react"

export default function Footer() {
  return (
    <footer className="z-20 flex w-full flex-row items-center justify-between border-t border-white/10 pt-4">
      {/* Left corner: Copyright */}
      <p className="truncate pr-2 text-xs font-medium text-neutral-700 sm:text-sm">
        © {new Date().getFullYear()} Chrisco Youth Fellowship Uganda
      </p>

      {/* Right corner: Social Media SVGs */}
      <div className="flex shrink-0 items-center gap-4 sm:gap-6">
        {/* TikTok */}
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          aria-label="TikTok"
          className="text-neutral-600 transition-colors hover:text-primary"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 sm:h-5 sm:w-5"
          >
            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
          </svg>
        </a>

        {/* YouTube */}
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          aria-label="YouTube"
          className="text-neutral-600 transition-colors hover:text-primary"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 sm:h-5 sm:w-5"
          >
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
            <path d="m10 15 5-3-5-3z" fill="currentColor" stroke="none" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="text-neutral-600 transition-colors hover:text-primary"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 sm:h-5 sm:w-5"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
          </svg>
        </a>

        {/* Facebook */}
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          className="text-neutral-600 transition-colors hover:text-primary"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 sm:h-5 sm:w-5"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>
      </div>
    </footer>
  )
}
