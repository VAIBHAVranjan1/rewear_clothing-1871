'use client';

import { Button } from "../components/ui/button";
import { ArrowRightLeft, User, Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/"; // or use router.push('/')
  };

  return (
    <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ArrowRightLeft className="h-8 w-8 text-primary" />
          <Link href="/">
            <h1 className="text-2xl font-bold text-primary">SwapHub</h1>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-foreground hover:text-primary transition-colors">Browse Items</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">How It Works</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Community</a>
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="hidden sm:flex items-center font-semibold text-base text-green-600">
                <User className="h-4 w-4 mr-2" />
                Hi, {user.name.split(" ")[0]}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="hidden sm:flex text-sm text-red-600 hover:bg-red-100"
              >
                Logout
              </Button>
            </>
          ) : (
            <Link href="/login">
              <Button
                variant="ghost"
                size="sm"
                className="hidden sm:flex font-semibold text-base cursor-pointer hover:bg-gradient-to-b hover:from-green-600 hover:to-green-500 hover:text-white"
              >
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </Link>
          )}

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
