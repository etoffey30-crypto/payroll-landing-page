import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CursorGlow, ScrollReveal, TiltCard, SpotlightCard, ParallaxMouse, TextReveal, MagneticButton, StaggerContainer, StaggerItem } from "@/components/AnimationUtils";
import { motion } from "framer-motion";
import { BookOpen, FileText, Download, Calculator, ArrowRight, ExternalLink } from "lucide-react";
import resourcesHero from "@/assets/resources-hero.jpg";
import DownloadModal from "@/components/DownloadModal";

const ebooks = [
  { title: "Confused about your payslip deductions in Ghana", desc: "Understand your payslip deductions and how they affect your take-home pay.", category: "Guide", color: "from-secondary to-accent", file: `${import.meta.env.BASE_URL}ebooks/Confused-about-your-payslip-deductions-in-Ghana.pdf`, image: `${import.meta.env.BASE_URL}ebooks/covers/confused_payslip.png` },
  { title: "Demystifying Your Ghana Pay Slip", desc: "What every worker should know about reading and analyzing their Ghana payslip.", category: "Guide", color: "from-primary to-secondary", file: `${import.meta.env.BASE_URL}ebooks/Demystifying-Your-Ghana-Pay-Slip-What-Every-Worker-Should-Know.pdf`, image: `${import.meta.env.BASE_URL}ebooks/covers/demystifying_payslip.png` },
  { title: "Navigating Ghana's Labor Laws", desc: "A simple guide to understanding and staying compliant with Ghana's labor laws.", category: "Compliance", color: "from-accent to-primary", file: `${import.meta.env.BASE_URL}ebooks/Navigating-Ghanas-Labor-Laws-Made-Simple.pdf`, image: `${import.meta.env.BASE_URL}ebooks/covers/labor_laws.png` },
  { title: "PayrollGhana Application", desc: "An overview of the PayrollGhana HRM and Payroll application features.", category: "Platform", color: "from-secondary to-primary", file: `${import.meta.env.BASE_URL}ebooks/PayrollGhana-HRMPayroll-Application.pdf`, image: `${import.meta.env.BASE_URL}ebooks/covers/payrollghana_app.png` },
  { title: "Revolutionize Your HR Management", desc: "How to modernize your HR operations using the PayrollGhana software.", category: "HR Guide", color: "from-secondary to-accent", file: `${import.meta.env.BASE_URL}ebooks/Revolutionize-Your-HR-Management-with-PayrollGhana-HRM-Software (1).pdf`, image: `${import.meta.env.BASE_URL}ebooks/covers/revolutionize_hr.png` },
  { title: "Run Your Payroll From Anywhere", desc: "The benefits of cloud-based payroll systems and why you should switch.", category: "Payroll", color: "from-primary to-secondary", file: `${import.meta.env.BASE_URL}ebooks/Run-Your-Payroll-From-Anywhere-Anytime.pdf`, image: `${import.meta.env.BASE_URL}ebooks/covers/run_anywhere.png` },
  { title: "Tired of HR Paperwork", desc: "Embrace automation to free up time from tedious HR paperwork.", category: "Automation", color: "from-accent to-primary", file: `${import.meta.env.BASE_URL}ebooks/Tired-of-HR-Paperwork-Automation-is-Here.pdf`, image: `${import.meta.env.BASE_URL}ebooks/covers/tired_paperwork.png` },
  { title: "Transform Your Business", desc: "Discover how cloud payroll solutions can transform your entire business workflow.", category: "Cloud", color: "from-secondary to-primary", file: `${import.meta.env.BASE_URL}ebooks/Transform-Your-Business-with-Cloud-Payroll-Solutions.pdf`, image: `${import.meta.env.BASE_URL}ebooks/covers/transform_business.png` },
  { title: "Transform Your HR Management Today", desc: "Actionable steps to revolutionize your HR processes today.", category: "HR Guide", color: "from-secondary to-accent", file: `${import.meta.env.BASE_URL}ebooks/Transform-Your-HR-Management-Today.pdf`, image: `${import.meta.env.BASE_URL}ebooks/covers/transform_hr_today.png` },
  { title: "Transform Your Payroll Process in Ghana", desc: "Modernize your manual payroll process and automate tax compliance.", category: "Payroll", color: "from-primary to-secondary", file: `${import.meta.env.BASE_URL}ebooks/Transform-Your-Payroll-Process-in-Ghana-Today.pdf`, image: `${import.meta.env.BASE_URL}ebooks/covers/transform_payroll_ghana.png` },
  { title: "Unlock Hidden Savings", desc: "Ghana tax relief secrets to help you and your employees save more.", category: "Tax Guide", color: "from-accent to-primary", file: `${import.meta.env.BASE_URL}ebooks/Unlock-Hidden-Savings-Ghana-Tax-Relief-Secrets.pdf` },
];

