
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, CheckCircle, FileCheck, Shield } from "lucide-react";

const Guarantees: React.FC = () => {
  const guarantees = [
    {
      icon: <FileCheck className="h-5 w-5 text-blue-600" />,
      title: "Сертифицированное оборудование",
      description: "Все устанавливаемые септики:",
      points: [
        "Сертифицированы согласно ГОСТ Р",
        "Соответствуют санитарным нормам РФ",
        "Имеют необходимые экологические разрешения"
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Shield className="h-5 w-5 text-blue-600" />,
      title: "Гарантийные обязательства",
      description: "Надежная защита ваших инвестиций:",
      points: [
        "До 10 лет на корпус септика от производителя",
        "3-5 лет на монтажные работы от \"Септикон\"",
        "1-2 года на насосное и электрическое оборудование"
      ],
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Briefcase className="h-5 w-5 text-blue-600" />,
      title: "Полный пакет документов",
      description: "После завершения работ вы получаете:",
      points: [
        "Паспорт на оборудование с гарантийным талоном",
        "Акт выполненных работ и сертификаты соответствия",
        "Схему установки и инструкцию по эксплуатации"
      ],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-4xl mb-4">🏆</div>
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Гарантии и сертификаты</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Мы отвечаем за качество наших услуг и установленного оборудования
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guarantees.map((item, index) => (
            <Card key={index} className="border border-slate-200 h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {item.icon}
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">{item.description}</p>
                <ul className="space-y-2 text-slate-600">
                  {item.points.map((point, pIndex) => (
                    <li key={pIndex} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guarantees;
