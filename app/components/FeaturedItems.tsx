import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Heart, Eye, Star } from "lucide-react";

const FeaturedItems = () => {
  const featuredItems = [
    {
      id: 1,
      title: "Vintage Camera Collection",
      description: "Professional DSLR camera with lens kit",
      category: "Electronics",
      condition: "Good",
      points: 850,
      likes: 24,
      views: 156,
      rating: 4.8
    },
    {
      id: 2,
      title: "Classic Literature Set",
      description: "20 classic novels in excellent condition",
      category: "Books",
      condition: "Excellent",
      points: 420,
      likes: 18,
      views: 89,
      rating: 4.9
    },
    {
      id: 3,
      title: "Modern Desk Lamp",
      description: "Adjustable LED desk lamp with USB charging",
      category: "Home & Office",
      condition: "Like New",
      points: 180,
      likes: 31,
      views: 203,
      rating: 4.7
    }
  ];

  return (
    <section className="py-20 bg-background ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Items
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing items from our community. Every swap tells a story 
            and creates new possibilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card border-border">
              <div className="relative h-12">
                <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                  {item.category}
                </Badge>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white text-foreground"
                >
                  <Heart className="h-4 w-4 hover:bg-red" />
                </Button>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-xl text-foreground leading-tight">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1 text-primary font-bold">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm">{item.rating}</span>
                  </div>
                </div>
                
                <p className="text-base text-muted-foreground mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-green-200 text-green-700">
                    {item.condition}
                  </Badge>
                  <div className="text-2xl font-bold text-primary">
                    {item.points} pts
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    <span>{item.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{item.views}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1 bg-green-600 text-white text-lg font-extrabold py-3 hover:bg-green-700 transition-all">
                     Swap Request
                </Button>
                  <Button variant="outline" className="flex-1 font-bold">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="cta" size="lg" className="px-8">
            Browse All Items
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
