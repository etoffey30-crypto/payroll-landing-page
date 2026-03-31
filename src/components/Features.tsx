import {
  Calculator,
  Building2,
  Users,
  CalendarDays,
  MonitorSmartphone,
  BarChart3,
  ClipboardList,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import { TiltCard, SpotlightCard, ScrollReveal, StaggerContainer, StaggerItem } from "./AnimationUtils";

const features = [
  {
    icon: Calculator,
    title: "Payroll Processing",
    desc: "Weekly, bi-weekly & monthly payroll with automatic salary calculations, payslip generation, and bank transfers.",
    color: "from-secondary to-accent",
  },
  {
    icon: Building2,
    title: "Tax & Compliance",
    desc: "Automated PAYE (GRA), SSNIT Tier 1 & 2, pension compliance, and tax filing — always up to date with Ghana law.",
    color: "from-primary to-secondary",
  },
  {
    icon: Users,
    title: "Employee Management",
    desc: "Onboarding, termination, contracts, bio-data, training tracking, and expense management in one place.",
    color: "from-accent to-secondary",
  },
  {
    icon: CalendarDays,
    title: "Attendance & Leave",
    desc: "Real-time attendance tracking, leave requests & approvals, and balance tracking for every employee.",
    color: "from-secondary to-primary",
  },
  {
    icon: MonitorSmartphone,
    title: "Self-Service Portal",
    desc: "Employees view payslips, check leave balances, and update personal info from anywhere — fully cloud-based.",
    color: "from-primary to-accent",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    desc: "Payroll reports, tax reports (PAYE, SSNIT), general ledger, and custom admin dashboards at a glance.",
    color: "from-accent to-primary",
  },
  {
    icon: ClipboardList,
    title: "Task Management",
    desc: "Assign tasks to employees, track progress & deadlines, and keep your team aligned and productive.",
    color: "from-secondary to-accent",
  },
  {
    icon: Mail,
    title: "Communication",
    desc: "Automated payslip emails, SMS/email notifications, and streamlined internal communications.",
    color: "from-primary to-secondary",
  },
];

const Features = () => (
  <section id="features" className="py-20 md:py-28 bg-background relative overflow-hidden">
    {/* Animated background decoration */}
    <motion.div
      className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none"
      animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
      transition={{ duration: 8, repeat: Infinity }}
    />
    <motion.div
      className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none"
      animate={{ scale: [1, 1.3, 1], y: [0, -20, 0] }}
      transition={{ duration: 10, repeat: Infinity, delay: 1 }}
    />

    <div className="container mx-auto px-4 relative z-10">
      <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
        <motion.span
          className="text-sm font-semibold text-secondary uppercase tracking-wider inline-block"
          whileHover={{ scale: 1.1, letterSpacing: "0.2em" }}
        >
          Features
        </motion.span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-foreground">
          Everything You Need to Run{" "}
          <span className="text-gradient">Payroll & HR</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          A complete suite of tools designed specifically for Ghanaian businesses
          — from salary processing to full HR management.
        </p>
      </ScrollReveal>

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
        {features.map((f) => (
          <StaggerItem key={f.title}>
            <TiltCard>
              <SpotlightCard className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border border-border h-full group">
                <motion.div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <f.icon className="w-6 h-6 text-primary-foreground" />
                </motion.div>
                <motion.h3
                  className="font-bold text-foreground mb-2 group-hover:text-secondary transition-colors"
                  whileHover={{ x: 4 }}
                >
                  {f.title}
                </motion.h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
                {/* Animated bottom border on hover */}
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-secondary to-accent mt-4 origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
              </SpotlightCard>
            </TiltCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default Features;
