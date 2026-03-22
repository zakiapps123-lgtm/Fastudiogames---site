import Link from 'next/link';
import GameCard from '@/components/GameCard';
import gamesData from '@/data/games.json';

export default function Home() {
  // Select top 3 games for featured section
  const featuredGames = gamesData.slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black z-0" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800 via-transparent to-transparent z-0" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 mt-10">
            <span className="block text-white mb-2">Discover My</span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Mobile Games
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Play and download my handcrafted indie games directly from the Amazon Appstore. Experience thrilling adventures, retro arcades, and intense races.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/games"
              className="px-8 py-4 bg-white text-black hover:bg-gray-200 font-bold rounded-full transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Explore Games
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
            Featured Hits
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            href="/games"
            className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-semibold text-lg transition-colors group"
          >
            View All Games 
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
