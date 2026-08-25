import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";

export default function Contact({ content, colors }) {
  return (
    <div className="pt-32 pb-28">
      <div className="max-w-6xl mx-auto px-8">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.35em] uppercase mb-4 text-center" style={{ color: colors.accent }}>
            Visit Us
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight text-center mb-20">
            Contact
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left info */}
          <div className="space-y-12">
            <Reveal>
              <div>
                <h3 className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: "#8B7A7A" }}>
                  Address
                </h3>
                <p className="text-xl font-medium" style={{ color: "#2D1B2E" }}>
                  Your location on file
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div>
                <h3 className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: "#8B7A7A" }}>
                  Phone
                </h3>
                <p className="text-xl font-medium" style={{ color: "#2D1B2E" }}>
                  Available on your listing
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div>
                <h3 className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: "#8B7A7A" }}>
                  Hours
                </h3>
                <p className="text-xl font-medium leading-relaxed" style={{ color: "#2D1B2E" }}>
                  Tue–Sat 9:00 AM – 7:00 PM<br />
                  Sunday by appointment
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="w-full h-56 mt-4" style={{ background: "#F0E9E0", borderRadius: "2px" }}>
                <div className="w-full h-full flex items-center justify-center text-sm tracking-wide" style={{ color: "#8B7A7A" }}>
                  Map Placeholder
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right CTA card */}
          <Reveal delay={0.1}>
            <div
              className="p-12 md:p-14 h-full flex flex-col justify-center"
              style={{
                background: colors.secondary,
                borderRadius: "2px",
                boxShadow: "0 8px 50px rgba(45,27,46,0.05)",
              }}
            >
              <h2 className="text-3xl font-serif font-medium mb-5" style={{ color: "#2D1B2E" }}>
                {content?.call_to_action?.headline || "Reserve your moment"}
              </h2>
              <p className="mb-12 leading-relaxed" style={{ color: "#6B5B5B" }}>
                We welcome you for a private consultation or treatment. Spaces are limited to preserve the calm.
              </p>
              <a
                href="#"
                className="inline-block self-start px-12 py-4 text-sm tracking-wide uppercase font-medium"
                style={{ background: colors.accent, color: "#FAF6F1", borderRadius: "2px" }}
              >
                {content?.call_to_action?.button_text || "Book Appointment"}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
