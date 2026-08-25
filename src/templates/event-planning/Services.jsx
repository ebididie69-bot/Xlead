import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import { ChevronRight } from "lucide-react";

export default function Services({ content, colors, base }) {
  const accent = colors.accent || "#D4AF37";
  const bg = colors.primary || "#1A0A0F";
  const surface = colors.secondary || "#2D1520";

  return (
    <div style={{ background: bg, color: "#F5EEE6", minHeight: "100vh" }}>
      <section className="px-8 pt-28 pb-16 max-w-6xl mx-auto border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: accent }} />
            <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: accent }}>Services</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight" style={{ fontFamily: "Georgia, serif" }}>What We Offer</h1>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          {(content.services || []).map((s, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <motion.div whileHover={{ x: 6 }} className="flex items-start gap-6 py-8 group cursor-default">
                <div className="w-1 h-14 shrink-0 self-center" style={{ background: `${accent}55` }} />
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Georgia, serif" }}>{s.title}</h3>
                  <p className="text-sm opacity-50 leading-relaxed max-w-2xl">{s.description}</p>
                </div>
                <ChevronRight size={14} className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: accent }} />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {content.faq?.length > 0 && (
        <section className="px-8 py-16 max-w-3xl mx-auto border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-8 h-px" style={{ background: accent }} />
              <h2 className="text-2xl font-bold" style={{ fontFamily: "Georgia, serif" }}>FAQ</h2>
            </div>
          </Reveal>
          <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            {content.faq.map((f, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="py-6">
                  <p className="font-bold mb-2"><span style={{ color: accent }}>Q. </span>{f.question}</p>
                  <p className="text-sm opacity-50 leading-relaxed pl-5">{f.answer}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="px-8 py-20 text-center border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <Reveal>
          <motion.a href={`${base}/contact`} whileHover={{ scale: 1.03, boxShadow: `0 0 30px ${accent}44` }}
            className="inline-flex items-center gap-2 px-10 py-4 font-bold" style={{ background: accent, color: "#1A0A0F" }}>
            Plan Your Event <ChevronRight size={16} />
          </motion.a>
        </Reveal>
      </section>
    </div>
  );
}
