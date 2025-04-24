
import React from "react";
import { Button } from "@/components/ui/button";
import { Clock, CreditCard, Gift, Sparkles } from "lucide-react";

const Advantages: React.FC = () => {
  const advantages = [
    {
      icon: <CreditCard className="h-6 w-6 text-blue-600" />,
      title: "Цены от производителя",
      description: "Работаем напрямую с заводами-изготовителями, исключая посредников и предлагая оптимальные цены на оборудование."
    },
    {
      icon: <Gift className="h-6 w-6 text-blue-600" />,
      title: "Скидки и акции",
      description: "Специальные предложения для новых клиентов: 10% скидка на монтаж при заказе септика до конца месяца. Сезонные акции и бонусы."
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Рассрочка платежа",
      description: "Возможность оплаты в рассрочку как на оборудование, так и на монтажные работы. Гибкие условия и индивидуальный подход."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-blue-600" />,
      title: "Экологически чистые решения",
      description: "Безопасные для природы технологии очистки стоков, соответствующие всем экологическим нормам и стандартам."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-4xl mb-4">💰</div>
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Наши преимущества: выгода и комфорт для вас</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Финансовые преимущества" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  {advantage.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-slate-600">{advantage.description}</p>
                </div>
              </div>
            ))}
            
            <div className="mt-6">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Узнать о текущих акциях
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
