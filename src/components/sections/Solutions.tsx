
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Solutions: React.FC = () => {
  const solutions = [
    {
      title: "Живёте за городом",
      description: "Система, которая работает даже в снег и в -30. Документы включены.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Приезжаете летом",
      description: "Включили весной — забыли до осени. Без запаха и откачек.",
      image: "https://images.unsplash.com/photo-1595877244574-e90ce41ce089?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Строите дом",
      description: "Всё официально, под ключ, чтобы заехать спокойно.",
      image: "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Сдаёте дом",
      description: "Арендаторы довольны, не звонят, не жалуются.",
      image: "https://images.unsplash.com/photo-1549517045-bc93de075e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Думаете об экологии",
      description: "Био-септики с сертификацией, без «зелёного обмана».",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="solutions" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-4xl mb-4">🏠</div>
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Решения под ваши задачи</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className="border border-slate-200 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={solution.image} 
                  alt={solution.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle>{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{solution.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Подробнее <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
