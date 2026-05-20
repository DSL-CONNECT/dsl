import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import exchangeMockup from "@/assets/exchange-mockup.png";

export function ExchangeBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="px-4 py-6"
    >
      <Link to="/wallet">
        <div className="max-w-2xl mx-auto bg-card rounded-2xl border border-border p-5 flex items-center gap-5 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
          <img
            src={exchangeMockup}
            alt="USDC to Kwacha exchange"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-foreground">
              USDC → Kwacha Exchange
            </h3>
            <p className="text-sm text-muted-foreground mt-0.5">
              1 USDC = <span className="text-primary font-medium">K21</span> · Available 7am–10pm CAT
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Min K525 (25 USDC)
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
        </div>
      </Link>
    </motion.section>
  );
}
