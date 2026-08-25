import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

export default function Home({ content, images, colors, base }) {
  const stats = [
    { value: "12,000+", label: "Homes Cleaned" },
    { value: "99%", label: "Satisfaction" },
    { value: "15", label: "Years Experience" },
  ];

  return (
    <div style={{ background: colors.primary, color: "#1E293B" }}>
      {/* Bright airy hero with before/after split feel */}
      <section className="pt-28 pb-16 md:pt-36">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-bold tracking-[0.3em] uppercase mb-5" style={{ color: colors.accent }}>
                Spotless Living
              </motion.p>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
                {content?.hero_title || "Fresh spaces. Zero stress."}
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-lg text-slate-600 mb-10 leading-relaxed max-w-md">
                {content?.hero_subtitle || "Professional cleaning that leaves every corner sparkling."}
              </motion.p>
              <motion.a href={`${base}/contact`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                className="inline-block px-10 py-4 text-sm font-bold tracking-wide uppercase text-white rounded-md"
                style={{ background: colors.accent }} whileHover={{ scale: 1.02 }}>
                {content?.call_to_action?.button_text || "Get a Free Quote"}
              </motion.a>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.7 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <SmartImage image={images?.hero} accent={colors.accent} className="w-full h-full object-cover" priority />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 border-y border-teal-100">
        <div className="max-w-5xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="text-3xl md:text-4xl font-bold" style={{ color: colors.accent }}>{s.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest mt-2 text-slate-500">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services with animated checkmarks */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-8">
          <Reveal><h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-14 text-center">What We Clean</h2></Reveal>
          <div className="space-y-4">
            {(content?.services || []).slice(0, 4).map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex items-start gap-5 p-6 bg-white rounded-lg shadow-sm border border-teal-50">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white text-sm font-bold"
                    style={{ background: colors.accent }}
                  >
                    ✓
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{s.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{s.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div className="mt-12 text-center">
              <a href={`${base}/services`} className="text-sm font-bold tracking-wide uppercase" style={{ color: colors.accent }}>See Full List →</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{content?.call_to_action?.headline || "Ready for a cleaner home?"}</h2>
            <a href={`${base}/contact`} className="inline-block px-12 py-4 text-sm font-bold tracking-wide uppercase text-white rounded-md" style={{ background: colors.accent }}>
              {content?.call_to_action?.button_text || "Get Quote"}
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
