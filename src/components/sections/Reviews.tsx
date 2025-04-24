
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const Reviews: React.FC = () => {
  const reviews = [
    {
      quote: "Три зимы подряд — ни одного сбоя. Ни запаха. Спасибо вам!",
      initials: "АМ",
      name: "Алексей Михайлов",
      location: "Истринский район"
    },
    {
      quote: "Ставили соседу дешевле — он уже выкапывает. Я доволен, что выбрал «Септикон»",
      initials: "ИК",
      name: "Игорь Кузнецов",
      location: "Дмитровский район"
    }
  ];

  return (
    <section id="reviews" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-4xl mb-4">👥</div>
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Что говорят клиенты</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Довольные клиенты" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 gap-8">
              {reviews.map((review, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8">
                    <div className="flex items-start mb-4">
                      <MessageSquare className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                      <p className="text-lg italic">"{review.quote}"</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="font-semibold text-blue-600">{review.initials}</span>
                      </div>
                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-sm text-slate-500">{review.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
