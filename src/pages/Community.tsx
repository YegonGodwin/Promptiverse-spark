
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Community = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [profiles, setProfiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is authenticated
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      
      if (!data.session) {
        toast.error("You need to be logged in to access the community");
        navigate("/login");
        return;
      }
      
      setUser(data.session.user);
      
      // Set up auth state change listener
      const { data: authListener } = supabase.auth.onAuthStateChange(
        (event, session) => {
          if (event === "SIGNED_OUT") {
            navigate("/login");
          }
        }
      );
      
      // Fetch community profiles
      fetchProfiles();
      
      setIsLoaded(true);
    };
    
    checkUser();
  }, [navigate]);
  
  const fetchProfiles = async () => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(10);
        
      if (error) throw error;
      
      setProfiles(data || []);
    } catch (error: any) {
      toast.error(error.message || "Error loading community profiles");
    } finally {
      setLoading(false);
    }
  };
  
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out successfully");
    navigate("/login");
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
            <div className="flex justify-between items-center">
              <h1 className="text-4xl font-bold mb-6">Community</h1>
              {user && (
                <Button variant="outline" onClick={handleSignOut}>
                  Sign Out
                </Button>
              )}
            </div>
            <p className="text-white/70 max-w-3xl mb-8">
              Connect with other prompt engineers, share ideas, and collaborate on new prompts.
            </p>
            
            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="p-6 rounded-lg border border-white/10 glass-morphism">
                    <Skeleton className="h-6 w-1/4 bg-white/10 mb-4" />
                    <Skeleton className="h-4 w-full bg-white/10 mb-2" />
                    <Skeleton className="h-4 w-3/4 bg-white/10" />
                  </div>
                ))}
              </div>
            ) : profiles.length > 0 ? (
              <div className="space-y-6">
                {profiles.map((profile) => (
                  <motion.div
                    key={profile.id}
                    className="p-6 rounded-lg border border-white/10 glass-morphism"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-10 w-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        {profile.username?.charAt(0).toUpperCase() || "U"}
                      </div>
                      <div>
                        <h3 className="font-medium">{profile.username || "Anonymous User"}</h3>
                        <p className="text-sm text-white/60">Member since {new Date(profile.member_since || profile.created_at).toLocaleDateString()}</p>
                      </div>
                    </div>
                    {profile.bio && <p className="text-white/80">{profile.bio}</p>}
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-white/70 text-lg mb-4">No community members found.</p>
                <p className="text-white/50">Be the first to join!</p>
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
