import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";

export default function Contact({ content, colors }) {
  return (
    <div style={{ background: colors.primary, color: "#FFFFFF" }} className="pt-32 pb-28">
      <div className="max-w-6xl mx-auto px-8">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.4em] uppercase mb-6" style={{ color: colors.accent }}>
            Get In Touch
          </p>
          <h1 className="text-5xl md:text-7xl font-serif italic font-light tracking-tight mb-20">
            Contact
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: placeholder info only */}
          <div className="space-y-12">
            <Reveal>
              <div>
                <h3 className="text-xs tracking-[0.3em] uppercase mb-3 text-white/30">Studio</h3>
                <p className="text-xl font-light">42 Atelier Street, Suite 3</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div>
                <h3 className="text-xs tracking-[0.3em] uppercase mb-3 text-white/30">Phone</h3>
                <p className="text-xl font-light">+1 (555) 000-0000</p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div>
                <h3 className="text-xs tracking-[0.3em] uppercase mb-3 text-white/30">Hours</h3>
                <p className="text-xl font-light leading-relaxed">
                  By appointment only<br />
                  Tue – Sat
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="w-full h-56 mt-4" style={{ background: colors.secondary }}>
                <div className="w-full h-full flex items-center justify-center text-sm tracking-wide text-white/25">
                  Map Placeholder
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: CTA */}
          <Reveal delay={0.1}>
            <div
              className="p-12 md:p-14 h-full flex flex-col justify-center border border-white/10"
              style={{ background: colors.secondary, borderRadius: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif italic font-light mb-6">
                {content?.call_to_action?.headline || "Book your session"}
              </h2>
              <p className="text-white/40 mb-12 leading-relaxed">
                Limited availability. Sessions are tailored and private.
              </p>
              <a
                href="#"
                className="inline-block self-start px-12 py-4 text-sm tracking-[0.2em] uppercase font-medium"
                style={{
                  background: colors.accent,
                  color: "#050505",
                  borderRadius: 0,
                }}
              >
                {content?.call_to_action?.button_text || "Request Booking"}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
