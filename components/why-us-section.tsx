"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const features = [
  {
    title: "Vetted professionals",
    description: "Every cleaner is background-checked, insured, and trained to our standard. No exceptions.",
  },
  {
    title: "Eco-friendly products",
    description: "Non-toxic, biodegradable products only. Safe for children, pets, and the planet.",
  },
  {
    title: "Flexible scheduling",
    description: "Morning, evening, weekends. We work around your life, not the other way around.",
  },
  {
    title: "Satisfaction guaranteed",
    description: "Not happy with your clean? We come back and make it right at no extra charge.",
  },
  {
    title: "Obsessive attention",
    description: "From baseboards to blinds, we treat every corner like it's our own home.",
  },
]

export default function WhyUsSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])

  return (
    <section ref={sectionRef} className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left — sticky image */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10"
            >
              <p className="text-[13px] font-medium tracking-[0.2em] uppercase text-foreground/55 mb-4">Why us</p>
              <h2 className="font-heading text-4xl md:text-[3.2rem] font-semibold text-foreground leading-[1.1] tracking-tight">
                The standard others can&apos;t match.
              </h2>
            </motion.div>

            <motion.div className="relative rounded-2xl overflow-hidden aspect-[4/3]" style={{ y: imageY }}>
              <img
                src="/images/team.png"
                alt="Vibe Signatures cleaning team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right — features list */}
          <div className="lg:pt-40">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.05, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="py-8 border-b border-foreground/[0.04] last:border-0"
              >
                <h3 className="font-heading text-xl font-semibold text-foreground tracking-tight mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-foreground/55 leading-relaxed max-w-sm">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