const blogPosts = [
  { title: "Understanding Ghana's Labour Act", desc: "Key provisions every employer must know about the Labour Act, 2003 (Act 651).", date: "Mar 15, 2025", readTime: "5 min read" },
  { title: "How to Calculate PAYE in Ghana", desc: "Step-by-step walkthrough of PAYE calculations with examples for different income brackets.", date: "Mar 8, 2025", readTime: "8 min read" },
  { title: "Top 5 Payroll Mistakes to Avoid", desc: "Common payroll errors that cost Ghanaian businesses time and money — and how to fix them.", date: "Feb 28, 2025", readTime: "4 min read" },
  { title: "Employee Benefits Trends in Ghana", desc: "What Ghanaian employees expect from their employers in 2025 and beyond.", date: "Feb 20, 2025", readTime: "6 min read" },
  { title: "Digital Transformation in HR", desc: "How Ghanaian companies are embracing technology to modernize their HR operations.", date: "Feb 12, 2025", readTime: "7 min read" },
  { title: "SSNIT Registration: A Complete Guide", desc: "How to register employees with SSNIT and manage ongoing contributions.", date: "Feb 5, 2025", readTime: "5 min read" },
];

const tools = [
  { icon: Calculator, title: "PAYE Tax Calculator", desc: "Calculate monthly PAYE deductions for any salary amount using current Ghana tax bands." },
  { icon: Calculator, title: "SSNIT Calculator", desc: "Compute Tier 1 and Tier 2 pension contributions for employees and employers." },
  { icon: Calculator, title: "Net Salary Calculator", desc: "Find out the take-home pay after all statutory deductions." },
];

