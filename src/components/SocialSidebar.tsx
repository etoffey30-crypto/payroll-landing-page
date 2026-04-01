import { Facebook, Linkedin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { MagneticButton } from "./AnimationUtils";

const socialLinks = [
  { 
    id: "facebook", 
    icon: Facebook, 
    href: "https://www.facebook.com/payrollghana/", 
    color: "bg-[#1877F2]",
    label: "Facebook"
  },
  { 
    id: "linkedin", 
    icon: Linkedin, 
    href: "https://www.linkedin.com/showcase/payroll-ghana/?viewAsMember=true", 
    color: "bg-[#0A66C2]",
    label: "LinkedIn"
  },
  { 
    id: "whatsapp", 
    icon: MessageCircle, 
    href: "https://wa.me/+233596561245", 
    color: "bg-[#25D366]",
    label: "WhatsApp"
  },
];

const SocialSidebar = () => {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-4">
      {socialLinks.map((social, i) => (
        <MagneticButton key={social.id}>
          <motion.a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            className={`${social.color} w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg shadow-black/20 hover:shadow-xl transition-all border border-white/10 group relative`}
            aria-label={`Follow on ${social.label}`}
          >
            <social.icon size={22} className="group-hover:rotate-6 transition-transform" />
            
            {/* Tooltip */}
            <span className="absolute right-full mr-3 px-2 py-1 bg-black/80 text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap uppercase tracking-wider backdrop-blur-sm border border-white/10">
              {social.label}
            </span>
          </motion.a>
        </MagneticButton>
      ))}
    </div>
  );
};

export default SocialSidebar;
