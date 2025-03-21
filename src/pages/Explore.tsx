
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Explore = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Get query from URL
    const query = new URLSearchParams(location.search).get("q");
    if (query) {
      setSearchQuery(query);
      // Here you would typically fetch search results based on the query
    }
  }, [location]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically update the URL and fetch search results
    const url = new URL(window.location.href);
    url.searchParams.set("q", searchQuery);
    window.history.pushState({}, "", url);
    
    // Here you would fetch search results based on the query
  };
  
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
            <h1 className="text-4xl font-bold mb-6">Explore Prompts</h1>
            <form onSubmit={handleSearch} className="flex gap-4 max-w-2xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search for prompts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 h-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg text-white placeholder:text-white/50"
                />
              </div>
              <Button type="submit" className="h-12 px-6">Search</Button>
            </form>
          </motion.div>
          
          <motion.div
            className="min-h-[400px] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {searchQuery ? (
              <p className="text-white/70 text-lg">Search results for "{searchQuery}" will appear here.</p>
            ) : (
              <p className="text-white/70 text-lg">Enter a search term to find prompts.</p>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Explore;
