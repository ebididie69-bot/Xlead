import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

const SERVICE_ICONS = ["🏠", "🏢", "✨", "🔨"];

export default function Home({ content, images, colors, base, business }) {
  const services = (content?.services || []).slice(0, 4);
  const why = [
    { title: "Trusted Professionals", desc: "Background-checked, trained cleaners you can count on." },
    { title: "Eco-Friendly Products", desc: "Safe for kids, pets, and the planet." },
    { title: "Flexible Scheduling", desc: "Weekly, monthly, or one-time — your choice." },
  ];

  return (
    <div style={{ background: "#FFFFFF", color: "#0B0F14" }}>
      {/* Full-bleed hero — Clean Up style */}
      <section className="relative min-h-[88vh] md:min-h-screen flex items-end md:items-center">
        <div className="absolute inset-0">
          <SmartImage image={images?.hero} accent={colors.accent} className="w-full h-full" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
        </div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 pb-16 md:pb-24 pt-28">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: colors.accent }}
          >
            Professional Cleaning Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] max-w-2xl tracking-tight"
          >
            {content?.hero_title || "Effortless Cleaning, Exceptional Results"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-5 text-base sm:text-lg text-white/75 max-w-lg leading-relaxed"
          >
            {content?.hero_subtitle ||
              `Spotless homes and offices with ${business || "our"} trusted team.`}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href={`${base}/contact`}
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold rounded-full text-black"
              style={{ background: colors.accent }}
            >
              {content?.call_to_action?.button_text || "Book Free Cleaning"}
            </a>
            <a
              href={`${base}/services`}
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold rounded-full border border-white/30 text-white hover:bg-white/10 transition"
            >
              Our Services
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">Our Services</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-5 sm:p-6 h-full hover:shadow-md transition">
                  <div className="text-2xl mb-3">{SERVICE_ICONS[i % 4]}</div>
                  <h3 className="font-semibold text-sm sm:text-base mb-1.5">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us + images */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {why.map((w, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100">
                  <div className="aspect-[16/10]">
                    <SmartImage
                      image={images?.[`gallery_${i + 1}`] || images?.about}
                      accent={colors.accent}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold mb-1">{w.title}</h3>
                    <p className="text-sm text-slate-500">{w.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20" style={{ background: "#0B0F14" }}>
        <div className="max-w-2xl mx-auto px-5 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {content?.call_to_action?.headline || "Ready for a spotless space?"}
            </h2>
            <p className="text-white/60 mb-8 text-sm md:text-base">Book online in under a minute.</p>
            <a
              href={`${base}/contact`}
              className="inline-block px-10 py-3.5 rounded-full text-sm font-bold text-black"
              style={{ background: colors.accent }}
            >
              {content?.call_to_action?.button_text || "Get a Free Quote"}
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
