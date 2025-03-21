
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Categories = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const location = useLocation();
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Get category from URL
    const category = new URLSearchParams(location.search).get("type");
    if (category) {
      setSelectedCategory(category);
      // Here you would typically fetch prompts based on the category
    }
  }, [location]);
  
  const categories = [
    "Creative Writing",
    "SEO",
    "Coding",
    "UX/UI Design",
    "Technical",
    "Business",
    "Academic",
    "Healthcare",
    "Marketing",
    "Personal Development",
    "Entertainment",
    "Social Media"
  ];
  
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
            <h1 className="text-4xl font-bold mb-6">Categories</h1>
            <p className="text-white/70 max-w-3xl mb-8">
              Browse our curated collection of prompts by category to find exactly what you need.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {categories.map((category) => (
                <div 
                  key={category}
                  className={`p-4 rounded-xl glass-morphism cursor-pointer transition-all ${
                    selectedCategory === category ? "bg-white/20" : "hover:bg-white/10"
                  }`}
                  onClick={() => {
                    setSelectedCategory(category);
                    const url = new URL(window.location.href);
                    url.searchParams.set("type", category);
                    window.history.pushState({}, "", url);
                  }}
                >
                  <span className="text-sm font-medium">{category}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          {selectedCategory && (
            <motion.div
              className="mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">{selectedCategory} Prompts</h2>
              <div className="min-h-[300px] flex items-center justify-center">
                <p className="text-white/70 text-lg">{selectedCategory} prompts will appear here.</p>
              </div>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
