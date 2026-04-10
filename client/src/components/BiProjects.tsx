/*
  BI PROJECTS — Swiss Design Tropical (Comercial)
  - Power BI como serviço de implementação (Enterprise)
  - Inteligência de mercado via APIs públicas (voos, clima)
  - Relatório semanal com IA
  - Métricas Meta Insights
*/
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BarChart3,
  Plane,
  CloudSun,
  FileText,
  Activity,
  Layers,
} from "lucide-react";

const POWERBI_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663161249291/PwvU6Hbjwjn6GEhcVdKcVq/powerbi-bc-dashboard-jxqJv2FdSemuDKFpkpS6eN.webp";

const biProjects = [
  {
    icon: BarChart3,
    title: "Dashboard Power BI Personalizado",
    description:
      "Implementamos dashboards Power BI sob medida para o seu negócio. Métricas de performance, receita e ocupação com a identidade visual da sua marca.",
    metrics: "Plano Enterprise",
    category: "bi",
  },
  {
    icon: Activity,
    title: "Métricas de Redes Sociais",
    description:
      "Coleta automática de dados do Instagram e Facebook via Meta Insights. Acompanhe alcance, engajamento e crescimento de seguidores em um só lugar.",
    metrics: "Meta API integrada",
    category: "bi",
  },
  {
    icon: FileText,
    title: "Relatório Semanal com IA",
    description:
      "Toda segunda-feira, a IA gera um relatório estratégico com a linguagem da sua marca. Não são só números — é uma narrativa que aponta o que fazer.",
    metrics: "Plano Enterprise",
    category: "bi",
  },
  {
    icon: Plane,
    title: "Demanda de Voos e Passagens",
    description:
      "Monitoramento via APIs públicas de busca e oferta de voos para Navegantes e Florianópolis. Antecipe picos de demanda turística na região.",
    metrics: "APIs públicas em tempo real",
    category: "mercado",
  },
  {
    icon: CloudSun,
    title: "Dados Climáticos e Sazonais",
    description:
      "Previsão e histórico climático integrados. Correlacione clima com fluxo de clientes e ajuste suas campanhas para os melhores momentos.",
    metrics: "Previsão de até 15 dias",
    category: "mercado",
  },
  {
    icon: Layers,
    title: "BI Sob Medida para seu Setor",
    description:
      "Hotel, restaurante, atrativo ou agência — cada tipo de negócio tem métricas diferentes. Construímos o dashboard ideal para a sua operação.",
    metrics: "100% customizável",
    category: "bi",
  },
];

export default function BiProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="bi" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-16 lg:mb-24">
          <div>
            <span className="font-mono text-xs tracking-wider uppercase text-coral mb-3 block">
              02 — BI & Inteligência de Mercado
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-navy leading-[1.05] tracking-tight">
              Dados que viram<br />
              <span className="italic text-coral">decisões estratégicas.</span>
            </h2>
          </div>
          <p className="text-base text-navy/60 max-w-md lg:text-right leading-relaxed">
            Implementamos dashboards Power BI com os dados do seu negócio e 
            inteligência de mercado via APIs públicas de voos, clima e demanda turística.
          </p>
        </div>

        {/* Power BI Dashboard Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-24 relative"
        >
          <div className="bg-navy rounded-xl overflow-hidden p-4 lg:p-8 shadow-2xl shadow-navy/20">
            {/* Header bar */}
            <div className="flex items-center gap-3 mb-4 lg:mb-6">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-coral/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/60" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
              </div>
              <div className="flex-1 flex items-center justify-center">
                <span className="font-mono text-xs text-white/30 tracking-wider">
                  DATABC — POWER BI · BALNEÁRIO CAMBORIÚ
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-white/20 font-mono">Power BI</span>
                <div className="w-5 h-5 bg-amber-400/80 rounded-sm flex items-center justify-center">
                  <BarChart3 size={12} className="text-navy" />
                </div>
              </div>
            </div>
            {/* Dashboard Image */}
            <img
              src={POWERBI_IMG}
              alt="Dashboard Power BI — Balneário Camboriú"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-5 left-8 lg:left-12 bg-coral text-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-3">
            <BarChart3 size={18} />
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-white/70">
                Serviço de implementação
              </p>
              <p className="text-sm font-semibold">Power BI sob medida</p>
            </div>
          </div>
        </motion.div>

        {/* Category Labels */}
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-navy/5 rounded-full text-xs font-mono font-medium text-navy/70">
            <span className="w-2 h-2 rounded-full bg-coral" />
            BI & Relatórios
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-navy/5 rounded-full text-xs font-mono font-medium text-navy/70">
            <span className="w-2 h-2 rounded-full bg-navy/40" />
            Inteligência de mercado (APIs públicas)
          </span>
        </div>

        {/* BI Project Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {biProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="group relative p-6 lg:p-8 bg-offwhite rounded-lg border border-border hover:border-coral/30 transition-all duration-300 hover:shadow-lg hover:shadow-coral/5"
            >
              {/* Category indicator */}
              <div
                className={`absolute top-6 right-6 w-2 h-2 rounded-full ${
                  project.category === "mercado" ? "bg-navy/40" : "bg-coral"
                }`}
              />

              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-coral/10 transition-colors">
                <project.icon
                  size={22}
                  className="text-navy group-hover:text-coral transition-colors"
                />
              </div>

              {/* Content */}
              <h3 className="font-sans font-semibold text-navy text-lg mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-navy/55 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Metric badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-navy/5 rounded-full">
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    project.category === "mercado" ? "bg-navy/40" : "bg-coral"
                  }`}
                />
                <span className="text-xs font-mono font-medium text-navy/60">
                  {project.metrics}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 lg:mt-16 text-center"
        >
          <p className="text-sm text-navy/40 mb-4">
            Quer um dashboard Power BI personalizado para o seu negócio?
          </p>
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 font-semibold text-sm text-coral hover:text-coral-dark transition-colors"
          >
            Solicite uma proposta de BI
            <span className="group-hover:translate-x-1 transition-transform inline-block">
              &rarr;
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
