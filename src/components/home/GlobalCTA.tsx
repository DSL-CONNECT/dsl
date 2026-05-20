import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GlobalCTA() {
  return (
    <section className="px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          From <span className="text-primary">Lusaka</span> to{" "}
          <span className="text-primary">Los Angeles</span>
        </h2>
        
        <p className="text-base text-muted-foreground mt-3 max-w-lg mx-auto leading-relaxed">
          Creators everywhere are building their future onchain. 
          Your location doesn't matter — your creativity does.
        </p>

        <div className="mt-6">
          <Link to="/learn">
            <Button className="h-12 px-8 text-base rounded-xl gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/20">
              Start Your Journey
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
