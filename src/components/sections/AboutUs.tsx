
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const AboutUs: React.FC = () => {
  const benefits = [
    "Официальный дилер ведущих производителей септиков",
    "Более 500 успешно реализованных проектов",
    "Собственный парк техники и квалифицированные бригады"
  ];

  return (
    <section id="about" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <div className="text-4xl mb-4">🧠</div>
            <h2 className="text-3xl font-bold mb-6 text-slate-800">Кто мы такие</h2>
            <p className="text-xl text-slate-600 mb-6">
              Компания "Септикон" — это не просто «установка септика». Это способ вычеркнуть канализацию из жизни. Навсегда. Без запахов. Без беготни. Без паники зимой. С гарантией и сервисом.
            </p>
            <div className="space-y-4 mb-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-blue-100 h-8 w-8 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="text-slate-700">{benefit}</p>
                </div>
              ))}
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Узнать больше о нас
            </Button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Команда профессионалов" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
