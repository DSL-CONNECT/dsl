import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";

export function HeroSection() {
  return (
    <section className="relative px-4 pt-8 pb-12">
      {/* Hero illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto mb-8 rounded-3xl overflow-hidden"
      >
        <img
          src={heroIllustration}
          alt="Diyama - Onchain for creators"
          className="w-full h-40 sm:h-56 object-cover"
        />
      </motion.div>

      {/* Main heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
          Your Guide to the{" "}
          <span className="text-primary">Onchain World</span>
        </h1>
        
        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
          Learn, build, and earn on Base — no experience needed, just curiosity.
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-3 justify-center mt-8 max-w-md mx-auto"
      >
        <Link to="/learn" className="flex-1">
          <Button className="w-full gap-2 h-12 text-base rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/20">
            Start Learning
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
        <Button
          variant="outline"
          className="flex-1 gap-2 h-12 text-base rounded-xl border-border hover:bg-secondary"
        >
          <Wallet className="w-4 h-4" />
          Connect Wallet
        </Button>
      </motion.div>
    </section>
  );
}
