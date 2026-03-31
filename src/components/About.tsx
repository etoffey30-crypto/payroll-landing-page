import { ShieldCheck, Zap, Landmark, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { TiltCard, SpotlightCard, ScrollReveal, StaggerContainer, StaggerItem } from "./AnimationUtils";

const usps = [
  { icon: Zap, title: "Full Automation", desc: "No more manual Excel payroll. Automate salary, taxes, and reporting." },
  { icon: Landmark, title: "Ghana Compliance", desc: "Built for GRA, SSNIT, Labour Act — always up to date with local law." },
  { icon: ShieldCheck, title: "ISO 27001 Security", desc: "Enterprise-grade security to keep your company and employee data safe." },
  { icon: Layers, title: "All-in-One Platform", desc: "HR + Payroll + Tasks + Attendance in a single centralized system." },
];

const About = () => (
  <section id="about" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal direction="left">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Why PayrollGhana</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-foreground">
            Save Up to <motion.span className="text-gradient inline-block" whileHover={{ scale: 1.2 }}>50%</motion.span> on Payroll Costs
          </h2>
          <motion.p
            className="mt-4 text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            PayrollGhana is a subsidiary of JPCann Associates Ltd, offering both self-service software and full payroll outsourcing services. Whether you run payroll yourself or let us handle it, you get unmatched accuracy and compliance.
          </motion.p>
          <motion.p
            className="mt-3 text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Trusted by businesses across Ghana — from startups to enterprises — our cloud-based system is accessible anywhere, anytime.
          </motion.p>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 gap-5" staggerDelay={0.12}>
          {usps.map((u) => (
            <StaggerItem key={u.title}>
              <TiltCard>
                <SpotlightCard className="bg-card rounded-2xl p-6 border border-border shadow-card h-full">
                  <motion.div
                    className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center mb-3"
                    whileHover={{ rotate: 15, scale: 1.15 }}
                  >
                    <u.icon className="w-5 h-5 text-primary-foreground" />
                  </motion.div>
                  <motion.h3 className="font-bold text-foreground mb-1" whileHover={{ x: 3 }}>{u.title}</motion.h3>
                  <p className="text-sm text-muted-foreground">{u.desc}</p>
                </SpotlightCard>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  </section>
);

export default About;
