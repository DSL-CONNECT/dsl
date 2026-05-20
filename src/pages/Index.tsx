import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, BookOpen, MessageSquare, TrendingUp, Lightbulb } from "lucide-react";
import { services } from "@/data/services";
import { clients } from "@/data/clients";
import heroImg from "@/assets/hero-consultant.jpg";
import servicesImg from "@/assets/services-strategy.jpg";
import PageTransition from "@/components/PageTransition";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Index = () => {
  const featuredClients = clients.filter((c) => c.featured);
  const previewServices = services.slice(0, 6);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>
        <div className="relative z-10 section-padding">
          <div className="container-wide mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl text-primary-foreground"
            >
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-accent font-semibold text-sm uppercase tracking-wider mb-4"
              >
                Welcome to Diyama Solutions
              </motion.p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                Bring the challenge.{" "}
                <span className="text-accent">We'll help you move.</span>
              </h1>
              <p className="text-lg sm:text-xl opacity-80 leading-relaxed mb-8 max-w-2xl">
                Whether you're building, fixing, growing, or figuring things out — you're welcome here. We help turn business confusion into clarity and traction.
              </p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/ai" className="btn-accent inline-flex items-center gap-2">
                  <MessageSquare size={18} /> Talk to Diyama
                </Link>
                <Link to="/consultations" className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-6 py-3 rounded-lg font-medium transition-all inline-flex items-center gap-2">
                  Book Consultation <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive prompt */}
      <section className="section-padding bg-gradient-to-b from-surface to-background">
        <div className="container-narrow mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              What are you trying to move right now?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Pick what resonates — we'll point you in the right direction.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
            {[
              { label: "Get more customers", icon: TrendingUp, path: "/services" },
              { label: "Build my brand", icon: Sparkles, path: "/services" },
              { label: "Launch something new", icon: Lightbulb, path: "/business-fit" },
              { label: "Grow online visibility", icon: Users, path: "/services" },
              { label: "Talk to an advisor", icon: MessageSquare, path: "/ai" },
              { label: "Learn something useful", icon: BookOpen, path: "/learn" },
            ].map((item, i) => (
              <motion.div key={item.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
                <Link
                  to={item.path}
                  className="card-elevated p-4 sm:p-5 flex flex-col items-center gap-3 text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <item.icon size={24} className="text-primary group-hover:text-accent transition-colors" />
                  </motion.div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={servicesImg} alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-surface/95" />
        </div>
        <div className="relative z-10 section-padding">
          <div className="container-wide mx-auto">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold">What we help with</h2>
                <p className="text-muted-foreground mt-2">Practical services that move your business forward.</p>
              </div>
              <Link to="/services" className="hidden sm:inline-flex items-center gap-1 text-primary font-medium text-sm hover:underline">
                View all <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {previewServices.map((s, i) => (
                <motion.div key={s.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                  <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
                    <div className="card-elevated p-6 h-full flex flex-col">
                      <span className="text-2xl mb-3">{s.icon}</span>
                      <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
                      <p className="text-sm text-muted-foreground flex-1">{s.description}</p>
                      <Link to="/services" className="mt-4 text-primary text-sm font-medium inline-flex items-center gap-1 hover:underline">
                        Learn more <ArrowRight size={12} />
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            <Link to="/services" className="sm:hidden mt-6 btn-outline-primary inline-flex items-center gap-1 text-sm">
              View all services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Client Trust Strip */}
      <section className="section-padding bg-gradient-to-b from-background to-surface">
        <div className="container-wide mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-3">Trusted by real businesses</h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            From food brands to DAOs, transport companies to music artists — we've helped businesses across industries.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {featuredClients.map((c, i) => (
              <motion.div key={c.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <motion.div whileHover={{ scale: 1.03 }}>
                  <div className="card-elevated p-4 text-center">
                    <p className="font-semibold text-sm text-foreground">{c.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{c.category}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          <Link to="/clients" className="mt-8 inline-flex items-center gap-1 text-primary font-medium text-sm hover:underline">
            See all clients <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Business Fit Teaser */}
      <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
        </div>
        <div className="container-narrow mx-auto text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
              <Sparkles className="mx-auto mb-4 text-accent" size={32} />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Discover your business fit
            </h2>
            <p className="text-lg opacity-80 mb-8 max-w-xl mx-auto">
              Answer a few questions and our AI will generate personalized recommendations, quick wins, and a suggested service bundle — all in under a minute.
            </p>
            <Link to="/business-fit" className="btn-accent inline-flex items-center gap-2">
              Try the Business Fit Generator <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Diyama AI Teaser */}
      <section className="section-padding bg-gradient-to-br from-background via-surface to-background">
        <div className="container-narrow mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Meet Diyama AI
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              A warm, practical AI business advisor. Ask questions about marketing, growth, operations, pricing, or anything business. Available 24/7, no signup needed.
            </p>
            <Link to="/ai" className="btn-primary inline-flex items-center gap-2">
              <MessageSquare size={18} /> Start a conversation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Learn Preview */}
      <section className="section-padding bg-surface">
        <div className="container-wide mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold">Learn with Diyama</h2>
              <p className="text-muted-foreground mt-2">Free guides and insights to help your business grow.</p>
            </div>
            <Link to="/learn" className="hidden sm:inline-flex items-center gap-1 text-primary font-medium text-sm hover:underline">
              Browse all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "How to Get Your First 100 Customers", time: "7 min", cat: "Customer Growth" },
              { title: "Google Maps Optimization Guide", time: "8 min", cat: "Local Marketing" },
              { title: "The Restaurant Growth Playbook", time: "6 min", cat: "Restaurant Growth" },
            ].map((a, i) => (
              <motion.div key={a.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link to="/learn" className="card-elevated p-6 block hover:border-primary/30 transition-all hover:shadow-md">
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">{a.cat}</span>
                    <h3 className="font-display text-lg font-semibold mt-2 mb-2">{a.title}</h3>
                    <p className="text-xs text-muted-foreground">{a.time} read</p>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate Teaser */}
      <section className="section-padding bg-gradient-to-b from-background to-surface">
        <div className="container-narrow mx-auto flex flex-col md:flex-row items-center gap-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="flex-1">
            <h2 className="text-3xl font-display font-bold mb-4">Partner with Diyama</h2>
            <p className="text-muted-foreground mb-6">
              Know someone who needs help growing their business? Join our affiliate program and earn commission for every client you refer.
            </p>
            <Link to="/affiliate" className="btn-outline-primary inline-flex items-center gap-2 text-sm">
              Learn about the program <ArrowRight size={14} />
            </Link>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="flex-1">
            <div className="card-elevated p-8 text-center bg-gradient-to-br from-card to-surface">
              <p className="text-4xl font-display font-bold text-primary">🤝</p>
              <p className="font-semibold mt-3">Refer. Earn. Grow together.</p>
              <p className="text-sm text-muted-foreground mt-2">Simple, transparent, commission-based.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-background to-surface" />
        <div className="container-narrow mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Ready to move forward?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            You don't need to have everything figured out. Bring the challenge — we'll help you structure the next move.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/consultations" className="btn-primary inline-flex items-center gap-2">
              Book a Consultation <ArrowRight size={16} />
            </Link>
            <Link to="/ai" className="btn-outline-primary inline-flex items-center gap-2">
              Talk to Diyama AI
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;
