import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import { CursorGlow, ScrollReveal, ParallaxMouse, TextReveal, MagneticButton, TiltCard, SpotlightCard } from "@/components/AnimationUtils";
import { motion } from "framer-motion";
import { CheckCircle2, HelpCircle, ArrowRight } from "lucide-react";

const faqs = [
  { q: "Can I switch plans anytime?", a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle." },
  { q: "Is there a free trial?", a: "Our Free plan lets you try PayrollGhana with up to 2 employees at no cost, forever." },
  { q: "What payment methods do you accept?", a: "We accept Mobile Money (MTN, Telecel, AirtelTigo), bank transfers, and all major credit/debit cards." },
  { q: "Do you offer discounts for annual billing?", a: "Yes! Annual billing saves you up to 20%. Contact our sales team for a custom quote." },
  { q: "What happens if I exceed my employee limit?", a: "You'll be prompted to upgrade to the next plan. We never cut off access mid-cycle." },
  { q: "Is my data secure?", a: "Absolutely. We follow ISO 27001 security standards with encrypted data storage and regular backups." },
];

const PricingPage = () => (
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
          Pricing
        </motion.span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4 text-primary-foreground">
          <TextReveal text="Simple, Transparent " delay={0.2} />
          <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            <TextReveal text="Pricing" delay={0.6} />
          </span>
        </h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="mt-6 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
          Start free and scale as your business grows. All plans include the full HR + Payroll suite.
        </motion.p>
      </div>
    </section>

    {/* Pricing Cards */}
    <Pricing />

    {/* FAQ */}
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-3xl">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i}>
              <TiltCard>
                <SpotlightCard className="bg-card rounded-2xl p-6 border border-border shadow-card">
                  <div className="flex items-start gap-3">
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.4 }}>
                      <HelpCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                      <p className="text-sm text-muted-foreground">{faq.a}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </TiltCard>
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
            Ready to Get <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Started?</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Try PayrollGhana free with up to 2 employees. No credit card required.
          </p>
          <MagneticButton>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(200 100% 50% / 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="gradient-accent text-primary-foreground px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2 shadow-elevated"
            >
              Contact Sales <ArrowRight className="w-5 h-5" />
            </motion.a>
          </MagneticButton>
        </ScrollReveal>
      </div>
    </section>

    <Footer />
  </div>
);

export default PricingPage;
