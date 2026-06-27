"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"

const homeTypes = ["Studio / 1 Bed", "2 Bedrooms", "3 Bedrooms", "4+ Bedrooms"]
const cleaningTypes = ["Standard", "Deep Clean", "Move-In / Out", "Airbnb Turnover"]

export default function BookingSection() {
  const ref = useRef(null)
  const [homeIndex, setHomeIndex] = useState(1)
  const [cleanIndex, setCleanIndex] = useState(0)
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [date, setDate] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="booking" ref={ref} className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-20 items-start">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-[13px] font-medium tracking-[0.2em] uppercase text-foreground/55 mb-4">Booking</p>
            <h2 className="font-heading text-4xl md:text-[3.2rem] font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
              Request your cleaning.
            </h2>
            <p className="text-foreground/55 leading-relaxed mb-10 max-w-sm">
              Fill this out and we'll get back to you within 30 minutes with a quote.
            </p>

            <div className="space-y-4 text-sm text-foreground/55">
              {["No payment required upfront", "Response within 30 minutes", "Free re-clean guarantee"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border border-foreground/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-foreground/50" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-secondary/60 rounded-2xl p-12 flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center mb-6">
                    <Check className="w-5 h-5 text-background" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">Request received.</h3>
                  <p className="text-foreground/55 text-sm leading-relaxed max-w-xs mb-6">
                    Our team will confirm your booking and send a quote within 30 minutes.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[13px] font-medium text-foreground/55 hover:text-foreground transition-colors"
                  >
                    Submit another request
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-[13px] font-medium text-foreground/50 mb-2">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jane Doe"
                        className="w-full px-4 py-3 rounded-xl bg-secondary/60 border-0 text-foreground text-sm placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-shadow duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact" className="block text-[13px] font-medium text-foreground/50 mb-2">
                        Email or phone
                      </label>
                      <input
                        id="contact"
                        type="text"
                        required
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="you@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-secondary/60 border-0 text-foreground text-sm placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-shadow duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-foreground/50 mb-2">Home size</label>
                    <div className="grid grid-cols-2 gap-2">
                      {homeTypes.map((type, i) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setHomeIndex(i)}
                          className={`py-3 px-4 rounded-xl text-sm font-medium text-left transition-all duration-300 ${
                            homeIndex === i
                              ? "bg-foreground text-background"
                              : "bg-secondary/60 text-foreground/55 hover:bg-secondary"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-foreground/50 mb-2">Service type</label>
                    <div className="grid grid-cols-2 gap-2">
                      {cleaningTypes.map((type, i) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setCleanIndex(i)}
                          className={`py-3 px-4 rounded-xl text-sm font-medium text-left transition-all duration-300 ${
                            cleanIndex === i
                              ? "bg-foreground text-background"
                              : "bg-secondary/60 text-foreground/55 hover:bg-secondary"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-[13px] font-medium text-foreground/50 mb-2">
                      Preferred date
                    </label>
                    <input
                      id="date"
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 rounded-xl bg-secondary/60 border-0 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-shadow duration-200"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full py-3.5 rounded-full bg-foreground text-background text-sm font-medium flex items-center justify-center gap-2 hover:bg-foreground/85 transition-colors duration-300 mt-2"
                  >
                    Request booking
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
