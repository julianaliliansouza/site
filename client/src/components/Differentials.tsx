/*
  DIFFERENTIALS — Swiss Design Tropical (Comercial)
  - Foco em benefícios tangíveis para o cliente
  - Sem referências a setor público
*/
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const differentials = [
  {
    number: "01",
    title: "Feito para o turismo de BC",
    description:
      "Não somos uma ferramenta genérica. Cada funcionalidade foi desenhada para os desafios reais de hotéis, agências, restaurantes e negócios turísticos de Balneário Camboriú.",
  },
  {
    number: "02",
    title: "Dados + Marketing em um só lugar",
    description:
      "Chega de usar 5 ferramentas diferentes. Dashboards, automação de e-mail, CRM, campanhas multicanal e análise preditiva — tudo integrado em uma única plataforma.",
  },
  {
    number: "03",
    title: "ROI comprovado desde o 1º mês",
    description:
      "Nossos clientes veem resultados reais em semanas, não meses. Em média, 2.8x mais reservas diretas e 40% de redução no custo de aquisição de clientes.",
  },
  {
    number: "04",
    title: "Inteligência Artificial que vende",
    description:
      "Algoritmos que preveem picos de demanda, sugerem o melhor preço e disparam campanhas automaticamente quando a oportunidade aparece. Você vende enquanto dorme.",
  },
  {
    number: "05",
    title: "Suporte humano e dedicado",
    description:
      "Nada de chatbots genéricos. Cada cliente tem um especialista dedicado que entende o mercado turístico e ajuda a extrair o máximo da plataforma.",
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
