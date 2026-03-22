import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              FA STUDIO GAMES
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200 uppercase text-sm tracking-wider font-medium">
              Home
            </Link>
            <Link href="/games" className="text-gray-300 hover:text-white transition-colors duration-200 uppercase text-sm tracking-wider font-medium">
              Games
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 uppercase text-sm tracking-wider font-medium">
              Contact
            </Link>
            <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors duration-200 uppercase text-sm tracking-wider font-medium">
              Privacy Policy
            </Link>
          </div>
          {/* Mobile menu could be added here later */}
        </div>
      </div>
    </nav>
  );
}
