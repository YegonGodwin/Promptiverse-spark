
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PromptSection from "@/components/PromptSection";
import Features from "@/components/Features";
import PromptGenerator from "@/components/PromptGenerator";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Add framer-motion package
    const loadFramerMotion = async () => {
      try {
        await import("framer-motion");
        console.log("Framer Motion loaded successfully");
      } catch (error) {
        console.error("Failed to load Framer Motion:", error);
      }
    };
    
    loadFramerMotion();
    setIsLoaded(true);
  }, []);
  
  return (
    <motion.div
      className="min-h-screen bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <main>
        <Hero />
        <PromptSection />
        <Features />
        <PromptGenerator />
        <CTA />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
