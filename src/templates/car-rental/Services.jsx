import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";

export default function Services({ content, colors }) {
  const services = content?.services || [];
  return (
    <div style={{ background: colors.primary, color: "#FFFFFF" }} className="pt-32 pb-28">
      <div className="max-w-5xl mx-auto px-8">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-center text-white/50">What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16">Services</h1>
        </Reveal>
        <div className="space-y-5">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="flex flex-col md:flex-row md:items-center gap-6 p-8 rounded-xl" style={{ background: colors.secondary }}>
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center shrink-0"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg></div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{s.title}</h3>
                  <p className="text-white/60 leading-relaxed">{s.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        {content?.faq?.length > 0 && (
          <div className="mt-28">
            <Reveal><h2 className="text-3xl font-bold mb-12 text-center">FAQs</h2></Reveal>
            {content.faq.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="py-7 border-b border-white/10">
                  <h3 className="font-bold mb-2">{item.question}</h3>
                  <p className="text-white/60 leading-relaxed">{item.answer}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
