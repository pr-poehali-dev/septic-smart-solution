
import React from "react";
import { Button } from "@/components/ui/button";

interface PortfolioItemProps {
  image: string;
  title: string;
  location: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ image, title, location }) => {
  return (
    <div className="overflow-hidden rounded-lg relative group">
      <img 
        src={image}
        alt={title} 
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="text-white/80 text-sm">{location}</p>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1626863921221-1fce6037a271?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Установка Топас-8",
      location: "Дмитровский район, дер. Ольгово"
    },
    {
      image: "https://images.unsplash.com/photo-1631152282084-b8df1407f8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Септик для коттеджа",
      location: "Истринский район, КП \"Лесное\""
    },
    {
      image: "https://images.unsplash.com/photo-1523413307857-ef24c53571ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Биосептик \"Астра\"",
      location: "Чеховский район, СНТ \"Заречье\""
    }
  ];

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="text-4xl mb-4">🔧</div>
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Наши работы</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Мы установили более 500 септиков для частных домов и коттеджных поселков в Московской области
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioItems.map((item, index) => (
            <PortfolioItem 
              key={index}
              image={item.image}
              title={item.title}
              location={item.location}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            Смотреть все проекты
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