const ResourcesPage = () => {
  const [showAllEbooks, setShowAllEbooks] = useState(false);
  const displayedEbooks = showAllEbooks ? ebooks : ebooks.slice(0, 4);
  
  const [selectedEbook, setSelectedEbook] = useState<typeof ebooks[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadClick = (ebook: typeof ebooks[0]) => {
    setSelectedEbook(ebook);
    setIsModalOpen(true);
  };

  const triggerDownload = () => {
    if (selectedEbook) {
      const link = document.createElement("a");
      link.href = selectedEbook.file;
      link.download = selectedEbook.file.split("/").pop() || "resource.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
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
          Resources
        </motion.span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4 text-primary-foreground">
          <TextReveal text="Learn, Grow & " delay={0.2} />
          <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            <TextReveal text="Succeed" delay={0.6} />
          </span>
        </h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="mt-6 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
          Free guides, tools, and insights to help you master payroll and HR management in Ghana.
        </motion.p>
      </div>
    </section>

    {/* Hero Image */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <TiltCard>
            <motion.img src={`${import.meta.env.BASE_URL}assets/imagee.png`} alt="PayrollGhana Dashboard Preview" width={1024} height={640} loading="lazy" className="rounded-2xl shadow-elevated w-full max-w-4xl mx-auto border border-border" whileHover={{ scale: 1.01 }} />
          </TiltCard>
        </ScrollReveal>
      </div>
    </section>

    {/* E-books */}
    <section className="py-20 bg-muted/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Free <span className="text-gradient">E-books & Guides</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Download our comprehensive guides to master payroll and HR in Ghana.</p>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {displayedEbooks.map((e) => (
            <StaggerItem key={e.title}>
              <TiltCard>
                <SpotlightCard className="bg-card rounded-2xl p-6 border border-border shadow-card h-full group flex flex-col overflow-hidden">
                  <motion.div className={`w-full h-56 -mx-6 -mt-6 mb-4 relative overflow-hidden bg-gradient-to-br ${e.color} flex items-center justify-center`} whileHover={{ scale: 1.05 }}>
                    {e.image ? (
                      <img src={e.image} alt={e.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="absolute inset-0 p-6 flex flex-col justify-between text-primary-foreground">
                        <div className="flex justify-between items-start">
                          <BookOpen className="w-8 h-8 opacity-80" />
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">Premium Guide</span>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-sm font-black leading-tight uppercase tracking-tight line-clamp-3">
                            {e.title}
                          </h4>
                          <div className="h-1 w-12 bg-primary-foreground/40 rounded-full" />
                        </div>
                        <div className="flex justify-between items-center opacity-60">
                          <span className="text-[10px] font-bold">PayrollGhana</span>
                          <FileText className="w-4 h-4" />
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                  </motion.div>
                  <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{e.category}</span>
                  <motion.h3 className="font-bold text-foreground mt-2 mb-2 group-hover:text-secondary transition-colors line-clamp-2 min-h-[3rem]" whileHover={{ x: 3 }}>
                    {e.title}
                  </motion.h3>
                  <p className="text-sm text-muted-foreground flex-1 line-clamp-3">{e.desc}</p>
                  <MagneticButton className="mt-4">
                    <motion.button
                      onClick={() => handleDownloadClick(e)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full gradient-primary text-primary-foreground py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" /> Download Free
                    </motion.button>
                  </MagneticButton>
                </SpotlightCard>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {ebooks.length > 4 && (
          <div className="mt-12 text-center">
            <MagneticButton className="inline-block">
              <motion.button
                onClick={() => setShowAllEbooks(!showAllEbooks)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gradient-accent text-primary-foreground px-8 py-3 rounded-xl font-bold inline-flex items-center gap-2 shadow-elevated"
              >
                {showAllEbooks ? "Show Less" : "See All Guides"} <ArrowRight className={`w-4 h-4 transition-transform ${showAllEbooks ? "-rotate-90" : "rotate-90"}`} />
              </motion.button>
            </MagneticButton>
          </div>
        )}
      </div>
    </section>

    {/* Blog Posts */}
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Latest <span className="text-gradient">Blog Posts</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Stay up to date with payroll best practices and Ghana compliance updates.</p>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {blogPosts.map((post) => (
            <StaggerItem key={post.title}>
              <TiltCard>
                <SpotlightCard className="bg-card rounded-2xl p-6 border border-border shadow-card h-full group flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <span className="text-xs text-secondary font-medium">{post.readTime}</span>
                  </div>
                  <motion.h3 className="font-bold text-foreground mb-2 group-hover:text-secondary transition-colors" whileHover={{ x: 3 }}>
                    {post.title}
                  </motion.h3>
                  <p className="text-sm text-muted-foreground flex-1">{post.desc}</p>
                  <motion.a href="#" className="mt-4 text-sm text-secondary font-semibold inline-flex items-center gap-1" whileHover={{ x: 6 }}>
                    Read More <ExternalLink className="w-3.5 h-3.5" />
                  </motion.a>
                </SpotlightCard>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* Free Tools */}
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Free <span className="text-gradient">Tools</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Use our free calculators to plan your payroll and tax deductions.</p>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto" staggerDelay={0.1}>
          {tools.map((t) => (
            <StaggerItem key={t.title}>
              <TiltCard>
                <SpotlightCard className="bg-card rounded-2xl p-6 border border-border shadow-card h-full text-center group">
                  <motion.div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mx-auto mb-4" whileHover={{ rotate: 15, scale: 1.15 }}>
                    <t.icon className="w-7 h-7 text-primary-foreground" />
                  </motion.div>
                  <motion.h3 className="font-bold text-foreground mb-2 group-hover:text-secondary transition-colors" whileHover={{ scale: 1.05 }}>
                    {t.title}
                  </motion.h3>
                  <p className="text-sm text-muted-foreground">{t.desc}</p>
                  <MagneticButton className="mt-4">
                    <motion.a 
                      href="https://app.ghpayroll.net/auth/login"
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }} 
                      className="gradient-primary text-primary-foreground px-5 py-2 rounded-xl text-sm font-semibold inline-block"
                    >
                      Try Now
                    </motion.a>
                  </MagneticButton>
                </SpotlightCard>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    <Footer />
    
    <DownloadModal 
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      ebookTitle={selectedEbook?.title || ""}
      onSuccess={triggerDownload}
    />
  </div>
  );
};

export default ResourcesPage;
