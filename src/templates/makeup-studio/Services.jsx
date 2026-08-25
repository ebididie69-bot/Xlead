import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";

export default function Services({ content, colors, base }) {
  const services = content?.services || [];

  return (
    <div style={{ background: colors.primary, color: "#FFFFFF" }} className="pt-32 pb-28">
      <div className="max-w-5xl mx-auto px-8">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.4em] uppercase mb-6" style={{ color: colors.accent }}>
            The Menu
          </p>
          <h1 className="text-5xl md:text-7xl font-serif italic font-light tracking-tight mb-20">
            Services
          </h1>
        </Reveal>

        {/* Magazine-style numbered list (editorial, not boxes) */}
        <div className="space-y-0">
          {services.map((service, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="group py-12 border-b border-white/10 flex flex-col md:flex-row md:items-start gap-6 md:gap-20">
                <span
                  className="text-sm font-medium tracking-[0.3em] uppercase shrink-0 pt-1"
                  style={{ color: colors.accent }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-serif italic font-light mb-4 group-hover:translate-x-3 transition-transform duration-500">
                    {service.title}
                  </h3>
                  <p className="text-white/40 leading-relaxed max-w-2xl text-lg">
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {content?.faq?.length > 0 && (
          <div className="mt-36">
            <Reveal>
              <h2 className="text-3xl font-serif italic font-light mb-16">Questions</h2>
            </Reveal>
            <div className="space-y-0">
              {content.faq.map((item, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="py-9 border-b border-white/10">
                    <h3 className="text-xl font-medium mb-3">{item.question}</h3>
                    <p className="text-white/40 leading-relaxed max-w-2xl">{item.answer}</p>
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
