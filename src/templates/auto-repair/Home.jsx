import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";
import { Shield, Clock, Wrench, Star, ChevronRight } from "lucide-react";

const STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "24h", label: "Turnaround Time" },
  { value: "ASE", label: "Certified Technicians" },
];

export default function Home({ content, images, colors, base }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const accent = colors.accent || "#F0C531";
  const bg = colors.primary || "#0A0F1E";
  const surface = colors.secondary || "#111827";

  return (
    <div style={{ background: bg, color: "#E8EAF0" }}>

      {/* HERO — full-bleed dark with parallax image and diagonal slash */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <SmartImage
            image={images.hero}
            accent={accent}
            className="w-full h-full object-cover"
            priority
          />
          {/* Dark gradient overlay — strong at bottom, lighter at top */}
          <div className="absolute inset-0" style={{
            background: `linear-gradient(135deg, ${bg}EE 0%, ${bg}AA 40%, ${bg}66 70%, ${bg}22 100%)`
          }} />
          {/* Diagonal slash accent */}
          <div className="absolute bottom-0 left-0 right-0 h-32"
            style={{ background: `linear-gradient(to top right, ${bg} 49%, transparent 51%)` }} />
        </motion.div>

        <div className="relative z-10 px-6 md:px-16 max-w-6xl mx-auto w-full pt-24 pb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: accent }} />
              <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: accent }}>
                ASE Certified Auto Repair
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] mb-6 max-w-2xl"
              style={{ letterSpacing: "-0.02em" }}>
              {content.hero_title || "Your Car. Our Expertise."}
            </h1>

            <p className="text-lg opacity-70 mb-10 max-w-lg leading-relaxed">
              {content.hero_subtitle || "Precision diagnostics. Honest service. Same-day repairs for most vehicles."}
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href={`${base}/contact`}
                whileHover={{ scale: 1.03, boxShadow: `0 0 30px ${accent}44` }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 font-bold text-sm tracking-wide rounded-none"
                style={{ background: accent, color: "#0A0F1E" }}
              >
                {content.call_to_action?.button_text || "Book a Service"}
                <ChevronRight size={16} />
              </motion.a>
              <motion.a
                href={`${base}/services`}
                whileHover={{ borderColor: accent, color: accent }}
                className="inline-flex items-center gap-2 px-8 py-4 font-bold text-sm tracking-wide border transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)" }}
              >
                View Services
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Animated scan line — mechanical feel */}
        <motion.div
          className="absolute right-0 top-0 bottom-0 w-px opacity-20"
          style={{ background: `linear-gradient(to bottom, transparent, ${accent}, transparent)` }}
          animate={{ y: ["-100%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </section>

      {/* STATS STRIP */}
      <section style={{ background: accent }}>
        <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-0">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center py-2 border-r last:border-r-0"
              style={{ borderColor: "rgba(0,0,0,0.15)", color: "#0A0F1E" }}
            >
              <div className="text-2xl font-black">{s.value}</div>
              <div className="text-xs font-semibold uppercase tracking-wider opacity-70">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      {content.services?.length > 0 && (
        <section className="px-6 md:px-16 py-24 max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-14">
              <div className="w-12 h-px" style={{ background: accent }} />
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">What We Fix</h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {content.services.map((s, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <motion.div
                  whileHover={{ background: surface }}
                  className="p-8 transition-colors group cursor-default"
                  style={{ background: bg }}
                >
                  <div className="w-10 h-10 rounded-none flex items-center justify-center mb-6 transition-colors"
                    style={{ background: `${accent}15`, border: `1px solid ${accent}33` }}>
                    <Wrench size={18} style={{ color: accent }} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-white transition-colors">{s.title}</h3>
                  <p className="text-sm opacity-55 leading-relaxed">{s.description}</p>
                  <div className="mt-6 w-0 group-hover:w-8 h-px transition-all duration-300"
                    style={{ background: accent }} />
                </motion.div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* TRUST STRIP */}
      <section className="px-6 md:px-16 py-16 border-t border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            { icon: Shield, title: "Guaranteed Work", desc: "All repairs backed by our 12-month / 12,000 mile warranty." },
            { icon: Clock, title: "Same-Day Service", desc: "Most repairs completed the same day you bring your vehicle in." },
            { icon: Star, title: "Honest Pricing", desc: "Transparent diagnostics and upfront quotes. No hidden charges." },
          ].map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-none"
                  style={{ background: `${accent}15` }}>
                  <Icon size={18} style={{ color: accent }} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm opacity-55">{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="px-6 md:px-16 py-24 max-w-6xl mx-auto text-center">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
            {content.call_to_action?.headline || "Ready to Get Back on the Road?"}
          </h2>
          <p className="opacity-55 mb-10 max-w-md mx-auto">
            Book your appointment today — diagnostics included on all full-service visits.
          </p>
          <motion.a
            href={`${base}/contact`}
            whileHover={{ scale: 1.03, boxShadow: `0 0 40px ${accent}55` }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-10 py-4 font-bold tracking-wide"
            style={{ background: accent, color: "#0A0F1E" }}
          >
            {content.call_to_action?.button_text || "Book Now"}
            <ChevronRight size={16} />
          </motion.a>
        </Reveal>
      </section>
    </div>
  );
}
