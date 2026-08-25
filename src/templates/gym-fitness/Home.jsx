import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

export default function Home({ content, images, colors, base }) {
  const stats = [
    { value: "2,400+", label: "Active Members" },
    { value: "85+", label: "Classes / Week" },
    { value: "12", label: "Years Open" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Full-bleed Hero with diagonal slash + 3D depth layers */}
      <section className="relative h-screen min-h-[700px] flex items-end">
        <div className="absolute inset-0">
          <SmartImage
            image={images?.hero}
            accent={colors.accent}
            className="w-full h-full object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, #080808 0%, rgba(8,8,8,0.75) 45%, rgba(8,8,8,0.25) 100%)",
            }}
          />
          {/* 3D depth glow layer */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 70% 25%, rgba(234,255,0,0.15) 0%, transparent 50%)",
            }}
          />
        </div>

        {/* Strong diagonal slash cutout */}
        <div
          className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none"
          style={{
            background: colors.primary,
            clipPath: "polygon(0 55%, 100% 0, 100% 100%, 0 100%)",
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-44 md:pb-52">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="text-sm font-bold tracking-[0.35em] uppercase mb-5"
              style={{ color: colors.accent }}
            >
              Unleash Your Potential
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.88] tracking-tighter max-w-4xl">
              {content?.hero_title || "Train Harder. Get Stronger."}
            </h1>
            <p className="mt-7 text-lg md:text-xl text-white/65 max-w-xl leading-relaxed">
              {content?.hero_subtitle ||
                "Premium training, elite coaching, and a community that pushes you past your limits."}
            </p>

            <motion.a
              href={`${base}/contact`}
              className="inline-block mt-12 px-12 py-5 font-black text-lg tracking-wide uppercase relative"
              style={{
                background: colors.accent,
                color: "#080808",
                borderRadius: 0,
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Signature: pulsing electric glow */}
              <motion.span
                className="absolute inset-0 pointer-events-none"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(234,255,0,0.7)",
                    "0 0 0 24px rgba(234,255,0,0)",
                    "0 0 0 0 rgba(234,255,0,0)",
                  ],
                }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="relative z-10">
                {content?.call_to_action?.button_text || "Join Now"}
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Electric yellow stats strip */}
      <section className="relative z-20 -mt-20" style={{ background: colors.accent }}>
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
            {stats.map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={`text-center md:text-left ${i < 2 ? "md:border-r md:border-black/15" : ""} md:px-12`}>
                  <div className="text-4xl md:text-5xl font-black tracking-tighter" style={{ color: "#080808" }}>
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#080808" }}>
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview - staggered fade-up */}
      <section className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-3">
              What We Offer
            </h2>
            <div className="w-28 h-1.5 mb-16" style={{ background: colors.accent }} />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {(content?.services || []).slice(0, 3).map((service, i) => (
              <Reveal key={i} delay={i * 0.13}>
                <motion.div
                  className="group relative p-9 h-full"
                  style={{ background: colors.secondary, borderRadius: 0 }}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  <div
                    className="absolute top-0 left-0 w-full h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    style={{ background: colors.accent }}
                  />
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-white/55 leading-relaxed">{service.description}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35}>
            <div className="mt-16 text-center">
              <a
                href={`${base}/services`}
                className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] hover:gap-5 transition-all duration-300"
                style={{ color: colors.accent }}
              >
                View All Services <span>→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 border-t border-white/8">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
              {content?.call_to_action?.headline || "Ready to Transform?"}
            </h2>
            <p className="text-white/55 text-lg mb-12 max-w-lg mx-auto">
              Join a community that refuses to settle for average.
            </p>
            <motion.a
              href={`${base}/contact`}
              className="inline-block px-14 py-5 font-black text-lg uppercase tracking-wide"
              style={{ background: colors.accent, color: "#080808", borderRadius: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {content?.call_to_action?.button_text || "Start Today"}
            </motion.a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
