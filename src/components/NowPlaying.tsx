import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Music } from "lucide-react";

interface TrackData {
  name: string;
  artist: string;
  url: string;
  isPlaying: boolean;
}

const FALLBACK: TrackData = {
  name: "Cornfield Chase",
  artist: "Hans Zimmer",
  url: "https://open.spotify.com/track/4IhEQb8pJBYOSIFOH2YEGY",
  isPlaying: false,
};

// Set VITE_SPOTIFY_API_URL in .env to a serverless endpoint that returns
// { name, artist, url, isPlaying }. Falls back to static track when absent.
const API_URL = import.meta.env.VITE_SPOTIFY_API_URL as string | undefined;

export default function NowPlaying() {
  const [track, setTrack] = useState<TrackData | null>(null);
  const [loading, setLoading] = useState(!!API_URL);

  useEffect(() => {
    if (!API_URL) {
      setTrack(FALLBACK);
      return;
    }

    let cancelled = false;
    const load = () => {
      fetch(API_URL)
        .then((r) => r.json())
        .then((data: Partial<TrackData>) => {
          if (!cancelled)
            setTrack({
              name: data.name || FALLBACK.name,
              artist: data.artist || FALLBACK.artist,
              url: data.url || FALLBACK.url,
              isPlaying: !!data.isPlaying,
            });
        })
        .catch(() => { if (!cancelled) setTrack(FALLBACK); })
        .finally(() => { if (!cancelled) setLoading(false); });
    };

    load();
    // Re-fetch every 30 s while the page is open
    const interval = setInterval(load, 30_000);
    return () => { cancelled = true; clearInterval(interval); };
  }, []);

  // Skeleton while fetching
  if (loading) {
    return (
      <div className="fixed bottom-8 left-6 z-[90] flex items-center gap-3 px-4 py-2.5 rounded-xl border border-white/10 bg-[#0A0A0A]/90 backdrop-blur-sm max-w-[220px]">
        <div className="w-4 h-4 rounded-full bg-white/10 animate-pulse flex-shrink-0" />
        <div className="flex-1 space-y-1.5">
          <div className="h-2.5 w-24 rounded bg-white/10 animate-pulse" />
          <div className="h-2 w-16 rounded bg-white/10 animate-pulse" />
        </div>
      </div>
    );
  }

  if (!track) return null;

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
        {track.isPlaying && (
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#1DB954]">
            <span className="absolute inset-0 rounded-full bg-[#1DB954] animate-ping opacity-75" />
          </span>
        )}
      </div>

      <div className="overflow-hidden min-w-0">
        <p className="text-white text-xs font-semibold truncate group-hover:text-[#1DB954] transition-colors">
          {track.name}
        </p>
        <p className="text-[#A1A1AA] text-[10px] truncate">
          {track.isPlaying ? "▶ " : ""}{track.artist}
        </p>
      </div>
    </motion.a>
  );
}
