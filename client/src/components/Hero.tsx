/*
  HERO — Swiss Design Tropical
  - Asymmetric layout: text left, image right (desktop)
  - Oversized serif headline
  - Thin horizontal line separator (Swiss style)
  - Counter stats at bottom
  - Hero background image of BC coastline
*/
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-medium tracking-wider uppercase text-teal border border-teal/30 rounded-full bg-teal/10">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            Hub de Inteligência Turística
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.95] tracking-tight max-w-5xl"
        >
          Do dado à{" "}
          <span className="italic text-coral">decisão.</span>
          <br />
          <span className="text-white/80">Automatize o marketing</span>
          <br />
          do seu destino.
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
          className="flex flex-col sm:flex-row items-start sm:items-end gap-6 sm:gap-12"
        >
          <p className="text-base lg:text-lg text-white/70 max-w-md leading-relaxed font-sans">
            Inteligência de dados turísticos e automação de marketing para
            Balneário Camboriú. Transforme insights em resultados reais.
          </p>
          <a
            href="#solucoes"
            className="group inline-flex items-center gap-3 px-6 py-3.5 bg-coral text-white font-semibold text-sm rounded-md hover:bg-coral-dark transition-colors shrink-0"
          >
            Explorar soluções
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 lg:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-12 border-t border-white/10 pt-8"
        >
          <StatItem value={2.5} suffix="M+" label="Turistas/ano analisados" />
          <StatItem value={150} suffix="+" label="Indicadores monitorados" />
          <StatItem value={40} suffix="%" label="Mais eficiência em MKT" />
          <StatItem value={12} suffix="+" label="Parceiros estratégicos" />
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
