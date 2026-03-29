import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import appOverview from "@/assets/app-overview.png";
import appPerformance from "@/assets/app-performance.png";
import appCommand from "@/assets/app-command.png";
import appQuicktools from "@/assets/app-quicktools.png";
import appSettings from "@/assets/app-settings.png";

const themes = [
  { name: "Dark", color: "#1a1a2e", accent: "#00e5ff", desc: "Deep space. Zero distractions.", image: appOverview },
  { name: "Navy", color: "#0a1628", accent: "#5ce1e6", desc: "Professional. Focused. Clean.", image: appCommand },
  { name: "Neon", color: "#0a0a0a", accent: "#39ff14", desc: "Hacker mode. Terminal energy.", image: appQuicktools },
  { name: "Blue", color: "#0d1b3e", accent: "#64b5f6", desc: "Calm and productive.", image: appPerformance },
  { name: "Light", color: "#f0f0f0", accent: "#1976d2", desc: "Bright. Minimal. Sharp.", image: appSettings },
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
          <span className="text-sm font-mono text-primary tracking-wider uppercase">Personalization</span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-3 gradient-text">
            5 themes. One click to switch.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
            The entire interface transforms — sidebar, cards, buttons, widget. Pick the mood that fits your workflow.
          </p>
        </ScrollReveal>

        {/* Theme selector */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-10">
          {themes.map((theme, i) => (
            <motion.button
              key={theme.name}
              onClick={() => setActiveTheme(i)}
              className="relative flex flex-col items-center gap-2.5 group"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 transition-all duration-300 relative overflow-hidden ${
                  activeTheme === i
                    ? "border-primary scale-110 ring-4 ring-primary/20"
                    : "border-border/40 hover:border-primary/40"
                }`}
                style={{ background: theme.color }}
              >
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/3"
                  style={{ background: theme.accent }}
                />
              </div>
              <span className={`text-xs font-semibold tracking-wide transition-colors ${
                activeTheme === i ? "text-primary" : "text-muted-foreground/50"
              }`}>
                {theme.name}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Active theme description */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeTheme}
            className="text-center text-muted-foreground mb-6 text-sm italic"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            {themes[activeTheme].desc}
          </motion.p>
        </AnimatePresence>

        {/* Theme preview */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTheme}
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -10 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl overflow-hidden border border-border/30 box-glow max-w-4xl mx-auto"
          >
            <img
              src={themes[activeTheme].image}
              alt={`Noriflow ${themes[activeTheme].name} theme`}
              className="w-full"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ThemeShowcaseSection;
