import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <a href="/" className="text-xl font-bold text-secondary">
            YourSaaS
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">
              About
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost">Log in</Button>
          <Button className="bg-primary hover:bg-primary-dark text-white">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};