'use client';

import { Drink } from '@/lib/drinks';
import Image from 'next/image';

interface DrinkCardProps {
  drink: Drink;
  featured?: boolean;
}

export default function DrinkCard({ drink, featured = false }: DrinkCardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 ${
        featured ? 'border-2 border-jade-500' : ''
      }`}
    >
      <div className="relative h-48 bg-gradient-to-br from-kopitiam-200 to-kopitiam-300">
        {drink.image && (
          <Image
            src={drink.image}
            alt={drink.name}
            fill
            className="object-cover"
            onError={(e) => {
              // Fallback if image doesn't exist
              e.currentTarget.style.display = 'none';
            }}
          />
        )}
        {!drink.image && (
          <div className="flex items-center justify-center h-full">
            <div className="text-6xl">🍵</div>
          </div>
        )}
        {drink.day && (
          <div className="absolute top-2 right-2 bg-jade-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {drink.day}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-serif text-lg font-bold text-kopi-800 mb-1">
          {drink.name}
        </h3>
        {drink.chineseName && (
          <p className="text-kopi-600 text-sm mb-2">{drink.chineseName}</p>
        )}
        <p className="text-kopi-700 text-sm leading-relaxed">
          {drink.description}
        </p>
      </div>
    </div>
  );
}
