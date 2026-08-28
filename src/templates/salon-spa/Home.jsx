import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

const SERVICE_PILLS = ["Hair Cutting", "Hair Washing", "Shaving Style", "Body Massage", "Beauty & Spa", "Hair Color"];

export default function Home({ content, images, colors, base, business }) {
  const services = (content?.services || []).slice(0, 4);

  return (
    <div style={{ background: colors.primary, color: "#F5F5F4" }}>
      {/* Dark cinematic hero — GoGrin style */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <SmartImage image={images?.hero} accent={colors.accent} className="w-full h-full" priority />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative z-10 px-5 max-w-3xl mx-auto pt-20">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.35em] uppercase mb-4" style={{ color: colors.accent }}>
            Est. Premium
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]"
          >
            {content?.hero_title || `${business || "Salon"} Haircut & Shaves`}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.12 }}
            className="mt-5 text-white/70 text-sm sm:text-base max-w-lg mx-auto"
          >
            {content?.hero_subtitle || "Classic cuts, modern style — always looking your best."}
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`${base}/about`} className="px-7 py-3 text-sm font-semibold border border-white/30 rounded-sm hover:bg-white/10 transition">
              About Us
            </a>
            <a href={`${base}/contact`} className="px-7 py-3 text-sm font-bold rounded-sm text-black" style={{ background: colors.accent }}>
              Book Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Service pills */}
      <section className="py-10 border-b border-white/10 overflow-x-auto">
        <div className="flex gap-4 md:gap-8 justify-start md:justify-center px-5 min-w-max md:min-w-0">
          {SERVICE_PILLS.map((p) => (
            <div key={p} className="flex flex-col items-center gap-2 text-xs text-white/70">
              <div className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center" style={{ borderColor: `${colors.accent}55` }}>
                <span style={{ color: colors.accent }}>✦</span>
              </div>
              {p}
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 md:py-24 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Service We Provide</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="p-6 rounded-lg border border-white/10 bg-white/[0.03] hover:border-white/20 transition">
                  <h3 className="font-semibold mb-2" style={{ color: colors.accent }}>{s.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={`${base}/services`} className="text-sm font-semibold px-6 py-2.5 border border-white/20 rounded-sm inline-block">
              All Services
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-5 text-center border-t border-white/10">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">{content?.call_to_action?.headline || "Book your next appointment"}</h2>
          <a href={`${base}/contact`} className="inline-block px-8 py-3.5 text-sm font-bold rounded-sm text-black" style={{ background: colors.accent }}>
            {content?.call_to_action?.button_text || "Book Now"}
          </a>
        </Reveal>
      </section>
    </div>
  );
}
