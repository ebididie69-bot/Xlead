import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

const TRUST = [
  { t: "Certified Experts", d: "Skilled technicians you can trust." },
  { t: "Advanced Tools", d: "Modern diagnostics and equipment." },
  { t: "Transparent Pricing", d: "Clear quotes before we start." },
];

const SERVICES = [
  { t: "Exterior Car Detailing", d: "Paint-safe washes and protection." },
  { t: "Interior Deep Cleaning", d: "Cabin refresh for every ride." },
  { t: "Engine Diagnostics", d: "Find issues before they grow." },
  { t: "Brake & Suspension", d: "Safety-critical repairs done right." },
  { t: "Oil Change & Maintenance", d: "Keep your vehicle running smooth." },
  { t: "Paint Protection Film", d: "Shield your finish long-term." },
];

export default function Home({ content, images, colors, base }) {
  const accent = colors.accent || "#F97316";
  const bg = colors.primary || "#0B3D3A";
  const gallery = images?.gallery || [];

  return (
    <div style={{ background: "#F4F7F6", color: "#0B1F1E", minHeight: "100vh" }}>
      <section className="relative overflow-hidden" style={{ background: bg, color: "#F4F7F6" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24 grid lg:grid-cols-[1.2fr_0.9fr] gap-10 items-center">
          <div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.25em] uppercase text-white/50 mb-3">
              Professional auto care
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl font-bold leading-[1.08]">
              {content?.hero_title || (
                <>
                  Precision <span style={{ color: accent }}>Repairs</span> for Safe And Smooth Driving
                </>
              )}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }} className="mt-4 text-white/65 text-sm md:text-base max-w-md">
              {content?.hero_subtitle ||
                "From daily drivers to premium cars — detailing and repairs with modern tools and honest pricing."}
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-7 flex flex-wrap gap-3">
              <a href={`${base}/contact`} className="px-6 py-3 rounded-lg text-sm font-bold text-white" style={{ background: accent }}>
                Request a Quote
              </a>
              <a href={`${base}/services`} className="px-6 py-3 rounded-lg text-sm font-medium border border-white/25">
                Our Services
              </a>
            </motion.div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {TRUST.map((x) => (
                <div key={x.t} className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <p className="text-xs font-semibold" style={{ color: accent }}>{x.t}</p>
                  <p className="text-[11px] text-white/45 mt-1 leading-snug">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto shadow-2xl">
              <SmartImage image={images?.hero} accent={accent} className="w-full h-full" priority />
            </div>
            <div
              className="absolute -bottom-4 left-4 right-4 md:left-auto md:right-0 md:w-64 rounded-xl p-4 shadow-xl"
              style={{ background: "#0E4A46", color: "#F4F7F6", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <p className="text-xs font-bold mb-2" style={{ color: accent }}>Schedule Your Service</p>
              <p className="text-[11px] text-white/55 mb-3">Premium care — book at your convenience.</p>
              <a href={`${base}/contact`} className="block text-center text-xs font-bold py-2.5 rounded-lg text-white" style={{ background: accent }}>
                Confirm Appointment
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl overflow-hidden aspect-square">
              <SmartImage image={gallery[0] || images?.hero} accent={accent} className="w-full h-full" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square mt-6">
              <SmartImage image={gallery[1] || images?.hero} accent={accent} className="w-full h-full" />
            </div>
          </div>
          <Reveal>
            <p className="text-xs tracking-[0.25em] uppercase mb-2 opacity-50">About us</p>
            <h2 className="text-3xl font-bold mb-4">Expert Care for Every Vehicle</h2>
            <p className="text-sm opacity-60 leading-relaxed mb-6">
              {content?.about_snippet ||
                "Our certified team delivers high-quality repairs and detailing with transparent pricing and fast turnaround."}
            </p>
            <div className="flex gap-6 mb-6">
              <div>
                <p className="text-2xl font-bold" style={{ color: accent }}>15+</p>
                <p className="text-xs opacity-50">Years experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold" style={{ color: accent }}>100%</p>
                <p className="text-xs opacity-50">Quality guaranteed</p>
              </div>
            </div>
            <a href={`${base}/about`} className="text-sm font-semibold" style={{ color: accent }}>Learn about us →</a>
          </Reveal>
        </div>
      </section>

      <section className="py-16" style={{ background: bg, color: "#F4F7F6" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold mb-2">Expert Auto Services</h2>
            <p className="text-white/50 text-sm mb-10">Full range of care tailored to modern vehicles.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.05}>
                <div className="rounded-xl p-5 h-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div className="aspect-video rounded-lg overflow-hidden mb-3">
                    <SmartImage image={gallery[i] || images?.hero} accent={accent} className="w-full h-full" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{s.t}</h3>
                  <p className="text-xs text-white/45">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <a href={`${base}/services`} className="text-sm font-semibold" style={{ color: accent }}>View all services →</a>
          </div>
        </div>
      </section>

      <section className="py-14 text-center">
        <h2 className="text-2xl font-bold mb-3">Your Car Deserves the Best</h2>
        <p className="text-sm opacity-55 mb-6 max-w-md mx-auto">Precision, quality, and convenience — book your next service today.</p>
        <a href={`${base}/contact`} className="inline-flex px-7 py-3 rounded-lg text-sm font-bold text-white" style={{ background: accent }}>
          Book Appointment
        </a>
      </section>
    </div>
  );
}
