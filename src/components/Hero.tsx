import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
          Transform Your Workflow
          <span className="text-primary"> Today</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Streamline your business operations with our powerful SaaS solution.
          Built for modern teams who demand excellence.
        </p>
        <div className="flex justify-center space-x-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg">
            Start Free Trial
          </Button>
          <Button variant="outline" className="px-8 py-6 text-lg">
            Watch Demo
          </Button>
        </div>
      </div>
    </div>
  );
};