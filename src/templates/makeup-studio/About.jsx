import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

export default function About({ content, images, colors }) {
  return (
    <div style={{ background: colors.primary, color: "#FFFFFF" }} className="pt-32 pb-28">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          <div>
            <Reveal>
              <p className="text-xs font-medium tracking-[0.4em] uppercase mb-6" style={{ color: colors.accent }}>
                The Artist
              </p>
              <h1 className="text-5xl md:text-6xl font-serif italic font-light tracking-tight mb-10 leading-[1.05]">
                Crafted for the lens
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-lg text-white/45 leading-relaxed mb-10">
                {content?.about ||
                  "Every face is a canvas. We specialize in editorial, bridal, and red-carpet makeup that photographs with intention and presence."}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="w-16 h-px" style={{ background: colors.accent }} />
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative">
              <SmartImage
                image={images?.about}
                accent={colors.accent}
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          </Reveal>
        </div>

        {content?.testimonials?.length > 0 && (
          <div className="mt-36">
            <Reveal>
              <h2 className="text-3xl font-serif italic font-light mb-16">Client Notes</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {content.testimonials.map((t, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div>
                    <p className="text-lg italic text-white/50 leading-relaxed mb-6">
                      “{t.quote}”
                    </p>
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
