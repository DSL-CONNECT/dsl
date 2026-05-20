import { Link, useLocation } from "react-router-dom";
import { 
  Home, Wallet, BookOpen, TrendingUp, Newspaper, Trophy, User, Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/wallet", icon: Wallet, label: "Wallet" },
  { path: "/learn", icon: BookOpen, label: "Learn" },
  { path: "/opportunities", icon: Sparkles, label: "Opps" },
  { path: "/trending", icon: TrendingUp, label: "Trending" },
  { path: "/news", icon: Newspaper, label: "News" },
  { path: "/leaderboard", icon: Trophy, label: "Board" },
  { path: "/profile", icon: User, label: "Profile" },
];

export function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-white/95 backdrop-blur-sm safe-area-bottom">
      <div className="flex items-center justify-around px-1 py-2 max-w-lg mx-auto overflow-x-auto scrollbar-hide">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center min-w-[3rem] py-1"
            >
              <div className={cn(
                "p-1.5 rounded-lg transition-colors",
                isActive ? "bg-primary/10" : ""
              )}>
                <Icon className={cn(
                  "w-5 h-5",
                  isActive ? "text-primary" : "text-muted-foreground"
                )} />
              </div>
              <span className={cn(
                "text-[10px] mt-0.5",
                isActive ? "text-primary font-medium" : "text-muted-foreground"
              )}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
