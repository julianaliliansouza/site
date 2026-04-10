/*
  SEGMENTOS — Swiss Design Tropical (Comercial)
  - Foco nos segmentos do trade turístico que o DataBC atende
  - Sem métricas falsas de clientes
*/
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Hotel, Plane, UtensilsCrossed, Waves, ShoppingBag, Building2 } from "lucide-react";

const segments = [
  { name: "Redes Hoteleiras", icon: Hotel },
  { name: "Agências de Turismo", icon: Plane },
  { name: "Restaurantes & Bares", icon: UtensilsCrossed },
  { name: "Parques & Atrações", icon: Waves },
  { name: "Comércio Local", icon: ShoppingBag },
  { name: "Incorporadoras", icon: Building2 },
];

export default function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 lg:py-20 bg-white border-y border-border" ref={ref}>
      <div className="container">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center font-mono text-xs tracking-wider uppercase text-navy/30 mb-3"
        >
          Feito para o trade turístico de BC
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-sm text-navy/50 mb-10 max-w-lg mx-auto"
        >
          Marketing com IA personalizado para cada segmento do turismo de Balneário Camboriú.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {segments.map((segment, i) => (
            <motion.div
              key={segment.name}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="flex flex-col items-center justify-center h-20 px-4 rounded-md border border-border/50 bg-[#E8EDF5]/50 hover:border-coral/30 hover:bg-coral/5 transition-all duration-300 gap-2"
            >
              <segment.icon size={20} className="text-navy/30" />
              <span className="font-sans font-medium text-xs text-navy/50 text-center leading-tight">
                {segment.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
