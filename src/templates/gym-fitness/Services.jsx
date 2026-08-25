import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";

export default function Services({ content, colors, base }) {
  const services = content?.services || [];

  return (
    <div className="pt-28 pb-28">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <p className="text-sm font-bold tracking-[0.35em] uppercase mb-4" style={{ color: colors.accent }}>
            Training Programs
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-5">Services</h1>
          <div className="w-28 h-1.5 mb-20" style={{ background: colors.accent }} />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <motion.div
                className="group relative p-9 h-full flex flex-col"
                style={{ background: colors.secondary, borderRadius: 0 }}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 320, damping: 20 }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: colors.accent }}
                />
                <h3 className="text-2xl font-bold tracking-tight mb-4">{service.title}</h3>
                <p className="text-white/50 leading-relaxed flex-1">{service.description}</p>
                <div
                  className="mt-8 text-xs font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: colors.accent }}
                >
                  Learn more →
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {content?.faq?.length > 0 && (
          <div className="mt-36">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-14">Common Questions</h2>
            </Reveal>
            <div className="space-y-0 border-t border-white/10">
              {content.faq.map((item, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="border-b border-white/10 py-9">
                    <h3 className="text-xl font-bold mb-3">{item.question}</h3>
                    <p className="text-white/50 leading-relaxed max-w-3xl">{item.answer}</p>
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
