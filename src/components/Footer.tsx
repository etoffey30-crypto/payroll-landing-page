import logo from "@/assets/logo.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MagneticButton, ScrollReveal } from "./AnimationUtils";

const footerSections = [
  { title: "Platform", links: [{ label: "Features", href: "/features" }, { label: "Pricing", href: "/pricing" }, { label: "Security", href: "/features" }, { label: "API", href: "/features" }] },
  { title: "Resources", links: [{ label: "Blog", href: "/resources" }, { label: "E-books", href: "/resources" }, { label: "PAYE Guide", href: "/resources" }, { label: "Tax Calculator", href: "/resources" }] },
  { title: "Company", links: [{ label: "About", href: "/about" }, { label: "Contact", href: "/contact" }, { label: "Partnerships", href: "/contact" }, { label: "Careers", href: "/about" }] },
];

const Footer = () => (
  <footer className="gradient-hero py-12">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/">
              <motion.img
                src={logo}
                alt="PayrollGhana"
                className="h-10 mb-4 brightness-0 invert"
                whileHover={{ scale: 1.05 }}
              />
            </Link>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              A subsidiary of JPCann Associates Ltd. Cloud-based payroll & HR management for Ghanaian businesses.
            </p>
          </div>
          {footerSections.map((sec) => (
            <div key={sec.title}>
              <h4 className="font-bold text-primary-foreground mb-4">{sec.title}</h4>
              <div className="space-y-2 text-sm text-primary-foreground/60">
                {sec.links.map((link) => (
                  <MagneticButton key={link.label}>
                    <motion.div whileHover={{ x: 6 }}>
                      <Link
                        to={link.href}
                        className="block hover:text-primary-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </MagneticButton>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
      <motion.div
        className="mt-10 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} PayrollGhana. All rights reserved.
      </motion.div>
    </div>
  </footer>
);

export default Footer;
