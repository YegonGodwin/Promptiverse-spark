
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Wand2, Copy, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const PromptGenerator = () => {
  const [topic, setTopic] = useState("");
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const generateSamplePrompt = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const samplePrompts = [
        `Create a detailed explanation of ${topic} using analogies and metaphors that would make the concept accessible to a complete beginner. Include specific examples and real-world applications.`,
        `Imagine you're a world-class expert on ${topic}. Provide an in-depth analysis of the current state of this field, major challenges, recent breakthroughs, and future directions. Include specific resources for further reading.`,
        `I want you to act as a creative storyteller and craft a short narrative that illustrates key concepts related to ${topic}. The story should be engaging while accurately representing the fundamental principles.`,
        `Generate a comprehensive learning roadmap for someone wanting to master ${topic} from beginner to advanced level. Include specific resources, practice exercises, and milestones to track progress.`,
        `I want you to analyze ${topic} from multiple perspectives: historical development, current applications, ethical considerations, and future potential. Provide a balanced view that considers different schools of thought.`
      ];
      
      const randomPrompt = samplePrompts[Math.floor(Math.random() * samplePrompts.length)];
      
      setGeneratedPrompt(randomPrompt);
      setIsGenerating(false);
    }, 1500);
  };
  
  const handleGenerate = () => {
    if (!topic.trim()) {
      toast({
        title: "Topic required",
        description: "Please enter a topic to generate a prompt",
        variant: "destructive",
      });
      return;
    }
    
    generateSamplePrompt();
  };
  
  const handleCopy = () => {
    if (generatedPrompt) {
      navigator.clipboard.writeText(generatedPrompt);
      toast({
        title: "Copied to clipboard",
        description: "Generated prompt has been copied to your clipboard",
      });
    }
  };
  
  return (
    <motion.section 
      ref={ref}
      className="py-20 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-4xl glass-morphism rounded-2xl p-8 md:p-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            AI Prompt Generator
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Enter a topic or keyword, and our AI will generate a tailored prompt for you
          </p>
        </div>
        
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Enter a topic (e.g., climate change, quantum computing, creative writing)"
              className="flex-grow h-12 px-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
            />
            <Button 
              className="h-12 bg-white text-background hover:bg-white/90 transition-colors"
              onClick={handleGenerate}
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4 mr-2" />
                  Generate Prompt
                </>
              )}
            </Button>
          </div>
          
          {generatedPrompt && (
            <motion.div 
              className="p-5 rounded-xl bg-white/5 border border-white/10 mt-4 relative"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-white/90 font-medium">{generatedPrompt}</p>
              <div className="mt-4 flex justify-end">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-white/70 hover:text-white hover:bg-white/10"
                  onClick={handleCopy}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Prompt
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default PromptGenerator;
