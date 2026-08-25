import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

export default function Home({ content, images, colors, base }) {
  const badges = ["BDA Registered", "CQC Rated", "Invisalign Provider"];

  return (
    <div style={{ background: colors.primary, color: "#1A2332" }}>
      {/* Centered clinical hero with trust badges */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-6" style={{ color: colors.accent }}>
            Clinical Excellence
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
            {content?.hero_title || "Confident smiles start here"}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            {content?.hero_subtitle || "Modern dentistry delivered with precision, care, and complete transparency."}
          </motion.p>

          {/* Trust badges row */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap justify-center gap-4 mb-12">
            {badges.map((b) => (
              <span key={b} className="px-5 py-2 text-xs font-semibold tracking-wide uppercase border rounded-full"
                style={{ borderColor: colors.accent, color: colors.accent }}>
                {b}
              </span>
            ))}
          </motion.div>

          <motion.a href={`${base}/contact`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
            className="inline-block px-10 py-4 text-sm font-semibold tracking-wide uppercase text-white rounded-md"
            style={{ background: colors.accent }}
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            {content?.call_to_action?.button_text || "Book Appointment"}
          </motion.a>
        </div>

        {/* Split image under hero */}
        <div className="max-w-5xl mx-auto px-8 mt-20">
          <Reveal>
            <div className="aspect-[21/9] overflow-hidden rounded-lg">
              <SmartImage image={images?.hero} accent={colors.accent} className="w-full h-full object-cover" priority />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16 text-center">Our Services</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(content?.services || []).slice(0, 3).map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-8 h-full bg-white border border-slate-100 rounded-lg shadow-sm"
                  style={{ borderLeft: `4px solid ${colors.accent}` }}>
                  <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div className="mt-14 text-center">
              <a href={`${base}/services`} className="text-sm font-semibold tracking-wide uppercase" style={{ color: colors.accent }}>
                View All Services →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">{content?.call_to_action?.headline || "Ready for a healthier smile?"}</h2>
            <a href={`${base}/contact`} className="inline-block px-12 py-4 text-sm font-semibold tracking-wide uppercase text-white rounded-md"
              style={{ background: colors.accent }}>
              {content?.call_to_action?.button_text || "Book Now"}
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
