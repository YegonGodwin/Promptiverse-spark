import { Link } from "react-router-dom";
import { Sparkles, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-white" />
              <span className="text-xl font-display font-medium text-white">
                PromptSpark
              </span>
            </Link>
            <p className="text-white/60 mb-6 max-w-md">
              Discover, create, and share powerful prompts that unlock the full
              potential of large language models. Join our community of AI
              enthusiasts.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/YegonGodwin/"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://twitter.com/FlynnGoodie/"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://www.linkedin.com/in/godwinkibet/"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/explore"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/trending"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Trending
                </Link>
              </li>
              <li>
                <Link
                  to="/community"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} PromptSpark. All rights reserved.
          </p>
          <p className="text-white/60 text-sm">
            Designed by Godwin Kibet❤️ for AI enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
