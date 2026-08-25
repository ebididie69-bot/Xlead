import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";

export default function Contact({ content, colors }) {
  return (
    <div style={{ background: colors.primary, color: "#FFFFFF" }} className="pt-32 pb-28">
      <div className="max-w-6xl mx-auto px-8">
        <Reveal>
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-20">Contact</h1>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <Reveal><div><h3 className="text-xs tracking-[0.3em] uppercase text-white/30 mb-3">Studio</h3><p className="text-xl font-light">90 Lens Avenue, Floor 2</p></div></Reveal>
            <Reveal delay={0.08}><div><h3 className="text-xs tracking-[0.3em] uppercase text-white/30 mb-3">Phone</h3><p className="text-xl font-light">+1 (555) 000-0000</p></div></Reveal>
            <Reveal delay={0.12}><div><h3 className="text-xs tracking-[0.3em] uppercase text-white/30 mb-3">Hours</h3><p className="text-xl font-light leading-relaxed">By appointment<br />Mon – Sat</p></div></Reveal>
            <Reveal delay={0.16}><div className="w-full h-52 bg-white/5 flex items-center justify-center text-sm text-white/25">Map Placeholder</div></Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="p-12 h-full flex flex-col justify-center border border-white/10">
              <h2 className="text-3xl font-light mb-6">{content?.call_to_action?.headline || "Let’s create something"}</h2>
              <p className="text-white/40 mb-12 leading-relaxed">Sessions are limited and carefully scheduled.</p>
              <a href="#" className="inline-block self-start px-12 py-3.5 text-sm tracking-[0.2em] uppercase border border-white hover:bg-white hover:text-black transition-colors duration-300">
                {content?.call_to_action?.button_text || "Inquire"}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
