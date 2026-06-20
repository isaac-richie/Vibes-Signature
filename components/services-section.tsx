"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Home Cleaning",
    description: "Thorough top-to-bottom residential cleaning tailored to your household.",
    image: "/images/service-home.png",
  },
  {
    title: "Office Cleaning",
    description: "Professional commercial cleaning that keeps your workspace productive.",
    image: "/images/service-office.png",
  },
  {
    title: "Deep Cleaning",
    description: "Intensive full-property clean — every corner, every surface, every detail.",
    image: "/images/service-deep.png",
  },
  {
    title: "Carpet & Sofa",
    description: "Expert fabric and upholstery care that restores freshness.",
    image: "/images/service-sofa.png",
  },
  {
    title: "Window Cleaning",
    description: "Crystal-clear windows inside and out for a brighter space.",
    image: "/images/service-window.png",
  },
  {
    title: "Move-In / Out",
    description: "Comprehensive cleaning for transitions — arrive to a spotless space.",
    image: "/images/service-move.png",
  },
]

export default function ServicesSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const headerY = useTransform(scrollYProgress, [0, 0.3], [60, 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  return (
    <section id="services" ref={sectionRef} className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div className="mb-20" style={{ y: headerY, opacity: headerOpacity }}>
          <p className="text-[13px] font-medium tracking-[0.2em] uppercase text-foreground/55 mb-4">Services</p>
          <h2 className="font-heading text-4xl md:text-[3.2rem] font-semibold text-foreground leading-[1.1] tracking-tight max-w-md">
            Every space, perfectly cared&nbsp;for.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-foreground/[0.04] rounded-2xl overflow-hidden">
          {services.map((service, i) => (
            <motion.a
              key={service.title}
              href="#booking"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className="group relative bg-background p-8 flex flex-col justify-between min-h-[320px] cursor-pointer"
            >
              {/* Background image — fades in on hover */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-700 ease-out"
                />
                {/* Dark overlay so text stays readable */}
                <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              <div className="relative">
                <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-foreground/50 group-hover:text-white/60 mb-3 transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-heading text-2xl font-semibold text-foreground group-hover:text-white tracking-tight transition-colors duration-500">
                  {service.title}
                </h3>
              </div>

              <div className="relative flex items-end justify-between gap-4">
                <p className="text-sm text-foreground/55 group-hover:text-white/70 leading-relaxed max-w-[240px] transition-colors duration-500">
                  {service.description}
                </p>
                <div className="w-9 h-9 rounded-full border border-foreground/10 group-hover:border-white/30 group-hover:bg-white flex items-center justify-center flex-shrink-0 transition-all duration-500">
                  <ArrowRight className="w-3.5 h-3.5 text-foreground/50 group-hover:text-foreground transition-colors duration-500" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
