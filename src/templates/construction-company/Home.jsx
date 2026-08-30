import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

const PROJECTS = [
  { title: "Hillside Residence", meta: "Luxury Villa" },
  { title: "Zenith Office Tower", meta: "Commercial" },
  { title: "Aurora Retail Complex", meta: "Commercial" },
];

const SERVICES = [
  { t: "Architectural Design", d: "Innovative designs that blend beauty and function." },
  { t: "Residential Construction", d: "Custom homes built with lasting quality." },
  { t: "Commercial Construction", d: "High-performance spaces for businesses." },
  { t: "Interior Fit-Out", d: "Elegant interiors tailored to your vision." },
  { t: "Renovation & Remodeling", d: "Transforming spaces with precision." },
  { t: "Project Management", d: "On-time, on-budget delivery end to end." },
];

export default function Home({ content, images, colors, base }) {
  const accent = colors.accent || "#C4A35A";
  const bg = colors.primary || "#0B0B0C";
  const cream = colors.secondary || "#F7F3EB";
  const gallery = images?.gallery || [];

  return (
    <div style={{ background: bg, color: "#F5F0E8", minHeight: "100vh" }}>
      <section className="relative min-h-[90vh] md:min-h-screen flex items-end md:items-center overflow-hidden">
        <div className="absolute inset-0">
          <SmartImage image={images?.hero} accent={accent} className="w-full h-full" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 w-full py-24 md:py-32">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.35em] uppercase mb-4" style={{ color: accent }}>
            Built to inspire
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight max-w-2xl"
          >
            {content?.hero_title || (
              <>
                We Build{" "}
                <span style={{ color: accent }}>Spaces That Last</span>
              </>
            )}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-5 text-base md:text-lg text-white/65 max-w-md leading-relaxed"
          >
            {content?.hero_subtitle ||
              "Premium construction and architecture with precision, passion, and a promise of quality."}
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="mt-8 flex flex-wrap gap-3">
            <a
              href={`${base}/gallery`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
              style={{ background: accent, color: "#0B0B0C" }}
            >
              View Our Projects →
            </a>
            <a
              href={`${base}/contact`}
              className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium border border-white/25 text-white/90 hover:bg-white/10"
            >
              Get a Quote
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: cream, color: "#1A1A1A" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: accent }}>Our work</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-10">Featured Projects</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-black/5">
                  <div className="aspect-[4/3]">
                    <SmartImage image={gallery[i] || images?.hero} accent={accent} className="w-full h-full" />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-sm">{p.title}</p>
                    <p className="text-xs text-black/45 mt-0.5">{p.meta}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-20 overflow-hidden" style={{ background: bg }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-[auto_1fr] gap-10 items-center">
          <Reveal>
            <div className="text-center md:text-left">
              <p className="text-6xl md:text-7xl font-semibold" style={{ color: accent }}>15+</p>
              <p className="text-sm tracking-wide uppercase text-white/50 mt-1">Years</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: accent }}>Built on trust</p>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">Experience That Builds Confidence</h2>
              <p className="text-white/55 text-sm md:text-base max-w-xl leading-relaxed">
                {content?.about_snippet ||
                  "From concept to completion, we bring expertise, transparency, and craftsmanship to every project."}
              </p>
              <div className="mt-6 flex flex-wrap gap-6 text-sm">
                {[
                  ["200+", "Projects"],
                  ["98%", "Satisfaction"],
                  ["Quality", "Assured"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <p className="font-semibold" style={{ color: accent }}>{v}</p>
                    <p className="text-white/40 text-xs">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: cream, color: "#1A1A1A" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: accent }}>What we do</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-10">Our Services</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.05}>
                <div className="p-5 rounded-2xl bg-white border border-black/5 h-full">
                  <div className="w-9 h-9 rounded-full mb-3" style={{ background: `${accent}22` }} />
                  <h3 className="font-semibold text-sm mb-1.5">{s.t}</h3>
                  <p className="text-xs text-black/50 leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href={`${base}/services`} className="text-sm font-semibold" style={{ color: accent }}>
              View all services →
            </a>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: bg }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Let's Build <span style={{ color: accent }}>Something Great</span>
            </h2>
            <p className="text-white/50 text-sm mt-2 max-w-md">
              Have a project in mind? We'll discuss how we can bring your vision to life.
            </p>
          </div>
          <a
            href={`${base}/contact`}
            className="inline-flex self-start px-7 py-3 rounded-full text-sm font-semibold shrink-0"
            style={{ background: accent, color: "#0B0B0C" }}
          >
            Get in Touch →
          </a>
        </div>
      </section>
    </div>
  );
}
