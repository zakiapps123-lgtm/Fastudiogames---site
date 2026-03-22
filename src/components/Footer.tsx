import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <p className="text-lg font-semibold text-white mb-4">FA STUDIO GAMES</p>
        <p className="mb-4">Crafting unforgettable experiences for mobile.</p>
        <div className="flex justify-center gap-6 mt-6">
          <Link href="/privacy-policy" className="text-sm hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
        <p className="text-sm border-t border-gray-800 pt-8 mt-8">
          &copy; {new Date().getFullYear()} FA STUDIO GAMES. All rights reserved. Games available on Amazon Appstore.
        </p>
      </div>
    </footer>
  );
}
