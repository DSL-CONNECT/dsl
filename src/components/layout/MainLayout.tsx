import { ReactNode } from "react";
import { BottomNav } from "./BottomNav";
import { WalletButton } from "./WalletButton";
import { Footer } from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Top wallet button */}
      <WalletButton />
      
      {/* Main content */}
      <main className="relative pb-24 pt-4">
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Bottom navigation */}
      <BottomNav />
    </div>
  );
}
