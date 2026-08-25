import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";

export default function Contact({ content, colors }) {
  return (
    <div style={{ background: colors.primary, color: "#1A2332" }} className="pt-32 pb-28">
      <div className="max-w-6xl mx-auto px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 text-center" style={{ color: colors.accent }}>Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-16">Contact</h1>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <Reveal><div><h3 className="text-xs tracking-[0.2em] uppercase text-slate-400 mb-2">Address</h3><p className="text-xl font-medium">120 Health Avenue, Suite 4</p></div></Reveal>
            <Reveal delay={0.08}><div><h3 className="text-xs tracking-[0.2em] uppercase text-slate-400 mb-2">Phone</h3><p className="text-xl font-medium">+1 (555) 000-0000</p></div></Reveal>
            <Reveal delay={0.12}><div><h3 className="text-xs tracking-[0.2em] uppercase text-slate-400 mb-2">Hours</h3><p className="text-xl font-medium leading-relaxed">Mon–Fri 8:00 AM – 6:00 PM<br />Sat 9:00 AM – 2:00 PM</p></div></Reveal>
            <Reveal delay={0.16}><div className="w-full h-52 bg-slate-100 rounded-lg flex items-center justify-center text-sm text-slate-400">Map Placeholder</div></Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="p-12 h-full flex flex-col justify-center bg-white border border-slate-100 rounded-lg shadow-sm">
              <h2 className="text-3xl font-semibold mb-5">{content?.call_to_action?.headline || "Book your visit"}</h2>
              <p className="text-slate-600 mb-10 leading-relaxed">New patients welcome. Same-week appointments often available.</p>
              <a href="#" className="inline-block self-start px-10 py-4 text-sm font-semibold tracking-wide uppercase text-white rounded-md" style={{ background: colors.accent }}>
                {content?.call_to_action?.button_text || "Request Appointment"}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
