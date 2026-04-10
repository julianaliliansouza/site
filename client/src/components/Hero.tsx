/*
  HERO — Swiss Design Tropical (Comercial)
  - Tom orientado a resultados e conversão
  - Foco no trade turístico: hotéis, agências, restaurantes
  - CTA forte para demo/teste
*/
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import CountUp from "./CountUp";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663161249291/PwvU6Hbjwjn6GEhcVdKcVq/hero-bg-CnY7hNE8AbejQGfRPCQvef.webp";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Vista aérea de Balneário Camboriú ao pôr do sol"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/60 to-navy/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container pb-16 pt-32 lg:pb-24 lg:pt-40">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium tracking-wider uppercase text-white/80 border border-white/20 rounded-full backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
            Marketing com IA para o turismo
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.95] tracking-tight max-w-5xl"
        >
          Mais clientes.{" "}
          <br />
          <span className="text-white/80">Mais resultados.</span>
          <br />
          <span className="italic text-coral">Menos esforço.</span>
        </motion.h1>

        {/* Thin separator line — Swiss style */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="origin-left w-full max-w-2xl h-px bg-white/20 my-8"
        />

        {/* Subtitle + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-end gap-6 sm:gap-8"
        >
          <p className="text-base lg:text-lg text-white/70 max-w-md leading-relaxed font-sans">
            Nossa IA extrai o DNA da sua marca e cria conteúdo personalizado, 
            identifica tendências, agenda publicações e gera relatórios — tudo 
            automatizado para hotéis, agências e negócios turísticos de BC.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="#contato"
              className="group inline-flex items-center gap-3 px-6 py-3.5 bg-coral text-white font-semibold text-sm rounded-md hover:bg-coral-dark transition-colors"
            >
              Agendar demonstração
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#solucoes"
              className="group inline-flex items-center gap-3 px-6 py-3.5 text-white/80 font-medium text-sm rounded-md border border-white/20 hover:bg-white/10 transition-colors"
            >
              <Play size={14} className="fill-current" />
              Ver como funciona
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 lg:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-12 border-t border-white/10 pt-8"
        >
          <StatItem value={6} suffix="" label="Ferramentas de IA integradas" />
          <StatItem value={100} suffix="%" label="Automação do fluxo de MKT" />
          <StatItem value={24} suffix="/7" label="Monitoramento de tendências" />
          <StatItem value={5} suffix="min" label="Do DNA da marca ao post" />
        </motion.div>
      </div>
    </section>
  );
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  return (
    <div>
      <div className="font-mono text-2xl lg:text-3xl font-semibold text-white flex items-baseline">
        <CountUp end={value} duration={2} />
        <span className="text-coral">{suffix}</span>
      </div>
      <p className="text-xs lg:text-sm text-white/50 mt-1 font-sans">{label}</p>
    </div>
  );
}
