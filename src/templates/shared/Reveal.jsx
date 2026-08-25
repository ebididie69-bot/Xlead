import { motion } from "framer-motion";

/** Fades/rises content in as it scrolls into view — used throughout every niche template for the "alive" premium feel, without a heavy animation library footprint. */
export default function Reveal({ children, delay = 0, className = "", style }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.2, 0.8, 0.2, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
