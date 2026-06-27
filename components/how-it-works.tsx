"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Book",
    description: "Choose your service and preferred date. Takes under a minute — no account needed.",
  },
  {
    number: "02",
    title: "Clean",
    description: "Our team shows up on time with everything they need. You don't even have to be home.",
  },
  {
    number: "03",
    title: "Enjoy",
    description: "Walk into a place that actually feels clean. Not happy? We come back and fix it — no charge.",
  },
]

export default function HowItWorks() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "100%"])

  return (
    <section id="how-it-works" ref={sectionRef} className="py-32 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="text-[13px] font-medium tracking-[0.2em] uppercase text-foreground/55 mb-4">Process</p>
          <h2 className="font-heading text-4xl md:text-[3.2rem] font-semibold text-foreground leading-[1.1] tracking-tight max-w-sm">
            Three steps to spotless.
          </h2>
        </motion.div>

        <div className="relative grid lg:grid-cols-[1fr_2fr] gap-16">
          {/* Scroll-linked vertical line */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <div className="relative h-64 w-px ml-4 bg-foreground/[0.06]">
                <motion.div
                  className="absolute top-0 left-0 w-full bg-foreground/20 origin-top"
                  style={{ height: lineHeight }}
                />
              </div>
            </div>
          </div>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group py-12 border-b border-foreground/[0.04] last:border-0"
              >
                <div className="flex items-start gap-8">
                  <span className="text-[11px] font-mono font-medium text-foreground/45 mt-2 flex-shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-heading text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4">
                      {step.title}
                    </h3>
                    <p className="text-foreground/55 leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
