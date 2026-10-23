import { useState } from "react";
import { Play } from "lucide-react";

import { youtubeThumb } from "../../data/site";

// Lightweight embed: shows the thumbnail until clicked, then loads the player.
export default function YouTubeEmbed({
  videoId,
  title = "Arivu Foundation video",
  className = "",
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className={`relative aspect-video overflow-hidden bg-ink-deep ${className}`}
    >
      {isPlaying ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          className="absolute inset-0 h-full w-full border-0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 h-full w-full overflow-hidden"
        >
          <img
            src={youtubeThumb(videoId)}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <span className="absolute inset-0 bg-gradient-to-t from-ink-deep/70 via-ink-deep/10 to-transparent transition group-hover:from-ink-deep/80" />

          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-crimson text-white shadow-2xl ring-8 ring-white/15 transition duration-300 group-hover:scale-110">
            <Play size={24} fill="currentColor" className="ml-1" />
          </span>
        </button>
      )}
    </div>
  );
}
