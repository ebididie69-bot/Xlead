import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

export default function Home({ content, images, colors, base }) {
  return (
    <div className="overflow-hidden">
      {/* Split hero: left editorial text, right full-height portrait */}
      <section className="min-h-screen flex flex-col lg:flex-row">
        {/* Left content */}
        <div className="flex-1 flex items-center px-8 md:px-16 lg:px-20 py-32 lg:py-0 order-2 lg:order-1">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xs font-medium tracking-[0.35em] uppercase mb-6"
              style={{ color: colors.accent }}
            >
              Luxury Wellness
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.05] tracking-tight mb-8"
              style={{ color: "#2D1B2E" }}
            >
              {content?.hero_title || "Where beauty finds stillness"}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-lg leading-relaxed mb-12"
              style={{ color: "#5C4A4A" }}
            >
              {content?.hero_subtitle ||
                "An intimate sanctuary of expert care, refined treatments, and quiet luxury."}
            </motion.p>
            <motion.a
              href={`${base}/contact`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-block px-10 py-4 text-sm font-medium tracking-wide uppercase"
              style={{
                background: colors.accent,
                color: "#FAF6F1",
                borderRadius: "2px",
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {content?.call_to_action?.button_text || "Book an Experience"}
            </motion.a>
          </div>
        </div>

        {/* Right image — full height with soft depth */}
        <div className="flex-1 relative min-h-[50vh] lg:min-h-screen order-1 lg:order-2">
          <SmartImage
            image={images?.hero}
            accent={colors.accent}
            className="absolute inset-0 w-full h-full object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to left, transparent 60%, rgba(250,246,241,0.15))",
            }}
          />
        </div>
      </section>

      {/* Soft stats / trust row */}
      <section className="py-20 border-y" style={{ borderColor: "#EDE6DC" }}>
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { value: "12+", label: "Years of Excellence" },
            { value: "4.9★", label: "Client Rating" },
            { value: "8k+", label: "Treatments Delivered" },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div>
                <div className="text-3xl md:text-4xl font-serif font-medium mb-2" style={{ color: colors.accent }}>
                  {item.value}
                </div>
                <div className="text-xs tracking-[0.2em] uppercase" style={{ color: "#8B7A7A" }}>
                  {item.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services preview — elegant cards with thin top accent */}
      <section className="py-28 md:py-36">
        <div className="max-w-6xl mx-auto px-8">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-3 text-center">
              Signature Treatments
            </h2>
            <div className="w-16 h-px mx-auto mb-20" style={{ background: colors.accent }} />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(content?.services || []).slice(0, 3).map((service, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div
                  className="p-10 h-full relative"
                  style={{
                    background: colors.secondary,
                    borderRadius: "2px",
                    boxShadow: "0 4px 40px rgba(45,27,46,0.04)",
                  }}
                >
                  <div
                    className="absolute top-0 left-10 right-10 h-px"
                    style={{ background: colors.accent }}
                  />
                  <h3 className="text-xl font-medium mb-4 mt-2" style={{ color: "#2D1B2E" }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6B5B5B" }}>
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-16 text-center">
              <a
                href={`${base}/services`}
                className="text-sm tracking-[0.15em] uppercase font-medium hover:opacity-70 transition-opacity"
                style={{ color: colors.accent }}
              >
                Explore All Services →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Soft CTA */}
      <section className="py-28" style={{ background: "#F5EFE8" }}>
        <div className="max-w-2xl mx-auto px-8 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              {content?.call_to_action?.headline || "Begin your ritual"}
            </h2>
            <p className="mb-10 leading-relaxed" style={{ color: "#6B5B5B" }}>
              Reserve a private appointment and step into calm.
            </p>
            <a
              href={`${base}/contact`}
              className="inline-block px-12 py-4 text-sm tracking-wide uppercase font-medium"
              style={{ background: colors.accent, color: "#FAF6F1", borderRadius: "2px" }}
            >
              {content?.call_to_action?.button_text || "Book Now"}
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
