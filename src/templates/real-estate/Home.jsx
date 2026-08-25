import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";
import { ChevronRight, Home as HomeIcon, TrendingUp, Award } from "lucide-react";

const STATS = [
  { icon: HomeIcon, value: "850+", label: "Properties Sold" },
  { icon: TrendingUp, value: "£2.4M", label: "Avg. Sale Price" },
  { icon: Award, value: "18yr", label: "Market Experience" },
];

export default function Home({ content, images, colors, base }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const accent = colors.accent || "#C9A84C";
  const bg = colors.primary || "#0B1426";
  const surface = colors.secondary || "#132039";

  return (
    <div style={{ background: bg, color: "#F5F0E8", minHeight: "100vh" }}>
      <section ref={heroRef} className="relative min-h-screen overflow-hidden">
        <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110">
          <SmartImage image={images.hero} accent={accent} className="w-full h-full object-cover" priority />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${bg}F0 0%, ${bg}BB 50%, ${bg}44 100%)` }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${bg} 0%, transparent 40%)` }} />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-36 pb-16 min-h-screen flex flex-col justify-end">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <p className="text-xs font-bold tracking-[0.35em] uppercase mb-5" style={{ color: accent }}>Premium Property Specialists</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight mb-6 max-w-3xl" style={{ fontFamily: "Georgia, serif" }}>
              {content.hero_title || "Find your perfect home"}
            </h1>
            <p className="text-lg opacity-60 mb-10 max-w-lg leading-relaxed">{content.hero_subtitle || "Exclusive listings and expert guidance across prime locations."}</p>
            <motion.a href={`${base}/contact`} whileHover={{ scale: 1.03, boxShadow: `0 0 30px ${accent}44` }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-sm" style={{ background: accent, color: bg }}>
              {content.call_to_action?.button_text || "View Properties"} <ChevronRight size={16} />
            </motion.a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-14 grid grid-cols-3 max-w-xl" style={{ background: surface, borderTop: `2px solid ${accent}` }}>
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center py-6 px-4 text-center border-r last:border-r-0"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <Icon size={14} className="mb-2 opacity-30" />
                <div className="text-xl font-bold" style={{ color: accent }}>{value}</div>
                <div className="text-xs opacity-40 mt-1 uppercase tracking-wider">{label}</div>
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
              <h2 className="text-3xl font-bold tracking-tight" style={{ fontFamily: "Georgia, serif" }}>Our Services</h2>
            </div>
          </Reveal>
          <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            {content.services.map((s, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <motion.div whileHover={{ x: 8 }} className="flex items-start gap-6 py-8 group cursor-default">
                  <div className="w-1 h-14 shrink-0 self-center" style={{ background: `${accent}55` }} />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1" style={{ fontFamily: "Georgia, serif" }}>{s.title}</h3>
                    <p className="text-sm opacity-45 leading-relaxed max-w-2xl">{s.description}</p>
                  </div>
                  <ChevronRight size={14} className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: accent }} />
                </motion.div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="py-24 text-center border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>
            {content.call_to_action?.headline || "Ready to find your home?"}
          </h2>
          <p className="opacity-45 mb-10 max-w-md mx-auto">Book a free consultation with one of our property specialists.</p>
          <motion.a href={`${base}/contact`} whileHover={{ scale: 1.03, boxShadow: `0 0 30px ${accent}44` }}
            className="inline-flex items-center gap-2 px-10 py-4 font-semibold" style={{ background: accent, color: bg }}>
            Book Consultation <ChevronRight size={16} />
          </motion.a>
        </Reveal>
      </section>
    </div>
  );
}
