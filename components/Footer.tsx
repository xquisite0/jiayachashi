import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-kopi-900 text-kopitiam-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-3 text-white">
              Jia Ya Cha Shi
            </h3>
            <p className="text-sm text-kopitiam-200">
              佳雅茶室
            </p>
            <p className="text-sm mt-2">
              Serving authentic homemade drinks with traditional recipes passed down through generations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-3 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-jade-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-jade-300 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-jade-300 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-jade-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-3 text-white">
              Opening Hours
            </h3>
            <p className="text-sm">
              <span className="font-medium">Tuesday - Sunday:</span> 6:00 AM - 3:00 PM
            </p>
            <p className="text-sm mt-1">
              <span className="font-medium">Monday:</span> <span className="text-red-400">Closed</span>
            </p>
            <p className="text-sm mt-2 text-kopitiam-300">
              Check our daily specials available Tuesday through Sunday!
            </p>
          </div>
        </div>

        <div className="border-t border-kopi-800 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Jia Ya Cha Shi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
