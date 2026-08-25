import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import { Phone, MapPin, Clock, ChevronRight } from "lucide-react";

export default function Contact({ content, colors }) {
  const accent = colors.accent || "#F0C531";
  const bg = colors.primary || "#0A0F1E";
  const surface = colors.secondary || "#111827";

  return (
    <div style={{ background: bg, color: "#E8EAF0", minHeight: "100vh" }}>
      {/* Header */}
      <section className="px-6 md:px-16 pt-28 pb-16 max-w-6xl mx-auto border-b"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: accent }} />
            <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: accent }}>Contact Us</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            {content.call_to_action?.headline || "Book Your Service"}
          </h1>
        </motion.div>
      </section>

      <section className="px-6 md:px-16 py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Info */}
        <Reveal>
          <div className="space-y-10">
            <p className="opacity-60 leading-relaxed max-w-md">
              Walk in or call ahead. Same-day diagnostics available on most vehicles.
              We'll give you an honest quote before any work begins.
            </p>

            {[
              { icon: Phone, label: "Call Us", value: "Available on your listing" },
              { icon: MapPin, label: "Visit Us", value: "See your address on file" },
              { icon: Clock, label: "Hours", value: "Mon–Fri 8am–6pm · Sat 9am–4pm" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 flex items-center justify-center"
                  style={{ background: `${accent}15`, border: `1px solid ${accent}22` }}>
                  <Icon size={16} style={{ color: accent }} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider opacity-40 mb-1">{label}</p>
                  <p className="text-sm opacity-75">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* CTA card */}
        <Reveal delay={0.15}>
          <div className="p-10 flex flex-col gap-8" style={{ background: surface }}>
            <div>
              <h2 className="text-2xl font-black mb-3">Ready to Book?</h2>
              <p className="text-sm opacity-55 leading-relaxed">
                Tap below to reach us directly. Diagnostics are included with all full-service bookings.
              </p>
            </div>

            <motion.a
              href="#"
              whileHover={{ scale: 1.02, boxShadow: `0 0 30px ${accent}44` }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 py-4 font-bold tracking-wide"
              style={{ background: accent, color: "#0A0F1E" }}
            >
              {content.call_to_action?.button_text || "Book a Service"}
              <ChevronRight size={16} />
            </motion.a>

            <div className="pt-6 border-t space-y-3" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              <p className="text-xs opacity-40 uppercase tracking-widest">What to expect</p>
              {["Free diagnosis on arrival", "Written quote before work starts", "Pay only on completion"].map((v) => (
                <div key={v} className="flex items-center gap-2 text-sm opacity-60">
                  <div className="w-1 h-1 rounded-full" style={{ background: accent }} />
                  {v}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Map placeholder */}
      <section className="px-6 md:px-16 pb-16 max-w-6xl mx-auto">
        <Reveal>
          <div className="h-48 flex items-center justify-center border"
            style={{ borderColor: "rgba(255,255,255,0.06)", background: surface }}>
            <p className="text-xs opacity-30 uppercase tracking-widest">Map — location loaded from your listing</p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
