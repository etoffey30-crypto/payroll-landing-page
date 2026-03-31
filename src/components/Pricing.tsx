import { Check, Star } from "lucide-react";
import { motion } from "framer-motion";
import { TiltCard, ScrollReveal, StaggerContainer, StaggerItem, MagneticButton, SpotlightCard } from "./AnimationUtils";

const plans = [
  { name: "Free", price: "₵0", period: "", users: 1, employees: 2, highlight: false },
  { name: "SME", price: "₵300", period: "/month", users: 1, employees: 15, highlight: false },
  { name: "SME+", price: "₵500", period: "/month", users: 2, employees: 30, highlight: true },
  { name: "Corporate", price: "₵750", period: "/month", users: 3, employees: 50, highlight: false },
  { name: "Enterprise", price: "₵1,000", period: "/month", users: 5, employees: 100, highlight: false },
];

const allFeatures = ["HR + Payroll", "Attendance & Leave", "Task Management", "Expense Tracking", "Training", "24/7 Support"];

const Pricing = () => (
  <section id="pricing" className="py-20 md:py-28 bg-muted/50 relative overflow-hidden">
    {/* Animated background orbs */}
    <motion.div
      className="absolute top-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] pointer-events-none"
      animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
      transition={{ duration: 7, repeat: Infinity }}
    />

    <div className="container mx-auto px-4 relative z-10">
      <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
        <motion.span
          className="text-sm font-semibold text-secondary uppercase tracking-wider inline-block"
          whileHover={{ scale: 1.1 }}
        >
          Pricing
        </motion.span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-foreground">
          Plans That <span className="text-gradient">Grow</span> With You
        </h2>
        <p className="mt-4 text-muted-foreground">
          Start free and scale as your business grows. All plans include the full HR + Payroll suite.
        </p>
      </ScrollReveal>

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5" staggerDelay={0.1}>
        {plans.map((p) => (
          <StaggerItem key={p.name}>
            <TiltCard>
              <SpotlightCard
                className={`rounded-2xl p-6 flex flex-col border transition-all duration-300 h-full relative ${
                  p.highlight
                    ? "gradient-primary text-primary-foreground border-transparent shadow-elevated scale-[1.03]"
                    : "bg-card border-border shadow-card"
                }`}
              >
                {p.highlight && (
                  <motion.div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-secondary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Star className="w-3 h-3" /> Most Popular
                  </motion.div>
                )}
                <motion.h3
                  className={`font-bold text-lg ${p.highlight ? "text-primary-foreground" : "text-foreground"}`}
                  whileHover={{ scale: 1.05 }}
                >
                  {p.name}
                </motion.h3>
                <div className="mt-4 mb-1">
                  <motion.span
                    className="text-3xl font-extrabold"
                    whileHover={{ scale: 1.1 }}
                    style={{ display: "inline-block" }}
                  >
                    {p.price}
                  </motion.span>
                  <span className={`text-sm ${p.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {p.period}
                  </span>
                </div>
                <p className={`text-xs mb-5 ${p.highlight ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {p.users} user{p.users > 1 ? "s" : ""} · up to {p.employees} employees
                </p>
                <div className="space-y-2 flex-1">
                  {allFeatures.map((feat, i) => (
                    <motion.div
                      key={feat}
                      className="flex items-center gap-2 text-sm"
                      whileHover={{ x: 6, scale: 1.02 }}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.3 }}>
                        <Check className="w-4 h-4 shrink-0 text-secondary" />
                      </motion.div>
                      <span className={p.highlight ? "text-primary-foreground/90" : "text-muted-foreground"}>
                        {feat}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <MagneticButton className="mt-6">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsl(200 100% 50% / 0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    className={`block text-center py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      p.highlight
                        ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                        : "gradient-primary text-primary-foreground hover:opacity-90"
                    }`}
                  >
                    {p.price === "₵0" ? "Start Free" : "Choose Plan"}
                  </motion.a>
                </MagneticButton>
              </SpotlightCard>
            </TiltCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default Pricing;
