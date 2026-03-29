import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const workspaces = [
  {
    name: "Overview",
    description: "Your home base — live system stats, command bar, quick actions, and session snapshot all in one view.",
    active: true,
  },
  {
    name: "Cleaner",
    description: "Scan and safely remove temp files with real confirmation. See before-and-after reports.",
  },
  {
    name: "Privacy",
    description: "Privacy-focused tools that run entirely on your machine. No external connections.",
  },
  {
    name: "Performance",
    description: "Deep system monitoring with live CPU, memory, disk, and uptime tracking.",
  },
  {
    name: "Quick Tools",
    description: "Launch Windows utilities instantly — Notepad, Calculator, Snipping Tool, Paint, Explorer.",
  },
  {
    name: "AI Assistant",
    description: "Chat with local AI models via Ollama. Analyze files, get help, all offline.",
  },
];

const WorkspacesSection = () => (
  <section className="py-32 px-4 relative">
    {/* Background accent */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/3 blur-[150px] rounded-full -translate-y-1/2" />
    </div>

    <div className="max-w-6xl mx-auto relative z-10">
      <ScrollReveal className="text-center mb-16">
        <span className="text-sm font-mono text-primary tracking-wider uppercase">Workspaces</span>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-3 gradient-text">
          Six powerful workspaces
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
          Each workspace is purpose-built. Navigate with the sidebar, or jump with a command.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {workspaces.map((ws, i) => (
          <ScrollReveal key={ws.name} delay={i * 0.08}>
            <motion.div
              className={`relative p-6 rounded-2xl border transition-all duration-300 h-full ${
                ws.active
                  ? "border-primary/40 bg-primary/5 box-glow"
                  : "border-border/30 bg-card/40 hover:border-primary/20"
              }`}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {ws.active && (
                <span className="absolute top-4 right-4 text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  Active
                </span>
              )}
              <h3 className="text-lg font-bold text-foreground mb-2">{ws.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{ws.description}</p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WorkspacesSection;
