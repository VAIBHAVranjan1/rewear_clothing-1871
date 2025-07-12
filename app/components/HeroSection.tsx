import { Button } from "../components/ui/button";
import { ArrowRight, RefreshCw, Heart, Shield } from "lucide-react";


const HeroSection = () => {
  return (

      <section className="relative bg-gradient-to-r from-green-600 via-green-400 to-emerald-200 min-h-[70vh] md:min-h-[60vh] flex items-center overflow-hidden">

      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Swap, Share, 
                <span className="text-yellow-300"> Sustain</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-lg">
                Transform your unused items into treasures for others. Join our community 
                of eco-conscious swappers and discover the joy of sustainable living.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  variant="hero"
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-500 text-xl text-white font-bold px-10 py-4 border rounded-xl"
                >
                  Start Swapping
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="text-xl font-bold px-10 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  Browse Items
                </Button>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-8 mt-12 text-white/80">
                <div className="flex items-center gap-2">
                  <RefreshCw className="h-5 w-5 text-green-400" />
                  <span>Eco-Friendly</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-400" />
                  <span>Community</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-400" />
                  <span>Secure</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                {/* <img 
                  src={`${heroImage}`} 
                  alt="People sharing and swapping items"
                  className="w-full h-auto object-cover"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-4 -left-4 bg-card p-4 rounded-lg shadow-card border border-border bg-white">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Items Swapped</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-lg shadow-card border border-border bg-white">
                <div className="text-2xl font-bold text-primary">25K+</div>
                <div className="text-sm text-muted-foreground">Happy Users</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;