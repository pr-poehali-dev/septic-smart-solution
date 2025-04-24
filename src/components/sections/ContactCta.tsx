
import React from "react";
import { Button } from "@/components/ui/button";

const ContactCta: React.FC = () => {
  return (
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
  );
};

export default ContactCta;
