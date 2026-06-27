"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function CtaSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1])
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], [40, 0])

  return (
    <section ref={sectionRef} className="px-4 pb-4">
      <motion.div
        className="relative py-32 overflow-hidden bg-foreground"
        style={{ scale, borderRadius }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-background leading-[1.1] tracking-tight mb-6">
              Come home to cleanliness.
            </h2>
            <p className="text-background/40 text-lg mb-12 max-w-md mx-auto leading-relaxed">
              Join thousands who trust Vibe Signatures for their property care.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#booking"
                className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-background text-foreground text-sm font-medium hover:bg-background/90 transition-colors duration-300"
              >
                Schedule a cleaning
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
              </a>
              <a
                href="tel:+18254549172"
                className="text-sm font-medium text-background/40 hover:text-background transition-colors duration-300"
              >
                (825) 454-9172
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
