import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";

export default function Services({ content, colors }) {
  const services = content?.services || [];
  return (
    <div style={{ background: colors.primary, color: "#1E293B" }} className="pt-32 pb-28">
      <div className="max-w-4xl mx-auto px-8">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-center" style={{ color: colors.accent }}>Our Work</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16">Services</h1>
        </Reveal>
        <div className="space-y-4">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="flex items-start gap-5 p-7 bg-white rounded-lg shadow-sm border border-teal-50">
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 + i * 0.08, type: "spring" }}
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white text-sm font-bold" style={{ background: colors.accent }}>✓</motion.div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{s.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{s.description}</p>
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
                <div className="py-7 border-b border-teal-100">
                  <h3 className="font-semibold mb-2">{item.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
