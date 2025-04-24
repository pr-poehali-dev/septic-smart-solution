
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Problems: React.FC = () => {
  const problems = [
    {
      icon: "💩",
      title: "Запахи на участке?",
      description: "Неприятный запах, который портит отдых и настроение",
      image: "https://images.unsplash.com/photo-1530088460146-76a47d306e7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Запахи на участке"
    },
    {
      icon: "🧊",
      title: "Замёрзла труба зимой?",
      description: "Аварии и поломки в самое неподходящее время",
      image: "https://images.unsplash.com/photo-1610131656744-02043dd3e3e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Замёрзшая труба"
    },
    {
      icon: "💸",
      title: "Ассенизатор раз в 2 недели?",
      description: "Постоянные расходы и зависимость от графика откачки",
      image: "https://images.unsplash.com/photo-1620905129741-d63f18c6a623?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Ассенизатор"
    },
    {
      icon: "👮‍♂️",
      title: "Штраф за незаконный слив?",
      description: "Проблемы с законом и экологией из-за неправильной системы",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Штраф"
    }
  ];

  return (
    <section id="problems" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-slate-800">Знакомо?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((problem, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={problem.image} 
                  alt={problem.alt} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                <p className="text-slate-600">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto text-center bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-slate-800">Хватит это терпеть!</h3>
          <p className="text-lg text-slate-700 mb-0">
            Есть решение, которое работает раз и навсегда. И вы не слышали о нём — потому что мы не кричим, а просто делаем.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problems;
