import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";
import { ChevronRight } from "lucide-react";

const STATS = [
          { value: "500+", label: "Vehicles Sold" },
          { value: "5★", label: "Avg. Rating" },
          { value: "24hr", label: "Finance Decision" },
];

export default function Home({ content, images, colors, base }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const accent = colors.accent || "#E8212B";
  const bg = colors.primary || "#050A14";
  const surface = colors.secondary || "#0D1525";

  return (
    <div style={{ background: bg, color: "#F0F4FF", minHeight: "100vh" }}>
      <section ref={heroRef} className="relative min-h-screen overflow-hidden">
        <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110">
          <SmartImage image={images.hero} accent={accent} className="w-full h-full object-cover" priority />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${bg}EE 0%, ${bg}AA 45%, ${bg}33 100%)` }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${bg} 0%, transparent 50%)` }} />
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto px-8 pt-36 pb-24 min-h-screen flex flex-col justify-end">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <p className="text-xs font-bold tracking-[0.35em] uppercase mb-5" style={{ color: accent }}>Premium Automobiles</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight mb-6 max-w-3xl" >
              {content.hero_title || "Drive something extraordinary"}
            </h1>
            <p className="text-lg opacity-60 mb-10 max-w-lg leading-relaxed">{content.hero_subtitle || "New, used, and certified pre-owned vehicles — all backed by our guarantee."}</p>
            <motion.a href={`${base}/contact`} whileHover={{ scale: 1.03, boxShadow: `0 0 30px ${accent}44` }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 font-bold text-sm tracking-wide"
              style={{ background: accent, color: "#050A14" }}>
              {content.call_to_action?.button_text || "Book Test Drive"} <ChevronRight size={16} />
            </motion.a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-14 grid grid-cols-3 max-w-xl" style={{ background: surface, borderTop: `2px solid ${accent}` }}>
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center py-6 px-4 text-center border-r last:border-r-0"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <div className="text-xl font-bold" style={{ color: accent }}>{s.value}</div>
                <div className="text-xs opacity-40 mt-1 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {content.services?.length > 0 && (
        <section className="py-24 max-w-6xl mx-auto px-8">
          <Reveal>
            <div className="flex items-center gap-4 mb-14">
              <div className="w-12 h-px" style={{ background: accent }} />
              <h2 className="text-3xl font-bold tracking-tight" >Services</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {content.services.map((s, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="p-8 h-full" style={{ background: surface, borderLeft: `3px solid ${accent}` }}>
                  <h3 className="font-bold text-lg mb-3" >{s.title}</h3>
                  <p className="text-sm opacity-50 leading-relaxed">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="py-20 px-8 max-w-6xl mx-auto border-t grid md:grid-cols-3 gap-10"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <Reveal key="◈ Certified Pre-Owned" delay={0.0}>
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 flex items-center justify-center text-lg" style={{ color: accent }}>◆</div>
              <div>
                <h3 className="font-bold mb-1">◈ Certified Pre-Owned</h3>
                <p className="text-sm opacity-50 leading-relaxed">Every used vehicle inspected to 150-point standard.</p>
              </div>
            </div>
          </Reveal>
          <Reveal key="◈ Finance Available" delay={0.1}>
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 flex items-center justify-center text-lg" style={{ color: accent }}>◆</div>
              <div>
                <h3 className="font-bold mb-1">◈ Finance Available</h3>
                <p className="text-sm opacity-50 leading-relaxed">Same-day finance decisions from leading lenders.</p>
              </div>
            </div>
          </Reveal>
          <Reveal key="◈ 90-Day Warranty" delay={0.2}>
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 flex items-center justify-center text-lg" style={{ color: accent }}>◆</div>
              <div>
                <h3 className="font-bold mb-1">◈ 90-Day Warranty</h3>
                <p className="text-sm opacity-50 leading-relaxed">Full mechanical warranty on all vehicles we sell.</p>
              </div>
            </div>
          </Reveal>
      </section>

      <section className="py-24 text-center border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" >
            {content.call_to_action?.headline || "Book Test Drive"}
          </h2>
          <p className="opacity-45 mb-10 max-w-md mx-auto">Get in touch with our team today.</p>
          <motion.a href={`${base}/contact`} whileHover={{ scale: 1.03, boxShadow: `0 0 30px ${accent}44` }}
            className="inline-flex items-center gap-2 px-10 py-4 font-bold" style={{ background: accent, color: "#050A14" }}>
            {content.call_to_action?.button_text || "Book Test Drive"} <ChevronRight size={16} />
          </motion.a>
        </Reveal>
      </section>
    </div>
  );
}
