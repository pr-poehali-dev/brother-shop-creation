
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductList from '@/components/ProductList';
import Categories from '@/components/Categories';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductList />
        
        {/* Промо-секция */}
        <section className="py-12 bg-primary/5">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Icon name="Truck" className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">Быстрая доставка</h3>
                  <p className="text-sm text-muted-foreground">Доставим заказ от 2 дней</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Icon name="CreditCard" className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">Безопасная оплата</h3>
                  <p className="text-sm text-muted-foreground">Множество способов оплаты</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Icon name="LifeBuoy" className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">Поддержка 24/7</h3>
                  <p className="text-sm text-muted-foreground">Всегда на связи с вами</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Categories />
        
        {/* Секция подписки */}
        <section className="py-16 bg-gradient-to-r from-primary/20 to-primary/5">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-4">
                Подпишитесь на наши новости
              </h2>
              <p className="text-muted-foreground mb-6">
                Будьте в курсе последних новинок и специальных предложений
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Ваш email адрес"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                />
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  Подписаться
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Separator />
      <Footer />
    </div>
  );
};

export default Index;
