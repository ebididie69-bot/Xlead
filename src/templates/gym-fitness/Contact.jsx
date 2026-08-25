import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";

export default function Contact({ content, colors }) {
  return (
    <div className="pt-28 pb-28">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <p className="text-sm font-bold tracking-[0.35em] uppercase mb-4" style={{ color: colors.accent }}>
            Get In Touch
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-20">Contact</h1>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">
          {/* Left: Info list */}
          <div className="space-y-12">
            <Reveal>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white/35 mb-3">Location</h3>
                <p className="text-xl font-medium">Your location on file</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white/35 mb-3">Phone</h3>
                <p className="text-xl font-medium">Available on your listing</p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white/35 mb-3">Hours</h3>
                <p className="text-xl font-medium leading-relaxed">
                  Mon–Fri 5:00 AM – 11:00 PM<br />
                  Sat–Sun 7:00 AM – 9:00 PM
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="w-full h-64 mt-4" style={{ background: colors.secondary }}>
                <div className="w-full h-full flex items-center justify-center text-white/25 text-sm font-medium tracking-wide">
                  Map Placeholder
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: CTA Card with depth */}
          <Reveal delay={0.1}>
            <motion.div
              className="p-12 md:p-14 h-full flex flex-col justify-center relative"
              style={{ background: colors.secondary, borderRadius: 0 }}
              whileHover={{ y: -6 }}
            >
              <div
                className="absolute top-0 left-0 w-full h-1.5"
                style={{ background: colors.accent }}
              />
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-5">
                {content?.call_to_action?.headline || "Ready to Start?"}
              </h2>
              <p className="text-white/50 mb-12 leading-relaxed text-lg">
                Book a free intro session or drop by during open hours. No pressure — just pure energy.
              </p>
              <motion.a
                href="#"
                className="inline-block self-start px-12 py-5 font-black text-lg uppercase tracking-wide"
                style={{ background: colors.accent, color: "#080808", borderRadius: 0 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                {content?.call_to_action?.button_text || "Book Free Session"}
              </motion.a>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
