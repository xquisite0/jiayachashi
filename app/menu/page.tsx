import Link from 'next/link';
import { dailySpecials, regularDrinks } from '@/lib/drinks';
import DrinkCard from '@/components/DrinkCard';
import TodaySpecial from '@/components/TodaySpecial';
import DailySchedule from '@/components/DailySchedule';

export const metadata = {
  title: 'Menu | Jia Ya Cha Shi',
  description: 'Explore our menu of homemade drinks including daily specials and regular favorites',
};

export default function MenuPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-kopi-700 to-kopi-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Our Menu
          </h1>
          <p className="text-lg text-kopitiam-200">
            Handcrafted beverages made fresh daily
          </p>
        </div>
      </section>

      {/* Today's Special */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <TodaySpecial />
      </section>

      {/* Daily Specials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-kopi-800 mb-4">
            Daily Specials
          </h2>
          <p className="text-kopi-700 text-lg">
            Each day brings a unique homemade drink, available Tuesday through Sunday
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            {dailySpecials.map((drink) => (
              <DrinkCard key={drink.id} drink={drink} />
            ))}
          </div>
          <div className="md:sticky md:top-24 h-fit">
            <DailySchedule />
          </div>
        </div>
      </section>

      {/* Regular Menu */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-kopi-800 mb-4">
              Regular Menu
            </h2>
            <p className="text-kopi-700 text-lg">
              Available every day, all day long
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularDrinks.map((drink) => (
              <DrinkCard key={drink.id} drink={drink} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-jade-600 to-jade-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Visit Us Today
          </h2>
          <p className="text-lg text-jade-100 mb-8">
            Come experience the authentic taste of traditional Singaporean beverages
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-jade-700 hover:bg-jade-50 px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Find Our Location
          </Link>
        </div>
      </section>
    </div>
  );
}
