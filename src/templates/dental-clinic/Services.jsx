import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";

export default function Services({ content, colors }) {
  const services = content?.services || [];
  return (
    <div style={{ background: colors.primary, color: "#1A2332" }} className="pt-32 pb-28">
      <div className="max-w-5xl mx-auto px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 text-center" style={{ color: colors.accent }}>Treatments</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-16">Services</h1>
        </Reveal>
        <div className="space-y-5">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="p-8 bg-white border border-slate-100 rounded-lg shadow-sm" style={{ borderLeft: `4px solid ${colors.accent}` }}>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
        {content?.faq?.length > 0 && (
          <div className="mt-28">
            <Reveal><h2 className="text-3xl font-semibold mb-12 text-center">FAQs</h2></Reveal>
            <div className="space-y-0">
              {content.faq.map((item, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="py-7 border-b border-slate-200">
                    <h3 className="font-semibold mb-2">{item.question}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
