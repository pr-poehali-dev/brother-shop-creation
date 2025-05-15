
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

interface Category {
  id: number;
  name: string;
  icon: string;
  color: string;
}

const Categories = () => {
  const categories: Category[] = [
    { id: 1, name: "Электроника", icon: "Smartphone", color: "bg-blue-100 text-blue-600" },
    { id: 2, name: "Одежда", icon: "Shirt", color: "bg-purple-100 text-purple-600" },
    { id: 3, name: "Дом и сад", icon: "Home", color: "bg-green-100 text-green-600" },
    { id: 4, name: "Красота", icon: "Sparkles", color: "bg-pink-100 text-pink-600" },
    { id: 5, name: "Спорт", icon: "Dumbbell", color: "bg-orange-100 text-orange-600" },
    { id: 6, name: "Книги", icon: "BookOpen", color: "bg-yellow-100 text-yellow-600" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-8 text-center">
          Категории товаров
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((category) => (
            <a href="#" key={category.id}>
              <Card className="hover:scale-105 transition-transform duration-200 border-none shadow-sm hover:shadow">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${category.color}`}>
                    <Icon name={category.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium text-sm">{category.name}</h3>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
