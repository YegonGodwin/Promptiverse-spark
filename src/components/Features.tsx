
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Search, BookCopy, TrendingUp, Users, Sparkles, Zap } from "lucide-react";

const features = [
  {
    icon: <Search className="w-6 h-6 text-blue-400" />,
    title: "Smart Search",
    description: "Find the perfect prompt with our intelligent search system that understands your needs"
  },
  {
    icon: <BookCopy className="w-6 h-6 text-purple-400" />,
    title: "Categorized Collection",
    description: "Browse our well-organized library of prompts arranged by use case and complexity"
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
    title: "Trending Prompts",
    description: "Stay updated with the most popular and effective prompts used by the community"
  },
  {
    icon: <Users className="w-6 h-6 text-amber-400" />,
    title: "Community Contributions",
    description: "Access prompts created by expert users and contribute your own to help others"
  },
  {
    icon: <Sparkles className="w-6 h-6 text-pink-400" />,
    title: "Prompt Generation",
    description: "Generate custom prompts tailored to your specific needs with our AI assistant"
  },
  {
    icon: <Zap className="w-6 h-6 text-cyan-400" />,
    title: "One-Click Copy",
    description: "Instantly copy any prompt to your clipboard and start using it with your favorite AI"
  }
];

const FeatureCard = ({ icon, title, description, index }: { icon: JSX.Element, title: string, description: string, index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <motion.div
      ref={ref}
      className="glass-morphism rounded-xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div className="p-3 rounded-full bg-white/5 w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Designed for AI Enthusiasts
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            PromptSpark offers a comprehensive set of tools and features to help you master the art of prompt engineering
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
