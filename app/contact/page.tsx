import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | Jia Ya Cha Shi',
  description: 'Visit Jia Ya Cha Shi - Find our location, opening hours, and get in touch',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-kopi-700 to-kopi-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Visit Us
          </h1>
          <p className="text-lg text-kopitiam-200">
            We look forward to serving you
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Details */}
          <div className="space-y-8">
            {/* Location */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📍</div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-kopi-800 mb-3">
                    Location
                  </h2>
                  <p className="text-kopi-700 leading-relaxed">
                    <strong>Jia Ya Cha Shi</strong><br />
                    佳雅茶室<br />
                    [Your Hawker Centre Name]<br />
                    [Stall Number]<br />
                    [Street Address]<br />
                    Singapore [Postal Code]
                  </p>
                  <p className="text-sm text-kopi-600 mt-3">
                    * Please update with your actual location details
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🕐</div>
                <div className="flex-1">
                  <h2 className="font-serif text-2xl font-bold text-kopi-800 mb-4">
                    Opening Hours
                  </h2>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b border-kopitiam-200">
                      <span className="font-medium text-kopi-800">Monday - Sunday</span>
                      <span className="text-kopi-700">7:00 AM - 7:00 PM</span>
                    </div>
                    <div className="bg-jade-50 border-l-4 border-jade-500 p-4 rounded">
                      <p className="text-sm text-jade-800 font-medium">
                        📅 Daily Specials Available:
                      </p>
                      <p className="text-sm text-jade-700 mt-1">
                        Tuesday - Sunday
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-kopitiam-100 to-jade-50 rounded-xl shadow-lg p-8">
              <div className="flex items-start gap-4">
                <div className="text-4xl">ℹ️</div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-kopi-800 mb-3">
                    Good to Know
                  </h2>
                  <ul className="space-y-2 text-kopi-700">
                    <li className="flex items-start gap-2">
                      <span className="text-jade-600 mt-1">✓</span>
                      <span>Cash and major e-payment methods accepted</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-jade-600 mt-1">✓</span>
                      <span>All drinks freshly made to order</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-jade-600 mt-1">✓</span>
                      <span>Takeaway available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-jade-600 mt-1">✓</span>
                      <span>Daily specials available while stocks last</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="font-serif text-2xl font-bold text-kopi-800 mb-4">
                Find Us on the Map
              </h2>
              <div className="aspect-square w-full bg-kopitiam-100 rounded-lg flex items-center justify-center border-2 border-kopitiam-300">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-kopi-700 mb-4">
                    Map placeholder - Add your Google Maps embed or location map here
                  </p>
                  <p className="text-sm text-kopi-600">
                    To add a map, you can use Google Maps embed code<br />
                    or integrate with a mapping service
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-jade-600 hover:bg-jade-700 text-white text-center px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Open in Google Maps
                </a>
                <p className="text-xs text-kopi-600 mt-2 text-center">
                  * Update this link with your actual Google Maps location
                </p>
              </div>
            </div>

            {/* Getting There */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="font-serif text-2xl font-bold text-kopi-800 mb-4">
                Getting Here
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-kopi-800 mb-2 flex items-center gap-2">
                    <span>🚇</span> By MRT
                  </h3>
                  <p className="text-kopi-700 text-sm pl-7">
                    [Nearest MRT Station] - [Distance/Walking time]
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-kopi-800 mb-2 flex items-center gap-2">
                    <span>🚌</span> By Bus
                  </h3>
                  <p className="text-kopi-700 text-sm pl-7">
                    Bus services: [Bus numbers]
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-kopi-800 mb-2 flex items-center gap-2">
                    <span>🚗</span> By Car
                  </h3>
                  <p className="text-kopi-700 text-sm pl-7">
                    Limited parking available nearby
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-kopi-700 to-kopi-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Visit?
          </h2>
          <p className="text-lg text-kopitiam-200 mb-8">
            Check out today&apos;s special and plan your visit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-jade-600 hover:bg-jade-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View Menu
            </Link>
            <Link
              href="/"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-kopi-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
