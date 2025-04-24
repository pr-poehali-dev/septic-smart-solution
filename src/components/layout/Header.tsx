
import React from "react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const navLinks = [
    { href: "#problems", label: "Проблемы" },
    { href: "#about", label: "О нас" },
    { href: "#services", label: "Услуги" },
    { href: "#comparison", label: "Сравнение" },
    { href: "#solutions", label: "Решения" },
    { href: "#types", label: "Типы септиков" },
    { href: "#portfolio", label: "Наши работы" },
    { href: "#reviews", label: "Отзывы" },
    { href: "#contact", label: "Контакты" }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo-b.svg" alt="Септикон" className="h-10" />
          <h1 className="text-2xl font-bold text-slate-800">Септикон</h1>
        </div>
        <div className="hidden md:flex gap-6">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="text-slate-700 hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Заказать звонок
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
