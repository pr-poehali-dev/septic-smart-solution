
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Award, BadgeCheck, Shield, Truck } from "lucide-react";

const Comparison: React.FC = () => {
  const comparisonData = [
    { criterion: "Морозоустойчивость", septikon: "Да, до -35°", others: "Неизвестно" },
    { criterion: "Документы для узаконивания", septikon: "Включены", others: "Часто нет" },
    { criterion: "Общение", septikon: "Простое, по-человечески", others: "Сухо и по-строительному" },
    { criterion: "Сервис", septikon: "24/7 даже после установки", others: "«Позвоните, если что»" },
    { criterion: "Цена", septikon: "Фиксированная, честная", others: "Сюрпризы после подписания" },
    { criterion: "Работа зимой", septikon: "Круглый год, в любую погоду", others: "Часто только в теплое время" },
    { criterion: "Гарантия", septikon: "До 5 лет на все работы", others: "Минимальная или отсутствует" }
  ];

  const advantages = [
    {
      icon: <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />,
      title: "Официальный дилер",
      description: "Топас, Евробион, Астра и другие ведущие производители"
    },
    {
      icon: <BadgeCheck className="h-12 w-12 text-blue-600 mx-auto mb-4" />,
      title: "Гарантия качества",
      description: "От 3 до 5 лет на оборудование и монтажные работы"
    },
    {
      icon: <Truck className="h-12 w-12 text-blue-600 mx-auto mb-4" />,
      title: "Собственный парк техники",
      description: "Квалифицированные бригады и современное оборудование"
    },
    {
      icon: <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />,
      title: "500+ проектов",
      description: "Успешно реализованных в Московской области"
    }
  ];

  return (
    <section id="comparison" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-4xl mb-4">🎯</div>
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Почему нас выбирают</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1607400201515-c2c41c07d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Качественная установка септика" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="max-w-xl">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/3">Критерий</TableHead>
                  <TableHead className="w-1/3 text-blue-600">"Септикон"</TableHead>
                  <TableHead className="w-1/3">Обычные установщики</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{row.criterion}</TableCell>
                    <TableCell className="bg-blue-50">{row.septikon}</TableCell>
                    <TableCell>{row.others}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {advantages.map((item, index) => (
            <Card key={index} className="border-0 shadow-md text-center">
              <CardContent className="pt-8">
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;
