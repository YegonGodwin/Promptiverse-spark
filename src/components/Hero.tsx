
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/explore?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };
  
  const handleCategoryClick = (category: string) => {
    navigate(`/categories?type=${encodeURIComponent(category)}`);
  };
  
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/60 via-gray-900 to-black"></div>
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent"></div>
        <div 
          className="absolute top-0 left-0 w-full h-full z-0 opacity-30"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h1v1H0z" fill="%23FFFFFF" fill-opacity=".05"/%3E%3C/svg%3E")',
            backgroundSize: '20px 20px'
          }}
        ></div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-2">
            <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
            <span className="text-sm font-medium text-white/90">Discover the power of AI prompts</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-gradient leading-tight max-w-4xl">
            Elevate Your AI Conversations
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-2xl">
            Discover, create, and share powerful prompts that unlock the full potential of large language models. Join our community of AI enthusiasts.
          </p>
          
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for prompts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 pl-10 pr-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
              />
            </div>
            <Button type="submit" className="h-12 px-6 bg-white text-background hover:bg-white/90 transition-colors whitespace-nowrap w-full sm:w-auto">
              <Zap className="w-4 h-4 mr-2" />
              Explore Prompts
            </Button>
          </form>
        </motion.div>
        
        <motion.div
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {['Creative Writing', 'SEO', 'Coding', 'UX/UI Design', 'Technical', 'Business'].map((category, index) => (
            <div 
              key={category}
              className="flex flex-col items-center justify-center p-5 rounded-xl glass-morphism hover:bg-white/10 transition-all cursor-pointer"
              onClick={() => handleCategoryClick(category)}
            >
              <span className="text-sm font-medium text-white">{category}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
