import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

export default function Home({ content, images, colors, base }) {
  return (
    <div style={{ background: colors.primary, color: "#FFFFFF" }}>
      {/* Full-screen image hero with minimal white text */}
      <section className="relative h-screen min-h-[700px] flex items-end">
        <div className="absolute inset-0">
          <SmartImage image={images?.hero} accent={colors.accent} className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 pb-24">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.95] max-w-4xl mb-6">
            {content?.hero_title || "Frames that last"}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-lg text-white/50 max-w-md mb-10">
            {content?.hero_subtitle || "Portrait, editorial, and commercial photography."}
          </motion.p>
          <motion.a href={`${base}/contact`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
            className="inline-block px-10 py-3.5 text-sm font-medium tracking-[0.2em] uppercase border border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
            style={{ borderRadius: 0 }}>
            {content?.call_to_action?.button_text || "Book a Shoot"}
          </motion.a>
        </div>
      </section>

      {/* Minimal services list */}
      <section className="py-28 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-8">
          <Reveal><h2 className="text-2xl font-light tracking-wide mb-16 text-white/40">Services</h2></Reveal>
          <div className="space-y-0">
            {(content?.services || []).slice(0, 4).map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="py-8 border-b border-white/10">
                  <h3 className="text-2xl font-light mb-2">{s.title}</h3>
                  <p className="text-white/40 leading-relaxed">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div className="mt-12">
              <a href={`${base}/services`} className="text-sm tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors">All Services →</a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
