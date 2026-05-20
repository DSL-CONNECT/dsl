import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Compass, Wallet, Sparkles, ChevronRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Discover Base",
    description: "Learn what Base is and why it matters for creators",
    icon: Compass,
    link: "/learn",
  },
  {
    id: 2,
    title: "Set Up Your Wallet",
    description: "Get your digital wallet to start your journey",
    icon: Wallet,
    link: "/learn#wallet-setup",
  },
  {
    id: 3,
    title: "Start Exploring",
    description: "Find opportunities and start creating onchain",
    icon: Sparkles,
    link: "/opportunities",
  },
];

export function JourneySteps() {
  return (
    <section className="px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Get Started in 3 Steps
        </h2>
        <p className="text-muted-foreground mt-2 text-sm">
          Your journey from curious to confident
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-3">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={step.link}>
                <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:shadow-md hover:border-primary/30 transition-all duration-200 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        Step {step.id}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground mt-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
