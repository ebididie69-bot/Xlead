import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

export default function Home({ content, images, colors, base }) {
  return (
    <div style={{ background: colors.primary, color: "#FFFFFF" }}>
      {/* Hero with booking-widget style bar */}
      <section className="relative min-h-[80vh] flex flex-col justify-center pt-24">
        <div className="absolute inset-0">
          <SmartImage image={images?.hero} accent={colors.accent} className="w-full h-full object-cover opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0047AB]/90 to-[#0047AB]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-8 text-center mb-16">
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            {content?.hero_title || "Drive your next adventure"}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-lg text-white/70 max-w-xl mx-auto">
            {content?.hero_subtitle || "Reliable cars, flexible plans, and zero hassle."}
          </motion.p>
        </div>

        {/* Booking widget visual (non-functional) */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6, type: "spring" }}
          className="relative z-10 max-w-4xl mx-auto px-8 w-full"
        >
          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Pickup</label>
              <div className="text-slate-800 font-medium border-b border-slate-200 pb-2">City or Airport</div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Date</label>
              <div className="text-slate-800 font-medium border-b border-slate-200 pb-2">Select dates</div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Vehicle</label>
              <div className="text-slate-800 font-medium border-b border-slate-200 pb-2">Any type</div>
            </div>
            <a href={`${base}/contact`} className="block text-center py-3.5 rounded-lg font-bold text-sm tracking-wide uppercase text-white"
              style={{ background: "#0047AB" }}>
              Search
            </a>
          </div>
        </motion.div>
      </section>

      {/* Services horizontal rows */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-8">
          <Reveal><h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 text-center">Why Rent With Us</h2></Reveal>
          <div className="space-y-6">
            {(content?.services || []).slice(0, 4).map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex flex-col md:flex-row md:items-center gap-6 p-8 rounded-xl" style={{ background: colors.secondary }}>
                  <div className="w-3 h-3 rounded-full shrink-0 mt-2" style={{ background: "rgba(255,255,255,0.3)" }} />
                  <div>
                    <h3 className="text-xl font-bold mb-1">{s.title}</h3>
                    <p className="text-white/60 leading-relaxed">{s.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/10">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{content?.call_to_action?.headline || "Ready to hit the road?"}</h2>
            <a href={`${base}/contact`} className="inline-block px-12 py-4 text-sm font-bold tracking-wide uppercase rounded-lg text-[#0047AB] bg-white">
              {content?.call_to_action?.button_text || "Book Now"}
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
