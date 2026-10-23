import YouTubeEmbed from "../common/YouTubeEmbed";
import RisingBars from "../ui/RisingBars";

const categoryColors = {
  Community: "bg-crimson",
  Festival: "bg-saffron",
  Culture: "bg-vermilion",
  Education: "bg-leaf",
};

// Typographic cover for events that don't have a video.
function EventCover({ event }) {
  return (
    <div className="relative flex aspect-video items-end overflow-hidden bg-ink-deep p-6">
      <RisingBars
        animate={false}
        heights={[30, 60, 85, 58, 30, 85]}
        className="absolute bottom-0 right-6 h-3/4 w-28 gap-1.5 opacity-80"
      />
      <p className="relative max-w-[70%] font-tamil text-2xl font-bold leading-snug text-white">
        {event.tamilTitle}
      </p>
    </div>
  );
}

export default function EventCard({ event }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-sm">
      {event.videoId ? (
        <YouTubeEmbed videoId={event.videoId} title={event.title} />
      ) : (
        <EventCover event={event} />
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs font-semibold">
          <span
            className={`rounded-full px-2.5 py-1 text-white ${categoryColors[event.category] ?? "bg-ink"}`}
          >
            {event.category}
          </span>
          <span className="text-muted">{event.date}</span>
        </div>

        <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-ink-deep">
          {event.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-muted">{event.description}</p>
      </div>
    </article>
  );
}
