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
                    Hougang Hainanese Village Centre<br />
                    #02-48<br />
                    105 Hougang Ave 1<br />
                    Singapore 530105
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
                      <span className="font-medium text-kopi-800">Tuesday - Sunday</span>
                      <span className="text-kopi-700">6:00 AM - 3:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-kopitiam-200">
                      <span className="font-medium text-kopi-800">Monday</span>
                      <span className="text-red-600 font-semibold">Closed</span>
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
                    <li className="flex items-center gap-2">
                      <span className="text-jade-600">✓</span>
                      <span>Cash and major e-payment methods accepted</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-jade-600">✓</span>
                      <span>All drinks freshly made to order</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-jade-600">✓</span>
                      <span>Takeaway available</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-jade-600">✓</span>
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
              <div className="w-full rounded-lg overflow-hidden border-2 border-kopitiam-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7042597008176!2d103.88744161037009!3d1.3540215986274602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da174b60ae36bd%3A0xbdbb14e1489214aa!2zSmlhIFlhIENoYSBTaGkg5L2z6ZuF6Iy25a6k!5e0!3m2!1sen!2ssg!4v1762078572901!5m2!1sen!2ssg"
                  width="100%"
                  height="450"
                  style={{border: 0}}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
              <div className="mt-6">
                <a
                  href="https://www.google.com/maps/place/Jia+Ya+Cha+Shi+%E4%BD%B3%E9%9B%85%E8%8C%B6%E5%AE%A4/@1.3540216,103.8874416,17z/data=!3m1!4b1!4m6!3m5!1s0x31da174b60ae36bd:0xbdbb14e1489214aa!8m2!3d1.3540216!4d103.8900165!16s%2Fg%2F11vjt2k0k_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-jade-600 hover:bg-jade-700 text-white text-center px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Open in Google Maps
                </a>
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
                    Kovan - 1.2km, approximately 15 minutes walk
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-kopi-800 mb-2 flex items-center gap-2">
                    <span>🚌</span> By Bus
                  </h3>
                  <p className="text-kopi-700 text-sm pl-7">
                    Bus services: 53, 53M, 62, 62A, 113, 113A, 115
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-kopi-800 mb-2 flex items-center gap-2">
                    <span>🚗</span> By Car
                  </h3>
                  <p className="text-kopi-700 text-sm pl-7">
                    Limited parking available at Level 3 & 4 of Hougang Hainanese Village Centre
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
