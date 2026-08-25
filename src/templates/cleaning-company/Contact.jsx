import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";

export default function Contact({ content, colors }) {
  return (
    <div style={{ background: colors.primary, color: "#1E293B" }} className="pt-32 pb-28">
      <div className="max-w-6xl mx-auto px-8">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-center" style={{ color: colors.accent }}>Reach Us</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16">Contact</h1>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <Reveal><div><h3 className="text-xs tracking-[0.2em] uppercase text-slate-400 mb-2">Address</h3><p className="text-xl font-medium">88 Clean Street, Unit B</p></div></Reveal>
            <Reveal delay={0.08}><div><h3 className="text-xs tracking-[0.2em] uppercase text-slate-400 mb-2">Phone</h3><p className="text-xl font-medium">+1 (555) 000-0000</p></div></Reveal>
            <Reveal delay={0.12}><div><h3 className="text-xs tracking-[0.2em] uppercase text-slate-400 mb-2">Hours</h3><p className="text-xl font-medium leading-relaxed">Mon–Sat 7:00 AM – 7:00 PM<br />Sunday closed</p></div></Reveal>
            <Reveal delay={0.16}><div className="w-full h-52 bg-teal-50 rounded-lg flex items-center justify-center text-sm text-slate-400">Map Placeholder</div></Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="p-12 h-full flex flex-col justify-center bg-white rounded-xl shadow-sm border border-teal-50">
              <h2 className="text-3xl font-bold mb-5">{content?.call_to_action?.headline || "Request a free quote"}</h2>
              <p className="text-slate-600 mb-10 leading-relaxed">Tell us about your space and we’ll send a tailored estimate within 24 hours.</p>
              <a href="#" className="inline-block self-start px-10 py-4 text-sm font-bold tracking-wide uppercase text-white rounded-md" style={{ background: colors.accent }}>
                {content?.call_to_action?.button_text || "Get Quote"}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
