import Image from "next/image";

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
    <a 
      href={game.amazonLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300 block"
    >
      <div className="relative h-64 w-full">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-pink-900/40 opacity-80 group-hover:opacity-100 transition-opacity z-10" />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <Image 
          src={game.image} 
          alt={game.name} 
          fill 
          className="object-cover"
        /> 
      </div>
      <div className="p-6 relative z-20 flex flex-col h-full bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent">
        <h3 className="text-2xl font-bold text-white mb-2">{game.name}</h3>
        <div className="flex items-center gap-1 mb-4">
          <span className="text-yellow-400 text-sm font-bold">★ {game.rating}</span>
        </div>
        <p className="text-gray-400 mb-6 flex-grow">{game.shortDescription}</p>
        <div className="flex flex-col gap-3">
          <div className="inline-flex w-full justify-center items-center gap-2 py-3 px-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white font-bold rounded-xl shadow-lg transition-all duration-200">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3000.org/2000/svg"
            >
              <path d="M14.656 18.068c-1.936.883-4.225 1.353-6.611 1.353-3.13 0-6.02-1.258-7.972-3.322-.387-.412.18-.895.592-.569 1.63 1.285 3.868 2.378 6.427 2.378 2.053 0 4.09-.504 5.952-1.503.208-.109.333-.314.316-.54l-.066-.604c-.02-.279-.294-.46-.56-.379-1.393.424-2.822.62-4.286.62-2.529 0-4.887-.665-6.845-1.921-.19-.115-.42-.038-.514.161-1.048 2.148-1.588 4.607-1.588 7.202 0 4.398 1.832 8.358 4.771 11.201.275.265.733.09.733-.298 0-.466.075-.92.215-1.352.05-.152.036-.316-.039-.459-.441-.856-.7-1.834-.7-2.868 0-3.313 2.686-6 6-6h.142c.328 0 .644.028.956.082.164.028.324-.031.416-.174.453-.787 1.057-1.464 1.76-2.008.204-.158.468-.13.639.066.025.029.047.058.07.088zm8.682-13.682h-3.414c-.398 0-.72.322-.72.72v11.332l-2.071 2.071v-4.133c0-.398-.322-.72-.72-.72h-1.956c-.398 0-.72.322-.72.72v6.643l-4.15-4.148s-.002 0-.003-.001c-.015-.015-.035-.02-.051-.034l-3.39-2.583c-.092-.07-.221-.078-.321-.019l-.916.541c-.267.158-.291.536-.046.726 1.439 1.115 3.125 1.956 4.965 2.454.21.057.433-.047.525-.248.113-.243.235-.482.368-.711.121-.212.019-.488-.205-.583-.934-.393-1.815-.905-2.614-1.516l2.364-1.401 2.345 1.787c.28.213.626.326.98.326h2.246c.398 0 .72-.322.72-.72v-1.936l4.634 4.633c.141.141.331.22.53.22h3.414c.398 0 .72-.322.72-.72v-14.4c.001-.397-.321-.719-.719-.719z" />
            </svg>
            Download on Amazon
          </div>
        </div>
      </div>
    </a>
  );
}
