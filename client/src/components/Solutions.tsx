/*
  SOLUTIONS — Swiss Design Tropical (Comercial)
  Funcionalidades REAIS do SaaS DataBC conforme documentação do produto
*/
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Fingerprint, Sparkles, ImageIcon, TrendingUp, CalendarDays, CloudSun } from "lucide-react";

const DASHBOARD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663161249291/PwvU6Hbjwjn6GEhcVdKcVq/databc-dashboard-bc-CrQ67mrtKmVaGPP7n6YmXa.webp";
const AUTOMATION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663161249291/PwvU6Hbjwjn6GEhcVdKcVq/automation-flow-diagram-BMAKPVCmngNnT6D5JRAbiR.webp";

const features = [
  {
    icon: Fingerprint,
    title: "DNA da Marca com IA",
    description: "Nossa IA conduz uma entrevista estratégica e extrai a identidade completa da sua marca — missão, tom de voz, paleta visual e público-alvo. Tudo é compilado em um perfil que guia todas as criações automaticamente.",
    tag: "Brand Intelligence",
  },
  {
    icon: Sparkles,
    title: "Criativos com IA",
    description: "Gere textos e imagens profissionais com um clique. A IA usa o DNA da sua marca para criar conteúdo no tom certo, com as cores certas, para o público certo. Integração com Canva e editor visual interno.",
    tag: "Claude + DALL-E",
  },
  {
    icon: ImageIcon,
    title: "Banco de Imagens Inteligente",
    description: "Conecte seu Google Drive e a IA cataloga automaticamente todas as suas imagens com tags, cores dominantes e score de qualidade. Encontre o criativo perfeito em segundos.",
    tag: "Google Drive + IA",
  },
  {
    icon: TrendingUp,
    title: "Trend Intelligence",
    description: "Radar de tendências filtrado pelo DNA da sua marca. A IA monitora Google Trends, Instagram e X, calcula um score de relevância e sugere conteúdo pronto no tom da sua empresa.",
    tag: "Radar de Tendências",
  },
  {
    icon: CalendarDays,
    title: "Calendário Editorial",
    description: "Agende e publique automaticamente no Instagram e Facebook. Sugestões inteligentes baseadas em sazonalidades, datas comemorativas e eventos locais do seu setor.",
    tag: "Publicação Automática",
  },
  {
    icon: CloudSun,
    title: "Inteligência de Mercado",
    description: "Dados de demanda de voos, condições climáticas e sazonalidade turística via APIs públicas. Antecipe picos, ajuste campanhas e tome decisões baseadas em dados reais do mercado.",
    tag: "Voos + Clima + Demanda",
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
              01 — Plataforma SaaS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-navy leading-[1.05] tracking-tight">
              Marketing com IA feito<br />
              <span className="italic text-coral">para o turismo.</span>
            </h2>
          </div>
          <p className="text-base text-navy/60 max-w-md lg:text-right leading-relaxed">
            Da identidade da marca à publicação automática — uma plataforma completa que usa inteligência artificial para criar, agendar e otimizar o marketing do seu negócio turístico.
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
                alt="Dashboard DataBC — Balneário Camboriú"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-coral/20 rounded-lg -z-10" />
          </motion.div>

          {/* Right: Feature Cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="group p-6 bg-white rounded-lg border border-border hover:border-coral/40 transition-all duration-300 hover:shadow-lg hover:shadow-coral/5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-md bg-navy/5 flex items-center justify-center group-hover:bg-coral/10 transition-colors">
                    <feature.icon size={20} className="text-navy group-hover:text-coral transition-colors" />
                  </div>
                  <span className="font-mono text-[10px] tracking-wider uppercase text-coral/70 bg-coral/5 px-2 py-1 rounded">
                    {feature.tag}
                  </span>
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
                <span className="font-mono text-xs tracking-wider uppercase text-coral mb-2 block">
                  Do DNA da marca ao post publicado
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl text-navy leading-tight">
                  Um fluxo completo e automatizado
                </h3>
              </div>
              <p className="text-sm text-navy/55 max-w-sm leading-relaxed">
                A IA extrai o DNA da sua marca, gera criativos personalizados, 
                identifica tendências relevantes e publica automaticamente — tudo conectado.
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
