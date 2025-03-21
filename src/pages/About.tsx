
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6">About PromptSpark</h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-white/70 text-lg mb-6">
                PromptSpark is a community-driven platform dedicated to collecting, creating, and sharing powerful prompts for large language models. Our mission is to help AI enthusiasts, content creators, developers, and businesses harness the full potential of AI language models through effective prompting techniques.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4">Our Mission</h2>
              <p className="text-white/70 mb-6">
                We believe that the right prompt can unlock incredible capabilities in AI systems. By building a collaborative environment where prompt engineers can share their knowledge and creations, we aim to democratize access to effective AI utilization techniques and foster innovation in the field.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4">Our Community</h2>
              <p className="text-white/70 mb-6">
                PromptSpark is home to a diverse community of AI enthusiasts, from beginners to expert prompt engineers. We welcome anyone interested in exploring and pushing the boundaries of what's possible with language models through creative and effective prompting.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4">Join Us</h2>
              <p className="text-white/70 mb-6">
                Whether you're looking to discover powerful prompts, share your own creations, or connect with other AI enthusiasts, PromptSpark is the place for you. Create an account today to become part of our growing community and help shape the future of AI prompting.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
