import { useState } from "react";
import { MapPin, Mail, Phone, Send, Loader2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, MagneticButton, TiltCard, SpotlightCard } from "./AnimationUtils";
import { toast } from "sonner";

const contactItems = [
  { icon: MapPin, label: "Address", value: "Kokomlemle, Accra, Ghana" },
  { icon: Mail, label: "Email", value: "admin@payrollghana.net" },
  { icon: Phone, label: "Phone", value: "+233 596 561 245" },
];

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/xreoegvk", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        toast.success("Message sent successfully! We'll get back to you soon.");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      setStatus("error");
      toast.error("Something went wrong. Please check your connection.");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/50 relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollReveal direction="left">
            <motion.span
              className="text-sm font-semibold text-secondary uppercase tracking-wider"
              whileHover={{ letterSpacing: "0.2em" }}
            >
              Contact Us
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-foreground">
              Let's Get You <span className="text-gradient">Started</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Ready to simplify your payroll? Reach out for a free consultation or demo of our platform.
            </p>

            <div className="mt-8 space-y-5">
              {contactItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex items-start gap-4 group cursor-default"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ x: 12 }}
                >
                  <motion.div
                    className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0"
                    whileHover={{ rotate: 15, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-secondary transition-colors">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <TiltCard>
              <SpotlightCard className="bg-card rounded-2xl p-8 border border-border shadow-card">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <motion.div whileHover={{ scale: 1.01, y: -2 }}>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                    <motion.input
                      required
                      name="name"
                      type="text"
                      placeholder="Kwame Asante"
                      whileFocus={{ scale: 1.01, borderColor: "hsl(200,100%,50%)" }}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.01, y: -2 }}>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                    <motion.input
                      required
                      name="email"
                      type="email"
                      placeholder="kwame@company.com"
                      whileFocus={{ scale: 1.01, borderColor: "hsl(200,100%,50%)" }}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.01, y: -2 }}>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Company Size</label>
                    <select name="companySize" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-secondary cursor-pointer">
                      <option>1-10 employees</option>
                      <option>11-50 employees</option>
                      <option>51-100 employees</option>
                      <option>100+ employees</option>
                    </select>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.01, y: -2 }}>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      placeholder="Tell us about your payroll needs..."
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                    />
                  </motion.div>
                  <MagneticButton>
                    <motion.button
                      type="submit"
                      disabled={status === "loading"}
                      whileHover={status === "idle" ? { scale: 1.03, boxShadow: "0 0 30px hsl(200 100% 50% / 0.3)" } : {}}
                      whileTap={status === "idle" ? { scale: 0.95 } : {}}
                      className="w-full gradient-primary text-primary-foreground py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : status === "success" ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          Sent!
                        </>
                      ) : (
                        <>
                          Request a Demo
                          <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                            <Send className="w-4 h-4" />
                          </motion.span>
                        </>
                      )}
                    </motion.button>
                  </MagneticButton>
                </form>
              </SpotlightCard>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
