/*
  CONTACT / CTA — Swiss Design Tropical
  - Split layout: CTA text left, form right
  - Navy background with coral accent
  - Clean form with minimal styling
*/
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Mensagem enviada! Entraremos em contato em breve.");
  };

  return (
    <section id="contato" className="py-24 lg:py-32 bg-navy relative overflow-hidden" ref={ref}>
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: CTA Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono text-xs tracking-wider uppercase text-coral mb-3 block">
              04 — Contato
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1] tracking-tight mb-6">
              Pronto para transformar<br />
              <span className="italic text-teal">dados em resultados?</span>
            </h2>
            <p className="text-base text-white/50 leading-relaxed mb-8 max-w-md">
              Entre em contato conosco para conhecer a plataforma DataBC e descobrir como 
              a inteligência de dados e a automação de marketing podem impulsionar o turismo 
              do seu negócio em Balneário Camboriú.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center">
                  <span className="text-teal text-sm">@</span>
                </div>
                <span className="text-sm text-white/60">contato@databc.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center">
                  <span className="text-teal text-sm">BC</span>
                </div>
                <span className="text-sm text-white/60">Balneário Camboriú, SC — Brasil</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-white/5 border border-white/10 rounded-lg p-10 flex flex-col items-center justify-center text-center min-h-[400px]">
                <CheckCircle size={48} className="text-teal mb-4" />
                <h3 className="font-serif text-2xl text-white mb-2">Mensagem enviada!</h3>
                <p className="text-sm text-white/50">
                  Obrigado pelo interesse. Nossa equipe entrará em contato em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-lg p-8 lg:p-10 space-y-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/40 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-teal/50 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/40 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-teal/50 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/40 mb-2">
                    Empresa / Organização
                  </label>
                  <input
                    type="text"
                    placeholder="Nome da sua empresa"
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-teal/50 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/40 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Como podemos ajudar?"
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-teal/50 focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-coral text-white font-semibold text-sm rounded-md hover:bg-coral-dark transition-colors"
                >
                  Enviar mensagem
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
