import GameCard from '@/components/GameCard';
import gamesData from '@/data/games.json';

export const metadata = {
  title: 'All Games | FA STUDIO GAMES',
  description: 'Browse the complete catalog of FA STUDIO GAMES mobile games.',
};

export default function GamesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Our Games Library
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Explore our complete collection of handcrafted mobile experiences. Find your next favorite game and download it instantly on the Amazon Appstore.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {gamesData.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
