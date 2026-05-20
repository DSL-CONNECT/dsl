import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import {
  Wallet,
  Trophy,
  BookOpen,
  Star,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Zap,
  Shield,
  ExternalLink,
} from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.png";
import profileBanner from "@/assets/profile-banner.png";

const achievements = [
  { icon: BookOpen, label: "First Lesson", description: "Completed your first lesson", earned: true },
  { icon: Wallet, label: "Wallet Connected", description: "Connected a Base wallet", earned: true },
  { icon: Zap, label: "Fast Learner", description: "Complete 5 lessons in one day", earned: false },
  { icon: Shield, label: "Safety Pro", description: "Completed Safety & Trust module", earned: true },
  { icon: Trophy, label: "Top Builder", description: "Reached the leaderboard top 10", earned: false },
  { icon: Star, label: "Community Star", description: "Shared progress on social media", earned: false },
];

const recentActivity = [
  { action: "Completed lesson", detail: "What Is Base?", time: "2 hours ago", icon: CheckCircle2 },
  { action: "Started lesson", detail: "How Base Works", time: "3 hours ago", icon: BookOpen },
  { action: "Earned badge", detail: "Safety Pro", time: "1 day ago", icon: Shield },
  { action: "Wallet connected", detail: "0x1a2b...9f8e", time: "2 days ago", icon: Wallet },
];

const Profile = () => (
  <MainLayout>
    <div className="max-w-4xl mx-auto pb-8">
      {/* Banner */}
      <div className="relative h-40 sm:h-52 rounded-b-2xl overflow-hidden">
        <img
          src={profileBanner}
          alt="Profile banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Avatar & Name */}
      <div className="px-4 -mt-14 relative z-10">
        <div className="flex items-end gap-4">
          <Avatar className="h-24 w-24 border-4 border-background shadow-lg">
            <AvatarImage src={profileAvatar} alt="Profile avatar" />
            <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">
              BA
            </AvatarFallback>
          </Avatar>
          <div className="pb-1">
            <h1 className="text-2xl font-display font-bold text-foreground">
              Based Explorer
            </h1>
            <p className="text-sm text-muted-foreground">
              0x1a2b...9f8e · Joined 3 days ago
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 mt-6 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Lessons", value: "4/10", icon: BookOpen },
            { label: "Badges", value: "3", icon: Trophy },
            { label: "Streak", value: "2 days", icon: Zap },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="text-center">
                <CardContent className="p-4">
                  <stat.icon className="h-5 w-5 mx-auto mb-1 text-primary" />
                  <p className="text-xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Learning Progress */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Learning Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "What Is Base?", progress: 100 },
              { name: "How Base Works", progress: 60 },
              { name: "Safety & Trust", progress: 100 },
              { name: "What You Can Build", progress: 20 },
            ].map((lesson) => (
              <div key={lesson.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-foreground font-medium">{lesson.name}</span>
                  <span className="text-muted-foreground">{lesson.progress}%</span>
                </div>
                <Progress value={lesson.progress} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {achievements.map((a) => (
                <div
                  key={a.label}
                  className={`flex flex-col items-center text-center p-3 rounded-xl border transition-colors ${
                    a.earned
                      ? "bg-primary/5 border-primary/20"
                      : "bg-muted/40 border-border opacity-50"
                  }`}
                >
                  <a.icon
                    className={`h-6 w-6 mb-1 ${
                      a.earned ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                  <p className="text-xs font-semibold text-foreground">{a.label}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{a.description}</p>
                  {a.earned && (
                    <Badge variant="secondary" className="mt-1 text-[10px] px-1.5 py-0">
                      Earned
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">{item.action}</p>
                    <p className="text-xs text-muted-foreground truncate">{item.detail}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{item.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Connect Wallet CTA */}
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="p-6 text-center">
            <Wallet className="h-8 w-8 mx-auto mb-3 text-primary" />
            <h3 className="text-lg font-bold text-foreground mb-1">Connect Your Wallet</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Link your Base wallet to track onchain activity, earn rewards, and unlock exclusive features.
            </p>
            <Button className="gap-2">
              <Wallet className="h-4 w-4" />
              Connect Wallet
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </MainLayout>
);

export default Profile;
