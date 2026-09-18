import { useState } from "react";
import { Play } from "lucide-react";

export default function YouTubeEmbed({
  videoId,
  title = "Arivu Foundation video",
  start = 0,
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!videoId) {
    return (
      <div className="flex aspect-video items-center justify-center bg-slate-900 px-6 text-center text-sm font-semibold text-white">
        Video is currently unavailable.
      </div>
    );
  }

  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  const videoUrl =
    `https://www.youtube.com/embed/${videoId}` +
    `?autoplay=1&rel=0&start=${start}`;

  return (
    <div className="relative aspect-video overflow-hidden bg-slate-900">
      {isPlaying ? (
        <iframe
          src={videoUrl}
          title={title}
          className="absolute inset-0 h-full w-full border-0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label={`Play ${title}`}
          className="group absolute inset-0 h-full w-full overflow-hidden"
        >
          <img
            src={thumbnailUrl}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = "/images/image-placeholder.svg";
            }}
          />

          <span className="absolute inset-0 bg-slate-950/40 transition group-hover:bg-slate-950/55" />

          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-700 text-white shadow-2xl transition duration-300 group-hover:scale-110 group-hover:bg-red-800">
            <Play size={27} fill="currentColor" className="ml-1" />
          </span>
        </button>
      )}
    </div>
  );
}
