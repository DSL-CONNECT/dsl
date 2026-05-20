import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Star, AlertCircle, Send, CheckCircle, Loader2 } from "lucide-react";
import { clients } from "@/data/clients";
import aboutImg from "@/assets/about-team.jpg";
import PageTransition from "@/components/PageTransition";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Clients = () => {
  const [filter, setFilter] = useState<"all" | "active" | "previous">("all");
  const [reviewForm, setReviewForm] = useState({ name: "", company: "", role: "", email: "", rating: 5, reviewText: "", displayPublicly: false });
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [reviewLoading, setReviewLoading] = useState(false);

  const filtered = filter === "all" ? clients : clients.filter((c) => c.status === filter);
  const activeCount = clients.filter((c) => c.status === "active").length;
  const previousCount = clients.filter((c) => c.status === "previous").length;

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setReviewLoading(true);
    try {
      const { error } = await supabase.from("reviews").insert({
        name: reviewForm.name,
        company: reviewForm.company || null,
        role: reviewForm.role || null,
        email: reviewForm.email || null,
        rating: reviewForm.rating,
        review_text: reviewForm.reviewText,
        display_publicly: reviewForm.displayPublicly,
      });
      if (error) throw error;
      setReviewSubmitted(true);
    } catch {
      toast({ title: "Error", description: "Could not submit review. Please try again.", variant: "destructive" });
    } finally {
      setReviewLoading(false);
    }
  };

  return (
    <PageTransition>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={aboutImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/50" />
        </div>
        <div className="relative z-10 section-padding">
          <div className="container-wide mx-auto text-primary-foreground">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">Our Clients</h1>
              <p className="text-lg opacity-80">Real businesses we've worked with. Real outcomes. Real partnerships.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-surface to-background">
        <div className="container-wide mx-auto">
          <div className="flex gap-2 mb-10">
            {[
              { key: "all", label: `All (${clients.length})` },
              { key: "active", label: `Active (${activeCount})` },
              { key: "previous", label: `Previous (${previousCount})` },
            ].map((f) => (
              <button key={f.key} onClick={() => setFilter(f.key as any)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === f.key ? "bg-primary text-primary-foreground shadow-md" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>{f.label}</button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((client) => (
              <motion.div key={client.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 300 }}>
                  <div className="card-elevated p-6 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <div><h3 className="font-display font-semibold text-lg">{client.name}</h3></div>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${client.status === "active" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>{client.status === "active" ? "Active" : "Previous"}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{client.shortDescription}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {client.tags.map((tag) => (<span key={tag} className="text-xs bg-surface px-2 py-0.5 rounded-full text-muted-foreground">{tag}</span>))}
                    </div>
                    <div className="bg-gradient-to-br from-surface to-card rounded-lg p-4 mb-4 flex-1">
                      <div className="flex gap-0.5 mb-2">{[1,2,3,4,5].map((s) => (<Star key={s} size={12} className="fill-accent text-accent" />))}</div>
                      <p className="text-sm italic text-muted-foreground leading-relaxed">"{client.testimonial}"</p>
                      {client.reviewStatus === "sample" && (<p className="text-xs text-muted-foreground/60 mt-2 flex items-center gap-1"><AlertCircle size={10} /> Sample testimonial (editable)</p>)}
                    </div>
                    {client.linkStatus === "verified" && client.publicLink ? (
                      <a href={client.publicLink} target="_blank" rel="noopener noreferrer" className="text-sm text-primary font-medium inline-flex items-center gap-1 hover:underline mt-auto">Visit <ExternalLink size={12} /></a>
                    ) : (
                      <p className="text-xs text-muted-foreground/60 mt-auto italic">Link pending verification</p>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Wall */}
      <section className="section-padding bg-surface">
        <div className="container-wide mx-auto">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">What our clients say</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {clients.filter((c) => c.featured).map((client) => (
              <motion.div key={client.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <motion.div whileHover={{ y: -2 }}>
                  <div className="card-elevated p-6">
                    <div className="flex gap-0.5 mb-3">{[1,2,3,4,5].map((s) => (<Star key={s} size={14} className="fill-accent text-accent" />))}</div>
                    <p className="text-sm italic text-muted-foreground leading-relaxed mb-4">"{client.testimonial}"</p>
                    <div><p className="font-semibold text-sm">{client.name}</p><p className="text-xs text-muted-foreground">{client.category}</p></div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Review */}
      <section className="section-padding bg-gradient-to-b from-background to-surface">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Worked with us?</h2>
          <p className="text-muted-foreground mb-8">We'd love to hear about your experience. Submit a review and help future clients make confident decisions.</p>
          {reviewSubmitted ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <CheckCircle size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Thank you for your review!</h3>
              <p className="text-muted-foreground">Your review has been submitted and will be reviewed by our team.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleReviewSubmit} className="max-w-md mx-auto space-y-4 text-left">
              <input required value={reviewForm.name} onChange={(e) => setReviewForm({...reviewForm, name: e.target.value})} placeholder="Your Name *" className="w-full bg-card border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <div className="grid grid-cols-2 gap-3">
                <input value={reviewForm.company} onChange={(e) => setReviewForm({...reviewForm, company: e.target.value})} placeholder="Company" className="w-full bg-card border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                <input value={reviewForm.role} onChange={(e) => setReviewForm({...reviewForm, role: e.target.value})} placeholder="Role" className="w-full bg-card border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <input type="email" value={reviewForm.email} onChange={(e) => setReviewForm({...reviewForm, email: e.target.value})} placeholder="Email (optional)" className="w-full bg-card border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <div>
                <label className="block text-sm font-medium mb-2">Rating</label>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((s) => (
                    <button key={s} type="button" onClick={() => setReviewForm({...reviewForm, rating: s})}>
                      <Star size={24} className={`transition-colors ${s <= reviewForm.rating ? "fill-accent text-accent" : "text-muted-foreground/30"}`} />
                    </button>
                  ))}
                </div>
              </div>
              <textarea required value={reviewForm.reviewText} onChange={(e) => setReviewForm({...reviewForm, reviewText: e.target.value})} placeholder="Share your experience *" rows={4} className="w-full bg-card border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="checkbox" checked={reviewForm.displayPublicly} onChange={(e) => setReviewForm({...reviewForm, displayPublicly: e.target.checked})} className="accent-primary" />
                I give permission to display this review publicly
              </label>
              <button type="submit" disabled={reviewLoading} className="btn-primary w-full inline-flex items-center justify-center gap-2">
                {reviewLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />} Submit Review
              </button>
            </form>
          )}
        </div>
      </section>
    </PageTransition>
  );
};

export default Clients;
