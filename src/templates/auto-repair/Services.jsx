import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import { Wrench, ChevronRight } from "lucide-react";

export default function Services({ content, colors, base }) {
  const accent = colors.accent || "#F0C531";
  const bg = colors.primary || "#0A0F1E";
  const surface = colors.secondary || "#111827";

  return (
    <div style={{ background: bg, color: "#E8EAF0", minHeight: "100vh" }}>
      {/* Page header */}
      <section className="px-6 md:px-16 pt-28 pb-16 max-w-6xl mx-auto border-b"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: accent }} />
            <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: accent }}>
              Our Services
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">What We Fix</h1>
          <p className="opacity-55 max-w-lg">
            From quick oil changes to full engine rebuilds — every service backed by our guarantee.
          </p>
        </motion.div>
      </section>

      {/* Services list — full width, bordered rows */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-16">
        <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          {(content.services || []).map((s, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-start gap-6 py-8 group cursor-default transition-all"
              >
                <div className="shrink-0 w-12 h-12 flex items-center justify-center"
                  style={{ background: `${accent}15`, border: `1px solid ${accent}22` }}>
                  <Wrench size={20} style={{ color: accent }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">{s.title}</h3>
                    <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: accent }} />
                  </div>
                  <p className="text-sm opacity-55 leading-relaxed max-w-2xl">{s.description}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      {content.faq?.length > 0 && (
        <section className="px-6 md:px-16 py-16 max-w-3xl mx-auto border-t"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-8 h-px" style={{ background: accent }} />
              <h2 className="text-2xl font-black">Frequently Asked</h2>
            </div>
          </Reveal>
          <div className="space-y-0 divide-y" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            {content.faq.map((f, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="py-6">
                  <p className="font-bold mb-2 flex items-start gap-2">
                    <span style={{ color: accent }}>Q.</span> {f.question}
                  </p>
                  <p className="text-sm opacity-55 pl-5 leading-relaxed">{f.answer}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-6 md:px-16 py-20 text-center border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <Reveal>
          <p className="text-sm uppercase tracking-widest mb-4 opacity-50">Ready to get started?</p>
          <motion.a
            href={`${base}/contact`}
            whileHover={{ scale: 1.03, boxShadow: `0 0 30px ${accent}44` }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-10 py-4 font-bold tracking-wide"
            style={{ background: accent, color: "#0A0F1E" }}
          >
            Book a Service <ChevronRight size={16} />
          </motion.a>
        </Reveal>
      </section>
    </div>
  );
}
