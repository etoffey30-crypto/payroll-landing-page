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
  <section id="pricing" className="py-24 md:py-32 bg-muted/50 relative overflow-hidden">
    {/* Animated background orbs */}
    <motion.div
      className="absolute top-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] pointer-events-none"
      animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
      transition={{ duration: 7, repeat: Infinity }}
    />

    <div className="container mx-auto px-4 relative z-10 pt-10">
      <ScrollReveal className="text-center max-w-2xl mx-auto mb-20">
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

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6" staggerDelay={0.1}>
        {plans.map((p) => (
          <StaggerItem key={p.name}>
            <TiltCard>
              <SpotlightCard
                className={`rounded-2xl p-6 flex flex-col border transition-all duration-500 h-full relative group ${
                  p.highlight
                    ? "gradient-primary text-white border-transparent shadow-elevated scale-[1.05] ring-2 ring-secondary/20"
                    : "bg-white dark:bg-card border-border shadow-card hover:border-secondary/30"
                }`}
              >
                {p.highlight && (
                  <motion.div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-secondary text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-lg z-50 whitespace-nowrap"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Star className="w-3 h-3 fill-white" /> Most Popular
                  </motion.div>
                )}
                <motion.h3
                  className={`font-bold text-xl ${p.highlight ? "text-white" : "text-foreground"}`}
                  whileHover={{ x: 3 }}
                >
                  {p.name}
                </motion.h3>
                <div className="mt-6 mb-1">
                  <motion.span
                    className="text-4xl font-black"
                    style={{ display: "inline-block" }}
                  >
                    {p.price}
                  </motion.span>
                  <span className={`text-sm ml-1 ${p.highlight ? "text-white/80" : "text-muted-foreground"}`}>
                    {p.period}
                  </span>
                </div>
                <p className={`text-xs mb-8 font-medium ${p.highlight ? "text-white/70" : "text-muted-foreground"}`}>
                  {p.users} user{p.users > 1 ? "s" : ""} · up to {p.employees} employees
                </p>
                <div className="space-y-4 flex-1">
                  {allFeatures.map((feat, i) => (
                    <motion.div
                      key={feat}
                      className="flex items-center gap-2.5 text-sm"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Check className={`w-4 h-4 shrink-0 ${p.highlight ? "text-white" : "text-secondary font-bold"}`} />
                      <span className={p.highlight ? "text-white/90" : "text-foreground/80 font-medium"}>
                        {feat}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <MagneticButton className="mt-8">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`block text-center py-3 rounded-xl text-sm font-bold transition-all ${
                      p.highlight
                        ? "bg-white text-primary hover:bg-white/90 shadow-xl"
                        : "gradient-primary text-white hover:shadow-lg hover:shadow-secondary/20"
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
