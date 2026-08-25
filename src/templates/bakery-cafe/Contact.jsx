import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";

export default function Contact({ content, colors }) {
  return (
    <div style={{ background: colors.primary, color: "#2C1810" }} className="pt-32 pb-28">
      <div className="max-w-6xl mx-auto px-8">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-center" style={{ color: colors.accent }}>Find Us</p>
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-center mb-16">Contact</h1>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <Reveal><div><h3 className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "#8B6F5C" }}>Address</h3><p className="text-xl font-medium">15 Oven Lane</p></div></Reveal>
            <Reveal delay={0.08}><div><h3 className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "#8B6F5C" }}>Phone</h3><p className="text-xl font-medium">+1 (555) 000-0000</p></div></Reveal>
            <Reveal delay={0.12}><div><h3 className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "#8B6F5C" }}>Hours</h3><p className="text-xl font-medium leading-relaxed">Tue–Sun 7:00 AM – 4:00 PM<br />Closed Mondays</p></div></Reveal>
            <Reveal delay={0.16}><div className="w-full h-52 rounded-sm flex items-center justify-center text-sm" style={{ background: "#F5EDE0", color: "#8B6F5C" }}>Map Placeholder</div></Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="p-12 h-full flex flex-col justify-center bg-white rounded-sm shadow-sm">
              <h2 className="text-3xl font-serif font-medium mb-5">{content?.call_to_action?.headline || "Stop by for a warm loaf"}</h2>
              <p className="mb-10 leading-relaxed" style={{ color: "#5C4033" }}>Walk-ins welcome. Pre-orders available for special occasions.</p>
              <a href="#" className="inline-block self-start px-10 py-4 text-sm font-bold tracking-wide uppercase text-white rounded-sm" style={{ background: colors.accent }}>
                {content?.call_to_action?.button_text || "Get Directions"}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
