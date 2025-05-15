import React from "react";
import ProductCard from "./ProductCard";
import Icon from "@/components/ui/icon";

const ProductList = () => {
  const products = [
    {
      id: 1,
      title: "Беспроводные наушники с шумоподавлением",
      price: 7990,
      oldPrice: 9990,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop",
      badge: "Хит продаж",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Умные часы с измерением пульса",
      price: 12990,
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1528&auto=format&fit=crop",
      rating: 4.5,
    },
    {
      id: 3,
      title: "Стильный рюкзак для ноутбука",
      price: 3490,
      oldPrice: 4990,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1170&auto=format&fit=crop",
      badge: "Скидка",
      rating: 4.3,
    },
    {
      id: 4,
      title: "Портативная Bluetooth-колонка",
      price: 2990,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1170&auto=format&fit=crop",
      rating: 4.6,
    },
    {
      id: 5,
      title: "Фитнес-браслет с трекером сна",
      price: 2490,
      oldPrice: 3490,
      image:
        "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=1528&auto=format&fit=crop",
      badge: "Новинка",
      rating: 4.7,
    },
    {
      id: 6,
      title: "Компактная зарядная станция для смартфона",
      price: 1990,
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1384&auto=format&fit=crop",
      rating: 4.4,
    },
    {
      id: 7,
      title: "Кожаный чехол для телефона",
      price: 1290,
      image:
        "https://images.unsplash.com/photo-1541877590-a752f7057544?q=80&w=627&auto=format&fit=crop",
      rating: 4.2,
    },
    {
      id: 8,
      title: "Механическая клавиатура с подсветкой",
      price: 5990,
      oldPrice: 7990,
      image:
        "https://images.unsplash.com/photo-1541140532154-b024d705b90a?q=80&w=1472&auto=format&fit=crop",
      badge: "Топ продаж",
      rating: 4.9,
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-montserrat text-2xl md:text-3xl font-bold">
            Популярные товары
          </h2>
          <a
            href="#"
            className="text-primary hover:underline font-medium flex items-center gap-1"
          >
            Смотреть все
            <Icon name="ChevronRight" className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
