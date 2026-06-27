"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

const gallery = [
  { src: "/images/gallery-kitchen.png", title: "Kitchens" },
  { src: "/images/gallery-bathroom.png", title: "Bathrooms" },
  { src: "/images/gallery-bedroom.png", title: "Bedrooms" },
  { src: "/images/service-home.png", title: "Living spaces" },
  { src: "/images/service-airbnb.png", title: "Airbnb" },
]

export default function GallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[13px] font-medium tracking-[0.2em] uppercase text-foreground/55 mb-4">Portfolio</p>
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-heading text-4xl md:text-[3.2rem] font-semibold text-foreground leading-[1.1] tracking-tight max-w-md">
              Results that speak for themselves.
            </h2>
            <p className="hidden md:block text-[12px] text-foreground/40 tracking-wide">
              Drag to explore &rarr;
            </p>
          </div>
        </motion.div>
      </div>

      {/* Draggable horizontal scroll gallery */}
      <motion.div
        ref={scrollRef}
        className="flex gap-4 pl-6 pr-6 cursor-grab active:cursor-grabbing overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        drag="x"
        dragConstraints={scrollRef}
        dragElastic={0.1}
      >
        {gallery.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="group relative flex-shrink-0 w-[280px] md:w-[420px] aspect-[4/5] rounded-2xl overflow-hidden select-none"
          >
            <img
              src={item.src}
              alt={item.title}
              draggable={false}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[800ms] ease-out pointer-events-none"
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
