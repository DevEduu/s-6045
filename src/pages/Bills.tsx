import { Button } from "@/components/ui/button";
import { TopBar } from "@/components/TopBar";
import { Calendar, FileText } from "lucide-react";

const mockBills = [
  {
    id: 1,
    contract: "216550",
    description: "CONTRATO Nº 216550 - EMPRESA",
    value: 399.60,
    dueDate: "2024-12-15",
    status: "Em aberto",
    address: "RUA PADRE NESTOR SAMPAIO 477 PONTO NOVO - ARACAJU/SE"
  }
];

const Bills = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      <TopBar />
      <main className="container mx-auto px-4 pt-24 pb-8">
        {/* Contract Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <span>CONTRATO {mockBills[0].contract}</span>
              <span>•</span>
              <span>{mockBills[0].address}</span>
            </div>
            <h1 className="text-2xl font-semibold mb-2">Seja bem-vindo(a),</h1>
            <h2 className="text-xl font-medium text-gray-700">INVENTIONE SOLUÇÕES EM TECNOLOGIA DA INFORMAÇÃO LTDA - ME</h2>
          </div>
        </div>

        {/* Quick Access Section */}
        <section className="mb-8">
          <h3 className="text-lg font-medium mb-4">Acesso rápido</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="outline"
              className="h-24 flex flex-col items-center justify-center gap-2 bg-white hover:bg-gray-50"
            >
              <FileText className="h-6 w-6" />
              <span>Forma de pagamento</span>
            </Button>
          </div>
        </section>

        {/* Open Bills Section */}
        <section className="mb-8">
          <h3 className="text-lg font-medium mb-4">Faturas em aberto</h3>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex flex-col gap-4">
              {mockBills.map((bill) => (
                <div key={bill.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-700 mb-2">
                        {bill.status}
                      </span>
                      <div className="text-2xl font-semibold">
                        R$ {bill.value.toFixed(2)}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>Vence dia {new Date(bill.dueDate).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <Button className="w-full mt-4 bg-[#ffc107] hover:bg-[#ffb300] text-black">
                    Pagar fatura
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plan Section */}
        <section>
          <h3 className="text-lg font-medium mb-4">Seu plano</h3>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-sm bg-green-100 text-green-700 mb-2">
                  Em dia
                </span>
                <h4 className="text-lg font-medium mb-2">{mockBills[0].description}</h4>
                <div className="text-sm text-gray-600">
                  <p className="font-medium mb-1">Endereço</p>
                  <p>{mockBills[0].address}</p>
                </div>
                <div className="text-sm text-gray-600 mt-4">
                  <p className="font-medium mb-1">Contrato</p>
                  <p>{mockBills[0].contract}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Bills;