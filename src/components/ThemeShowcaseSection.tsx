import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import appOverview from "@/assets/app-overview.png";
import appPerformance from "@/assets/app-performance.png";
import appCommand from "@/assets/app-command.png";
import appQuicktools from "@/assets/app-quicktools.png";
import appSettings from "@/assets/app-settings.png";

const themes = [
  { name: "Dark", color: "#1a1a2e", textColor: "#00e5ff", image: appOverview },
  { name: "Navy", color: "#0a1628", textColor: "#5ce1e6", image: appOverview },
  { name: "Purple", color: "#1a0a2e", textColor: "#b388ff", image: appPerformance },
  { name: "Neon", color: "#0a0a0a", textColor: "#39ff14", image: appQuicktools },
  { name: "Blue", color: "#0d1b3e", textColor: "#64b5f6", image: appSettings },
  { name: "Green", color: "#0a1e0a", textColor: "#69f0ae", image: appQuicktools },
  { name: "Light", color: "#f5f5f5", textColor: "#1976d2", image: appCommand },
];

const ThemeShowcaseSection = () => {
  const [activeTheme, setActiveTheme] = useState(0);

  return (
    <section className="py-32 px-4 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/3 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-12">
          <span className="text-sm font-mono text-primary tracking-wider uppercase">Customization</span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-3 gradient-text">
            7 themes. Your vibe, your rules.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
            Dark, Light, Blue, Navy, Purple, Neon, Green — switch instantly. 
            Every pixel adapts. Pick the one that feels like you.
          </p>
        </ScrollReveal>

        {/* Theme color selector */}
        <div className="flex items-center justify-center gap-3 mb-10">
          {themes.map((theme, i) => (
            <motion.button
              key={theme.name}
              onClick={() => setActiveTheme(i)}
              className={`relative flex flex-col items-center gap-2 group`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 transition-all duration-300 ${
                  activeTheme === i ? "border-primary scale-110 box-glow" : "border-border/50 hover:border-primary/50"
                }`}
                style={{ background: theme.color }}
              >
                <div
                  className="w-3 h-3 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ background: theme.textColor }}
                />
              </div>
              <span className={`text-xs font-mono transition-colors ${activeTheme === i ? "text-primary" : "text-muted-foreground/60"}`}>
                {theme.name}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Theme preview */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTheme}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl overflow-hidden border border-border/30 box-glow max-w-4xl mx-auto"
          >
            <img
              src={themes[activeTheme].image}
              alt={`Noriflow with ${themes[activeTheme].name} theme`}
              className="w-full"
            />
          </motion.div>
        </AnimatePresence>

        <p className="text-center mt-6 text-sm text-muted-foreground/70">
          Every theme changes the entire app — sidebar, cards, buttons, widget. <span className="text-primary">Try them all.</span>
        </p>
      </div>
    </section>
  );
};

export default ThemeShowcaseSection;
