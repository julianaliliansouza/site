/*
  ABOUT — Swiss Design Tropical
  - Asymmetric layout with editorial feel
  - Data visualization image as decorative element
  - Values displayed as a clean list with teal accent dots
  - Oversized numbers as decorative elements
*/
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Compass, Shield, Lightbulb, Users } from "lucide-react";

const DATA_VIZ = "https://d2xsxph8kpxj0f.cloudfront.net/310519663161249291/PwvU6Hbjwjn6GEhcVdKcVq/data-viz-RDoHTRmDETvjZTuugwPsJJ.webp";

const values = [
  { icon: Eye, text: "Transparência e acesso à informação pública" },
  { icon: Lightbulb, text: "Inovação e uso inteligente da tecnologia" },
  { icon: Shield, text: "Ética no tratamento e proteção dos dados (LGPD)" },
  { icon: Compass, text: "Responsabilidade com o desenvolvimento local" },
  { icon: Users, text: "Colaboração entre setores público, privado e sociedade" },
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
          02 — Sobre nós
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
              O hub de inteligência<br />
              de dados turísticos de{" "}
              <span className="italic text-teal">Balneário Camboriú.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 mb-12"
            >
              <p className="text-base lg:text-lg text-white/60 leading-relaxed">
                O DataBC foi criado com o objetivo de consolidar, analisar e divulgar informações 
                relevantes para apoiar a tomada de decisão de gestores, empreendedores, entidades 
                públicas e toda a sociedade. Com a inclusão de um SaaS de marketing com automação 
                de processos, nos posicionamos como parceiro estratégico para transformar dados em 
                ações e resultados concretos no setor turístico.
              </p>
            </motion.div>

            {/* Mission & Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-8 mb-12"
            >
              <div className="border-l-2 border-coral pl-5">
                <h3 className="font-sans font-semibold text-white text-sm uppercase tracking-wider mb-3">Missão</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  Promover o acesso a dados estratégicos e confiáveis sobre o turismo de BC, 
                  fortalecendo a inteligência de mercado e apoiando a tomada de decisões no setor 
                  público e privado.
                </p>
              </div>
              <div className="border-l-2 border-teal pl-5">
                <h3 className="font-sans font-semibold text-white text-sm uppercase tracking-wider mb-3">Visão</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  Ser referência em inteligência de dados turísticos e automação de marketing, 
                  contribuindo com inovação, transparência e desenvolvimento sustentável.
                </p>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-sans font-semibold text-white text-sm uppercase tracking-wider mb-6">Valores</h3>
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
                alt="Visualização artística de dados oceânicos"
                className="w-full h-auto rounded-lg"
              />
              {/* Decorative border */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-teal/20 rounded-lg -z-10" />

              {/* Propósito card overlay */}
              <div className="absolute -bottom-6 -left-6 bg-coral p-5 rounded-lg max-w-xs shadow-xl">
                <p className="text-xs font-mono uppercase tracking-wider text-white/70 mb-1">Propósito</p>
                <p className="text-sm text-white font-medium leading-relaxed">
                  Fortalecer BC como um destino turístico inteligente, por meio da geração e 
                  disseminação de conhecimento baseado em dados.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
