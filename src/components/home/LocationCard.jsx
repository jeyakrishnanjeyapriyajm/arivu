import {
  ArrowRight,
  CalendarDays,
  Clock3,
  ExternalLink,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function LocationCard({ location }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-64 overflow-hidden">
        <img
          src={location.image}
          alt={`${location.name} Tamil language classes`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

        <div className="absolute bottom-5 left-5">
          <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-wider text-red-700 shadow-lg">
            {location.shortName}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-2xl font-black text-slate-950">{location.name}</h3>

        <p className="mt-4 flex items-start gap-3 text-sm leading-6 text-slate-600">
          <MapPin size={19} className="mt-0.5 shrink-0 text-red-700" />
          {location.address}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-slate-50 p-4">
            <CalendarDays size={20} className="text-red-700" />

            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Class Day
            </p>

            <p className="mt-1 text-sm font-bold text-slate-900">
              {location.day}
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            <Clock3 size={20} className="text-red-700" />

            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Class Time
            </p>

            <p className="mt-1 text-sm font-bold text-slate-900">
              {location.time}
            </p>
          </div>
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-600">
          {location.description}
        </p>

        <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
          <Link
            to={location.pagePath}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white hover:bg-red-700"
          >
            View Classes
            <ArrowRight size={17} />
          </Link>

          <a
            href={location.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 hover:border-red-700 hover:text-red-700"
          >
            Directions
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}
