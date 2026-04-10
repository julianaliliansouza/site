/*
  FOOTER — Swiss Design Tropical
  - Minimal, clean footer
  - Logo + links + copyright
  - Thin top border
*/

const LOGO_WHITE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663161249291/PwvU6Hbjwjn6GEhcVdKcVq/databc_logo_v2_white_cropped_ac6a6986.png";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5">
      <div className="container py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center mb-4">
              <img
                src={LOGO_WHITE}
                alt="DataBC"
                className="h-14 w-auto object-contain"
              />
            </a>
            <p className="text-xs text-white/35 leading-relaxed max-w-xs">
              Hub de inteligência de dados turísticos e automação de marketing de Balneário Camboriú.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-white/30 mb-4">Plataforma</h4>
            <ul className="space-y-2.5">
              <li><a href="#solucoes" className="text-sm text-white/50 hover:text-white transition-colors">Dashboards</a></li>
              <li><a href="#solucoes" className="text-sm text-white/50 hover:text-white transition-colors">Automação de MKT</a></li>
              <li><a href="#solucoes" className="text-sm text-white/50 hover:text-white transition-colors">Pesquisas</a></li>
              <li><a href="#solucoes" className="text-sm text-white/50 hover:text-white transition-colors">Indicadores</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-white/30 mb-4">Institucional</h4>
            <ul className="space-y-2.5">
              <li><a href="#sobre" className="text-sm text-white/50 hover:text-white transition-colors">Sobre nós</a></li>
              <li><a href="#diferenciais" className="text-sm text-white/50 hover:text-white transition-colors">Diferenciais</a></li>
              <li><a href="#contato" className="text-sm text-white/50 hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-white/30 mb-4">Contato</h4>
            <ul className="space-y-2.5">
              <li className="text-sm text-white/50">contato@databc.com.br</li>
              <li className="text-sm text-white/50">Balneário Camboriú, SC</li>
              <li className="text-sm text-white/50">Brasil</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} DataBC. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/25">
            Inteligência de dados turísticos &middot; Balneário Camboriú
          </p>
        </div>
      </div>
    </footer>
  );
}
