import { useState } from "react";

import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import EventCard from "../components/sections/EventCard";
import YouTubeEmbed from "../components/common/YouTubeEmbed";
import SisterSchool from "../components/sections/SisterSchool";
import EnrolCTA from "../components/sections/EnrolCTA";
import { events } from "../data/events";
import usePageTitle from "../hooks/usePageTitle";

const categories = ["All", ...new Set(events.map((event) => event.category))];

export default function EventsPage() {
  const [category, setCategory] = useState("All");
  const featured = events.find((event) => event.featured);
  const rest = events.filter(
    (event) =>
      event !== featured && (category === "All" || event.category === category),
  );

  usePageTitle("Events");

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Celebrating Tamil, together."
        tamil="விழாக்களும் நிகழ்வுகளும்"
        intro="Festivals, performances and milestones from across the Arivu family of schools."
      />

      {featured && (
        <section className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.3fr_1fr] lg:gap-14 lg:px-12">
            <Reveal className="overflow-hidden rounded-[2rem] shadow-2xl shadow-ink/20">
              <YouTubeEmbed videoId={featured.videoId} title={featured.title} />
            </Reveal>
            <Reveal delay={0.1}>
              <span className="rounded-full bg-crimson px-3 py-1 text-xs font-semibold text-white">
                Featured · {featured.date}
              </span>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-ink-deep">
                {featured.title}
              </h2>
              <p className="mt-2 font-tamil text-lg font-semibold text-crimson">
                {featured.tamilTitle}
              </p>
              <p className="mt-5 text-base leading-8 text-muted">
                {featured.description}
              </p>
            </Reveal>
          </div>
        </section>
      )}

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter events">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  category === item
                    ? "bg-ink text-white"
                    : "border border-line bg-paper text-ink hover:border-ink/30"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((event, index) => (
              <Reveal key={event.id} delay={(index % 3) * 0.06}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>

          {rest.length === 0 && (
            <p className="mt-10 text-sm text-muted">No other events in this category yet.</p>
          )}
        </div>
      </section>

      <SisterSchool />
      <EnrolCTA />
    </>
  );
}
