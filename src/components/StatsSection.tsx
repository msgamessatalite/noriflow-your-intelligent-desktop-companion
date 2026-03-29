import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "v0.5.0", label: "Current release" },
  { value: "4", label: "Core workspaces" },
  { value: "100%", label: "Offline capable" },
  { value: "0", label: "Data sent to cloud" },
];

const StatsSection = () => (
  <section className="py-20 px-4">
    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <ScrollReveal key={stat.label} delay={i * 0.1}>
          <div className="text-center p-6 rounded-2xl glass-panel">
            <motion.span
              className="block text-3xl sm:text-4xl font-black text-primary text-glow"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1, type: "spring" }}
            >
              {stat.value}
            </motion.span>
            <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default StatsSection;
