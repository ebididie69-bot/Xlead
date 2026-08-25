import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";
import { Quote } from "lucide-react";

export default function About({ content, images, colors }) {
  const accent = colors.accent || "#F0C531";
  const bg = colors.primary || "#0A0F1E";
  const surface = colors.secondary || "#111827";

  return (
    <div style={{ background: bg, color: "#E8EAF0", minHeight: "100vh" }}>
      {/* Header */}
      <section className="px-6 md:px-16 pt-28 pb-16 max-w-6xl mx-auto border-b"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: accent }} />
            <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: accent }}>Our Story</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">Built on Trust.</h1>
        </motion.div>
      </section>

      {/* Full bleed shop image */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-12">
        <Reveal>
          <div className="relative overflow-hidden" style={{ aspectRatio: "21/8" }}>
            <SmartImage image={images.about} accent={accent} className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{
              background: `linear-gradient(to right, ${bg}CC 0%, transparent 50%, ${bg}88 100%)`
            }} />
            <div className="absolute bottom-0 left-0 right-0 h-16"
              style={{ background: `linear-gradient(to top, ${bg}, transparent)` }} />
          </div>
        </Reveal>
      </section>

      {/* About text + values */}
      <section className="px-6 md:px-16 py-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <Reveal>
          <p className="text-xl leading-relaxed opacity-75">{content.about}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-6 border-l-2 pl-8" style={{ borderColor: accent }}>
            {[
              "Every estimate explained before work begins",
              "Genuine OEM and premium aftermarket parts",
              "ASE certified for all major systems",
              "Family-owned. Community trusted.",
            ].map((v, i) => (
              <div key={i} className="text-sm opacity-70">{v}</div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Testimonials */}
      {content.testimonials?.length > 0 && (
        <section className="px-6 md:px-16 py-16 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-8 h-px" style={{ background: accent }} />
                <h2 className="text-2xl font-black">What Customers Say</h2>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              {content.testimonials.slice(0, 4).map((t, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="p-8 relative" style={{ background: surface }}>
                    <Quote size={28} className="mb-4 opacity-20" style={{ color: accent }} />
                    <p className="text-sm leading-relaxed opacity-75 italic mb-6">{t.quote}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-px" style={{ background: accent }} />
                      <p className="text-xs font-bold uppercase tracking-wider opacity-50">{t.name}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
