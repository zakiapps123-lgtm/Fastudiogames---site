import Image from "next/image";
import Link from "next/link";
import AmazonButton from "./AmazonButton";

export interface Game {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  image: string;
  banner: string;
  screenshots: string[];
  rating: number;
  amazonLink: string;
}

export default function GameCard({ game }: { game: Game }) {
  return (
    <div className="group relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
      <div className="relative h-64 w-full">
        {/* Using a solid background placeholder until images are implemented */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-pink-900/40 opacity-80 group-hover:opacity-100 transition-opacity" />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
        {/* 
          // You would use next/image here when actual assets are present 
          <Image src={game.image} alt={game.name} fill className="object-cover" /> 
        */}
      </div>
      <div className="p-6 relative z-10 flex flex-col h-full bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent">
        <h3 className="text-2xl font-bold text-white mb-2">{game.name}</h3>
        <div className="flex items-center gap-1 mb-4">
          <span className="text-yellow-400 text-sm font-bold">★ {game.rating}</span>
        </div>
        <p className="text-gray-400 mb-6 flex-grow">{game.shortDescription}</p>
        <div className="flex flex-col gap-3">
          <Link 
            href={`/games/${game.id}`}
            className="w-full py-2.5 text-center bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-xl transition duration-200"
          >
            Game Details
          </Link>
          <AmazonButton link={game.amazonLink} />
        </div>
      </div>
    </div>
  );
}
