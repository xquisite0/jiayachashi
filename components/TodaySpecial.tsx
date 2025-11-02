'use client';

import { getTodaySpecial, getDayName } from '@/lib/drinks';
import DrinkCard from './DrinkCard';
import { useEffect, useState } from 'react';

export default function TodaySpecial() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const todaySpecial = getTodaySpecial();
  const today = new Date().getDay();
  const todayName = getDayName(today);

  if (!todaySpecial) {
    return (
      <div className="bg-gradient-to-r from-kopitiam-100 to-jade-50 rounded-xl p-8 text-center">
        <h2 className="font-serif text-3xl font-bold text-kopi-800 mb-4">
          Today&apos;s Special
        </h2>
        <p className="text-kopi-700 text-lg">
          No special drink on {todayName}s, but our regular menu is always available!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-kopitiam-100 to-jade-50 rounded-xl p-8">
      <div className="text-center mb-6">
        <p className="text-jade-700 font-medium text-sm uppercase tracking-wider mb-2">
          {todayName}&apos;s Featured Drink
        </p>
        <h2 className="font-serif text-3xl font-bold text-kopi-800">
          Today&apos;s Special
        </h2>
      </div>
      <div className="max-w-md mx-auto">
        <DrinkCard drink={todaySpecial} featured />
      </div>
    </div>
  );
}
