import { ArrowUpRight } from "lucide-react"

const links = {
  Services: [
    { label: "Home Cleaning", href: "#services" },
    { label: "Office Cleaning", href: "#services" },
    { label: "Deep Cleaning", href: "#services" },
    { label: "Carpet & Sofa", href: "#services" },
    { label: "Window Cleaning", href: "#services" },
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
            <span className="font-heading text-[1.1rem] font-semibold tracking-tight text-foreground">
              Vibe Signatures
            </span>
            <p className="text-sm text-foreground/50 leading-relaxed mt-4 max-w-xs">
              Premium property care for homes and offices. Hotel-level cleanliness, every time.
            </p>
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
