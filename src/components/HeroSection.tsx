import { motion } from "framer-motion";
import appScreenshot from "@/assets/app-screenshot.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Radial gradient backdrop */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/3 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-sm font-mono text-primary tracking-wider uppercase">v0.5.0 — Premium Beta</span>
        </motion.div>

        {/* Kinetic Typography */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            className="block gradient-text"
            initial={{ y: 60, opacity: 0, rotateX: 45 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          >
            Noriflow
          </motion.span>
          <motion.span
            className="block text-foreground/80 text-3xl sm:text-4xl md:text-5xl font-light mt-2"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Your desktop, streamlined.
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          A fast, intelligent desktop assistant that brings system control, quick commands, 
          and local AI into one clean interface. No cloud. No clutter. Just flow.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <a
            href="#download"
            className="px-8 py-4 rounded-2xl font-bold text-primary-foreground bg-gradient-to-r from-primary to-primary/80 box-glow hover:scale-105 transition-transform duration-200"
          >
            Download for Windows
          </a>
          <a
            href="#features"
            className="px-8 py-4 rounded-2xl font-medium text-foreground border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 hover:bg-card/50 transition-all duration-200"
          >
            Explore Features
          </a>
        </motion.div>

        {/* Feature chips */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          {["Live System Stats", "Command Bar", "Local AI", "Privacy-First", "Theme Engine"].map((chip, i) => (
            <motion.span
              key={chip}
              className="px-3 py-1.5 text-sm rounded-full border border-border/30 text-muted-foreground bg-card/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.1 }}
            >
              {chip}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* App Screenshot with parallax feel */}
      <motion.div
        className="relative z-10 mt-16 w-full max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 1.0, type: "spring", damping: 20 }}
      >
        <div className="relative rounded-2xl overflow-hidden border border-border/30 box-glow">
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-border/30">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <span className="ml-3 text-xs font-mono text-muted-foreground">Noriflow — Overview</span>
          </div>
          <img
            src={appScreenshot}
            alt="Noriflow desktop application showing the Overview workspace with live system stats, command bar, and dashboard"
            className="w-full"
          />
        </div>
        {/* Reflection glow */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-primary/10 blur-[80px] rounded-full" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary/50" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
