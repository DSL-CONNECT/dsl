import { motion } from "framer-motion";
import { Users, TrendingUp, Palette, Globe } from "lucide-react";

const stats = [
  { label: "Active Creators", value: "10K+", icon: Users },
  { label: "Weekly Opportunities", value: "50+", icon: TrendingUp },
  { label: "Total Mints", value: "1M+", icon: Palette },
  { label: "Community", value: "100K+", icon: Globe },
];

export function QuickStats() {
  return (
    <section className="px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          The Base Community
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-card border border-border rounded-xl p-5 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
