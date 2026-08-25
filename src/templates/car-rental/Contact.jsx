import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";

export default function Contact({ content, colors }) {
  return (
    <div style={{ background: colors.primary, color: "#FFFFFF" }} className="pt-32 pb-28">
      <div className="max-w-6xl mx-auto px-8">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-center text-white/50">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16">Contact</h1>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <Reveal><div><h3 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-2">Location</h3><p className="text-xl font-medium">220 Drive Way, Terminal A</p></div></Reveal>
            <Reveal delay={0.08}><div><h3 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-2">Phone</h3><p className="text-xl font-medium">+1 (555) 000-0000</p></div></Reveal>
            <Reveal delay={0.12}><div><h3 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-2">Hours</h3><p className="text-xl font-medium leading-relaxed">Open 24/7<br />Airport & city locations</p></div></Reveal>
            <Reveal delay={0.16}><div className="w-full h-52 rounded-xl flex items-center justify-center text-sm text-white/30" style={{ background: colors.secondary }}>Map Placeholder</div></Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="p-12 h-full flex flex-col justify-center rounded-xl" style={{ background: colors.secondary }}>
              <h2 className="text-3xl font-bold mb-5">{content?.call_to_action?.headline || "Reserve your car"}</h2>
              <p className="text-white/60 mb-10 leading-relaxed">Tell us your dates and preferences — we’ll have the right vehicle ready.</p>
              <a href="#" className="inline-block self-start px-10 py-4 text-sm font-bold tracking-wide uppercase rounded-lg text-[#0047AB] bg-white">
                {content?.call_to_action?.button_text || "Start Booking"}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
