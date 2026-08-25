import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

export default function About({ content, images, colors }) {
  return (
    <div className="pt-32 pb-28">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal>
            <div className="relative">
              <SmartImage
                image={images?.about}
                accent={colors.accent}
                className="w-full aspect-[3/4] object-cover"
                style={{ borderRadius: "2px" }}
              />
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <p className="text-xs font-medium tracking-[0.35em] uppercase mb-5" style={{ color: colors.accent }}>
                Our Philosophy
              </p>
              <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight mb-8 leading-[1.15]">
                Beauty, unhurried
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg leading-relaxed mb-10" style={{ color: "#5C4A4A" }}>
                {content?.about ||
                  "We believe true luxury is time and attention. Every treatment is an invitation to slow down, breathe, and be cared for."}
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="w-20 h-px" style={{ background: colors.accent }} />
            </Reveal>
          </div>
        </div>

        {/* Testimonials — italic serif with large quotes */}
        {content?.testimonials?.length > 0 && (
          <div className="mt-36">
            <Reveal>
              <h2 className="text-3xl font-serif font-medium tracking-tight mb-16 text-center">
                Kind Words
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {content.testimonials.map((t, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="relative pt-8">
                    <span
                      className="absolute top-0 left-0 text-6xl font-serif leading-none opacity-20"
                      style={{ color: colors.accent }}
                    >
                      “
                    </span>
                    <p className="text-lg italic leading-relaxed mb-6 pl-4" style={{ color: "#5C4A4A" }}>
                      {t.quote}
                    </p>
                    <div className="pl-4">
                      <div className="font-medium" style={{ color: "#2D1B2E" }}>{t.name}</div>
                      {t.role && (
                        <div className="text-sm mt-1" style={{ color: "#8B7A7A" }}>{t.role}</div>
                      )}
                    </div>
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
