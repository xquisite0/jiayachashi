import Link from 'next/link';
import TodaySpecial from '@/components/TodaySpecial';
import DailySchedule from '@/components/DailySchedule';
import { regularDrinks } from '@/lib/drinks';
import DrinkCard from '@/components/DrinkCard';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-kopi-700 via-kopi-800 to-kopi-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="text-6xl md:text-7xl">☕</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
            Jia Ya Cha Shi
          </h1>
          <p className="text-2xl md:text-3xl text-kopitiam-200 mb-6">
            佳雅茶室
          </p>
          <p className="text-lg md:text-xl text-kopitiam-100 max-w-2xl mx-auto mb-8">
            Experience authentic homemade drinks crafted with traditional recipes at Singapore&apos;s beloved coffee hawker stall
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-jade-600 hover:bg-jade-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View Our Menu
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-kopi-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Visit Us
            </Link>
          </div>
        </div>
      </section>

      {/* Today's Special Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <TodaySpecial />
      </section>

      {/* What Makes Us Special */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-kopi-800 text-center mb-12">
            What Makes Us Special
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="font-serif text-xl font-bold text-kopi-800 mb-3">
                Homemade Daily
              </h3>
              <p className="text-kopi-700">
                Fresh drinks prepared daily with authentic recipes and quality ingredients
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📅</div>
              <h3 className="font-serif text-xl font-bold text-kopi-800 mb-3">
                Daily Specials
              </h3>
              <p className="text-kopi-700">
                Unique specialty drinks featured each day of the week, Tuesday through Sunday
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="font-serif text-xl font-bold text-kopi-800 mb-3">
                Traditional Heritage
              </h3>
              <p className="text-kopi-700">
                Time-honored recipes bringing the authentic taste of Singapore&apos;s kopitiam culture
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Drinks Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-kopi-800 text-center mb-4">
          Our Regular Favorites
        </h2>
        <p className="text-center text-kopi-700 mb-12">
          Available every day, all day
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {regularDrinks.slice(0, 3).map((drink) => (
            <DrinkCard key={drink.id} drink={drink} />
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/menu"
            className="inline-block bg-kopi-700 hover:bg-kopi-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            View Full Menu
          </Link>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="bg-gradient-to-br from-kopitiam-50 to-jade-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-kopi-800 text-center mb-12">
            Plan Your Visit
          </h2>
          <DailySchedule />
        </div>
      </section>
    </div>
  );
}
