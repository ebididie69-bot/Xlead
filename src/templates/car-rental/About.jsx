import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

export default function About({ content, images, colors }) {
  return (
    <div style={{ background: colors.primary, color: "#FFFFFF" }} className="pt-32 pb-28">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-white/50">About Us</p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Freedom on four wheels</h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-lg text-white/65 leading-relaxed">
                {content?.about || "We make car rental simple, transparent, and flexible — so you can focus on the journey."}
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <SmartImage image={images?.about} accent={colors.accent} className="w-full aspect-[4/3] object-cover rounded-xl" />
          </Reveal>
        </div>
        {content?.testimonials?.length > 0 && (
          <div className="mt-32">
            <Reveal><h2 className="text-3xl font-bold mb-14 text-center">Drivers Love Us</h2></Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.testimonials.map((t, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="p-8 rounded-xl" style={{ background: colors.secondary }}>
                    <p className="text-white/70 italic leading-relaxed mb-6">“{t.quote}”</p>
                    <div className="font-bold">{t.name}</div>
                    {t.role && <div className="text-sm text-white/40 mt-1">{t.role}</div>}
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
