
import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, ThumbsUp, MessageSquare, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PromptCardProps {
  title: string;
  description: string;
  category: string;
  prompt: string;
  likes: number;
  comments: number;
  delay?: number;
}

const PromptCard = ({ title, description, category, prompt, likes, comments, delay = 0 }: PromptCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const { toast } = useToast();
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  
  const copyToClipboard = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(prompt);
    toast({
      title: "Copied to clipboard",
      description: "Prompt has been copied to your clipboard",
    });
  };
  
  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isLiked) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
    setIsLiked(!isLiked);
  };
  
  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast({
      title: "Share link created",
      description: "Link has been copied to your clipboard",
    });
  };
  
  return (
    <motion.div
      className="prompt-card rounded-xl overflow-hidden glass-morphism border border-white/10 transition-all duration-300 hover:border-white/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + delay * 0.1 }}
      onClick={toggleExpand}
    >
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-white/10 text-blue-300">
            {category}
          </span>
          <button 
            onClick={copyToClipboard}
            className="text-white/60 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/10"
          >
            <Copy className="w-4 h-4" />
          </button>
        </div>
        
        <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
        <p className="text-sm text-white/70 mb-4">{description}</p>
        
        {isExpanded && (
          <div className="mt-4 mb-4 animate-slide-up">
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 text-sm text-white/80 font-mono overflow-auto max-h-60">
              {prompt}
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-4">
            <button 
              className={`flex items-center space-x-1 text-white/60 hover:text-white transition-colors ${isLiked ? 'text-blue-400' : ''}`}
              onClick={handleLike}
            >
              <ThumbsUp className="w-4 h-4" />
              <span className="text-xs">{likeCount}</span>
            </button>
            
            <button className="flex items-center space-x-1 text-white/60 hover:text-white transition-colors">
              <MessageSquare className="w-4 h-4" />
              <span className="text-xs">{comments}</span>
            </button>
          </div>
          
          <button 
            className="text-white/60 hover:text-white transition-colors"
            onClick={handleShare}
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PromptCard;
