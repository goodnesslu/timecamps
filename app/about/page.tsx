"use client"

import ReservationModal from "@/components/ReservationModal"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

// ==========================================
// 1. EDITABLE FAQ SECTION
// ==========================================
const faqs = [
  {
    question: "Who can attend T.I.M.E Camp?",
    answer:
      "T.I.M.E Camp is open to everyone! Whether you are in high school, a campus student, a young adult, from a Chrisco church, or attending another fellowship altogether—you are warmly welcome.",
  },
  {
    question: "When and where does the camp happen?",
    answer:
      "The camp takes place annually during the first week of January. Venue announcements and coordinated travel pickup points for all branches are shared via our official WhatsApp desk upon reservation.",
  },
  {
    question: "What is included in the camp fee?",
    answer:
      "Your camp fee covers everything: 4 days of accommodation in designated dormitories, full daily meals (breakfast, lunch, and dinner), camp activity materials, sports tournaments, and security.",
  },
  {
    question: "What do I need to pack?",
    answer:
      "Pack your Bible, a notebook and pen, personal toiletries, bedding/bedsheets, sports wear for games, warm clothing for evening sessions, and a heart expectant for God.",
  },
  {
    question: "Is the camp safe and supervised?",
    answer:
      "Yes, 100%. The camp is organized under the National Chrisco Youth Committee with dedicated counselors, branch leaders, separate male and female accommodations, and full-time medical and security staff on site.",
  },
  {
    question: "How do I pay my camp fees?",
    answer:
      "We do not collect payments directly on this website. Simply click 'Reserve Your Spot' to submit your details; you will be redirected to WhatsApp where our team will provide official Mobile Money payment details.",
  },
]

// ==========================================
// 2. TESTIMONIALS DATA
// ==========================================
const testimonials = [
  {
    name: "Brian K.",
    church: "Makerere University",
    text: "I actually came from another church just accompanying a friend. I thought it would be boring, but the worship was electrifying and the campfire chats completely transformed how I view my purpose.",
    tag: "First-time Camper",
  },
  {
    name: "Grace N.",
    church: "Chrisco Jinja",
    text: "Camp 2026 was where I surrendered my life back to God. The leaders and counselors actually listened to my real struggles without judgment. I left with peace I hadn't felt in years.",
    tag: "High Schooler",
  },
  {
    name: "David O.",
    church: "Kyambogo University",
    text: "The sports tournaments and obstacle challenges are serious business! Made brothers for life here. It is literally the only place where authentic faith and mad fun collide.",
    tag: "Campus Youth",
  },
  {
    name: "Faith A.",
    church: "Kampala",
    text: "As an introvert, I was terrified I wouldn't fit in. By day two, complete strangers felt like family. You don't have to be a 'church kid' to feel right at home here.",
    tag: "Youth Member",
  },
  {
    name: "Samuel M.",
    church: "Mukono",
    text: "I was numb to normal church services. The raw, unfiltered Word and late-night prayer sessions at T.I.M.E Camp made me realize that God has huge assignments for our generation.",
    tag: "Camp 2026 Attendee",
  },
]

