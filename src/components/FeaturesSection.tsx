import { Monitor, Zap, Shield, Brain, Terminal, Palette } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: Monitor,
    title: "Live System Dashboard",
    description: "Real-time CPU, RAM, disk, and uptime monitoring at a glance. No Task Manager needed.",
  },
  {
    icon: Terminal,
    title: "Command Bar",
    description: "Type commands like 'clean temp' or 'open downloads' — instant actions without navigating menus.",
  },
  {
    icon: Shield,
    title: "Privacy-First",
    description: "Everything runs locally. No data leaves your machine. No cloud accounts required.",
  },
  {
    icon: Brain,
    title: "Built-in AI Assistant",
    description: "Offline AI powered by Ollama. Chat, analyze files, and get help without sending data anywhere.",
  },
  {
    icon: Zap,
    title: "Quick Actions",
    description: "One-click access to temp cleanup, file management, Windows tools, and system utilities.",
  },
  {
    icon: Palette,
    title: "Theme Engine",
    description: "Dark, Light, Blue, Navy, and more. Make it yours with fully customizable appearance.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm font-mono text-primary tracking-wider uppercase">What it does</span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-3 gradient-text">
            Everything you need. Nothing you don't.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
            Built around faster actions, cleaner layout, and honest feedback.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.1}>
              <div className="group relative p-8 rounded-2xl glass-panel hover:border-primary/30 transition-all duration-300 h-full">
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
