
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Trending = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6">Trending Prompts</h1>
            <p className="text-white/70 max-w-3xl">
              Discover the most popular prompts based on community engagement, usage, and votes.
            </p>
          </motion.div>
          
          <motion.div
            className="min-h-[400px] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-white/70 text-lg">Trending prompts will appear here.</p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Trending;
