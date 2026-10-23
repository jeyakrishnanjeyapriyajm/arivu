import { MapPin } from "lucide-react";

import YouTubeEmbed from "../common/YouTubeEmbed";

export default function TeacherCard({ teacher }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-sm">
      <YouTubeEmbed
        videoId={teacher.videoId}
        title={`Meet ${teacher.name}`}
      />

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-crimson">
          {teacher.role}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold text-ink-deep">
          {teacher.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-leaf-deep">{teacher.note}</p>
        <p className="mt-4 text-sm leading-7 text-muted">{teacher.description}</p>

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {teacher.schools.map((school) => (
            <span
              key={school}
              className="inline-flex items-center gap-1.5 rounded-full bg-sand px-3 py-1 text-xs font-medium text-ink/80"
            >
              <MapPin size={12} />
              {school}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
