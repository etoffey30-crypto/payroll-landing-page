import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CursorGlow, ScrollReveal, TiltCard, SpotlightCard, ParallaxMouse, TextReveal, MagneticButton, StaggerContainer, StaggerItem } from "@/components/AnimationUtils";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Landmark, Layers, Users, Target, Award, ArrowRight } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const usps = [
  { icon: Zap, title: "Full Automation", desc: "No more manual Excel payroll. Automate salary, taxes, and reporting end-to-end." },
  { icon: Landmark, title: "Ghana Compliance", desc: "Built for GRA, SSNIT, Labour Act — always up to date with local law." },
  { icon: ShieldCheck, title: "ISO 27001 Security", desc: "Enterprise-grade security to keep your company and employee data safe." },
  { icon: Layers, title: "All-in-One Platform", desc: "HR + Payroll + Tasks + Attendance in a single centralized system." },
];

const stats = [
  { value: "500+", label: "Businesses Trust Us" },
  { value: "50%", label: "Cost Savings" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Support Available" },
];

const milestones = [
  { year: "2018", title: "Founded", desc: "PayrollGhana launched as a subsidiary of JPCann Associates Ltd." },
  { year: "2019", title: "First 100 Clients", desc: "Reached 100 businesses using our platform across Greater Accra." },
  { year: "2021", title: "ISO 27001 Certified", desc: "Achieved ISO 27001 certification for information security management." },
  { year: "2023", title: "Nationwide Expansion", desc: "Expanded services to businesses across all 16 regions of Ghana." },
  { year: "2025", title: "500+ Businesses", desc: "Surpassed 500 active businesses using PayrollGhana daily." },
];

const AboutPage = () => (
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
          About Us
        </motion.span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4 text-primary-foreground">
          <TextReveal text="Powering Ghana's " delay={0.2} />
          <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            <TextReveal text="Workforce" delay={0.6} />
          </span>
        </h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="mt-6 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
          A subsidiary of JPCann Associates Ltd, offering both self-service software and full payroll outsourcing services.
        </motion.p>
      </div>
    </section>

    {/* Team Image + Story */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <TiltCard>
              <motion.img src={aboutTeam} alt="PayrollGhana Team" width={1024} height={640} loading="lazy" className="rounded-2xl shadow-elevated w-full" whileHover={{ scale: 1.02 }} />
            </TiltCard>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Our <span className="text-gradient">Story</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              PayrollGhana was born from a simple observation: Ghanaian businesses were spending too much time and money on manual payroll processes. Founded as a subsidiary of JPCann Associates Ltd, we set out to build the most comprehensive, compliant, and affordable payroll + HR platform tailored specifically for the Ghanaian market.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you run payroll yourself or let us handle it through our outsourcing services, you get unmatched accuracy, compliance with GRA and SSNIT regulations, and a platform accessible from anywhere.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <TiltCard>
                <SpotlightCard className="bg-card rounded-2xl p-8 border border-border shadow-card text-center">
                  <motion.span className="text-4xl font-extrabold text-gradient inline-block" whileHover={{ scale: 1.15 }}>
                    {s.value}
                  </motion.span>
                  <p className="mt-2 text-sm text-muted-foreground font-medium">{s.label}</p>
                </SpotlightCard>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* USPs */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Why Choose <span className="text-gradient">PayrollGhana</span>
          </h2>
        </ScrollReveal>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {usps.map((u) => (
            <StaggerItem key={u.title}>
              <TiltCard>
                <SpotlightCard className="bg-card rounded-2xl p-6 border border-border shadow-card h-full">
                  <motion.div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4" whileHover={{ rotate: 15, scale: 1.15 }}>
                    <u.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <motion.h3 className="font-bold text-foreground mb-2" whileHover={{ x: 3 }}>{u.title}</motion.h3>
                  <p className="text-sm text-muted-foreground">{u.desc}</p>
                </SpotlightCard>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-20 bg-muted/50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-3xl">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Our <span className="text-gradient">Journey</span>
          </h2>
        </ScrollReveal>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
          {milestones.map((m, i) => (
            <ScrollReveal key={m.year}>
              <motion.div className="flex gap-6 mb-10 last:mb-0" whileHover={{ x: 8 }}>
                <motion.div
                  className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center shrink-0 text-primary-foreground font-bold text-sm z-10"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {m.year}
                </motion.div>
                <TiltCard>
                  <SpotlightCard className="bg-card rounded-2xl p-6 border border-border shadow-card flex-1">
                    <h3 className="font-bold text-foreground mb-1">{m.title}</h3>
                    <p className="text-sm text-muted-foreground">{m.desc}</p>
                  </SpotlightCard>
                </TiltCard>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-6">
            Join <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">500+</span> Ghanaian Businesses
          </h2>
          <MagneticButton>
            <motion.a
              href="https://app.ghpayroll.net/auth/login"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(200 100% 50% / 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="gradient-accent text-primary-foreground px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2 shadow-elevated"
            >
              Get Started Today <ArrowRight className="w-5 h-5" />
            </motion.a>
          </MagneticButton>
        </ScrollReveal>
      </div>
    </section>

    <Footer />
  </div>
);

export default AboutPage;
