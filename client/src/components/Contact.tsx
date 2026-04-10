/*
  CONTACT / CTA — Swiss Design Tropical (Comercial)
  - Foco em agendamento de demo
  - Linguagem de vendas orientada a resultados
*/
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle, Clock, Headphones, Sparkles } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Recebemos seu pedido! Um especialista entrará em contato em até 24h.");
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
              04 — Comece agora
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1] tracking-tight mb-6">
              Agende sua demo{" "}
              <span className="italic text-coral">gratuita</span><br />
              e veja na prática.
            </h2>
            <p className="text-base text-white/50 leading-relaxed mb-8 max-w-md">
              Em 30 minutos, nosso especialista mostra como o DataBC pode aumentar 
              suas reservas e automatizar seu marketing. Sem compromisso, sem cartão de crédito.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-teal/10 flex items-center justify-center">
                  <Clock size={16} className="text-teal" />
                </div>
                <span className="text-sm text-white/60">Demo personalizada de 30 min</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-teal/10 flex items-center justify-center">
                  <Sparkles size={16} className="text-teal" />
                </div>
                <span className="text-sm text-white/60">Teste grátis por 14 dias — sem cartão</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-teal/10 flex items-center justify-center">
                  <Headphones size={16} className="text-teal" />
                </div>
                <span className="text-sm text-white/60">Suporte dedicado na implementação</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 pt-6 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center">
                  <span className="text-teal text-sm">@</span>
                </div>
                <span className="text-sm text-white/60">comercial@databc.com.br</span>
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
                <h3 className="font-serif text-2xl text-white mb-2">Pedido recebido!</h3>
                <p className="text-sm text-white/50 max-w-xs">
                  Um especialista entrará em contato em até 24h para agendar sua demonstração personalizada.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-lg p-8 lg:p-10 space-y-5">
                <div className="text-center mb-2">
                  <p className="text-sm font-semibold text-white">Solicite sua demonstração</p>
                  <p className="text-xs text-white/40 mt-1">Resposta em até 24h úteis</p>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/40 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-coral/50 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/40 mb-2">
                    E-mail corporativo
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="seu@empresa.com.br"
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-coral/50 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/40 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nome do seu hotel, agência ou negócio"
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-coral/50 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/40 mb-2">
                    O que você busca?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ex: Quero automatizar o marketing do meu hotel..."
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-coral/50 focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-coral text-white font-semibold text-sm rounded-md hover:bg-coral-dark transition-colors"
                >
                  Quero minha demo gratuita
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-xs text-white/25 text-center">
                  Sem compromisso. Sem cartão de crédito.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
