"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    name: "Aaliyah Thompson",
    role: "Homeowner",
    text: "My home looked like a 5-star hotel after the first visit. I've never had a cleaning service this thorough.",
    image: "/images/client-aaliyah.png",
  },
  {
    name: "Marcus Williams",
    role: "Property Manager",
    text: "I manage 12 rental properties and Vibe handles all turnover cleans. Reliable, consistent, exceptional.",
    image: "/images/client-marcus.png",
  },
  {
    name: "Brianna Foster",
    role: "Interior Designer",
    text: "As someone who notices every detail — these guys miss nothing. Booked same-day and they arrived on time.",
    image: "/images/client-brianna.png",
  },
  {
    name: "Devon Carter",
    role: "Office Manager",
    text: "The team was professional, quiet, and gone before our staff arrived. The office was stunning.",
    image: "/images/client-devon.png",
  },
  {
    name: "Imani Jackson",
    role: "New Homeowner",
    text: "Used the move-in clean package — even the inside of the oven was spotless. Worth every penny.",
    image: "/images/client-imani.png",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 6000)
    return () => clearInterval(timer)
  }, [])

  const t = testimonials[current]

  return (
    <section id="testimonials" ref={ref} className="py-32 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="text-[13px] font-medium tracking-[0.2em] uppercase text-foreground/55 mb-4">Testimonials</p>
          <h2 className="font-heading text-4xl md:text-[3.2rem] font-semibold text-foreground leading-[1.1] tracking-tight max-w-sm">
            Trusted by thousands.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-center">
          {/* Quote */}
          <div className="min-h-[280px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-heading text-2xl md:text-3xl font-semibold text-foreground leading-snug tracking-tight mb-10">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{t.name}</p>
                    <p className="text-[12px] text-foreground/55">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots + progress */}
          <div className="flex flex-col gap-3">
            {testimonials.map((item, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`group flex items-center gap-4 py-4 px-5 rounded-xl text-left transition-all duration-500 ${
                  i === current
                    ? "bg-background shadow-sm"
                    : "hover:bg-background/50"
                }`}
              >
                <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium truncate transition-colors duration-300 ${
                    i === current ? "text-foreground" : "text-foreground/55"
                  }`}>
                    {item.name}
                  </p>
                  <p className="text-[11px] text-foreground/50 truncate">{item.role}</p>
                </div>
                {i === current && (
                  <motion.div
                    layoutId="testimonial-dot"
                    className="w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
