/*
  CLIENTES / SOCIAL PROOF — Swiss Design Tropical (Comercial)
  - Foco em segmentos do trade turístico
  - Ícones representando categorias de clientes
*/
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Hotel, Plane, UtensilsCrossed, Waves, ShoppingBag, Building2 } from "lucide-react";

const clients = [
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
          Quem já cresce com o DataBC
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-sm text-navy/50 mb-10 max-w-lg mx-auto"
        >
          Mais de 340 negócios turísticos usam nossa plataforma para atrair clientes e automatizar o marketing.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="flex flex-col items-center justify-center h-20 px-4 rounded-md border border-border/50 bg-offwhite/50 hover:border-coral/30 hover:bg-coral/5 transition-all duration-300 gap-2"
            >
              <client.icon size={20} className="text-navy/30" />
              <span className="font-sans font-medium text-xs text-navy/50 text-center leading-tight">
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
