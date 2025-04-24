
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const GiftBanner: React.FC = () => {
  const gifts = [
    {
      icon: "💡",
      title: "Бесплатный подбор септика",
      description: "Индивидуальный расчет по вашему участку и потребностям",
      image: "https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: "📘",
      title: "Инструкция по уходу",
      description: "\"Как ухаживать за септиком и не париться\"",
      image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: "🛠",
      title: "12 месяцев техподдержки",
      description: "Помощь специалистов в любое время дня и ночи",
      image: "https://images.unsplash.com/photo-1581092787765-e561edd131f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="text-4xl mb-4">🎁</div>
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Подарок за заявку</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {gifts.map((gift, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img 
                  src={gift.image} 
                  alt={gift.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <div className="text-3xl mb-4">{gift.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{gift.title}</h3>
                <p className="text-slate-600">{gift.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftBanner;
