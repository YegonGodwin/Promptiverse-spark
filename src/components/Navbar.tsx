
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/explore?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      if (mobileMenuOpen) setMobileMenuOpen(false);
    }
  };
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "glass-morphism py-3" : "bg-transparent py-6"
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 z-10"
        >
          <Sparkles className="w-7 h-7 text-white" />
          <span className="text-xl font-display font-medium text-white">PromptSpark</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            <Link to="/explore" className="text-sm text-white/80 hover:text-white transition-colors">
              Explore
            </Link>
            <Link to="/categories" className="text-sm text-white/80 hover:text-white transition-colors">
              Categories
            </Link>
            <Link to="/trending" className="text-sm text-white/80 hover:text-white transition-colors">
              Trending
            </Link>
            <Link to="/community" className="text-sm text-white/80 hover:text-white transition-colors">
              Community
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search prompts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-40 h-9 pl-9 pr-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
              />
            </form>
            <Button 
              className="bg-white text-background hover:bg-white/90 transition-colors"
              onClick={() => navigate("/submit")}
            >
              Submit Prompt
            </Button>
          </div>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-0 z-40 bg-background glass-morphism md:hidden animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
            <Link 
              to="/" 
              className="flex items-center space-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Sparkles className="w-8 h-8 text-white" />
              <span className="text-2xl font-display font-medium text-white">PromptSpark</span>
            </Link>
            
            <nav className="flex flex-col items-center space-y-6">
              <Link 
                to="/explore" 
                className="text-xl text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Explore
              </Link>
              <Link 
                to="/categories" 
                className="text-xl text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                to="/trending" 
                className="text-xl text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Trending
              </Link>
              <Link 
                to="/community" 
                className="text-xl text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Community
              </Link>
            </nav>
            
            <div className="flex flex-col items-center space-y-4 w-full">
              <form onSubmit={handleSearch} className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search prompts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-10 pl-10 pr-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                />
              </form>
              <Button 
                className="w-full bg-white text-background hover:bg-white/90 transition-colors"
                onClick={() => {
                  navigate("/submit");
                  setMobileMenuOpen(false);
                }}
              >
                Submit Prompt
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
