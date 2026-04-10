/*
  DIFFERENTIALS — Swiss Design Tropical
  - Numbered list with oversized numbers (editorial Swiss style)
  - Alternating layout with thin line separators
  - Teal accent on hover
*/
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const differentials = [
  {
    number: "01",
    title: "Dados Exclusivos de BC",
    description:
      "Acesso a indicadores turísticos consolidados e atualizados, coletados diretamente de fontes oficiais e parceiros estratégicos do destino Balneário Camboriú.",
  },
  {
    number: "02",
    title: "SaaS de Marketing Integrado",
    description:
      "Plataforma completa de automação de marketing que conecta dados turísticos a ações práticas: campanhas, segmentação, e-mail marketing e relatórios automatizados.",
  },
  {
    number: "03",
    title: "Conformidade LGPD",
    description:
      "Tratamento ético e seguro dos dados, em total conformidade com a Lei Geral de Proteção de Dados. Transparência e responsabilidade em cada processo.",
  },
  {
    number: "04",
    title: "Inteligência Artificial Aplicada",
    description:
      "Algoritmos de análise preditiva e machine learning que antecipam tendências, identificam oportunidades e otimizam estratégias de marketing turístico.",
  },
  {
    number: "05",
    title: "Colaboração Público-Privada",
    description:
      "Ponte entre gestores públicos, empreendedores e a sociedade. Fomentamos decisões baseadas em evidências para o desenvolvimento sustentável do turismo.",
  },
];

export default function Differentials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="diferenciais" className="py-24 lg:py-32 bg-offwhite" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <span className="font-mono text-xs tracking-wider uppercase text-coral mb-3 block">
            03 — Diferenciais
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-navy leading-[1.05] tracking-tight max-w-3xl">
            Por que o DataBC é a escolha{" "}
            <span className="italic text-teal-dark">certa</span> para o seu negócio.
          </h2>
        </div>

        {/* Differentials List */}
        <div className="space-y-0">
          {differentials.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group border-t border-navy/10 py-8 lg:py-10"
            >
              <div className="grid lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                {/* Number */}
                <div className="lg:col-span-2">
                  <span className="font-mono text-3xl lg:text-4xl font-semibold text-navy/10 group-hover:text-coral transition-colors duration-300">
                    {item.number}
                  </span>
                </div>

                {/* Title */}
                <div className="lg:col-span-4">
                  <h3 className="font-sans font-semibold text-navy text-lg lg:text-xl group-hover:text-navy transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-6">
                  <p className="text-sm lg:text-base text-navy/55 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-navy/10" />
        </div>
      </div>
    </section>
  );
}
