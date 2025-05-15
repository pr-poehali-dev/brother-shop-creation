
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: string;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  oldPrice,
  image,
  badge,
  rating
}) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="relative aspect-square overflow-hidden">
        {badge && (
          <Badge className="absolute left-2 top-2 z-10" variant="secondary">
            {badge}
          </Badge>
        )}
        <div className="absolute right-2 top-2 z-10">
          <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
            <Icon name="Heart" className="h-4 w-4" />
            <span className="sr-only">Добавить в избранное</span>
          </Button>
        </div>
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center gap-1 text-sm text-yellow-500 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon key={i} name={i < rating ? "Star" : "StarOff"} className="h-4 w-4" />
          ))}
          <span className="text-muted-foreground text-xs ml-1">({rating.toFixed(1)})</span>
        </div>
        <h3 className="font-medium leading-tight line-clamp-2 mb-2 min-h-[2.5rem]">{title}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold">{price.toLocaleString()} ₽</span>
          {oldPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {oldPrice.toLocaleString()} ₽
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full gap-2">
          <Icon name="ShoppingCart" className="h-4 w-4" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
