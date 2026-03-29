import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

import appOverview from "@/assets/app-overview.png";
import appCleaner from "@/assets/app-cleaner.png";
import appPrivacy from "@/assets/app-privacy.png";
import appPerformance from "@/assets/app-performance.png";
import appQuicktools from "@/assets/app-quicktools.png";
import appCommand from "@/assets/app-command.png";
import appSettings from "@/assets/app-settings.png";

const workspaces = [
  {
    name: "Overview",
    tag: "Home Base",
    headline: "A cleaner desktop layer for real work",
    description: "Live system insight, faster actions, richer shortcuts, and a command bar that saves clicks. Your daily command center.",
    image: appOverview,
  },
  {
    name: "Cleaner",
    tag: "Real Cleanup",
    headline: "Clean temp clutter with real feedback",
    description: "No fake optimizer tricks. Just an honest scan, a clear result, and one safe action. See before-and-after reports.",
    image: appCleaner,
  },
  {
    name: "Privacy",
    tag: "Honest Scope",
    headline: "Show what stays local and what this app won't fake",
    description: "Privacy signals that build trust. No telemetry, no analytics, no account required. Real privacy actions you can verify.",
    image: appPrivacy,
  },
  {
    name: "Performance",
    tag: "Live Telemetry",
    headline: "Watch the machine breathe in real time",
    description: "CPU, memory, disk, uptime, and the processes actually consuming your box. Deep system monitoring at a glance.",
    image: appPerformance,
  },
  {
    name: "Quick Tools",
    tag: "Fast Access",
    headline: "Open the Windows tools you use most",
    description: "A tighter launcher lane than digging through Start, folders, and taskbar icons every time. Explorer, Notepad, Calculator, and more.",
    image: appQuicktools,
  },
  {
    name: "Command",
    tag: "Runs Local",
    headline: "Local AI without gimmicky hype",
    description: "Use local models via Ollama. Detect the engine, start it when needed, and use AI help only when it adds real value.",
    image: appCommand,
  },
  {
    name: "Settings",
    tag: "Appearance",
    headline: "Tune the shell and shape the desktop feel",
    description: "7 themes, widget controls, config access, and a clear reminder of what this product actually is today.",
    image: appSettings,
  },
];

const WorkspacesSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="workspaces" className="py-32 px-4 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/3 blur-[150px] rounded-full -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-12">
          <span className="text-sm font-mono text-primary tracking-wider uppercase">Interactive Preview</span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-3 gradient-text">
            7 workspaces. Click to explore.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
            Each tab is purpose-built. This isn't a concept — it's real, working software you can download right now.
          </p>
        </ScrollReveal>

        {/* Tab bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {workspaces.map((ws, i) => (
            <motion.button
              key={ws.name}
              onClick={() => setActive(i)}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                active === i
                  ? "bg-primary text-primary-foreground box-glow"
                  : "bg-card/40 text-muted-foreground border border-border/30 hover:border-primary/30 hover:text-foreground"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {ws.name}
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, type: "spring", damping: 25 }}
          >
            {/* Info bar */}
            <div className="text-center mb-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono text-primary bg-primary/10 border border-primary/20 mb-3">
                {workspaces[active].tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                {workspaces[active].headline}
              </h3>
              <p className="text-muted-foreground mt-2 max-w-lg mx-auto">
                {workspaces[active].description}
              </p>
            </div>

            {/* Screenshot */}
            <div className="relative rounded-2xl overflow-hidden border border-border/30 box-glow max-w-5xl mx-auto">
              <img
                src={workspaces[active].image}
                alt={`Noriflow ${workspaces[active].name} workspace`}
                className="w-full"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Persuasive nudge */}
        <motion.p
          className="text-center mt-8 text-sm text-muted-foreground/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          👆 This is the real app. Not a mockup. Not a concept. <a href="#download" className="text-primary hover:underline font-medium">Download and try it yourself →</a>
        </motion.p>
      </div>
    </section>
  );
};

export default WorkspacesSection;
