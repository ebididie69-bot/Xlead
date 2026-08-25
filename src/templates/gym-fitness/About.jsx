import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

export default function About({ content, images, colors }) {
  return (
    <div className="pt-28 pb-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <Reveal>
              <p className="text-sm font-bold tracking-[0.35em] uppercase mb-4" style={{ color: colors.accent }}>
                Our Story
              </p>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.92]">
                Built for those who refuse to quit
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-white/60 leading-relaxed mb-10">
                {content?.about ||
                  "We started with one goal: create a space where intensity meets community. No judgment. Just results."}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="w-24 h-1.5" style={{ background: colors.accent }} />
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="relative">
              {/* 3D offset layer */}
              <div
                className="absolute -inset-5 opacity-40"
                style={{
                  background: `linear-gradient(135deg, ${colors.accent}33, transparent 60%)`,
                  transform: "rotate(2.5deg)",
                }}
              />
              <SmartImage
                image={images?.about}
                accent={colors.accent}
                className="w-full aspect-[4/5] object-cover relative z-10"
              />
            </div>
          </Reveal>
        </div>

        {content?.testimonials?.length > 0 && (
          <div className="mt-36">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-16">Member Voices</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.testimonials.map((t, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <motion.div
                    className="p-9 h-full"
                    style={{ background: colors.secondary, borderRadius: 0 }}
                    whileHover={{ y: -5 }}
                  >
                    <p className="text-white/65 leading-relaxed mb-8 italic">“{t.quote}”</p>
                    <div>
                      <div className="font-bold">{t.name}</div>
                      {t.role && <div className="text-sm text-white/35 mt-1">{t.role}</div>}
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
