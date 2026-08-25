import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

export default function About({ content, images, colors }) {
  return (
    <div style={{ background: colors.primary, color: "#FFFFFF" }} className="pt-32 pb-28">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <Reveal>
              <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-10 leading-tight">The eye behind the lens</h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-lg text-white/45 leading-relaxed">
                {content?.about || "We chase light, moment, and emotion. Every session is a collaboration to create images that feel true."}
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <SmartImage image={images?.about} accent={colors.accent} className="w-full aspect-[3/4] object-cover" />
          </Reveal>
        </div>
        {content?.testimonials?.length > 0 && (
          <div className="mt-36">
            <Reveal><h2 className="text-2xl font-light mb-16 text-white/40">Words</h2></Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
              {content.testimonials.map((t, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div>
                    <p className="text-lg italic text-white/50 leading-relaxed mb-6">“{t.quote}”</p>
                    <div className="font-medium">{t.name}</div>
                    {t.role && <div className="text-sm text-white/30 mt-1">{t.role}</div>}
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
