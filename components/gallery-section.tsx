"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const gallery = [
  { src: "/images/gallery-kitchen.png", title: "Kitchens" },
  { src: "/images/gallery-bathroom.png", title: "Bathrooms" },
  { src: "/images/gallery-bedroom.png", title: "Bedrooms" },
  { src: "/images/service-home.png", title: "Living spaces" },
  { src: "/images/service-window.png", title: "Windows" },
]

export default function GallerySection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"])

  return (
    <section ref={containerRef} className="py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[13px] font-medium tracking-[0.2em] uppercase text-foreground/55 mb-4">Portfolio</p>
          <h2 className="font-heading text-4xl md:text-[3.2rem] font-semibold text-foreground leading-[1.1] tracking-tight max-w-md">
            Results that speak for themselves.
          </h2>
        </motion.div>
      </div>

      {/* Horizontal scroll gallery */}
      <motion.div className="flex gap-4 pl-6" style={{ x }}>
        {gallery.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="group relative flex-shrink-0 w-[340px] md:w-[420px] aspect-[4/5] rounded-2xl overflow-hidden"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[800ms] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 text-[13px] font-medium tracking-[0.1em] uppercase text-white/80">
              {item.title}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
