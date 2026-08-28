import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

export default function Home({ content, images, colors, base, business }) {
  const collection = [
    { key: "gallery_1", label: "Sofas & Sectionals" },
    { key: "gallery_2", label: "Dining Sets" },
    { key: "gallery_3", label: "Accent Chairs" },
    { key: "gallery_4", label: "Storage & Cabinets" },
  ];

  return (
    <div style={{ background: colors.primary, color: "#1C1917" }}>
      {/* Warm full hero — Elevate style */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center">
        <div className="absolute inset-0">
          <SmartImage image={images?.hero} accent={colors.accent} className="w-full h-full" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F3EE]/95 via-[#F7F3EE]/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 w-full py-28">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: colors.accent }}>
            Designing Spaces
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.08] max-w-xl tracking-tight"
          >
            {content?.hero_title || "That Inspire Comfort & Style"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-stone-600 max-w-md text-sm sm:text-base leading-relaxed"
          >
            {content?.hero_subtitle ||
              `Timeless interiors that reflect your personality — crafted by ${business || "our studio"}.`}
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-8 flex flex-wrap gap-3">
            <a href={`${base}/gallery`} className="px-7 py-3 rounded-md text-sm font-semibold text-white" style={{ background: "#1C1917" }}>
              Explore Our Work
            </a>
            <a href={`${base}/services`} className="px-7 py-3 rounded-md text-sm font-semibold border border-stone-300 bg-white/70">
              Our Services
            </a>
          </motion.div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-stone-200/80 bg-white/60">
        <div className="max-w-6xl mx-auto px-5 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-xs sm:text-sm text-stone-600">
          {["Custom Design", "Quality Materials", "Expert Team", "End-to-End Support"].map((t) => (
            <div key={t} className="font-medium">{t}</div>
          ))}
        </div>
      </section>

      {/* Collection grid */}
      <section className="py-16 md:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase mb-2" style={{ color: colors.accent }}>Handpicked Collection</p>
              <h2 className="text-2xl sm:text-4xl font-serif">Furniture That Defines Comfort</h2>
            </div>
            <a href={`${base}/gallery`} className="text-sm font-semibold px-5 py-2.5 rounded-md text-white self-start" style={{ background: "#1C1917" }}>
              View All Collection
            </a>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {collection.map((c, i) => (
              <Reveal key={c.key} delay={i * 0.08}>
                <div className="group">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden mb-3">
                    <SmartImage image={images?.[c.key] || images?.about} accent={colors.accent} className="w-full h-full group-hover:scale-105 transition duration-500" />
                  </div>
                  <h3 className="font-medium text-sm sm:text-base">{c.label}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 text-center bg-white/50">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-serif mb-6">{content?.call_to_action?.headline || "Start Your Project"}</h2>
          <a href={`${base}/contact`} className="inline-block px-8 py-3.5 rounded-md text-sm font-semibold text-white" style={{ background: "#1C1917" }}>
            {content?.call_to_action?.button_text || "Book a Consultation"}
          </a>
        </Reveal>
      </section>
    </div>
  );
}
