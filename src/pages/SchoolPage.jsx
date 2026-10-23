import { ArrowRight, CalendarDays, CheckCircle2, Clock3, MapPin, Navigation, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import GoogleMap from "../components/common/GoogleMap";
import TeacherCard from "../components/sections/TeacherCard";
import EnrolCTA from "../components/sections/EnrolCTA";
import { accents } from "../components/ui/accents";
import { getLocation, locations } from "../data/locations";
import { teachers } from "../data/teachers";
import { site, whatsappLink } from "../data/site";
import { pillars } from "../data/learning";
import usePageTitle from "../hooks/usePageTitle";

export default function SchoolPage({ id }) {
  const location = getLocation(id);
  const accent = accents[location.accent];
  const schoolTeachers = teachers.filter((teacher) =>
    teacher.schools.includes(location.name),
  );
  const otherSchools = locations.filter((item) => item.id !== id);

  usePageTitle(location.title);

  return (
    <>
      <PageHero
        eyebrow={location.title}
        title={`${location.name} Tamil School`}
        tamil={location.tamilName}
        intro={location.description}
      >
        <div className="flex flex-wrap gap-3">
          <Button
            href={whatsappLink(
              `Hello Arivu Foundation, I would like to enquire about Tamil classes in ${location.name}.`,
            )}
            variant="saffron"
          >
            <FaWhatsapp size={17} />
            Enquire about {location.name}
          </Button>
          <Button href={location.directions} variant="ghostLight">
            <Navigation size={16} />
            Get directions
          </Button>
        </div>
      </PageHero>

      {/* Key details */}
      <section className="relative z-10 -mt-10 px-5 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-4 rounded-3xl border border-line bg-white p-4 shadow-xl shadow-ink/10 sm:grid-cols-2 lg:grid-cols-4 lg:p-6">
          {[
            { icon: CalendarDays, label: "Class day", value: `Every ${location.day}` },
            { icon: Clock3, label: "Time", value: location.hours },
            { icon: MapPin, label: "Venue", value: location.venue },
            { icon: Phone, label: "Call us", value: site.phone, href: site.phoneHref },
          ].map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-center gap-4 rounded-2xl bg-paper p-4">
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${accent.bg} text-white`}>
                <Icon size={19} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-medium text-muted">{label}</span>
                {href ? (
                  <a href={href} className="block font-semibold text-ink hover:text-crimson">
                    {value}
                  </a>
                ) : (
                  <span className="block font-semibold text-ink">{value}</span>
                )}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* About + map */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
          <div>
            <SectionHeading
              eyebrow={location.badge}
              title={`Tamil classes in ${location.name}`}
              intro="Children follow the same well-structured Arivu syllabus taught at all our schools, covering spoken Tamil, reading and writing, culture, and preparation for Cambridge O & A Level."
            />

            <Reveal delay={0.1} as="ul" className="mt-8 space-y-4">
              {location.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink">
                  <CheckCircle2 size={20} className={`mt-0.5 shrink-0 ${accent.text}`} />
                  {item}
                </li>
              ))}
            </Reveal>

            <Reveal delay={0.15} className="mt-10 grid grid-cols-2 gap-3">
              {pillars.map((pillar) => (
                <div key={pillar.id} className="rounded-2xl border border-line bg-white p-4">
                  <p className="text-sm font-semibold text-ink">{pillar.title}</p>
                  <p className="mt-0.5 font-tamil text-xs text-muted">{pillar.tamil}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.1} className="overflow-hidden rounded-3xl border border-line bg-white">
            <div className="h-80 lg:h-[26rem]">
              <GoogleMap address={location.address} />
            </div>
            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <MapPin size={18} className={`mt-0.5 shrink-0 ${accent.text}`} />
                <p className="text-sm leading-6 text-ink">{location.address}</p>
              </div>
              <a
                href={location.directions}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 text-sm font-semibold text-crimson hover:underline"
              >
                Open in Maps →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Teachers */}
      {schoolTeachers.length > 0 && (
        <section className="bg-white py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <SectionHeading
              eyebrow="Teaching here"
              title={`Meet your ${location.name} teachers`}
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {schoolTeachers.map((teacher, index) => (
                <Reveal key={teacher.id} delay={index * 0.08}>
                  <TeacherCard teacher={teacher} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other schools */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Our other schools
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {otherSchools.map((school) => (
              <Link
                key={school.id}
                to={school.path}
                className="group flex items-center justify-between rounded-3xl border border-line bg-white p-6 transition hover:border-ink/30"
              >
                <span>
                  <span className="block font-display text-2xl font-semibold text-ink-deep">
                    {school.name}
                  </span>
                  <span className="text-sm text-muted">
                    {school.day} · {school.hours}
                  </span>
                </span>
                <ArrowRight className="text-crimson transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EnrolCTA />
    </>
  );
}
