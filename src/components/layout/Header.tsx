import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Search, User, Settings } from "lucide-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Home className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-foreground">AbodeAtlas</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex ml-8 space-x-6">
          <Link 
            to="/listings" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Browse Properties
          </Link>
          <Link 
            to="/list-property" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            List Property
          </Link>
          <Link 
            to="/agents" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Find Agents
          </Link>
          <Link 
            to="/blog" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Insights
          </Link>
          <Link 
            to="/contact" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        <div className="ml-auto flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </Link>
          <Link to="/register">
            <Button size="sm">
              Sign Up
            </Button>
          </Link>
          <Link to="/admin">
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Admin
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden ml-4"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-2 px-4 py-4 bg-background border-b">
            <Link 
              to="/listings" 
              className="text-sm font-medium py-2 transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Browse Properties
            </Link>
            <Link 
              to="/list-property" 
              className="text-sm font-medium py-2 transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              List Property
            </Link>
            <Link 
              to="/agents" 
              className="text-sm font-medium py-2 transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Find Agents
            </Link>
            <Link 
              to="/blog" 
              className="text-sm font-medium py-2 transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Insights
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium py-2 transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}