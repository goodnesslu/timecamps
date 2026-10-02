"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ComingSoonPage() {
  return (
    <>
      {/* 1. BACKGROUND VIDEO (Fixed to fill screen behind header & footer) */}
      <div className="pointer-events-none fixed inset-0 z-0 h-full w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60"
        >
          <source src="/bg-loop.webm" type="video/webm" />
          <source src="/bg-loop.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
      </div>

      {/* 2. MAIN CONTENT: Anchors to lower left above footer */}
      <div className="z-10 mt-auto mb-6 flex max-w-full flex-col items-start text-left sm:mb-8">
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <h1
            style={{ fontFamily: "var(--font-heading)" }}
            className="mb-1 text-[2.8rem] leading-[2.5rem] tracking-normal text-white uppercase drop-shadow-2xl sm:text-6xl md:text-7xl md:leading-[5rem] lg:text-8xl"
          >
            Are You Ready <br /> For TIME Camp '27?
          </h1>

          <p className="mb-6 max-w-[85%] text-base font-medium text-neutral-300 drop-shadow-lg sm:text-base md:max-w-full md:text-2xl">
            4 Days of Fire, Fun, and Fellowship. The ultimate youth{" "}
            <br className="hidden sm:inline" /> experience is loading.
          </p>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link href="/register">
              <Button
                size="lg"
                className="mt-1 mb-6 h-16 cursor-pointer rounded-full px-12 text-base font-extrabold tracking-wide uppercase shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-all hover:shadow-[0_0_50px_rgba(var(--primary),0.8)] sm:h-14 sm:px-10 sm:text-lg md:h-16 md:text-xl"
              >
                Secure My Spot
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
