import { motion } from "framer-motion";
import { Heart, ExternalLink, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function DonationSection() {
  const donationAddress = "imanafrikah.base.eth";
  
  const copyAddress = () => {
    navigator.clipboard.writeText(donationAddress);
    toast.success("Address copied to clipboard!");
  };

  return (
    <section className="px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto"
      >
        <div className="bg-card border border-border rounded-2xl p-6 text-center">
          <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
            <Heart className="w-6 h-6 text-destructive" />
          </div>

          <h3 className="text-lg font-semibold text-foreground">
            Support This Project
          </h3>
          
          <p className="text-sm text-muted-foreground mt-2 mb-4 leading-relaxed">
            Diyama is built with love for the African creator community. 
            Any amount from <span className="text-primary font-medium">0.03 ETH</span> and above is deeply appreciated 💙
          </p>

          <div className="flex items-center justify-center gap-2 bg-secondary rounded-xl px-4 py-3 mb-4">
            <code className="text-sm text-primary font-mono">
              {donationAddress}
            </code>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={copyAddress}
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>

          <a
            href="https://base.app/invite/imanafrikah/WTL0V0H3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
          >
            View on Base
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
