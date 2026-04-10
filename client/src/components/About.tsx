/*
  ABOUT — Swiss Design Tropical (Comercial)
  - Tom focado no mercado e resultados
  - Sem referências governamentais
  - Valores orientados ao cliente
*/
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Shield, Lightbulb, HeartHandshake, TrendingUp } from "lucide-react";

const DATA_VIZ = "https://d2xsxph8kpxj0f.cloudfront.net/310519663161249291/PwvU6Hbjwjn6GEhcVdKcVq/data-viz-RDoHTRmDETvjZTuugwPsJJ.webp";

const values = [
  { icon: Rocket, text: "Resultados mensuráveis e foco em performance" },
  { icon: Lightbulb, text: "Inovação e tecnologia de ponta aplicada ao turismo" },
  { icon: Shield, text: "Segurança e proteção total dos dados (LGPD)" },
  { icon: HeartHandshake, text: "Parceria próxima e suporte dedicado a cada cliente" },
  { icon: TrendingUp, text: "Crescimento sustentável baseado em dados reais" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-navy relative overflow-hidden" ref={ref}>
      {/* Decorative oversized number */}
      <div className="absolute top-8 right-8 font-serif text-[20rem] leading-none text-white/[0.02] select-none pointer-events-none hidden lg:block">
        02
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <span className="font-mono text-xs tracking-wider uppercase text-coral mb-3 block">
          03 — Quem somos
        </span>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Text Content */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1] tracking-tight mb-8"
            >
              A plataforma que o turismo<br />
              de BC{" "}
              <span className="italic text-teal">escolheu para crescer.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 mb-12"
            >
              <p className="text-base lg:text-lg text-white/60 leading-relaxed">
                O DataBC nasceu da necessidade real do mercado turístico de Balneário Camboriú: 
                ter acesso a dados confiáveis e ferramentas práticas para atrair mais clientes. 
                Combinamos inteligência de dados com automação de marketing para que hotéis, 
                agências, restaurantes e negócios turísticos possam focar no que fazem de melhor 
                — enquanto a tecnologia cuida do resto.
              </p>
            </motion.div>

            {/* Mission & Vision — Comercial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-8 mb-12"
            >
              <div className="border-l-2 border-coral pl-5">
                <h3 className="font-sans font-semibold text-white text-sm uppercase tracking-wider mb-3">Nossa missão</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  Ajudar negócios turísticos a venderem mais com menos esforço, usando dados 
                  estratégicos e automação inteligente de marketing.
                </p>
              </div>
              <div className="border-l-2 border-teal pl-5">
                <h3 className="font-sans font-semibold text-white text-sm uppercase tracking-wider mb-3">Nossa visão</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  Ser a plataforma de referência em marketing e dados para o turismo, 
                  impulsionando Balneário Camboriú como destino inteligente e competitivo.
                </p>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-sans font-semibold text-white text-sm uppercase tracking-wider mb-6">O que nos move</h3>
              <div className="space-y-4">
                {values.map((v, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-teal/10 transition-colors">
                      <v.icon size={16} className="text-teal" />
                    </div>
                    <span className="text-sm text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                      {v.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Data Visualization Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 flex items-center"
          >
            <div className="relative w-full">
              <img
                src={DATA_VIZ}
                alt="Visualização de dados e analytics"
                className="w-full h-auto rounded-lg"
              />
              {/* Decorative border */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-teal/20 rounded-lg -z-10" />

              {/* Results card overlay */}
              <div className="absolute -bottom-6 -left-6 bg-coral p-5 rounded-lg max-w-xs shadow-xl">
                <p className="text-xs font-mono uppercase tracking-wider text-white/70 mb-1">Nosso compromisso</p>
                <p className="text-sm text-white font-medium leading-relaxed">
                  Cada cliente nosso vende mais. Se você não crescer, nós não crescemos. 
                  Simples assim.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
