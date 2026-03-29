import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Workspaces", href: "#workspaces" },
  { label: "Compare", href: "#compare" },
  { label: "Roadmap", href: "#roadmap" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Scroll progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[60]"
        style={{ scaleX }}
      />

      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-background/80 backdrop-blur-xl border-b border-border/20 shadow-lg shadow-black/10"
            : "py-5 bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", damping: 20 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <span className="text-primary font-black text-sm">N</span>
            </div>
            <span className={`font-black text-lg tracking-tight transition-all duration-300 ${scrolled ? "text-foreground" : "gradient-text"}`}>
              Noriflow
            </span>
            <span className="hidden sm:inline text-[10px] font-mono text-primary/60 bg-primary/5 px-2 py-0.5 rounded-full border border-primary/10">
              v0.5.0
            </span>
          </a>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary group-hover:w-3/4 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="#download"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Download Free
          </motion.a>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
