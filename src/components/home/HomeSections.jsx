import { ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { accents } from "../ui/accents";
import SchoolCard from "../sections/SchoolCard";
import EventCard from "../sections/EventCard";
import { locations } from "../../data/locations";
import { pillars } from "../../data/learning";
import { teachers, initialsOf } from "../../data/teachers";
import { events } from "../../data/events";
import { images, site, youtubeThumb } from "../../data/site";

export function SchoolsSection() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Our schools"
            title="Three schools, one Tamil family."
            intro="Weekend classes at school venues across Coventry, Birmingham and Solihull — choose the day and place that works for you."
          />
          <Reveal>
            <Link
              to="/schools"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-crimson"
            >
              Compare schools
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {locations.map((location, index) => (
            <Reveal key={location.id} delay={index * 0.08}>
              <SchoolCard location={location} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
        <Reveal className="relative order-2 lg:order-1">
          <div className="grid grid-cols-5 gap-4">
            <img
              src={images.bharathiyar}
              alt="Illustration of the Tamil poet Subramania Bharathi"
              loading="lazy"
              className="col-span-3 aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl shadow-ink/10"
            />
            <div className="col-span-2 flex flex-col gap-4">
              <div className="flex flex-1 flex-col justify-end rounded-[2rem] bg-ink p-5 text-white">
                <p className="font-display text-4xl font-semibold">3</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-white/60">
                  Schools
                </p>
              </div>
              <div className="flex flex-1 flex-col justify-end rounded-[2rem] bg-leaf p-5 text-ink-deep">
                <p className="font-display text-4xl font-semibold">O & A</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-ink-deep/70">
                  Level prep
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Who we are"
            title="Born in Coventry. Growing across the Midlands."
            tamil="யாமறிந்த மொழிகளிலே தமிழ்மொழி போல் இனிதாவது எங்கும் காணோம்"
            intro="Coventry — the UK City of Culture 2021 — is where Arivu Foundation started. Following huge demand from parents, we now teach Tamil in Birmingham and Shirley too, giving more children the chance to read, write and speak the language of their heritage."
          />

          <Reveal delay={0.1} className="mt-8 rounded-3xl border border-line bg-white p-6">
            <Quote size={22} className="text-saffron" />
            <p className="mt-3 text-base leading-7 text-ink">
              <span className="font-semibold">Our mission:</span> {site.mission}
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-8">
            <Button to="/about" variant="ink">
              Our story
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function LearningSection() {
  return (
    <section className="grain relative overflow-hidden bg-ink-deep py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-crimson/30 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          tone="light"
          align="center"
          eyebrow="What children learn"
          title="A complete Tamil education."
          intro="A well-structured, well-accepted syllabus — from first letters to Cambridge International qualifications."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const accent = accents[pillar.color];

            return (
              <Reveal
                key={pillar.id}
                delay={index * 0.08}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-white/25 hover:bg-white/[0.07]"
              >
                <span className={`absolute left-0 top-0 h-full w-1 ${accent.bg}`} />
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accent.bg} text-white`}
                >
                  <Icon size={22} />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-1 font-tamil text-sm text-white/50">{pillar.tamil}</p>
                <p className="mt-4 text-sm leading-7 text-white/65">{pillar.description}</p>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 text-center">
          <Button to="/learning" variant="saffron">
            Explore our curriculum
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

export function TeachersPreview() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Our teachers"
            title="Meet the people who teach Tamil with heart."
            tamil="எமது தமிழ் ஆசிரியர்கள்"
          />
          <Reveal>
            <Button to="/teachers" variant="outline">
              Watch their introductions
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {teachers.map((teacher, index) => (
            <Reveal key={teacher.id} delay={index * 0.05}>
              <Link to="/teachers" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-ink">
                  <img
                    src={youtubeThumb(teacher.videoId)}
                    alt=""
                    loading="lazy"
                    className="h-full w-full scale-[1.35] object-cover transition duration-700 group-hover:scale-[1.45]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/90 via-ink-deep/20 to-transparent" />
                  <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-crimson">
                    {initialsOf(teacher.name)}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="font-display text-sm font-semibold leading-snug text-white">
                      {teacher.name.replace(/^Mrs\s/, "")}
                    </p>
                    <p className="mt-0.5 text-[11px] text-white/70">{teacher.role}</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EventsPreview() {
  const featured = events.slice(0, 3);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Events & celebrations"
            title="Learning that is lived together."
            intro="From Pongal to stage performances, our calendar brings students, parents and teachers together."
          />
          <Reveal>
            <Link
              to="/events"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-crimson"
            >
              All events
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {featured.map((event, index) => (
            <Reveal key={event.id} delay={index * 0.08}>
              <EventCard event={event} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
