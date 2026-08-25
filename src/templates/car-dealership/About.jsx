import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";
import { Quote } from "lucide-react";

export default function About({ content, images, colors }) {
  const accent = colors.accent || "#E8212B";
  const bg = colors.primary || "#050A14";
  const surface = colors.secondary || "#0D1525";

  return (
    <div style={{ background: bg, color: "#F0F4FF", minHeight: "100vh" }}>
      <section className="px-8 pt-28 pb-16 max-w-6xl mx-auto border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: accent }} />
            <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: accent }}>Our Story</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight" >Who We Are</h1>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-12">
        <Reveal>
          <div className="aspect-[21/8] overflow-hidden relative">
            <SmartImage image={images.about} accent={accent} className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${bg}CC, transparent 60%, ${bg}88)` }} />
            <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: `linear-gradient(to top, ${bg}, transparent)` }} />
          </div>
        </Reveal>
      </section>

      <section className="px-8 py-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <Reveal>
          <p className="text-xl leading-relaxed opacity-70" >{content.about}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-5 pl-8 border-l-2" style={{ borderColor: accent }}>
            <p className="text-sm opacity-55">Client-focused from day one</p>
            <p className="text-sm opacity-55">Award-winning results and reputation</p>
            <p className="text-sm opacity-55">Full transparency at every step</p>
            <p className="text-sm opacity-55">Ongoing support beyond the job</p>
          </div>
        </Reveal>
      </section>

      {content.testimonials?.length > 0 && (
        <section className="px-8 py-16 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-8 h-px" style={{ background: accent }} />
                <h2 className="text-2xl font-bold" >What People Say</h2>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              {content.testimonials.slice(0, 4).map((t, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="p-8" style={{ background: surface }}>
                    <Quote size={24} className="mb-4 opacity-20" style={{ color: accent }} />
                    <p className="text-sm leading-relaxed opacity-70 italic mb-6" >{t.quote}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-px" style={{ background: accent }} />
                      <p className="text-xs font-bold uppercase tracking-wider opacity-40">{t.name}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
