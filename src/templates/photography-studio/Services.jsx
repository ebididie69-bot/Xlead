import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";

export default function Services({ content, colors }) {
  const services = content?.services || [];
  return (
    <div style={{ background: colors.primary, color: "#FFFFFF" }} className="pt-32 pb-28">
      <div className="max-w-3xl mx-auto px-8">
        <Reveal>
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-20">Services</h1>
        </Reveal>
        <div className="space-y-0">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="py-10 border-b border-white/10">
                <h3 className="text-2xl md:text-3xl font-light mb-3">{s.title}</h3>
                <p className="text-white/40 leading-relaxed max-w-xl">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
        {content?.faq?.length > 0 && (
          <div className="mt-28">
            <Reveal><h2 className="text-2xl font-light mb-12 text-white/40">FAQs</h2></Reveal>
            {content.faq.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="py-8 border-b border-white/10">
                  <h3 className="text-lg font-medium mb-2">{item.question}</h3>
                  <p className="text-white/40 leading-relaxed">{item.answer}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
