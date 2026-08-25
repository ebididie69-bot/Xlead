import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

export default function Home({ content, images, colors, base }) {
  return (
    <div style={{ background: colors.primary, color: "#2C1810" }}>
      {/* Full-width moody hero with handwritten-style headline */}
      <section className="relative min-h-[85vh] flex items-end">
        <div className="absolute inset-0">
          <SmartImage image={images?.hero} accent={colors.accent} className="w-full h-full object-cover" priority />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #FEF9F0 0%, rgba(254,249,240,0.3) 45%, transparent 100%)" }} />
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto px-8 pb-24 pt-40">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-xs font-bold tracking-[0.3em] uppercase mb-5" style={{ color: colors.accent }}>
            Fresh Daily
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-medium leading-[1.05] tracking-tight max-w-3xl mb-6">
            {content?.hero_title || "Baked with heart, served with warmth"}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-lg max-w-lg mb-10 leading-relaxed" style={{ color: "#5C4033" }}>
            {content?.hero_subtitle || "Artisan breads, pastries, and coffee made from scratch every morning."}
          </motion.p>
          <motion.a href={`${base}/contact`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="inline-block px-10 py-4 text-sm font-bold tracking-wide uppercase text-white rounded-sm"
            style={{ background: colors.accent }} whileHover={{ scale: 1.02 }}>
            {content?.call_to_action?.button_text || "Visit Us"}
          </motion.a>
        </div>
      </section>

      {/* Menu-style services with dotted leaders */}
      <section className="py-28">
        <div className="max-w-3xl mx-auto px-8">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-center mb-16">From the Oven</h2>
          </Reveal>
          <div className="space-y-8">
            {(content?.services || []).slice(0, 5).map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex items-baseline gap-3">
                  <span className="font-medium text-lg shrink-0">{s.title}</span>
                  <span className="flex-1 border-b border-dotted border-amber-300/60 mb-1.5" />
                  <span className="text-sm text-right max-w-[45%] leading-snug" style={{ color: "#6B5344" }}>{s.description?.slice(0, 60)}{s.description?.length > 60 ? "…" : ""}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div className="mt-14 text-center">
              <a href={`${base}/services`} className="text-sm font-bold tracking-wide uppercase" style={{ color: colors.accent }}>Full Menu →</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">{content?.call_to_action?.headline || "Come for the scent, stay for the taste"}</h2>
            <a href={`${base}/contact`} className="inline-block px-12 py-4 text-sm font-bold tracking-wide uppercase text-white rounded-sm" style={{ background: colors.accent }}>
              {content?.call_to_action?.button_text || "Find Us"}
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
