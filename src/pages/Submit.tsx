
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Submit = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would typically send the form data to your backend
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Prompt submitted successfully!");
      // Reset form
      setTitle("");
      setCategory("");
      setContent("");
      // Redirect to home page
      navigate("/");
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6">Submit a Prompt</h1>
            <p className="text-white/70 mb-8">
              Share your best prompts with the community and help others create amazing AI content.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-2">
                  Prompt Title
                </label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter a descriptive title"
                  required
                  className="w-full bg-white/5 border-white/10"
                />
              </div>
              
              <div>
                <label htmlFor="category" className="block text-sm font-medium mb-2">
                  Category
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className="w-full h-10 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-white/20"
                >
                  <option value="" disabled>Select a category</option>
                  <option value="Creative Writing">Creative Writing</option>
                  <option value="SEO">SEO</option>
                  <option value="Coding">Coding</option>
                  <option value="UX/UI Design">UX/UI Design</option>
                  <option value="Technical">Technical</option>
                  <option value="Business">Business</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="content" className="block text-sm font-medium mb-2">
                  Prompt Content
                </label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Enter your prompt here..."
                  required
                  className="w-full min-h-[200px] bg-white/5 border-white/10"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full h-12"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Prompt"}
              </Button>
            </form>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Submit;
