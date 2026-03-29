import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const steps = [
  { phase: "Now", title: "Solid Foundation", description: "Live stats, temp cleanup, command bar, theme engine, and local AI integration." },
  { phase: "Next", title: "File Workspace", description: "Inspect and tidy Downloads and Desktop with previews instead of blind actions." },
  { phase: "Soon", title: "Smarter AI", description: "Note summaries, draft cleanup, and better context handling — all offline." },
  { phase: "Future", title: "Plugin System", description: "Community-driven extensions to make Noriflow truly yours." },
];

const RoadmapSection = () => (
  <section id="roadmap" className="py-32 px-4">
    <div className="max-w-4xl mx-auto">
      <ScrollReveal className="text-center mb-16">
        <span className="text-sm font-mono text-primary tracking-wider uppercase">Roadmap</span>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-3 gradient-text">
          What's coming next
        </h2>
      </ScrollReveal>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

        <div className="space-y-8">
          {steps.map((step, i) => (
            <ScrollReveal key={step.phase} delay={i * 0.15}>
              <motion.div
                className="relative pl-16"
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Dot */}
                <div className="absolute left-4 top-1 w-4 h-4 rounded-full border-2 border-primary bg-background" />
                <span className="text-xs font-mono text-primary uppercase tracking-wider">{step.phase}</span>
                <h3 className="text-xl font-bold text-foreground mt-1">{step.title}</h3>
                <p className="text-muted-foreground mt-1">{step.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default RoadmapSection;
