import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import FeaturesPage from "./pages/FeaturesPage.tsx";
import PricingPage from "./pages/PricingPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ResourcesPage from "./pages/ResourcesPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import SocialSidebar from "./components/SocialSidebar.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SocialSidebar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <BrowserRouter basename={window.location.hostname.includes(".github.io") ? "/payroll-landing-page/" : "/"}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </motion.div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
