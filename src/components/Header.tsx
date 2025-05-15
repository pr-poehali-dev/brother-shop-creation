
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Логотип */}
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <Icon name="ShoppingBag" className="h-6 w-6 text-primary" />
            <span className="font-montserrat text-xl font-bold">МойМаркет</span>
          </a>
        </div>

        {/* Поиск - скрывается на мобильных */}
        <div className="hidden md:flex md:w-1/3 lg:w-1/2">
          <div className="relative w-full">
            <Input
              type="search"
              placeholder="Поиск товаров..."
              className="w-full pl-10"
            />
            <Icon
              name="Search"
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            />
          </div>
        </div>

        {/* Навигация и кнопки */}
        <nav className="flex items-center gap-2">
          <a href="#" className="hidden md:flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Icon name="Tag" className="h-4 w-4" />
            <span>Акции</span>
          </a>
          <a href="#" className="hidden md:flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Icon name="Heart" className="h-4 w-4" />
            <span>Избранное</span>
          </a>
          <Button size="icon" variant="ghost">
            <Icon name="ShoppingCart" className="h-5 w-5" />
            <span className="sr-only">Корзина</span>
          </Button>
          <Button size="icon" variant="ghost">
            <Icon name="User" className="h-5 w-5" />
            <span className="sr-only">Профиль</span>
          </Button>
          <Button size="sm" className="hidden md:flex">
            <Icon name="LogIn" className="mr-2 h-4 w-4" />
            Войти
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
