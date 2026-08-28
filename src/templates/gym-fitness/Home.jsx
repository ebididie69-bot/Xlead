import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

export default function Home({ content, images, colors, base, business }) {
  const steps = [
    { title: "Gym Movement", desc: "Train with purpose using proven movement patterns." },
    { title: "Fitness Practice", desc: "Structured workouts for body and mind." },
    { title: "Achievement", desc: "Track progress and crush every goal." },
  ];

  return (
    <div style={{ background: colors.primary, color: "#FAFAFA" }}>
      {/* Dark red hero — Fitkit style */}
      <section className="relative min-h-[88vh] md:min-h-screen flex items-center">
        <div className="absolute inset-0">
          <SmartImage image={images?.hero} accent={colors.accent} className="w-full h-full" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 w-full py-28">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-white/60">
            Keep Your Body Fitness With Workouts
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tighter max-w-3xl"
          >
            {content?.hero_title || (
              <>
                YOUR FITNESS<br />
                <span style={{ color: colors.accent }}>YOUR VICTORY</span>
              </>
            )}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-white/65 max-w-md text-sm sm:text-base"
          >
            {content?.hero_subtitle ||
              `Premium training and community at ${business || "our gym"}.`}
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }} className="mt-8 flex flex-wrap gap-3 items-center">
            <a href={`${base}/contact`} className="px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white" style={{ background: colors.accent }}>
              {content?.call_to_action?.button_text || "View Class Schedule"}
            </a>
            <span className="text-xs text-white/50 font-medium">2k+ Satisfied Members</span>
          </motion.div>
        </div>
      </section>

      {/* About split */}
      <section className="py-16 md:py-24 px-5 sm:px-8 bg-white text-zinc-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <SmartImage image={images?.about || images?.gallery_1} accent={colors.accent} className="w-full h-full" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">We Have Lots Of Experience Gym Training</h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-6">
              {(content?.services || [])[0]?.description ||
                "Individual and group sessions designed for real results — certified coaches, modern equipment."}
            </p>
            <a href={`${base}/about`} className="inline-block px-7 py-3 text-sm font-bold uppercase text-white" style={{ background: colors.accent }}>
              Get Started
            </a>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-2xl sm:text-4xl font-black text-center mb-12 tracking-tight">Easy Steps To Achieve Your Goals</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="text-center p-6 rounded-xl border border-white/10 bg-white/[0.03]">
                  <div className="text-3xl font-black mb-3" style={{ color: colors.accent }}>0{i + 1}</div>
                  <h3 className="font-bold mb-2">{s.title}</h3>
                  <p className="text-sm text-white/50">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 text-center border-t border-white/10">
        <Reveal>
          <h2 className="text-2xl sm:text-4xl font-black mb-6">{content?.call_to_action?.headline || "Ready to transform?"}</h2>
          <a href={`${base}/contact`} className="inline-block px-10 py-3.5 text-sm font-bold uppercase text-white" style={{ background: colors.accent }}>
            {content?.call_to_action?.button_text || "Join Now"}
          </a>
        </Reveal>
      </section>
    </div>
  );
}
