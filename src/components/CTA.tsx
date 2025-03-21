
import React from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const navigate = useNavigate();
  
  return (
    <motion.section 
      ref={ref}
      className="py-20 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-5xl">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%200h1v1H0z%22%20fill%3D%22%23FFFFFF%22%20fill-opacity%3D%22.05%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px_20px] opacity-20"></div>
          
          <div className="relative z-10 p-8 md:p-12 lg:p-16 glass-morphism">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                  Join Our Community of Prompt Engineers
                </h2>
                <p className="text-white/70">
                  Create an account to save your favorite prompts, contribute to the library, and connect with other AI enthusiasts.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-white text-background hover:bg-white/90 transition-colors btn-hover"
                  onClick={() => navigate("/register")}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Create Account
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10 btn-hover"
                  onClick={() => navigate("/about")}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CTA;
