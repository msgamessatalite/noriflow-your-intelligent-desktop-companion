import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const CTASection = () => (
  <section id="download" className="py-32 px-4 relative">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full" />
    </div>

    <ScrollReveal className="relative z-10 max-w-3xl mx-auto text-center">
      <motion.div
        className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive border border-destructive/20 text-sm font-semibold mb-6"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ⚡ Premium Beta — Free for a limited time
      </motion.div>

      <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight gradient-text">
        Stop clicking around. Start flowing.
      </h2>
      <p className="text-xl text-muted-foreground mt-6 max-w-xl mx-auto">
        Every second you spend navigating menus is a second wasted. Noriflow gives you back 
        your focus. <span className="text-foreground font-semibold">15MB. No admin. No account. Just download and go.</span>
      </p>

      <motion.div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <motion.a
          href="#"
          className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-primary-foreground bg-gradient-to-r from-primary to-primary/80 box-glow text-lg overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 flex items-center gap-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>
            Download Free for Windows
          </span>
          <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
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

      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground/60">
        <span>✓ Windows 10+</span>
        <span>✓ No admin required</span>
        <span>✓ ~15MB download</span>
        <span>✓ 100% offline capable</span>
        <span>✓ No data collected</span>
      </div>
    </ScrollReveal>
  </section>
);

export default CTASection;
