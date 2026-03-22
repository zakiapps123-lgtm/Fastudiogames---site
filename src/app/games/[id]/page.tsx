import { notFound } from 'next/navigation';
import Image from 'next/image';
import gamesData from '@/data/games.json';
import AmazonButton from '@/components/AmazonButton';

export function generateStaticParams() {
  return gamesData.map((game) => ({
    id: game.id,
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const game = gamesData.find((g) => g.id === params.id);
  if (!game) return { title: 'Game Not Found' };
  
  return {
    title: `${game.name} | FA STUDIO GAMES`,
    description: game.shortDescription,
  };
}

export default function GameDetailsPage({ params }: { params: { id: string } }) {
  const game = gamesData.find(g => g.id === params.id);
  
  if (!game) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black w-full">
      {/* Dynamic Banner Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <span className="text-9xl font-black text-white/5 whitespace-nowrap overflow-hidden">
            {game.name.toUpperCase()}
          </span>
        </div>
        {/* Real banner image placeholder */}
        <div className="absolute inset-x-0 bottom-0 p-8 z-20 max-w-7xl mx-auto flex flex-col items-start w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 mb-4 text-sm font-bold shadow-[0_0_15px_rgba(234,179,8,0.2)]">
            ★ {game.rating} / 5.0
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-lg">
            {game.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl drop-shadow-md">
            {game.shortDescription}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 w-full">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Screenshots Slider placeholder */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-2">Screenshots</h2>
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
              {game.screenshots.map((ss, idx) => (
                <div key={idx} className="flex-none w-72 h-48 bg-gray-800 rounded-xl snap-center relative border border-gray-700 shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-mono text-sm">
                    Screenshot {idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-2">About The Game</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {game.fullDescription}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-2">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {game.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300 bg-gray-900/50 p-4 rounded-xl border border-gray-800">
                  <span className="text-purple-500 mt-1">✦</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sidebar / CTA */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-gray-900 p-6 rounded-2xl border border-gray-800 shadow-2xl flex flex-col gap-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Get {game.name}</h3>
              <p className="text-sm text-gray-400">Available exclusively on the Amazon Appstore for your Android and Fire devices.</p>
            </div>
            
            <AmazonButton link={game.amazonLink} />
            
            <div className="pt-6 border-t border-gray-800">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Developer</span>
                <span className="text-white font-medium">FA STUDIO GAMES</span>
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>Platform</span>
                <span className="text-white font-medium">Android / Fire OS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
