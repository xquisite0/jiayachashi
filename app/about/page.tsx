import Link from 'next/link';

export const metadata = {
  title: 'About Us | Jia Ya Cha Shi',
  description: 'Learn about the story and heritage behind Jia Ya Cha Shi, a traditional Singapore coffee shop',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-kopi-700 to-kopi-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            About Jia Ya Cha Shi
          </h1>
          <p className="text-lg text-kopitiam-200">
            佳雅茶室 - Where Tradition Meets Taste
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
            <h2 className="font-serif text-3xl font-bold text-kopi-800 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-kopi-700 leading-relaxed">
              <p>
                Welcome to Jia Ya Cha Shi (佳雅茶室), a beloved coffee hawker stall that has been serving the heart of Singapore with authentic homemade beverages.
              </p>
              <p>
                Our name, which translates to &quot;Excellent Elegant Tea Room,&quot; reflects our commitment to providing quality beverages in the traditional kopitiam style that has been a cornerstone of Singaporean culture for generations.
              </p>
              <p>
                What sets us apart from other coffee stalls is our dedication to crafting homemade drinks using time-honored recipes. Each beverage is prepared fresh daily with carefully selected ingredients, ensuring that every sip carries the authentic taste of tradition.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-jade-50 to-kopitiam-50 rounded-xl shadow-lg p-8 md:p-12 mb-12">
            <h2 className="font-serif text-3xl font-bold text-kopi-800 mb-6">
              Our Philosophy
            </h2>
            <div className="space-y-4 text-kopi-700 leading-relaxed">
              <p>
                At Jia Ya Cha Shi, we believe that the best beverages are made with patience, care, and respect for traditional methods. Our daily specials program was born from this philosophy - each day of the week features a unique homemade drink, allowing our customers to experience a variety of traditional Chinese herbal and fruit-based beverages.
              </p>
              <p>
                From the cooling properties of our Chrysanthemum w/ Luohan Tea on Wednesdays to the soothing Pear w/ Fritillary Bulb drink on Thursdays, each specialty is chosen for both its taste and its health benefits according to traditional Chinese wellness principles.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="font-serif text-3xl font-bold text-kopi-800 mb-6">
              The Kopitiam Heritage
            </h2>
            <div className="space-y-4 text-kopi-700 leading-relaxed">
              <p>
                The kopitiam, or traditional coffee shop, is more than just a place to grab a drink in Singapore - it&apos;s a cultural institution where communities gather, stories are shared, and traditions are preserved.
              </p>
              <p>
                Jia Ya Cha Shi honors this heritage by maintaining the warm, welcoming atmosphere that has made kopitiams special for decades. We take pride in being a place where both longtime regulars and first-time visitors can experience the authentic flavors that have been part of Singapore&apos;s fabric for generations.
              </p>
              <p>
                Whether you&apos;re stopping by for our Tuesday Lemongrass w/ Green Apple Juice or enjoying our everyday Winter Melon Tea Brick, you&apos;re not just having a drink - you&apos;re participating in a living tradition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-kopi-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            What We Value
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="font-serif text-xl font-bold mb-3">
                Quality
              </h3>
              <p className="text-kopitiam-200">
                Only the finest ingredients in every drink we prepare
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="font-serif text-xl font-bold mb-3">
                Tradition
              </h3>
              <p className="text-kopitiam-200">
                Preserving authentic recipes and methods
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="font-serif text-xl font-bold mb-3">
                Community
              </h3>
              <p className="text-kopitiam-200">
                Building connections one drink at a time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-kopi-800 mb-6">
          Come Experience Our Tradition
        </h2>
        <p className="text-lg text-kopi-700 mb-8">
          Visit us and taste the difference that homemade makes
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/menu"
            className="bg-kopi-700 hover:bg-kopi-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            View Our Menu
          </Link>
          <Link
            href="/contact"
            className="bg-jade-600 hover:bg-jade-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Find Us
          </Link>
        </div>
      </section>
    </div>
  );
}
