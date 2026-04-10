/*
  DIFFERENTIALS — Swiss Design Tropical (Comercial)
  - Diferenciais reais baseados na documentação do produto
  - Foco em Brand Intelligence, IA, automação e turismo
*/
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const differentials = [
  {
    number: "01",
    title: "IA que entende a sua marca",
    description:
      "Não é uma IA genérica. Nosso sistema extrai o DNA completo da sua marca — tom de voz, cores, público, valores — e usa esse perfil em tudo: criativos, calendário, relatórios e sugestões de tendências.",
  },
  {
    number: "02",
    title: "Feito para o turismo de BC",
    description:
      "Cada funcionalidade foi desenhada para os desafios reais de hotéis, agências, restaurantes e atrativos de Balneário Camboriú. Dados históricos de voos, clima e sazonalidade integrados à sua estratégia.",
  },
  {
    number: "03",
    title: "Da criação à publicação, tudo integrado",
    description:
      "Banco de imagens com catalogação por IA, editor visual, geração de criativos com IA, calendário editorial e publicação automática no Instagram e Facebook. Tudo em uma única plataforma.",
  },
  {
    number: "04",
    title: "Tendências filtradas para o seu negócio",
    description:
      "Nosso radar de Trend Intelligence monitora Google Trends, Instagram e X, e a IA filtra apenas o que é relevante para a sua marca. Você recebe sugestões de conteúdo prontas, no seu tom de voz.",
  },
  {
    number: "05",
    title: "Onboarding assistido e suporte dedicado",
    description:
      "Cada cliente passa por um onboarding completo com a equipe DataBC. Configuramos o perfil de marca, conectamos suas ferramentas e garantimos que você extraia o máximo da plataforma desde o primeiro dia.",
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
            04 — Por que o DataBC
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-navy leading-[1.05] tracking-tight max-w-3xl">
            Seus concorrentes já estão{" "}
            <span className="italic text-coral">usando dados</span> para vender mais.
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
