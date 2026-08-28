import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

export default function Home({ content, images, colors, base, business }) {
  const stats = [
    { value: "98%", label: "Satisfaction Rate" },
    { value: "2k+", label: "Smiles Transformed" },
    { value: "4.9★", label: "Patient Rating" },
  ];

  return (
    <div style={{ background: colors.primary, color: "#0F172A" }}>
      {/* Soft rounded hero card — Dentora style */}
      <section className="pt-24 pb-12 md:pt-28 md:pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden min-h-[70vh] md:min-h-[78vh] flex items-end shadow-xl">
            <div className="absolute inset-0">
              <SmartImage image={images?.hero} accent={colors.accent} className="w-full h-full" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
            </div>
            <div className="relative z-10 p-6 sm:p-10 md:p-14 max-w-xl">
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.08] tracking-tight"
              >
                {content?.hero_title || "Family-Friendly Dental Care"}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed"
              >
                {content?.hero_subtitle ||
                  `Personalized treatments with modern technology at ${business || "our clinic"}.`}
              </motion.p>
              <motion.a
                href={`${base}/contact`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex mt-7 px-7 py-3 rounded-full text-sm font-semibold text-white"
                style={{ background: colors.accent }}
              >
                {content?.call_to_action?.button_text || "Book Appointment"}
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="py-14 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">About Us</p>
            <h2 className="text-2xl sm:text-4xl font-bold leading-snug tracking-tight">
              We deliver personalized dental treatments with modern technology and gentle care.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="rounded-2xl bg-white border border-slate-100 p-4 text-center shadow-sm">
                  <div className="text-2xl sm:text-3xl font-bold" style={{ color: colors.accent }}>{s.value}</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Feature + image */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Advanced Dental Care for a Healthier Smile</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              {(content?.services || [])[0]?.description ||
                "Join patients achieving healthier, brighter smiles through expert care."}
            </p>
            <a href={`${base}/services`} className="text-sm font-semibold" style={{ color: colors.accent }}>
              View all services →
            </a>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
              <SmartImage image={images?.about || images?.gallery_1} accent={colors.accent} className="w-full h-full" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-4 text-center">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">{content?.call_to_action?.headline || "Ready for a healthier smile?"}</h2>
          <a href={`${base}/contact`} className="inline-block px-8 py-3.5 rounded-full text-sm font-semibold text-white" style={{ background: colors.accent }}>
            {content?.call_to_action?.button_text || "Book a Call"}
          </a>
        </Reveal>
      </section>
    </div>
  );
}
