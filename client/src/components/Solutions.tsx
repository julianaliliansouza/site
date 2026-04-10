/*
  SOLUTIONS — Swiss Design Tropical
  - Section title left-aligned with oversized serif
  - Asymmetric grid: large image left, feature cards right
  - Thin horizontal lines as separators
  - Feature cards with teal accent dots
*/
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, Zap, Target, Mail, TrendingUp, Globe } from "lucide-react";

const DASHBOARD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663161249291/PwvU6Hbjwjn6GEhcVdKcVq/saas-dashboard-NvQbRwNSNDXa7HZQjrvHzs.webp";
const AUTOMATION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663161249291/PwvU6Hbjwjn6GEhcVdKcVq/automation-flow-fqttXCMfda3V7Kfn4bdgpT.webp";

const features = [
  {
    icon: BarChart3,
    title: "Dashboards Interativos",
    description: "Visualize indicadores turísticos em tempo real com painéis personalizáveis e intuitivos.",
  },
  {
    icon: Zap,
    title: "Automação de Marketing",
    description: "Crie fluxos automatizados de campanhas, e-mails e ações de engajamento para o trade turístico.",
  },
  {
    icon: Target,
    title: "Segmentação Inteligente",
    description: "Identifique e alcance públicos específicos com base em dados comportamentais e demográficos.",
  },
  {
    icon: Mail,
    title: "Campanhas Multicanal",
    description: "Gerencie e-mail marketing, redes sociais e notificações em uma única plataforma integrada.",
  },
  {
    icon: TrendingUp,
    title: "Análise Preditiva",
    description: "Antecipe tendências de demanda turística e otimize estratégias com inteligência artificial.",
  },
  {
    icon: Globe,
    title: "Pesquisas e Relatórios",
    description: "Acesse pesquisas de perfil do turista, satisfação e impacto econômico do turismo em BC.",
  },
];

export default function Solutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solucoes" className="py-24 lg:py-32 bg-offwhite" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-16 lg:mb-24">
          <div>
            <span className="font-mono text-xs tracking-wider uppercase text-coral mb-3 block">
              01 — Soluções
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-navy leading-[1.05] tracking-tight">
              Inteligência e automação<br />
              <span className="italic text-coral">em uma só plataforma.</span>
            </h2>
          </div>
          <p className="text-base text-navy/60 max-w-md lg:text-right leading-relaxed">
            Reunimos dados turísticos estratégicos e ferramentas de automação de marketing para impulsionar o destino Balneário Camboriú.
          </p>
        </div>

        {/* Dashboard Image + Features Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Dashboard Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-lg overflow-hidden shadow-2xl shadow-navy/10">
              <img
                src={DASHBOARD_IMG}
                alt="Dashboard de analytics turístico do DataBC"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-teal/30 rounded-lg -z-10" />
          </motion.div>

          {/* Right: Feature Cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="group p-6 bg-white rounded-lg border border-border hover:border-teal/40 transition-all duration-300 hover:shadow-lg hover:shadow-teal/5"
              >
                <div className="w-10 h-10 rounded-md bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-teal/10 transition-colors">
                  <feature.icon size={20} className="text-navy group-hover:text-teal-dark transition-colors" />
                </div>
                <h3 className="font-sans font-semibold text-navy text-base mb-2">{feature.title}</h3>
                <p className="text-sm text-navy/55 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Automation Flow Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 lg:mt-24 relative"
        >
          <div className="bg-white rounded-lg border border-border p-6 lg:p-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 mb-8">
              <div className="flex-1">
                <span className="font-mono text-xs tracking-wider uppercase text-teal-dark mb-2 block">
                  Automação Visual
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl text-navy leading-tight">
                  Fluxos inteligentes que trabalham por você
                </h3>
              </div>
              <p className="text-sm text-navy/55 max-w-sm leading-relaxed">
                Crie jornadas automatizadas de marketing com nosso editor visual. 
                De e-mails a segmentação, tudo conectado aos dados turísticos de BC.
              </p>
            </div>
            <img
              src={AUTOMATION_IMG}
              alt="Fluxo de automação de marketing do DataBC"
              className="w-full h-auto rounded-md"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
