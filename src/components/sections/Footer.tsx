
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo-b.svg" alt="Септикон" className="h-8 brightness-0 invert" />
              <h1 className="text-xl font-bold text-white">Септикон</h1>
            </div>
            <p className="mb-4">Профессиональная установка септиков и автономных систем канализации "под ключ"</p>
            <p>© 2024 «Септикон». Все права защищены.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-blue-300 transition-colors">Подбор септика</a></li>
              <li><a href="#services" className="hover:text-blue-300 transition-colors">Монтаж "под ключ"</a></li>
              <li><a href="#maintenance" className="hover:text-blue-300 transition-colors">Обслуживание</a></li>
              <li><a href="#types" className="hover:text-blue-300 transition-colors">Типы септиков</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">О компании</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-blue-300 transition-colors">О нас</a></li>
              <li><a href="#portfolio" className="hover:text-blue-300 transition-colors">Наши работы</a></li>
              <li><a href="#reviews" className="hover:text-blue-300 transition-colors">Отзывы</a></li>
              <li><a href="#guarantees" className="hover:text-blue-300 transition-colors">Гарантии</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <p>Москва, ул. Примерная, д. 123</p>
            <p className="font-semibold text-white">+7 (495) 123-45-67</p>
            <p className="mb-4">info@septikon.ru</p>
            <p className="text-sm">Время работы: 9:00 - 20:00, ежедневно</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
