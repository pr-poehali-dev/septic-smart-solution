
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Award, CheckCircle, Gift, Home, MessageSquare, Shield, ThumbsUp, Truck } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
            <a href="#problems" className="text-slate-700 hover:text-blue-600">Проблемы</a>
            <a href="#about" className="text-slate-700 hover:text-blue-600">О нас</a>
            <a href="#comparison" className="text-slate-700 hover:text-blue-600">Сравнение</a>
            <a href="#solutions" className="text-slate-700 hover:text-blue-600">Решения</a>
            <a href="#reviews" className="text-slate-700 hover:text-blue-600">Отзывы</a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600">Контакты</a>
          </div>
          <div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-cover bg-center z-0 opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1625576282819-f7d8395aaa13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}></div>
        <div className="container mx-auto px-4 relative z-10">
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
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1533417379565-6e21cba45518?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Монтаж септика" 
              className="rounded-lg shadow-xl max-w-full md:max-w-2xl h-auto"
            />
          </div>
        </div>
      </section>

      {/* Знакомо? Секция */}
      <section id="problems" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-slate-800">Знакомо?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1530088460146-76a47d306e7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Запахи на участке" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">💩</div>
                <h3 className="text-xl font-semibold mb-2">Запахи на участке?</h3>
                <p className="text-slate-600">Неприятный запах, который портит отдых и настроение</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1610131656744-02043dd3e3e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Замёрзшая труба" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🧊</div>
                <h3 className="text-xl font-semibold mb-2">Замёрзла труба зимой?</h3>
                <p className="text-slate-600">Аварии и поломки в самое неподходящее время</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1620905129741-d63f18c6a623?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Ассенизатор" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">💸</div>
                <h3 className="text-xl font-semibold mb-2">Ассенизатор раз в 2 недели?</h3>
                <p className="text-slate-600">Постоянные расходы и зависимость от графика откачки</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Штраф" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">👮‍♂️</div>
                <h3 className="text-xl font-semibold mb-2">Штраф за незаконный слив?</h3>
                <p className="text-slate-600">Проблемы с законом и экологией из-за неправильной системы</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="max-w-3xl mx-auto text-center bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-slate-800">Хватит это терпеть!</h3>
            <p className="text-lg text-slate-700 mb-0">
              Есть решение, которое работает раз и навсегда. И вы не слышали о нём — потому что мы не кричим, а просто делаем.
            </p>
          </div>
        </div>
      </section>

      {/* Кто мы такие */}
      <section id="about" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <div className="text-4xl mb-4">🧠</div>
              <h2 className="text-3xl font-bold mb-6 text-slate-800">Кто мы такие</h2>
              <p className="text-xl text-slate-600 mb-6">
                Компания "Септикон" — это не просто «установка септика». Это способ вычеркнуть канализацию из жизни. Навсегда. Без запахов. Без беготни. Без паники зимой. С гарантией и сервисом.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Узнать больше о нас
              </Button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Команда профессионалов" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Почему нас выбирают */}
      <section id="comparison" className="py-16 bg-white">
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
                  <TableRow>
                    <TableCell className="font-medium">Морозоустойчивость</TableCell>
                    <TableCell className="bg-blue-50">Да, до -35°</TableCell>
                    <TableCell>Неизвестно</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Документы для узаконивания</TableCell>
                    <TableCell className="bg-blue-50">Включены</TableCell>
                    <TableCell>Часто нет</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Общение</TableCell>
                    <TableCell className="bg-blue-50">Простое, по-человечески</TableCell>
                    <TableCell>Сухо и по-строительному</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Сервис</TableCell>
                    <TableCell className="bg-blue-50">24/7 даже после установки</TableCell>
                    <TableCell>«Позвоните, если что»</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Цена</TableCell>
                    <TableCell className="bg-blue-50">Фиксированная, честная</TableCell>
                    <TableCell>Сюрпризы после подписания</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      {/* Решения под ваши задачи */}
      <section id="solutions" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-4xl mb-4">🏠</div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Решения под ваши задачи</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border border-slate-200 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Загородный дом" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle>Живёте за городом</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Система, которая работает даже в снег и в -30. Документы включены.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Подробнее <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </CardFooter>
            </Card>

            <Card className="border border-slate-200 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1595877244574-e90ce41ce089?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Летний дом" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle>Приезжаете летом</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Включили весной — забыли до осени. Без запаха и откачек.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Подробнее <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </CardFooter>
            </Card>

            <Card className="border border-slate-200 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Строительство дома" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle>Строите дом</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Всё официально, под ключ, чтобы заехать спокойно.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Подробнее <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </CardFooter>
            </Card>

            <Card className="border border-slate-200 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1549517045-bc93de075e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Дом для сдачи" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle>Сдаёте дом</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Арендаторы довольны, не звонят, не жалуются.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Подробнее <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </CardFooter>
            </Card>

            <Card className="border border-slate-200 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Экологичное решение" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle>Думаете об экологии</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Био-септики с сертификацией, без «зелёного обмана».</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Подробнее <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Отзывы клиентов */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-4xl mb-4">👥</div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Что говорят клиенты</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Довольные клиенты" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 gap-8">
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8">
                    <div className="flex items-start mb-4">
                      <MessageSquare className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                      <p className="text-lg italic">"Три зимы подряд — ни одного сбоя. Ни запаха. Спасибо вам!"</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="font-semibold text-blue-600">АМ</span>
                      </div>
                      <div>
                        <p className="font-semibold">Алексей Михайлов</p>
                        <p className="text-sm text-slate-500">Истринский район</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8">
                    <div className="flex items-start mb-4">
                      <MessageSquare className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                      <p className="text-lg italic">"Ставили соседу дешевле — он уже выкапывает. Я доволен, что выбрал «Септикон»"</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="font-semibold text-blue-600">ИК</span>
                      </div>
                      <div>
                        <p className="font-semibold">Игорь Кузнецов</p>
                        <p className="text-sm text-slate-500">Дмитровский район</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Подарок за заявку */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="text-4xl mb-4">🎁</div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Подарок за заявку</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Бесплатный подбор септика" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <div className="text-3xl mb-4">💡</div>
                <h3 className="text-xl font-semibold mb-2">Бесплатный подбор септика</h3>
                <p className="text-slate-600">Индивидуальный расчет по вашему участку и потребностям</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Инструкция по уходу" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <div className="text-3xl mb-4">📘</div>
                <h3 className="text-xl font-semibold mb-2">Инструкция по уходу</h3>
                <p className="text-slate-600">"Как ухаживать за септиком и не париться"</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581092787765-e561edd131f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Техподдержка" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <div className="text-3xl mb-4">🛠</div>
                <h3 className="text-xl font-semibold mb-2">12 месяцев техподдержки</h3>
                <p className="text-slate-600">Помощь специалистов в любое время дня и ночи</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Наши работы */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="text-4xl mb-4">🔧</div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Наши работы</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Мы установили более 300 септиков для частных домов и коттеджных поселков в Московской области
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1626863921221-1fce6037a271?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Установка септика 1" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1631152282084-b8df1407f8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Установка септика 2" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1523413307857-ef24c53571ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Установка септика 3" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Смотреть все проекты
            </Button>
          </div>
        </div>
      </section>

      {/* Оставьте заявку */}
      <section id="contact" className="py-16 bg-blue-600 text-white relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-4xl mb-4">📞</div>
            <h2 className="text-3xl font-bold mb-6">Оставьте заявку — и забудьте о канализации</h2>
            <p className="text-xl mb-4">1 минута на заявку — комфорт на годы.</p>
            <p className="text-xl mb-8">Заполните форму — и мы вам подберём решение без головной боли.</p>
            <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6">
              Оставить заявку
            </Button>
            <p className="mt-8 text-lg font-light">
              «Септикон» — это не о трубах. Это о людях, которые не хотят больше думать о канализации. Мы ставим так, как ставили бы себе.
            </p>
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
