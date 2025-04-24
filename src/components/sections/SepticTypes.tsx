
import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Heart, Leaf, Zap, Star, ThumbsUp } from "lucide-react";

const SepticTypes: React.FC = () => {
  const typesData = {
    energyDependent: {
      title: "Энергозависимые септики",
      description: "Идеальное решение для постоянного проживания. Обеспечивают высокую степень очистки за счет принудительной аэрации.",
      pros: "Высокая степень очистки (до 98%), компактность, отсутствие запаха",
      features: "Требуют подключения к электричеству, имеют движущиеся части",
      recommend: "Для постоянного проживания, при наличии стабильного электроснабжения",
      popularModels: [
        "Топас — оптимальное соотношение цена/качество",
        "Евробион — компактность и надежность",
        "Астра — для сложных условий эксплуатации"
      ],
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    energyIndependent: {
      title: "Энергонезависимые септики",
      description: "Надежное решение для сезонного проживания и участков с нестабильным электроснабжением.",
      pros: "Работа без электричества, простота конструкции, долговечность",
      features: "Требуют большей площади для размещения, периодическая откачка",
      recommend: "Для дачных участков, сезонного проживания, в качестве резервной системы",
      popularModels: [
        "Танк — надежная и экономичная конструкция",
        "Росток — оптимально для сезонного использования",
        "Термит — компактное решение для малых участков"
      ],
      image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  };

  // Renders a single tab content
  const renderTabContent = (data: any) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <img 
          src={data.image} 
          alt={data.title} 
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4 text-slate-800">{data.title}</h3>
        <p className="text-slate-600 mb-6">{data.description}</p>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-2">
            <ThumbsUp className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-slate-800">Преимущества</h4>
              <p className="text-slate-600">{data.pros}</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <BarChart className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-slate-800">Особенности</h4>
              <p className="text-slate-600">{data.features}</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Heart className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-slate-800">Рекомендуем</h4>
              <p className="text-slate-600">{data.recommend}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-50 p-4 rounded-lg">
          <h4 className="font-semibold text-slate-800 mb-2">Популярные модели:</h4>
          <ul className="space-y-2 text-slate-600">
            {data.popularModels.map((model: string, index: number) => (
              <li key={index} className="flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-500" />
                <span>{model}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <section id="types" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-4xl mb-4">🔍</div>
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Типы септиков: какой подходит именно вам?</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            Подберем оптимальное решение в зависимости от ваших потребностей и бюджета
          </p>
        </div>
        
        <Tabs defaultValue="energy-dependent" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 mb-8 w-full md:w-2/3 mx-auto">
            <TabsTrigger value="energy-dependent" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <Zap className="h-4 w-4 mr-2" />
              Энергозависимые
            </TabsTrigger>
            <TabsTrigger value="energy-independent" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <Leaf className="h-4 w-4 mr-2" />
              Энергонезависимые
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="energy-dependent">
            {renderTabContent(typesData.energyDependent)}
          </TabsContent>
          
          <TabsContent value="energy-independent">
            {renderTabContent(typesData.energyIndependent)}
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 text-center">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Консультация по выбору септика
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SepticTypes;
