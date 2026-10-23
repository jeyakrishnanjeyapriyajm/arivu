import { ArrowUpRight, CalendarDays, Clock3, MapPin, Navigation } from "lucide-react";
import { Link } from "react-router-dom";

import { accents } from "../ui/accents";

export default function SchoolCard({ location, index = 0 }) {
  const accent = accents[location.accent];

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10">
      <span className={`absolute inset-x-0 top-0 h-1.5 ${accent.bg}`} />

      <div className="flex items-start justify-between gap-4">
        <span className="font-display text-sm font-semibold text-ink/30">
          0{index + 1}
        </span>
        <span
          className={`rounded-full px-3 py-1 text-[11px] font-semibold ${accent.soft} ${accent.text}`}
        >
          {location.badge}
        </span>
      </div>

      <h3 className="mt-5 font-display text-3xl font-semibold text-ink-deep">
        {location.name}
      </h3>
      <p className="mt-1 font-tamil text-sm font-medium text-muted">
        {location.tamilName}
      </p>

      <dl className="mt-6 space-y-3 text-sm">
        <div className="flex items-center gap-3">
          <CalendarDays size={17} className={accent.text} />
          <dt className="sr-only">Day</dt>
          <dd className="font-semibold text-ink">Every {location.day}</dd>
        </div>
        <div className="flex items-center gap-3">
          <Clock3 size={17} className={accent.text} />
          <dt className="sr-only">Hours</dt>
          <dd className="text-ink/80">{location.hours}</dd>
        </div>
        <div className="flex items-start gap-3">
          <MapPin size={17} className={`mt-0.5 shrink-0 ${accent.text}`} />
          <dt className="sr-only">Address</dt>
          <dd className="leading-6 text-muted">{location.address}</dd>
        </div>
      </dl>

      <div className="mt-auto flex items-center gap-3 pt-8">
        <Link
          to={location.path}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink-deep"
        >
          View school
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
        <a
          href={location.directions}
          target="_blank"
          rel="noreferrer"
          aria-label={`Directions to ${location.title}`}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition hover:border-ink"
        >
          <Navigation size={16} />
        </a>
      </div>
    </article>
  );
}
