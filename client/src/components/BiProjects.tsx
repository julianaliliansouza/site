/*
  BI PROJECTS — Swiss Design Tropical (Comercial)
  - Showcase de dashboards Power BI
  - Cases de inteligência de dados turísticos
  - Foco em resultados e insights acionáveis
*/
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, PieChart, TrendingUp, Users, Hotel, MapPin } from "lucide-react";

const POWERBI_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663161249291/PwvU6Hbjwjn6GEhcVdKcVq/powerbi-dashboard-kiYjvTsZy4Ekxc7CjsqczZ.webp";

const biProjects = [
  {
    icon: Users,
    title: "Perfil do Turista",
    description: "Dashboard com dados demográficos, origem, tempo de permanência e gasto médio dos visitantes de BC.",
    metrics: "2.5M turistas analisados",
  },
  {
    icon: Hotel,
    title: "Ocupação Hoteleira",
    description: "Acompanhamento em tempo real da taxa de ocupação, diária média e RevPAR por categoria de hospedagem.",
    metrics: "78% ocupação média",
  },
  {
    icon: TrendingUp,
    title: "Sazonalidade e Demanda",
    description: "Análise preditiva de fluxo turístico por temporada, eventos e feriados para planejamento estratégico.",
    metrics: "12 meses de projeção",
  },
  {
    icon: MapPin,
    title: "Mapa de Calor Turístico",
    description: "Visualização geográfica dos pontos mais visitados, rotas e concentração de turistas em BC.",
    metrics: "50+ pontos monitorados",
  },
  {
    icon: PieChart,
    title: "Receita por Segmento",
    description: "Breakdown de receita turística por setor: hospedagem, gastronomia, lazer, comércio e transporte.",
    metrics: "R$ 1.2B em receita mapeada",
  },
  {
    icon: BarChart3,
    title: "Benchmarking de Destinos",
    description: "Comparativo de performance de BC com outros destinos concorrentes do litoral catarinense e brasileiro.",
    metrics: "15 destinos comparados",
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
              02 — Inteligência de Dados
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-navy leading-[1.05] tracking-tight">
              Dashboards Power BI<br />
              <span className="italic text-teal-dark">que geram decisões.</span>
            </h2>
          </div>
          <p className="text-base text-navy/60 max-w-md lg:text-right leading-relaxed">
            Projetos de Business Intelligence com dados reais do turismo de Balneário Camboriú. 
            Insights visuais que transformam números em estratégia.
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
                <div className="w-3 h-3 rounded-full bg-teal/60" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
              </div>
              <div className="flex-1 flex items-center justify-center">
                <span className="font-mono text-xs text-white/30 tracking-wider">
                  DATABC — TOURISM ANALYTICS DASHBOARD
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
              alt="Dashboard Power BI com analytics turísticos de Balneário Camboriú"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-5 left-8 lg:left-12 bg-coral text-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-3">
            <BarChart3 size={18} />
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-white/70">Atualização</p>
              <p className="text-sm font-semibold">Dados em tempo real</p>
            </div>
          </div>
        </motion.div>

        {/* BI Project Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {biProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="group relative p-6 lg:p-8 bg-offwhite rounded-lg border border-border hover:border-teal/40 transition-all duration-300 hover:shadow-lg hover:shadow-teal/5"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-teal/10 transition-colors">
                <project.icon size={22} className="text-navy group-hover:text-teal-dark transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-sans font-semibold text-navy text-lg mb-2">{project.title}</h3>
              <p className="text-sm text-navy/55 leading-relaxed mb-4">{project.description}</p>

              {/* Metric badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal/10 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-teal" />
                <span className="text-xs font-mono font-medium text-teal-dark">{project.metrics}</span>
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
            Quer um dashboard personalizado para o seu negócio?
          </p>
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 font-semibold text-sm text-coral hover:text-coral-dark transition-colors"
          >
            Solicite uma proposta
            <span className="group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