export default function AboutPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(1)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  // Safe window size detector (prevents hydration crashes)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3)
      else if (window.innerWidth >= 640) setItemsPerView(2)
      else setItemsPerView(1)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Auto-slide testimonials every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="mx-auto w-full max-w-5xl space-y-16 py-8 sm:space-y-24 sm:py-16">
      {/* 1. HERO SECTION */}
      <section className="space-y-4">
        <span className="inline-block rounded-full border border-primary/30 bg-primary/20 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase backdrop-blur-md">
          National Chrisco Youth Ministry
        </span>

        <h1
          style={{ fontFamily: "var(--font-heading)" }}
          className="text-4xl leading-tight text-white uppercase sm:text-6xl md:text-7xl lg:text-8xl"
        >
          This Is My Era
        </h1>

        <p className="max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg md:text-xl">
          T.I.M.E is more than just a name—it is a national youth movement under
          the National Chrisco Youth Committee of Chrisco Fellowship of Churches
          Uganda. We believe this generation was not born to sit on the
          sidelines, but to arise and lead for Christ.
        </p>
      </section>

      {/* 2. THE VISION */}
      <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md sm:p-10 md:p-12">
        <span className="text-xs font-bold tracking-wider text-primary uppercase">
          Our Mandate
        </span>
        <h2
          style={{ fontFamily: "var(--font-heading)" }}
          className="mt-1 mb-4 text-3xl text-white uppercase sm:text-4xl"
        >
          The Vision Behind T.I.M.E
        </h2>
        <p className="text-sm leading-relaxed text-neutral-300 sm:text-base md:text-lg">
          We exist to awaken young people across Uganda to their God-given
          identity, purpose, and spiritual authority. Through authentic
          discipleship, mentorship, and creative community, we empower teens,
          campus students, and young adults to stand unashamed for the Gospel in
          their schools, universities, workplaces, and families.
        </p>
      </section>

      {/* 3. OPEN TO EVERYONE (BEYOND CHRISCO) */}
      <section className="rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/20 via-neutral-900 to-white/[0.02] p-6 sm:p-10 md:p-12">
        <div className="max-w-3xl space-y-3">
          <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-bold tracking-wider text-primary uppercase">
            Open Invitation
          </span>
          <h2
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-3xl text-white uppercase sm:text-4xl"
          >
            You Belong Here — Whoever You Are
          </h2>
          <p className="text-sm leading-relaxed text-neutral-300 sm:text-base md:text-lg">
            You don’t have to attend a Chrisco church to be part of T.I.M.E
            Camp. Whether you belong to another fellowship, were invited by a
            friend, or are just searching for purpose and real answers in life,
            our doors are wide open. No cliques, no pretenses—just genuine
            community and encounters with God.
          </p>
        </div>
      </section>

      {/* 4. WHAT IS T.I.M.E CAMP? */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold tracking-wider text-primary uppercase">
            Every January
          </span>
          <h2
            style={{ fontFamily: "var(--font-heading)" }}
            className="mt-1 text-3xl text-white uppercase sm:text-4xl"
          >
            What is T.I.M.E Camp?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-400 sm:text-base md:text-lg">
            Held annually in the first week of January, hundreds of youth gather
            from across Uganda for 4 life-defining days to start the year with
            God before heading back to school, campus, and work.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <span className="text-3xl">🔥</span>
            <h3
              style={{ fontFamily: "var(--font-heading)" }}
              className="mt-3 text-xl text-white uppercase sm:text-2xl"
            >
              Fire & Word
            </h3>
            <p className="mt-1 text-sm text-neutral-400">
              Powerful teaching sessions and deep times of worship where God
              sets hearts on fire for the year ahead.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <span className="text-3xl">⚽</span>
            <h3
              style={{ fontFamily: "var(--font-heading)" }}
              className="mt-3 text-xl text-white uppercase sm:text-2xl"
            >
              Sports & Competitions
            </h3>
            <p className="mt-1 text-sm text-neutral-400">
              Football, volleyball, obstacle courses, and challenges where
              energy, teamwork, and laughter run high.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <span className="text-3xl">🤝</span>
            <h3
              style={{ fontFamily: "var(--font-heading)" }}
              className="mt-3 text-xl text-white uppercase sm:text-2xl"
            >
              Lifelong Friendships
            </h3>
            <p className="mt-1 text-sm text-neutral-400">
              Connect with fellow Christian youth across Uganda who will pray
              with you and cheer you on in life.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <span className="text-3xl">🛡️</span>
            <h3
              style={{ fontFamily: "var(--font-heading)" }}
              className="mt-3 text-xl text-white uppercase sm:text-2xl"
            >
              Safe & Organized
            </h3>
            <p className="mt-1 text-sm text-neutral-400">
              Full-time supervision, dedicated camp counselors, safe
              accommodation dorms, and hot meals.
            </p>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS SLIDER */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold tracking-wider text-primary uppercase">
            Camper Stories
          </span>
          <h2
            style={{ fontFamily: "var(--font-heading)" }}
            className="mt-1 text-3xl text-white uppercase sm:text-4xl"
          >
            Don't Just Take Our Word For It
          </h2>
        </div>

        <div className="relative overflow-hidden py-4">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {[...testimonials, ...testimonials].map((item, idx) => (
              <div
                key={idx}
                className="w-full shrink-0 px-2 sm:w-1/2 sm:px-3 lg:w-1/3"
              >
                <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
                  <div>
                    <span className="text-xs font-semibold text-primary uppercase">
                      {item.tag}
                    </span>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                      "{item.text}"
                    </p>
                  </div>
                  <div className="mt-6 border-t border-white/5 pt-4">
                    <h4 className="text-base font-bold text-white">
                      {item.name}
                    </h4>
                    <p className="text-xs text-neutral-400">{item.church}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  currentIndex % testimonials.length === dotIdx
                    ? "w-8 bg-primary"
                    : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION (Pure GPU CSS-Grid Accordion - Works on 100% of Mobile Devices) */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold tracking-wider text-primary uppercase">
            Got Questions?
          </span>
          <h2
            style={{ fontFamily: "var(--font-heading)" }}
            className="mt-1 text-3xl text-white uppercase sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-neutral-400 sm:text-base">
            Everything you need to know about T.I.M.E Camp before coming.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index
            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors hover:border-white/20"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full cursor-pointer items-center justify-between p-5 text-left transition-colors sm:p-6"
                >
                  <span className="text-base font-bold text-white sm:text-lg">
                    {faq.question}
                  </span>
                  <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-lg font-light text-neutral-300">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* CSS Grid Animation: never gets stuck at 0px on mobile */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-white/5 px-5 pt-3 pb-5 text-sm leading-relaxed text-neutral-300 sm:px-6 sm:pb-6">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* 7. BOTTOM CALL TO ACTION: Opens the Form right on this page */}
      <section className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent p-6 sm:flex-row sm:items-center sm:p-10">
        <div>
          <h3
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-2xl text-white uppercase sm:text-3xl"
          >
            Ready For T.I.M.E '27?
          </h3>
          <p className="mt-1 text-sm text-neutral-300">
            Pre-registration is open. Lock in your spot today!
          </p>
        </div>
        <Link href="/register">
          <Button
            size="lg"
            className="h-14 rounded-full px-8 text-base font-extrabold tracking-wide uppercase shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-all hover:shadow-[0_0_50px_rgba(var(--primary),0.8)]"
          >
            Reserve Your Spot
          </Button>
        </Link>
      </section>

      {/* 8. RESERVATION MODAL (Opens right on this page!) */}
      <ReservationModal />
    </div>
  )
}
