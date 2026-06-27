"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion"
import { Menu, X, ArrowRight } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#how-it-works" },
  { label: "Results", href: "#before-after" },
  { label: "Reviews", href: "#testimonials" },
]

function LogoMark({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <Image
      src="/images/logo-mark.svg"
      alt="VS"
      width={40}
      height={40}
      className={className}
      priority
    />
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40))

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-[background,border,box-shadow] duration-700 ease-out ${
          scrolled
            ? "bg-background/80 backdrop-blur-2xl border-b border-foreground/[0.04] shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <LogoMark />
            <div className="flex flex-col">
              <span className="font-heading text-[1.05rem] font-semibold tracking-[0.02em] leading-tight"
                style={{ background: "linear-gradient(135deg, #C5A044, #D4AF37, #A07D2A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                Vibe Signatures
              </span>
              <span className="text-[8.5px] font-semibold tracking-[0.28em] uppercase leading-none mt-0.5"
                style={{ background: "linear-gradient(135deg, #C5A044, #D4AF37, #A07D2A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", opacity: 0.7 }}
              >
                Property Care
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group/link relative px-4 py-2 text-[12.5px] font-medium tracking-[0.06em] uppercase text-foreground/45 hover:text-foreground transition-colors duration-500"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-foreground/25 origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+18254549172"
              className="text-[12px] font-medium tracking-[0.04em] text-foreground/40 hover:text-foreground transition-colors duration-500"
            >
              (825) 454-9172
            </a>
            <a
              href="#booking"
              className="group/btn relative px-6 py-2.5 text-[11.5px] font-semibold tracking-[0.12em] uppercase overflow-hidden"
            >
              <span className="absolute inset-0 border border-foreground/15 rounded-full transition-colors duration-500 group-hover/btn:border-foreground/30" />
              <span className="absolute inset-0 bg-foreground rounded-full scale-x-0 origin-left group-hover/btn:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <span className="relative z-10 text-foreground group-hover/btn:text-background transition-colors duration-500 flex items-center gap-2">
                Book Now
                <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
              </span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-foreground/60 hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-[18px] h-[18px]" /> : <Menu className="w-[18px] h-[18px]" />}
          </button>
        </div>
      </motion.header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-background flex flex-col justify-center items-center md:hidden"
          >
            {/* Mobile brand */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="absolute top-6 left-6 flex items-center gap-2.5"
            >
              <LogoMark />
              <div className="flex flex-col">
                <span className="font-heading text-[1.05rem] font-semibold tracking-[0.02em] leading-tight"
                  style={{ background: "linear-gradient(135deg, #C5A044, #D4AF37, #A07D2A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  Vibe Signatures
                </span>
                <span className="text-[8.5px] font-semibold tracking-[0.28em] uppercase leading-none mt-0.5"
                  style={{ background: "linear-gradient(135deg, #C5A044, #D4AF37, #A07D2A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", opacity: 0.7 }}
                >
                  Property Care
                </span>
              </div>
            </motion.div>

            <nav className="flex flex-col items-center gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl font-heading font-semibold text-foreground py-3 tracking-tight"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="absolute bottom-12 flex flex-col items-center gap-5"
            >
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="px-8 py-3.5 rounded-full border border-foreground text-foreground text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-foreground hover:text-background transition-all duration-500"
              >
                Book Now
              </a>
              <a
                href="tel:+18254549172"
                className="text-[12px] font-medium tracking-[0.04em] text-foreground/40"
              >
                (825) 454-9172
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
