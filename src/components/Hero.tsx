
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-primary/5 py-16 md:py-24">
      <div className="container relative z-10">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center">
          <div className="flex flex-col gap-4">
            <h1 className="font-montserrat text-3xl md:text-5xl font-bold tracking-tight">
              Делайте покупки с комфортом
            </h1>
            <p className="font-rubik text-lg text-muted-foreground md:text-xl">
              Широкий ассортимент товаров по лучшим ценам с доставкой по всей России
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="font-medium">
                Каталог товаров
              </Button>
              <Button size="lg" variant="outline" className="font-medium">
                Специальные предложения
              </Button>
            </div>
          </div>
          
          <div className="relative h-64 md:h-80 lg:h-96 rounded-lg bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 shadow-xl flex items-center justify-center overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=1170&auto=format&fit=crop" 
              alt="Покупки онлайн" 
              className="w-full h-full object-cover mix-blend-overlay opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white/80 backdrop-blur-sm text-primary font-bold px-6 py-3 rounded-full text-lg shadow-lg">
                Скидки до 50%
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Декоративные элементы */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
    </section>
  );
};

export default Hero;
