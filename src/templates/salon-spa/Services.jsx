import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";

export default function Services({ content, colors, base }) {
  const services = content?.services || [];

  return (
    <div className="pt-32 pb-28">
      <div className="max-w-5xl mx-auto px-8">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.35em] uppercase mb-4 text-center" style={{ color: colors.accent }}>
            Our Menu
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight text-center mb-6">
            Services
          </h1>
          <div className="w-16 h-px mx-auto mb-20" style={{ background: colors.accent }} />
        </Reveal>

        <div className="space-y-6">
          {services.map((service, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div
                className="p-10 md:p-12 relative"
                style={{
                  background: colors.secondary,
                  borderRadius: "2px",
                  boxShadow: "0 2px 30px rgba(45,27,46,0.03)",
                }}
              >
                <div
                  className="absolute top-0 left-12 right-12 h-px"
                  style={{ background: colors.accent }}
                />
                <h3 className="text-2xl font-medium mb-3" style={{ color: "#2D1B2E" }}>
                  {service.title}
                </h3>
                <p className="leading-relaxed max-w-2xl" style={{ color: "#6B5B5B" }}>
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {content?.faq?.length > 0 && (
          <div className="mt-32">
            <Reveal>
              <h2 className="text-3xl font-serif font-medium tracking-tight mb-14 text-center">
                Frequently Asked
              </h2>
            </Reveal>
            <div className="space-y-0">
              {content.faq.map((item, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="py-8 border-b" style={{ borderColor: "#EDE6DC" }}>
                    <h3 className="text-lg font-medium mb-3" style={{ color: "#2D1B2E" }}>
                      {item.question}
                    </h3>
                    <p className="leading-relaxed" style={{ color: "#6B5B5B" }}>
                      {item.answer}
                    </p>
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
