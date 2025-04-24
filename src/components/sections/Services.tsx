
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Package, Settings, Tools } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: <Package className="h-5 w-5 text-blue-600" />,
      title: "Подбор оптимального септика",
      description: "Индивидуальный подбор под ваши нужды с учетом:",
      features: [
        "Объема стоков и количества проживающих",
        "Особенностей грунта и рельефа участка",
        "Режима использования (постоянно/сезонно)"
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Tools className="h-5 w-5 text-blue-600" />,
      title: "Профессиональная установка",
      description: "Монтаж септиков и систем очистки \"под ключ\":",
      features: [
        "Земляные работы с использованием спецтехники",
        "Монтаж системы с соблюдением всех норм",
        "Подключение к дому и пусконаладка"
      ],
      image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Settings className="h-5 w-5 text-blue-600" />,
      title: "Обслуживание и ремонт",
      description: "Поддержка работоспособности систем:",
      features: [
        "Регулярное техническое обслуживание",
        "Оперативный ремонт при поломках",
        "Сервисные контракты с выгодными условиями"
      ],
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const workStages = [
    { number: 1, title: "Выезд инженера на участок", description: "Бесплатная консультация и оценка условий" },
    { number: 2, title: "Разработка проекта", description: "Детальный план с учетом особенностей участка" },
    { number: 3, title: "Подбор и доставка оборудования", description: "Оптимальное решение под ваши задачи" },
    { number: 4, title: "Монтаж и подключение", description: "Профессиональная установка \"под ключ\"" },
    { number: 5, title: "Пусконаладка и обучение", description: "Запуск системы и инструктаж по эксплуатации" }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-4xl mb-4">🛠️</div>
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Полный спектр решений автономной канализации</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            От консультации до обслуживания — мы предоставляем комплексное решение ваших задач
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="border border-slate-200 h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {service.icon}
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <ul className="space-y-2 text-slate-600">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-blue-50 rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center text-slate-800">Этапы работы: от заявки до запуска</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1590935217281-8f102120d683?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Этапы работы" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="space-y-4">
              {workStages.map((stage, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {stage.number}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{stage.title}</h4>
                    <p className="text-slate-600">{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
