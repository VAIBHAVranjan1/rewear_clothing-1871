import { Button } from "../components/ui/button";
import { ArrowRight, Plus, Search } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-500 via-green-400 to-emerald-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Swapping?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of users who are already making a difference through sustainable swapping
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-white/20 rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Search className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Browse Items</h3>
            <p className="text-white/80 mb-6">
              Discover amazing items from our community of swappers
            </p>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Start Browsing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="text-center">
            <div className="bg-white/20 rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Plus className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">List an Item</h3>
            <p className="text-white/80 mb-6">
              Share your unused items and earn points for future swaps
            </p>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              List Item
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="text-center">
            <div className="bg-white/20 rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <ArrowRight className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Start Swapping</h3>
            <p className="text-white/80 mb-6">
              Make your first swap and join our sustainable community
            </p>
            <Button variant="hero" className="bg-white text-primary hover:bg-white/90">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;