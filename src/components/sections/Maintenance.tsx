
import React from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, FileCheck, List, Wrench } from "lucide-react";

const Maintenance: React.FC = () => {
  const accordionItems = [
    {
      value: "item-1",
      trigger: <><Wrench className="h-5 w-5 mr-2" /> Регулярное обслуживание</>,
      content: [
        "Очистка фильтров и аэраторов",
        "Откачка накопившегося ила (раз в 1-2 года)",
        "Проверка электрической части и насосного оборудования"
      ]
    },
    {
      value: "item-2",
      trigger: <><FileCheck className="h-5 w-5 mr-2" /> Сервисный контракт</>,
      content: [
        "Приоритетное обслуживание в случае неисправности",
        "Скидку 20% на запасные части и расходные материалы",
        "Плановые проверки 2 раза в год"
      ],
      introText: "Заключите договор на комплексное обслуживание и получите:"
    },
    {
      value: "item-3",
      trigger: <><List className="h-5 w-5 mr-2" /> Рекомендации по эксплуатации</>,
      content: [
        "Используйте биопрепараты для ускорения разложения отходов",
        "Не выливайте в канализацию агрессивные химические вещества",
        "Следите за вентиляцией системы, особенно в зимний период"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-4xl mb-4">🔧</div>
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Обслуживание септиков</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Продлите срок службы вашей системы с профессиональным обслуживанием
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Обслуживание септика" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <Accordion type="single" collapsible className="w-full">
              {accordionItems.map((item, index) => (
                <AccordionItem key={index} value={item.value}>
                  <AccordionTrigger className="text-lg font-semibold">
                    {item.trigger}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    {item.introText && <p className="mb-4">{item.introText}</p>}
                    <ul className="space-y-2">
                      {item.content.map((point, pIndex) => (
                        <li key={pIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-8">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Заключить договор на обслуживание
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maintenance;
