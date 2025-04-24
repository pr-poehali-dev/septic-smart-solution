
import React from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-cover bg-center z-0 opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1625576282819-f7d8395aaa13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Профессиональная установка септиков "под ключ"
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Компания «Септикон» – ваш надежный партнер по подбору и монтажу автономных систем канализации для загородного дома и дачного участка в Москве и Московской области
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
              Рассчитать стоимость
            </Button>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-6">
              Наши проекты
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1533417379565-6e21cba45518?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Монтаж септика" 
            className="rounded-lg shadow-xl max-w-full md:max-w-2xl h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
