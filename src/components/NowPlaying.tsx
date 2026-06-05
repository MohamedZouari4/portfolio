import { motion } from "framer-motion";
import { Music } from "lucide-react";

// Static "Now Playing" widget – replace with a real Spotify API integration
// (e.g. a small Vercel serverless function using the Spotify Web API) when ready.
const track = {
  name: "Cornfield Chase",
  artist: "Hans Zimmer",
  album: "Interstellar OST",
  url: "https://open.spotify.com/track/4IhEQb8pJBYOSIFOH2YEGY",
};

export default function NowPlaying() {
  return (
    <motion.a
      href={track.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      className="fixed bottom-8 left-6 z-[90] flex items-center gap-3 px-4 py-2.5 rounded-xl border border-white/10 bg-[#0A0A0A]/90 backdrop-blur-sm hover:border-[#1DB954]/40 transition-all duration-200 shadow-lg shadow-black/40 max-w-[220px] group"
    >
      {/* Spotify green dot + icon */}
      <div className="relative flex-shrink-0">
        <Music size={15} className="text-[#1DB954]" />
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#1DB954]">
          <span className="absolute inset-0 rounded-full bg-[#1DB954] animate-ping opacity-75" />
        </span>
      </div>

      <div className="overflow-hidden min-w-0">
        <p className="text-white text-xs font-semibold truncate group-hover:text-[#1DB954] transition-colors">
          {track.name}
        </p>
        <p className="text-[#A1A1AA] text-[10px] truncate">{track.artist}</p>
      </div>
    </motion.a>
  );
}
