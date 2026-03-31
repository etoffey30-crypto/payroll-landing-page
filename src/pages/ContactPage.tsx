import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { CursorGlow, ScrollReveal, ParallaxMouse, TextReveal, TiltCard, SpotlightCard, MagneticButton } from "@/components/AnimationUtils";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, MessageSquare, Handshake } from "lucide-react";

const offices = [
  { icon: MapPin, title: "Head Office", value: "Kokomlemle, Accra, Ghana" },
  { icon: Mail, title: "Email", value: "admin@payrollghana.net" },
  { icon: Phone, title: "Phone", value: "+233 596 561 245" },
  { icon: Clock, title: "Business Hours", value: "Mon–Fri, 8:00 AM – 6:00 PM GMT" },
];

const departments = [
  { icon: MessageSquare, title: "Sales", desc: "Talk to our sales team about plans and custom pricing for your business.", email: "sales@payrollghana.net" },
  { icon: Handshake, title: "Partnerships", desc: "Interested in partnering with PayrollGhana? Let's discuss opportunities.", email: "partners@payrollghana.net" },
  { icon: Mail, title: "Support", desc: "Need help with your account or have a technical question? We're here 24/7.", email: "support@payrollghana.net" },
];

const ContactPage = () => (
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
          Contact Us
        </motion.span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4 text-primary-foreground">
          <TextReveal text="Let's Get You " delay={0.2} />
          <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            <TextReveal text="Started" delay={0.6} />
          </span>
        </h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="mt-6 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
          Ready to simplify your payroll? Reach out for a free consultation or demo of our platform.
        </motion.p>
      </div>
    </section>

    {/* Contact Info Cards */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offices.map((item, i) => (
            <ScrollReveal key={item.title}>
              <TiltCard>
                <SpotlightCard className="bg-card rounded-2xl p-6 border border-border shadow-card text-center h-full">
                  <motion.div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4" whileHover={{ rotate: 15, scale: 1.15 }}>
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                </SpotlightCard>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Contact Form */}
    <Contact />

    {/* Departments */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Reach the Right <span className="text-gradient">Team</span>
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {departments.map((dept) => (
            <ScrollReveal key={dept.title}>
              <TiltCard>
                <SpotlightCard className="bg-card rounded-2xl p-6 border border-border shadow-card text-center h-full group">
                  <motion.div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mx-auto mb-4" whileHover={{ rotate: 15, scale: 1.15 }}>
                    <dept.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <motion.h3 className="font-bold text-foreground mb-2 group-hover:text-secondary transition-colors" whileHover={{ scale: 1.05 }}>
                    {dept.title}
                  </motion.h3>
                  <p className="text-sm text-muted-foreground mb-3">{dept.desc}</p>
                  <motion.a href={`mailto:${dept.email}`} className="text-sm text-secondary font-semibold" whileHover={{ scale: 1.05 }}>
                    {dept.email}
                  </motion.a>
                </SpotlightCard>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default ContactPage;
