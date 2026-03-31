import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroDashboard from "@/assets/hero-dashboard.png";
import { ParallaxMouse, MagneticButton, TextReveal } from "./AnimationUtils";

const highlights = [
  "Automated PAYE & SSNIT compliance",
  "Payslip generation & emailing",
  "Employee self-service portal",
];

const heroImages = [
  { src: "/assets/image1.jpg", alt: "PayrollGhana Professional Services" },
  { src: "/assets/hero-businessman.jpg", alt: "Expert Payroll Consultation" },
  { src: "/assets/image2.jpg", alt: "Modern HR Management" },
  { src: "/assets/image3.png", alt: "Advanced Payroll Dashboard" },
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="gradient-hero relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Animated background blobs that follow mouse */}
      <ParallaxMouse strength={30} className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent rounded-full blur-[150px]" />
      </ParallaxMouse>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-secondary/20 pointer-events-none"
          style={{
            width: 4 + (i % 3) * 4,
            height: 4 + (i % 3) * 4,
            top: `${10 + i * 11}%`,
            left: `${5 + i * 12}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            opacity: [0.1, 0.7, 0.1],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Animated grid lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px bg-primary-foreground"
            style={{ top: `${i * 10}%` }}
            animate={{ scaleX: [0, 1, 0], opacity: [0, 0.5, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-semibold text-secondary"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-secondary"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              #1 Payroll Platform in Ghana
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-primary-foreground">
              <TextReveal text="Swift, Secure & " delay={0.3} />
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                <TextReveal text="simple" delay={0.6} />
              </span>{" "}
              <TextReveal text="payroll management!" delay={0.8} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-lg text-primary-foreground/70 max-w-xl"
            >
              Automate salary processing, tax compliance (PAYE, SSNIT), and HR
              management — all in one cloud-based platform built for Ghanaian
              businesses.
            </motion.p>

            <div className="space-y-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 + i * 0.15 }}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-3 text-primary-foreground/80 cursor-default"
                >
                  <motion.div whileHover={{ rotate: 360, scale: 1.3 }} transition={{ duration: 0.4 }}>
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  </motion.div>
                  <span className="text-sm">{h}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton>
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(200 100% 50% / 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="https://app.ghpayroll.net/auth/login"
                    className="gradient-accent text-primary-foreground px-7 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-elevated"
                  >
                    Start Free Trial
                    <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </a>
                </motion.div>
              </MagneticButton>
              <MagneticButton>
                <motion.div
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/features"
                    className="border border-primary-foreground/20 text-primary-foreground px-7 py-3.5 rounded-xl font-bold text-sm inline-block"
                  >
                    See Features
                  </Link>
                </motion.div>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Hero image carousel with animated transitions */}
          <ParallaxMouse strength={-15}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-lg">
                {/* Main rotating image */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={heroImages[currentImage].src}
                    alt={heroImages[currentImage].alt}
                    width={1024}
                    height={768}
                    className="w-full rounded-2xl drop-shadow-2xl object-cover aspect-[4/3]"
                    initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0, y: [0, -8, 0] }}
                    exit={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                    transition={{
                      opacity: { duration: 0.5 },
                      scale: { duration: 0.5 },
                      rotateY: { duration: 0.5 },
                      y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    }}
                    whileHover={{ scale: 1.03, rotateZ: 1 }}
                  />
                </AnimatePresence>

                {/* Floating mini thumbnails */}
                <motion.div
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  {heroImages.map((img, i) => (
                    <motion.button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                        i === currentImage
                          ? "border-secondary shadow-lg shadow-secondary/30 scale-110"
                          : "border-primary-foreground/20 opacity-60"
                      }`}
                      whileHover={{ scale: 1.2, opacity: 1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <img src={img.src} alt="" className="w-full h-full object-cover" />
                    </motion.button>
                  ))}
                </motion.div>

                {/* Glowing ring animation behind image */}
                <motion.div
                  className="absolute -inset-3 rounded-2xl border border-secondary/20 -z-10"
                  animate={{
                    scale: [1, 1.02, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -inset-6 rounded-3xl border border-secondary/10 -z-10"
                  animate={{
                    scale: [1, 1.03, 1],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                />
              </div>
            </motion.div>
          </ParallaxMouse>
        </div>
      </div>
    </section>
  );
};

export default Hero;
