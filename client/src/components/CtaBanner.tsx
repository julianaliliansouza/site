/*
  CTA BANNER — Swiss Design Tropical (Comercial)
  - Tom urgente e orientado a ação
  - Foco em resultados tangíveis
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
          A alta temporada não espera.{" "}
          <span className="italic">Seu marketing também não deveria.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-base text-white/80 max-w-lg mx-auto mb-8"
        >
          Agende uma demonstração gratuita e veja como a IA do DataBC pode criar conteúdo personalizado, identificar tendências e publicar automaticamente para o seu negócio.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contato"
            className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-navy text-white font-semibold text-sm rounded-md hover:bg-navy-light transition-colors"
          >
            Agendar demo gratuita
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#solucoes"
            className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-white/15 text-white font-semibold text-sm rounded-md hover:bg-white/25 transition-colors border border-white/20"
          >
            Ver planos e preços
          </a>
        </motion.div>
      </div>
    </section>
  );
}
