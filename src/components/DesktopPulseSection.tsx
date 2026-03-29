import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import widgetImage from "@/assets/app-widget.png";
import desktopFullImage from "@/assets/app-desktop-full.png";

const DesktopPulseSection = () => (
  <section className="py-32 px-4 relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-primary/3 blur-[150px] rounded-full" />
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      <ScrollReveal className="text-center mb-16">
        <span className="text-sm font-mono text-primary tracking-wider uppercase">Always On Display</span>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-3 gradient-text">
          Desktop Pulse — Your live widget
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
          A floating Windows widget that stays on your desktop. Real-time CPU, RAM, disk usage and engine status — 
          always visible, never in the way.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Widget close-up */}
        <ScrollReveal delay={0.1}>
          <div className="relative">
            <motion.div
              className="rounded-2xl overflow-hidden border border-primary/30 box-glow"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={widgetImage}
                alt="Desktop Pulse widget showing CPU 4%, RAM 55%, status Ready"
                className="w-full"
              />
            </motion.div>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-primary/10 blur-[60px] rounded-full" />
          </div>
        </ScrollReveal>

        {/* Info */}
        <ScrollReveal delay={0.2}>
          <div className="space-y-6">
            <div className="space-y-4">
              {[
                { title: "Live System Pulse", desc: "CPU load, RAM usage, disk percentage — updating in real time on your desktop." },
                { title: "Engine Status", desc: "See if Ollama's local AI engine is running, installed, or needs attention at a glance." },
                { title: "Zero Intrusion", desc: "Stays in the corner. Toggle it on/off from the app. Transparent, minimal, always useful." },
                { title: "Theme Adaptive", desc: "Matches your chosen Noriflow theme. Dark, Neon, Navy — the widget follows." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="p-4 rounded-xl glass-panel hover:border-primary/30 transition-all"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <h4 className="text-foreground font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Full desktop shot */}
      <ScrollReveal delay={0.3} className="mt-16">
        <p className="text-center text-sm text-muted-foreground mb-4">
          Here's how it looks on a real Windows desktop — no staging, no tricks:
        </p>
        <motion.div
          className="rounded-2xl overflow-hidden border border-border/30 box-glow max-w-5xl mx-auto"
          whileHover={{ scale: 1.01 }}
        >
          <img
            src={desktopFullImage}
            alt="Noriflow Desktop Pulse widget running on a real Windows 11 desktop"
            className="w-full"
          />
        </motion.div>
      </ScrollReveal>
    </div>
  </section>
);

export default DesktopPulseSection;
