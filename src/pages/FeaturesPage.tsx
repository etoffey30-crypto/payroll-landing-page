import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CursorGlow, ScrollReveal, TiltCard, SpotlightCard, StaggerContainer, StaggerItem, ParallaxMouse, MagneticButton, TextReveal } from "@/components/AnimationUtils";
import { motion } from "framer-motion";
import {
  Calculator, Building2, Users, CalendarDays, MonitorSmartphone,
  BarChart3, ClipboardList, Mail, ArrowRight, CheckCircle2, Shield, Zap
} from "lucide-react";
import featuresPayroll from "@/assets/features-payroll.jpg";
import featuresAnalytics from "@/assets/features-analytics.jpg";
import featuresPortal from "@/assets/features-portal.jpg";
import featuresCompliance from "@/assets/features-compliance.jpg";

const features = [
  {
    icon: Calculator, title: "Payroll Processing",
    desc: "Weekly, bi-weekly & monthly payroll with automatic salary calculations, payslip generation, and bank transfers.",
    details: ["Automated salary calculations", "Payslip generation & emailing", "Bank salary transfers", "Payroll reports & deductions"],
    color: "from-secondary to-accent",
  },
  {
    icon: Building2, title: "Tax & Compliance",
    desc: "Automated PAYE (GRA), SSNIT Tier 1 & 2, pension compliance, and tax filing — always up to date with Ghana law.",
    details: ["PAYE (GRA) auto-calculations", "SSNIT Tier 1 & 2 contributions", "Tax filing & returns", "Pension compliance"],
    color: "from-primary to-secondary",
  },
  {
    icon: Users, title: "Employee Management",
    desc: "Onboarding, termination, contracts, bio-data, training tracking, and expense management in one place.",
    details: ["Onboarding & termination flows", "Contracts management", "Staff training tracking", "Expense management"],
    color: "from-accent to-secondary",
  },
  {
    icon: CalendarDays, title: "Attendance & Leave",
    desc: "Real-time attendance tracking, leave requests & approvals, and balance tracking for every employee.",
    details: ["Real-time attendance", "Leave request & approvals", "Balance tracking", "Calendar integration"],
    color: "from-secondary to-primary",
  },
  {
    icon: MonitorSmartphone, title: "Self-Service Portal",
    desc: "Employees view payslips, check leave balances, and update personal info from anywhere — fully cloud-based.",
    details: ["View payslips anytime", "Check leave balances", "Update personal info", "Accessible anywhere"],
    color: "from-primary to-accent",
  },
  {
    icon: BarChart3, title: "Reports & Analytics",
    desc: "Payroll reports, tax reports (PAYE, SSNIT), general ledger, and custom admin dashboards at a glance.",
    details: ["Payroll & tax reports", "General ledger reports", "Custom dashboards", "Export to CSV/PDF"],
    color: "from-accent to-primary",
  },
  {
    icon: ClipboardList, title: "Task Management",
    desc: "Assign tasks to employees, track progress & deadlines, and keep your team aligned and productive.",
    details: ["Task assignment", "Progress tracking", "Deadline management", "Team alignment"],
    color: "from-secondary to-accent",
  },
  {
    icon: Mail, title: "Communication",
    desc: "Automated payslip emails, SMS/email notifications, and streamlined internal communications.",
    details: ["Payslip email automation", "SMS notifications", "Email alerts", "Internal messaging"],
    color: "from-primary to-secondary",
  },
];

const showcases = [
  { img: `${import.meta.env.BASE_URL}assets/features-payroll.png`, title: "Payroll Dashboard", desc: "Process salaries, view deductions, and manage bank transfers from a single intuitive dashboard." },
  { img: featuresCompliance, title: "Tax & Compliance Engine", desc: "Automatically calculate PAYE, SSNIT contributions, and pension filings with full Ghana law compliance." },
  { img: `${import.meta.env.BASE_URL}assets/features-portal.png`, title: "Employee Self-Service", desc: "Give employees access to payslips, leave balances, and personal info updates from any device." },
  { img: featuresAnalytics, title: "Analytics & Reporting", desc: "Gain insights with real-time charts, workforce metrics, and exportable custom reports." },
];

const FeaturesPage = () => (
  <div className="min-h-screen">
    <CursorGlow />
    <Navbar />

    {/* Hero */}
    <section className="gradient-hero relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <ParallaxMouse strength={25} className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent rounded-full blur-[150px]" />
      </ParallaxMouse>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-semibold text-secondary uppercase tracking-wider">
          Platform Features
        </motion.span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4 text-primary-foreground">
          <TextReveal text="Everything You Need for " delay={0.2} />
          <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            <TextReveal text="Payroll & HR" delay={0.6} />
          </span>
        </h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="mt-6 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
          A complete suite of tools designed specifically for Ghanaian businesses — from salary processing to full HR management.
        </motion.p>
      </div>
    </section>

    {/* Feature Showcases with Images */}
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {showcases.map((s, idx) => (
          <ScrollReveal key={s.title} direction={idx % 2 === 0 ? "left" : "right"}>
            <div className={`grid lg:grid-cols-2 gap-12 items-center mb-20 last:mb-0 ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>
                <TiltCard>
                  <motion.img
                    src={s.img}
                    alt={s.title}
                    width={1024}
                    height={640}
                    loading="lazy"
                    className="rounded-2xl shadow-elevated w-full"
                    whileHover={{ scale: 1.02 }}
                  />
                </TiltCard>
              </div>
              <div className={idx % 2 !== 0 ? "lg:order-1" : ""}>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                  {s.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">{s.desc}</p>
                <MagneticButton className="mt-6">
                  <motion.a
                    href="https://app.ghpayroll.net/auth/login"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsl(200 100% 50% / 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2"
                  >
                    Get Started <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* All Features Grid */}
    <section className="py-20 bg-muted/50 relative overflow-hidden">
      <motion.div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Complete <span className="text-gradient">Feature Set</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Every tool your business needs, in one platform.</p>
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
                  <motion.h3 className="font-bold text-foreground mb-2 group-hover:text-secondary transition-colors" whileHover={{ x: 4 }}>
                    {f.title}
                  </motion.h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{f.desc}</p>
                  <div className="space-y-2">
                    {f.details.map((d, i) => (
                      <motion.div key={d} className="flex items-center gap-2 text-xs text-muted-foreground" whileHover={{ x: 4 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                        {d}
                      </motion.div>
                    ))}
                  </div>
                  <motion.div className="h-0.5 bg-gradient-to-r from-secondary to-accent mt-4 origin-left" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} />
                </SpotlightCard>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-6">
            Ready to Transform Your <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Payroll?</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Join hundreds of Ghanaian businesses already using PayrollGhana to save time, reduce errors, and stay compliant.
          </p>
          <MagneticButton>
            <motion.a
              href="https://app.ghpayroll.net/auth/login"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(200 100% 50% / 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="gradient-accent text-primary-foreground px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2 shadow-elevated"
            >
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </motion.a>
          </MagneticButton>
        </ScrollReveal>
      </div>
    </section>

    <Footer />
  </div>
);

export default FeaturesPage;
