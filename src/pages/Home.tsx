
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Award, CheckCircle, Home, Shield, Truck } from "lucide-react";

const HomePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/logo-b.svg" alt="Септикон" className="h-10" />
            <h1 className="text-2xl font-bold text-slate-800">Септикон</h1>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#services" className="text-slate-700 hover:text-blue-600">Услуги</a>
            <a href="#advantages" className="text-slate-700 hover:text-blue-600">Преимущества</a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600">Контакты</a>
          </div>
          <div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Профессиональная установка септиков "под ключ"
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Компания «Септикон» – ваш надежный партнер по подбору и монтажу автономных систем канализации для загородного дома и дачного участка в Москве и Московской области
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                Рассчитать стоимость
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-6">
                Наши проекты
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  Официальный дилер
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Работаем напрямую с заводами-производителями, предоставляем официальную гарантию на оборудование и монтажные работы</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-6 w-6 text-blue-600" />
                  Комплексный подход
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>От консультации и подбора оптимального септика до монтажа и обслуживания – полный цикл работ в одних руках</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-blue-600" />
                  Профессионализм
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Опытные инженеры и монтажники с многолетним стажем обеспечат качественную установку любой сложности</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-slate-200">
              <CardHeader>
                <CardTitle>Подбор автономной канализации</CardTitle>
                <CardDescription>Индивидуальный расчет под ваши потребности</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Бесплатный выезд инженера на объект</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Расчет оптимальной производительности</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Подбор модели с учетом особенностей участка</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Подробнее <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </CardFooter>
            </Card>

            <Card className="border border-slate-200">
              <CardHeader>
                <CardTitle>Установка септиков "под ключ"</CardTitle>
                <CardDescription>От земляных работ до подключения</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Земляные работы и подготовка котлована</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Монтаж септика и прокладка коммуникаций</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Пусконаладочные работы и ввод в эксплуатацию</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Подробнее <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Почему выбирают «Септикон»</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Home className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Опыт более 10 лет</h3>
              </div>
              <p className="text-slate-600">Тысячи успешно реализованных проектов любой сложности в Москве и области</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Официальная гарантия</h3>
              </div>
              <p className="text-slate-600">До 5 лет на оборудование и до 1 года на все монтажные работы</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Truck className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Фиксированные цены</h3>
              </div>
              <p className="text-slate-600">Стоимость в договоре не меняется. Никаких скрытых доплат и сюрпризов</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Получите бесплатную консультацию</h2>
            <p className="text-xl mb-8">Оставьте заявку, и наш специалист свяжется с вами в ближайшее время для расчета стоимости и подбора оптимального решения</p>
            <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6">
              Оставить заявку
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 text-slate-300 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo-b.svg" alt="Септикон" className="h-8 brightness-0 invert" />
                <h1 className="text-xl font-bold text-white">Септикон</h1>
              </div>
              <p>© 2024 «Септикон». Все права защищены.</p>
            </div>
            <div className="mt-6 md:mt-0">
              <h3 className="text-white font-semibold mb-4">Контакты</h3>
              <p>Москва, ул. Примерная, д. 123</p>
              <p className="font-semibold text-white">+7 (495) 123-45-67</p>
              <p>info@septikon.ru</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
