import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WalletButton() {
  return (
    <div className="fixed top-4 right-4 z-50">
      <Button 
        variant="outline"
        className="gap-2 px-4 py-2 text-sm rounded-xl border-border bg-card/90 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
        onClick={() => console.log("Connect wallet")}
      >
        <Wallet className="w-4 h-4 text-primary" />
        <span className="hidden sm:inline">Connect Wallet</span>
      </Button>
    </div>
  );
}
