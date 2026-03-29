import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const CTASection = () => (
  <section id="download" className="py-32 px-4 relative">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full" />
    </div>

    <ScrollReveal className="relative z-10 max-w-3xl mx-auto text-center">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight gradient-text">
        Ready to flow?
      </h2>
      <p className="text-xl text-muted-foreground mt-6 max-w-xl mx-auto">
        Download Noriflow and take control of your desktop experience. Local-first, privacy-respecting, and built for real work.
      </p>
      <motion.div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <motion.a
          href="#"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-primary-foreground bg-gradient-to-r from-primary to-primary/80 box-glow text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>
          Download for Windows
        </motion.a>
        <a
          href="https://www.youtube.com/@MS_SATALITE_Gaming"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-5 rounded-2xl font-medium text-foreground border border-border/50 bg-card/30 hover:border-primary/30 transition-all"
        >
          Watch on YouTube →
        </a>
      </motion.div>
      <p className="text-sm text-muted-foreground/60 mt-6">Windows 10+ • No admin required • ~15MB</p>
    </ScrollReveal>
  </section>
);

export default CTASection;
