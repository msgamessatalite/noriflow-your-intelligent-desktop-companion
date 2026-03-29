import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Check, X, Minus } from "lucide-react";

const features = [
  { name: "100% Offline", noriflow: true, ccleaner: false, iolo: false, glarysoft: "partial" },
  { name: "No Account Required", noriflow: true, ccleaner: false, iolo: false, glarysoft: true },
  { name: "Local AI Assistant", noriflow: true, ccleaner: false, iolo: false, glarysoft: false },
  { name: "Real-Time System Stats", noriflow: true, ccleaner: false, iolo: true, glarysoft: "partial" },
  { name: "Desktop Widget", noriflow: true, ccleaner: false, iolo: false, glarysoft: false },
  { name: "Command Bar", noriflow: true, ccleaner: false, iolo: false, glarysoft: false },
  { name: "Theme Customization", noriflow: true, ccleaner: false, iolo: false, glarysoft: false },
  { name: "No Telemetry / Tracking", noriflow: true, ccleaner: false, iolo: false, glarysoft: false },
  { name: "Under 20MB Install", noriflow: true, ccleaner: false, iolo: false, glarysoft: false },
  { name: "Free (No Hidden Upsells)", noriflow: true, ccleaner: false, iolo: false, glarysoft: "partial" },
];

const CellIcon = ({ value }: { value: boolean | string }) => {
  if (value === true) return <Check className="w-5 h-5 text-primary mx-auto" />;
  if (value === false) return <X className="w-5 h-5 text-destructive/60 mx-auto" />;
  return <Minus className="w-5 h-5 text-muted-foreground/40 mx-auto" />;
};

const ComparisonSection = () => (
  <section id="compare" className="py-32 px-4 relative">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/3 blur-[150px] rounded-full" />
    </div>

    <div className="max-w-5xl mx-auto relative z-10">
      <ScrollReveal className="text-center mb-14">
        <span className="text-sm font-mono text-primary tracking-wider uppercase">Honest Comparison</span>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-3 gradient-text">
          See what others won't show you
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
          No scare tactics. No fake scan results. Just real features, compared honestly.
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <div className="rounded-2xl border border-border/30 overflow-hidden glass-panel">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="text-left px-6 py-5 text-muted-foreground font-medium w-[35%]">Feature</th>
                  <th className="px-4 py-5 text-center">
                    <div className="inline-flex flex-col items-center gap-1">
                      <span className="text-primary font-bold text-base">Noriflow</span>
                      <span className="text-[10px] font-mono text-primary/50 bg-primary/5 px-2 py-0.5 rounded-full">FREE</span>
                    </div>
                  </th>
                  <th className="px-4 py-5 text-center text-muted-foreground/70 font-medium">CCleaner</th>
                  <th className="px-4 py-5 text-center text-muted-foreground/70 font-medium">iOlo</th>
                  <th className="px-4 py-5 text-center text-muted-foreground/70 font-medium">Glary Utilities</th>
                </tr>
              </thead>
              <tbody>
                {features.map((f, i) => (
                  <motion.tr
                    key={f.name}
                    className="border-b border-border/10 last:border-0 hover:bg-primary/[0.02] transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <td className="px-6 py-4 text-foreground/90 font-medium">{f.name}</td>
                    <td className="px-4 py-4 bg-primary/[0.03]"><CellIcon value={f.noriflow} /></td>
                    <td className="px-4 py-4"><CellIcon value={f.ccleaner} /></td>
                    <td className="px-4 py-4"><CellIcon value={f.iolo} /></td>
                    <td className="px-4 py-4"><CellIcon value={f.glarysoft} /></td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ScrollReveal>

      <p className="text-center mt-8 text-sm text-muted-foreground/50">
        Data based on publicly available free-tier features as of 2026. We don't trash competitors — we just build differently.
      </p>
    </div>
  </section>
);

export default ComparisonSection;
