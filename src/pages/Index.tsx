import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [document, setDocument] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between p-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#22c55e]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#22c55e]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="w-full max-w-md flex flex-col items-center gap-8 z-10">
        {/* Logo */}
        <img 
          src="/lovable-uploads/35ec3c50-2dc4-4c74-b83a-fe0fd05bc097.png" 
          alt="Receba Logo" 
          className="h-8 mt-12"
        />

        {/* Tabs */}
        <Tabs defaultValue="fatura" className="w-full max-w-xs">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="portal">Portal</TabsTrigger>
            <TabsTrigger value="fatura">Fatura</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Login Form */}
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold text-gray-900">Fatura fácil ✌️</h1>
            <p className="text-gray-600">Para começar, digite seu CPF ou CNPJ</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="document" className="text-sm text-gray-600">
                CPF ou CNPJ
              </label>
              <Input
                id="document"
                type="text"
                placeholder="Entre com o seu CPF ou CNPJ"
                value={document}
                onChange={(e) => setDocument(e.target.value)}
                className="w-full"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-medium py-6"
            >
              Login
            </Button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-gray-400 text-sm py-4">
        ©2025 Receba All Right Reserved.
      </footer>
    </div>
  );
};

export default Index;