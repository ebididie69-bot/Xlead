import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";

export default function Services({ content, colors }) {
  const services = content?.services || [];
  return (
    <div style={{ background: colors.primary, color: "#2C1810" }} className="pt-32 pb-28">
      <div className="max-w-3xl mx-auto px-8">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-center" style={{ color: colors.accent }}>Our Offerings</p>
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-center mb-16">Menu</h1>
        </Reveal>
        <div className="space-y-10">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="flex items-baseline gap-4">
                <span className="font-medium text-xl shrink-0">{s.title}</span>
                <span className="flex-1 border-b border-dotted border-amber-300/50 mb-1.5" />
              </div>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "#6B5344" }}>{s.description}</p>
            </Reveal>
          ))}
        </div>
        {content?.faq?.length > 0 && (
          <div className="mt-28">
            <Reveal><h2 className="text-3xl font-serif font-medium mb-12 text-center">Questions</h2></Reveal>
            {content.faq.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="py-7 border-b border-amber-100">
                  <h3 className="font-medium mb-2">{item.question}</h3>
                  <p className="leading-relaxed" style={{ color: "#6B5344" }}>{item.answer}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
