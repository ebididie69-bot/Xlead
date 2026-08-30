import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

const SERVICES = [
  { t: "Hair Styling", d: "Bespoke cuts, coloring, and treatments for every hair type." },
  { t: "Skincare & Facial", d: "Revitalizing facials and advanced skincare for radiant skin." },
  { t: "Makeup Services", d: "Professional application for events and special occasions." },
];

const MORE = ["Hair Coloring", "Bridal Makeup", "Nail Studio", "Spa Treatments"];

export default function Home({ content, images, colors, base }) {
  const accent = colors.accent || "#C4A574";
  const bg = colors.primary || "#0C0A09";
  const blush = colors.secondary || "#F6EDE8";
  const gallery = images?.gallery || [];

  return (
    <div style={{ background: blush, color: "#1A1410", minHeight: "100vh" }}>
      <section className="relative min-h-[88vh] md:min-h-screen flex items-center overflow-hidden" style={{ background: bg }}>
        <div className="absolute inset-0">
          <SmartImage image={images?.hero} accent={accent} className="w-full h-full" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 w-full py-28">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.35em] uppercase mb-4" style={{ color: accent }}>
            Luxury beauty
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] max-w-xl"
          >
            {content?.hero_title || (
              <>
                Your Hair<br />
                <span className="italic font-serif" style={{ color: accent }}>Your Crown</span>
              </>
            )}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mt-5 text-white/60 max-w-md text-sm md:text-base"
          >
            {content?.hero_subtitle ||
              "Premium care. Beautiful results. Because you deserve the best."}
          </motion.p>
          <motion.a
            href={`${base}/contact`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="inline-flex mt-8 items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold"
            style={{ background: accent, color: "#1A1008" }}
          >
            Book Your Experience →
          </motion.a>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase mb-2 opacity-50">We believe</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight">
              Confidence Starts With Great Hair
            </h2>
            <p className="text-sm opacity-60 leading-relaxed mb-6">
              {content?.about_snippet ||
                "Experience luxury hair care in a relaxing and friendly environment. Expert stylists, premium products, natural care."}
            </p>
            <a href={`${base}/about`} className="text-sm font-semibold" style={{ color: accent }}>
              Learn more →
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-lg">
              <SmartImage image={gallery[0] || images?.hero} accent={accent} className="w-full h-full" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12 bg-white/60">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl font-semibold text-center mb-8">Our Beauty Services</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.08}>
                <div className="rounded-2xl bg-white border border-black/5 p-6 text-center h-full shadow-sm">
                  <div className="w-12 h-12 rounded-full mx-auto mb-4" style={{ background: `${accent}22` }} />
                  <h3 className="font-semibold mb-2">{s.t}</h3>
                  <p className="text-xs opacity-55 leading-relaxed mb-4">{s.d}</p>
                  <a href={`${base}/services`} className="text-xs font-semibold" style={{ color: accent }}>
                    Learn More
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {MORE.map((m) => (
            <div key={m} className="rounded-xl bg-white/80 border border-black/5 py-4 text-center text-sm font-medium">
              {m}
            </div>
          ))}
        </div>
      </section>

      <section className="py-14" style={{ background: bg, color: "#F6EDE8" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: accent }}>Ready for a change?</p>
            <h2 className="text-3xl font-semibold">
              Book Your <span className="italic font-serif" style={{ color: accent }}>Appointment</span>
            </h2>
          </div>
          <a href={`${base}/contact`} className="inline-flex self-start px-7 py-3 rounded-full text-sm font-semibold" style={{ background: accent, color: "#1A1008" }}>
            Book Now →
          </a>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-xl font-semibold">Inspiration & transformation</h2>
            <a href={`${base}/gallery`} className="text-sm font-medium" style={{ color: accent }}>View gallery →</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-square">
                <SmartImage image={gallery[i] || images?.hero} accent={accent} className="w-full h-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-md mx-auto px-5 text-center">
          <p className="text-amber-500 text-sm mb-2">★★★★★</p>
          <p className="text-sm opacity-60 italic mb-6">
            &ldquo;Absolutely exquisite service. The attention to detail and luxurious atmosphere are unmatched.&rdquo;
          </p>
          <div className="flex justify-center gap-10 text-sm">
            <div>
              <p className="text-2xl font-semibold">500+</p>
              <p className="text-xs opacity-50">Happy clients</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">98%</p>
              <p className="text-xs opacity-50">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
