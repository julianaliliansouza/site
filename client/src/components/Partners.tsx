/*
  PARTNERS / SOCIAL PROOF — Swiss Design Tropical
  - Clean horizontal logo strip
  - Subtle animation
  - Thin border separators
*/
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  "Prefeitura de BC",
  "SECTUR",
  "SINDISOL",
  "Convention Bureau",
  "ACIF",
  "SANTUR",
];

export default function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 lg:py-20 bg-white border-y border-border" ref={ref}>
      <div className="container">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center font-mono text-xs tracking-wider uppercase text-navy/30 mb-10"
        >
          Parceiros e entidades que confiam no DataBC
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {partners.map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="flex items-center justify-center h-16 px-4 rounded-md border border-border/50 bg-offwhite/50 hover:border-teal/30 hover:bg-teal/5 transition-all duration-300"
            >
              <span className="font-sans font-medium text-sm text-navy/40 text-center leading-tight">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
