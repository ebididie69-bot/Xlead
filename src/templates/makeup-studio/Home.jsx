import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

export default function Home({ content, images, colors, base }) {
  return (
    <div style={{ background: colors.primary, color: "#FFFFFF" }} className="overflow-hidden">
      {/* High-fashion hero — oversized italic serif + minimal chrome */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <SmartImage
            image={images?.hero}
            accent={colors.accent}
            className="w-full h-full object-cover opacity-60"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, #050505 0%, rgba(5,5,5,0.5) 40%, rgba(5,5,5,0.2) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="text-xs font-medium tracking-[0.4em] uppercase mb-8"
              style={{ color: colors.accent }}
            >
              High Fashion Beauty
            </p>
            <h1
              className="text-6xl md:text-8xl lg:text-9xl font-serif italic font-light leading-[0.9] tracking-tight max-w-4xl"
              style={{ color: "#FFFFFF" }}
            >
              {content?.hero_title || "Artistry on skin"}
            </h1>
            <p className="mt-10 text-lg md:text-xl text-white/50 max-w-lg leading-relaxed">
              {content?.hero_subtitle ||
                "Editorial makeup for the camera, the stage, and the moments that matter."}
            </p>
            <motion.a
              href={`${base}/contact`}
              className="inline-block mt-14 px-12 py-4 text-sm font-medium tracking-[0.2em] uppercase border"
              style={{
                borderColor: colors.accent,
                color: colors.accent,
                borderRadius: 0,
              }}
              whileHover={{ backgroundColor: colors.accent, color: "#050505" }}
              transition={{ duration: 0.3 }}
            >
              {content?.call_to_action?.button_text || "Book Session"}
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Services preview — magazine editorial list style */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-8">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-serif italic font-light mb-20 tracking-tight">
              Services
            </h2>
          </Reveal>

          <div className="space-y-0">
            {(content?.services || []).slice(0, 4).map((service, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group py-10 border-b border-white/10 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-16">
                  <span
                    className="text-sm font-medium tracking-[0.3em] uppercase shrink-0 w-12"
                    style={{ color: colors.accent }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-serif italic font-light mb-3 group-hover:translate-x-2 transition-transform duration-500">
                      {service.title}
                    </h3>
                    <p className="text-white/40 leading-relaxed max-w-xl">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-16">
              <a
                href={`${base}/services`}
                className="text-sm tracking-[0.2em] uppercase font-medium hover:opacity-70 transition-opacity"
                style={{ color: colors.accent }}
              >
                View Full Menu →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-serif italic font-light mb-8">
              {content?.call_to_action?.headline || "Ready for the shot?"}
            </h2>
            <a
              href={`${base}/contact`}
              className="inline-block px-14 py-4 text-sm tracking-[0.2em] uppercase font-medium"
              style={{
                background: colors.accent,
                color: "#050505",
                borderRadius: 0,
              }}
            >
              {content?.call_to_action?.button_text || "Book Now"}
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
