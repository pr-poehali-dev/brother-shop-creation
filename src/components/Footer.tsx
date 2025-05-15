
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Icon name="ShoppingBag" className="h-6 w-6 text-primary" />
              <span className="font-montserrat text-xl font-bold">МойМаркет</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Интернет-магазин качественных товаров по доступным ценам с доставкой по всей России.
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="rounded-full h-9 w-9">
                <Icon name="Facebook" className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-9 w-9">
                <Icon name="Instagram" className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-9 w-9">
                <Icon name="Twitter" className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-9 w-9">
                <Icon name="Youtube" className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Покупателям</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Как сделать заказ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Способы оплаты</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Доставка</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Возврат товара</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Вопросы и ответы</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Компания</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">О нас</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Контакты</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Вакансии</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Новости</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Политика конфиденциальности</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Подписка на новости</h3>
            <p className="text-gray-400 text-sm mb-4">Подпишитесь на нашу рассылку и получайте уведомления о скидках и акциях</p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Ваш email" 
                className="bg-gray-800 border-gray-700"
              />
              <Button>Подписаться</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© 2025 МойМаркет. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
