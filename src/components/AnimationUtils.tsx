import { useRef, useEffect, useState, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";

// Mouse-following cursor glow
export const CursorGlow = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] w-64 h-64 rounded-full opacity-15"
      style={{
        x: useTransform(springX, (v) => v - 128),
        y: useTransform(springY, (v) => v - 128),
        background: "radial-gradient(circle, hsl(200,100%,50%) 0%, transparent 70%)",
      }}
    />
  );
};

// 3D tilt card that follows cursor
export const TiltCard = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rotateX.set(((e.clientY - cy) / rect.height) * -12);
    rotateY.set(((e.clientX - cx) / rect.width) * 12);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX: springRX, rotateY: springRY, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Magnetic button that pulls toward cursor
export const MagneticButton = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Scroll-triggered reveal
export const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const variants = {
    up: { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },
    scale: { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[direction]}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Parallax element that moves opposite to scroll
export const ParallaxMouse = ({
  children,
  strength = 20,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const x = useSpring(pos.x, { stiffness: 100, damping: 20 });
  const y = useSpring(pos.y, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setPos({
        x: ((e.clientX - cx) / cx) * strength,
        y: ((e.clientY - cy) / cy) * strength,
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [strength]);

  return (
    <motion.div style={{ x, y }} className={className}>
      {children}
    </motion.div>
  );
};

// Spotlight hover effect for cards
export const SpotlightCard = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative ${className}`}
    >
      {/* Spotlight Overlay */}
      <div 
        className="absolute inset-0 rounded-[inherit] overflow-hidden pointer-events-none z-0"
        style={{
          background: isHovered
            ? `radial-gradient(400px circle at ${position.x}px ${position.y}px, hsl(200 100% 50% / 0.12), transparent 70%)`
            : undefined,
        }}
      />
      
      {/* Content wrapper to stay above spotlight */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

// Staggered children animation
export const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30, scale: 0.95 },
      visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// Text that reveals character by character
export const TextReveal = ({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const words = text.split(" ");
  let charIndexOffset = 0;

  return (
    <span ref={ref} className={className}>
      {words.map((word, wordIdx) => {
        const wordNode = (
          <span key={wordIdx} className="inline-block whitespace-nowrap">
            {word.split("").map((char, i) => {
              const currentDelay = delay + (charIndexOffset + i) * 0.02;
              return (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: currentDelay }}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.span>
              );
            })}
            {wordIdx !== words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        );
        charIndexOffset += word.length + 1;
        return wordNode;
      })}
    </span>
  );
};
