import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import { ChevronRight } from "lucide-react";

export default function Services({ content, colors, base }) {
  const accent = colors.accent || "#C9A84C";
  const bg = colors.primary || "#0B1426";
  const surface = colors.secondary || "#132039";

  return (
    <div style={{ background: bg, color: "#F5F0E8", minHeight: "100vh" }}>
      <section className="px-8 pt-28 pb-16 max-w-6xl mx-auto border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 mb-4"><div className="w-8 h-px" style={{ background: accent }} />
            <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: accent }}>Services</span></div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight" style={{ fontFamily: "Georgia, serif" }}>What We Do</h1>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {(content.services || []).map((s, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="p-8 h-full" style={{ background: surface, borderLeft: `3px solid ${accent}` }}>
                <h3 className="font-bold text-xl mb-3" style={{ fontFamily: "Georgia, serif" }}>{s.title}</h3>
                <p className="text-sm opacity-50 leading-relaxed">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {content.faq?.length > 0 && (
        <section className="px-8 py-16 max-w-3xl mx-auto border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <Reveal><div className="flex items-center gap-4 mb-12"><div className="w-8 h-px" style={{ background: accent }} />
            <h2 className="text-2xl font-bold" style={{ fontFamily: "Georgia, serif" }}>Common Questions</h2></div></Reveal>
          <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            {content.faq.map((f, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="py-6">
                  <p className="font-semibold mb-2"><span style={{ color: accent }}>Q. </span>{f.question}</p>
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
            className="inline-flex items-center gap-2 px-10 py-4 font-semibold" style={{ background: accent, color: bg }}>
            Book a Consultation <ChevronRight size={16} />
          </motion.a>
        </Reveal>
      </section>
    </div>
  );
}
