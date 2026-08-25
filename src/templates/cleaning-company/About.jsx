import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

export default function About({ content, images, colors }) {
  return (
    <div style={{ background: colors.primary, color: "#1E293B" }} className="pt-32 pb-28">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <SmartImage image={images?.about} accent={colors.accent} className="w-full aspect-[4/5] object-cover rounded-xl shadow-lg" />
          </Reveal>
          <div>
            <Reveal delay={0.1}>
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: colors.accent }}>Who We Are</p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Clean that feels like home</h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-slate-600 leading-relaxed">{content?.about || "We treat every home like our own — thorough, reliable, and always respectful of your space."}</p>
            </Reveal>
          </div>
        </div>
        {content?.testimonials?.length > 0 && (
          <div className="mt-32">
            <Reveal><h2 className="text-3xl font-bold mb-14 text-center">Happy Clients</h2></Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.testimonials.map((t, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="p-8 bg-white rounded-lg shadow-sm border border-teal-50">
                    <p className="text-slate-600 italic leading-relaxed mb-6">“{t.quote}”</p>
                    <div className="font-semibold">{t.name}</div>
                    {t.role && <div className="text-sm text-slate-400 mt-1">{t.role}</div>}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
