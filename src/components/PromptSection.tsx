
import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PromptCard from "./PromptCard";
import { prompts } from "@/data/prompts";

const PromptSection = () => {
  const [category, setCategory] = useState("all");
  
  const filteredPrompts = category === "all" 
    ? prompts 
    : prompts.filter(prompt => prompt.category.toLowerCase() === category.toLowerCase());
  
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Discover Powerful Prompts
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Browse our curated collection of high-quality prompts designed to enhance your AI interactions
          </p>
        </motion.div>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white/5 backdrop-blur-lg border border-white/10 p-1">
              <TabsTrigger 
                value="all" 
                onClick={() => setCategory("all")}
                className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/70"
              >
                All Prompts
              </TabsTrigger>
              <TabsTrigger 
                value="coding" 
                onClick={() => setCategory("coding")}
                className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/70"
              >
                Coding
              </TabsTrigger>
              <TabsTrigger 
                value="creative" 
                onClick={() => setCategory("creative")}
                className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/70"
              >
                Creative
              </TabsTrigger>
              <TabsTrigger 
                value="technical" 
                onClick={() => setCategory("technical")}
                className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/70"
              >
                Technical
              </TabsTrigger>
              <TabsTrigger 
                value="business" 
                onClick={() => setCategory("business")}
                className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/70"
              >
                Business
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrompts.map((prompt, index) => (
                <PromptCard 
                  key={index} 
                  title={prompt.title}
                  description={prompt.description}
                  category={prompt.category}
                  prompt={prompt.prompt}
                  likes={prompt.likes}
                  comments={prompt.comments}
                  delay={index}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="coding" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrompts.map((prompt, index) => (
                <PromptCard 
                  key={index} 
                  title={prompt.title}
                  description={prompt.description}
                  category={prompt.category}
                  prompt={prompt.prompt}
                  likes={prompt.likes}
                  comments={prompt.comments}
                  delay={index}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="creative" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrompts.map((prompt, index) => (
                <PromptCard 
                  key={index} 
                  title={prompt.title}
                  description={prompt.description}
                  category={prompt.category}
                  prompt={prompt.prompt}
                  likes={prompt.likes}
                  comments={prompt.comments}
                  delay={index}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="technical" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrompts.map((prompt, index) => (
                <PromptCard 
                  key={index} 
                  title={prompt.title}
                  description={prompt.description}
                  category={prompt.category}
                  prompt={prompt.prompt}
                  likes={prompt.likes}
                  comments={prompt.comments}
                  delay={index}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="business" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrompts.map((prompt, index) => (
                <PromptCard 
                  key={index} 
                  title={prompt.title}
                  description={prompt.description}
                  category={prompt.category}
                  prompt={prompt.prompt}
                  likes={prompt.likes}
                  comments={prompt.comments}
                  delay={index}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PromptSection;
