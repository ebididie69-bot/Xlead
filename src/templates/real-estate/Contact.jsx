import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import { Phone, MapPin, Clock, ChevronRight } from "lucide-react";

export default function Contact({ content, colors }) {
  const accent = colors.accent || "#C9A84C";
  const bg = colors.primary || "#0B1426";
  const surface = colors.secondary || "#132039";

  return (
    <div style={{ background: bg, color: "#F5F0E8", minHeight: "100vh" }}>
      <section className="px-8 pt-28 pb-16 max-w-6xl mx-auto border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-4"><div className="w-8 h-px" style={{ background: accent }} />
            <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: accent }}>Get In Touch</span></div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
            {content.call_to_action?.headline || "Let's find your home"}
          </h1>
        </motion.div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <Reveal>
          <p className="opacity-55 leading-relaxed mb-10">
            Our specialists are available for viewings, valuations, and consultations. No obligation — just expert advice.
          </p>
          {[
            { icon: Phone, label: "Phone", value: "Available on your listing" },
            { icon: MapPin, label: "Office", value: "Your address on file" },
            { icon: Clock, label: "Hours", value: "Mon–Sat 9am–6pm" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex gap-4 mb-8">
              <div className="shrink-0 w-10 h-10 flex items-center justify-center" style={{ background: `${accent}15`, border: `1px solid ${accent}22` }}>
                <Icon size={15} style={{ color: accent }} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider opacity-40 mb-1">{label}</p>
                <p className="text-sm opacity-70">{value}</p>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.15}>
          <div className="p-10 flex flex-col gap-8" style={{ background: surface, borderTop: `2px solid ${accent}` }}>
            <div>
              <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>Book a Consultation</h2>
              <p className="text-sm opacity-50 leading-relaxed">Free, no-obligation property advice from our senior specialists.</p>
            </div>
            <motion.a href="#" whileHover={{ scale: 1.02, boxShadow: `0 0 30px ${accent}44` }} whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 py-4 font-semibold" style={{ background: accent, color: bg }}>
              {content.call_to_action?.button_text || "Book Now"} <ChevronRight size={16} />
            </motion.a>
            <div className="pt-6 border-t space-y-3" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              {["Free property valuation", "No-obligation viewings", "Expert local market knowledge"].map((v) => (
                <div key={v} className="flex items-center gap-2 text-sm opacity-50">
                  <div className="w-1 h-1 rounded-full" style={{ background: accent }} />{v}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
