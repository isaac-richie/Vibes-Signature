"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

function TextReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        className="inline-block"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function HeroSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -60])

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex items-end pb-20 pt-32 lg:pt-16 lg:items-center overflow-hidden">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
        <Image
          src="/images/hero-clean.png"
          alt="Clean living room"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
      </motion.div>

      <motion.div
        className="relative max-w-6xl mx-auto px-6 w-full"
        style={{ opacity: textOpacity, y: textY }}
      >
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[13px] font-medium tracking-[0.2em] uppercase text-foreground/55 mb-6"
          >
            Cleaning done right
          </motion.p>

          <h1 className="font-heading text-[clamp(2.8rem,6vw,5rem)] font-semibold text-foreground leading-[1.05] tracking-tight mb-8">
            <TextReveal delay={0.3}>Your property,</TextReveal>
            <br />
            <TextReveal delay={0.45}>spotless.</TextReveal>{" "}
            <TextReveal delay={0.55}>
              <span className="text-foreground/40">Your time,</span>
            </TextReveal>
            <br />
            <TextReveal delay={0.65}>
              <span className="text-foreground/40">yours.</span>
            </TextReveal>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-base text-foreground/60 leading-relaxed max-w-md mb-10"
          >
            We clean homes, offices, and Airbnb properties across the city.
            You pick the date — we show up and do it right.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-5"
          >
            <a
              href="#booking"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/85 transition-colors duration-300"
            >
              Book a Cleaning
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-foreground/55 hover:text-foreground transition-colors duration-300"
            >
              See how it works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex items-center gap-8 mt-16 pt-8 border-t border-foreground/[0.06]"
          >
            {[
              { value: "Trusted", label: "By local hosts & homeowners" },
              { value: "Eco-friendly", label: "Products used" },
              { value: "100%", label: "Satisfaction guarantee" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-lg font-heading font-semibold text-foreground">{stat.value}</p>
                <p className="text-[11px] text-foreground/55 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
