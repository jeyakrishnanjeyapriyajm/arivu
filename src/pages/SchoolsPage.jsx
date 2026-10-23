import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import SchoolCard from "../components/sections/SchoolCard";
import EnrolCTA from "../components/sections/EnrolCTA";
import { locations } from "../data/locations";
import usePageTitle from "../hooks/usePageTitle";

export default function SchoolsPage() {
  usePageTitle("Our schools");

  return (
    <>
      <PageHero
        eyebrow="Our schools"
        title="Find your nearest Tamil school."
        tamil="அறிவு தமிழ் பாடசாலைகள்"
        intro="Three weekend schools across Coventry, Birmingham and Solihull — the same syllabus, the same caring teachers, wherever you join us."
      />

      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-6 md:grid-cols-3">
            {locations.map((location, index) => (
              <Reveal key={location.id} delay={index * 0.08}>
                <SchoolCard location={location} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
          <SectionHeading
            align="center"
            eyebrow="At a glance"
            title="Weekly timetable"
          />

          <Reveal className="mt-12 overflow-x-auto rounded-3xl border border-line">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <thead className="bg-ink text-white">
                <tr>
                  <th scope="col" className="px-6 py-4 font-semibold">School</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Day</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Time</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Venue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line bg-white">
                {locations.map((location) => (
                  <tr key={location.id}>
                    <th scope="row" className="px-6 py-5 font-display text-base font-semibold text-ink-deep">
                      {location.name}
                    </th>
                    <td className="px-6 py-5 text-ink">{location.day}</td>
                    <td className="px-6 py-5 text-ink">{location.hours}</td>
                    <td className="px-6 py-5 text-muted">{location.venue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <p className="mt-6 text-center text-sm text-muted">
            Classes run during term time. Please contact us to confirm term
            dates and available places.
          </p>
        </div>
      </section>

      <EnrolCTA />
    </>
  );
}
