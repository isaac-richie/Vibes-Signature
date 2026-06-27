import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const links = {
  Services: [
    { label: "Home Cleaning", href: "#services" },
    { label: "Office Cleaning", href: "#services" },
    { label: "Deep Cleaning", href: "#services" },
    { label: "Carpet & Sofa", href: "#services" },
    { label: "Airbnb Turnover", href: "#services" },
    { label: "Move-In / Out", href: "#services" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Support: [
    { label: "Book Now", href: "#booking" },
    { label: "Contact", href: "#" },
    { label: "FAQ", href: "#" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-background border-t border-foreground/[0.04]">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-10">
        <div className="grid lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <Image src="/images/logo-mark.svg" alt="VS" width={36} height={36} />
              <div className="flex flex-col">
                <span className="font-heading text-[1.05rem] font-semibold tracking-[0.02em] leading-tight"
                  style={{ background: "linear-gradient(135deg, #C5A044, #D4AF37, #A07D2A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  Vibe Signatures
                </span>
                <span className="text-[8.5px] font-semibold tracking-[0.28em] uppercase leading-none mt-0.5"
                  style={{ background: "linear-gradient(135deg, #C5A044, #D4AF37, #A07D2A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", opacity: 0.7 }}
                >
                  Property Care
                </span>
              </div>
            </div>
            <p className="text-sm text-foreground/50 leading-relaxed mt-4 max-w-xs">
              Premium property care for homes, offices, and Airbnb properties. Honest work, every time.
            </p>
            <div className="flex flex-col gap-2 mt-5">
              <a href="tel:+18254549172" className="text-sm text-foreground/55 hover:text-foreground transition-colors duration-300">
                (825) 454-9172
              </a>
              <a href="mailto:vibesignatures25@gmail.com" className="text-sm text-foreground/55 hover:text-foreground transition-colors duration-300">
                vibesignatures25@gmail.com
              </a>
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-[11px] font-medium tracking-[0.15em] uppercase text-foreground/50 mb-5">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-foreground/55 hover:text-foreground transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 border-t border-foreground/[0.04]">
          <p className="text-[12px] text-foreground/50">
            &copy; {new Date().getFullYear()} Vibe Signatures Property Care
          </p>

          <div className="flex items-center gap-6">
            {["Instagram", "X", "TikTok"].map((name) => (
              <a
                key={name}
                href="#"
                className="group flex items-center gap-1 text-[12px] text-foreground/50 hover:text-foreground transition-colors duration-300"
              >
                {name}
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
          </div>

          <div className="flex gap-6">
            {["Privacy", "Terms"].map((label) => (
              <a
                key={label}
                href="#"
                className="text-[12px] text-foreground/50 hover:text-foreground transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
