"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const stats = [
  { value: "Eco", label: "Friendly products" },
  { value: "Insured", label: "Fully covered" },
  { value: "Vetted", label: "Professional team" },
  { value: "100%", label: "Satisfaction guaranteed" },
]

export default function TrustSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} className="py-24">
      <motion.div className="max-w-6xl mx-auto px-6" style={{ opacity }}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/[0.04] rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="bg-background p-8 lg:p-10 text-center"
            >
              <p className="text-3xl lg:text-4xl font-heading font-semibold text-foreground tracking-tight">
                {stat.value}
              </p>
              <p className="text-[12px] text-foreground/55 mt-2 tracking-wide font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
