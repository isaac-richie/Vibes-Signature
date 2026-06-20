"use client"

import { useRef, useState, useCallback } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function BeforeAfterSection() {
  const sectionRef = useRef(null)
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.92, 1, 1, 0.96])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setSliderPos((x / rect.width) * 100)
  }, [])

  const onMouseDown = () => { dragging.current = true }
  const onMouseMove = (e: React.MouseEvent) => { if (dragging.current) updateSlider(e.clientX) }
  const onMouseUp = () => { dragging.current = false }
  const onTouchMove = (e: React.TouchEvent) => { updateSlider(e.touches[0].clientX) }

  return (
    <section id="before-after" ref={sectionRef} className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="text-[13px] font-medium tracking-[0.2em] uppercase text-foreground/55 mb-4">Results</p>
          <h2 className="font-heading text-4xl md:text-[3.2rem] font-semibold text-foreground leading-[1.1] tracking-tight max-w-md">
            The difference is visible.
          </h2>
        </motion.div>

        <motion.div style={{ scale, opacity }} className="max-w-5xl">
          <div
            ref={containerRef}
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize select-none"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onTouchMove={onTouchMove}
          >
            <Image
              src="/images/after-room.png"
              alt="After cleaning"
              fill
              className="object-cover"
            />

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <Image
                src="/images/before-room.png"
                alt="Before cleaning"
                fill
                className="object-cover"
              />
            </div>

            {/* Labels */}
            <div className="absolute top-6 left-6 text-[11px] font-medium tracking-[0.15em] uppercase text-white/70 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full">
              Before
            </div>
            <div className="absolute top-6 right-6 text-[11px] font-medium tracking-[0.15em] uppercase text-white/70 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full">
              After
            </div>

            {/* Divider */}
            <div
              className="absolute top-0 bottom-0 flex items-center justify-center"
              style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
            >
              <div className="w-px h-full bg-white/50" />
              <div className="absolute w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center cursor-grab active:cursor-grabbing">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-foreground/50" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l-6-6 6-6M15 6l6 6-6 6" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
