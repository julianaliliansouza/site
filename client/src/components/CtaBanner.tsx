/*
  CTA BANNER — Swiss Design Tropical
  - Full-width coral background
  - Bold serif headline
  - Single CTA button
*/
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 lg:py-28 bg-coral relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1] tracking-tight mb-6 max-w-3xl mx-auto"
        >
          Transforme a inteligência turística de BC em{" "}
          <span className="italic">vantagem competitiva.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-base text-white/80 max-w-lg mx-auto mb-8"
        >
          Junte-se aos parceiros que já utilizam dados e automação para impulsionar resultados no turismo.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          href="#contato"
          className="group inline-flex items-center gap-3 px-7 py-4 bg-navy text-white font-semibold text-sm rounded-md hover:bg-navy-light transition-colors"
        >
          Fale com nossa equipe
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </section>
  );
}
