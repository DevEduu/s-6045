import { TopBar } from "@/components/TopBar";

const Bills = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <main className="container mx-auto px-4 pt-24">
        <h1 className="text-2xl font-bold text-gray-900">Minhas Faturas</h1>
      </main>
    </div>
  );
};

export default Bills;