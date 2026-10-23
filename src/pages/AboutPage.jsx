import { ArrowRight, BadgeCheck, BookOpenCheck, GraduationCap, HeartHandshake } from "lucide-react";

import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import KuralBand from "../components/sections/KuralBand";
import SisterSchool from "../components/sections/SisterSchool";
import EnrolCTA from "../components/sections/EnrolCTA";
import { promises } from "../data/learning";
import { images, site } from "../data/site";
import usePageTitle from "../hooks/usePageTitle";

const promiseIcons = [BookOpenCheck, BadgeCheck, GraduationCap, HeartHandshake];

const journey = [
  {
    place: "Coventry",
    title: "Where it began",
    text: "Our first Tamil school opened in Coventry — a historic city named UK City of Culture 2021, and home to our Head Office.",
    color: "bg-crimson",
  },
  {
    place: "Shirley",
    title: "Serving Solihull",
    text: "Following huge demand from parents, Arivu classes also run in Shirley, with Saturday afternoon sessions at Light Hall School.",
    color: "bg-leaf",
  },
  {
    place: "Birmingham",
    title: "A new branch, 2024",
    text: "On 20 January 2024 we celebrated the opening of our Birmingham school at West Bromwich Collegiate Academy.",
    color: "bg-saffron",
  },
];

export default function AboutPage() {
  usePageTitle("About us");

  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Knowledge is beauty."
        tamil="அறிவே அழகு"
        intro="Arivu (அறிவு) means knowledge. Arivu Foundation – Centre for Languages exists so that children growing up in the UK can carry the Tamil language, and everything it holds, into the future."
      />

      {/* Story */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-12">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="A Coventry school that kept on growing."
              intro="What began as a single Tamil school in Coventry is now a family of three. Every expansion has come from the same place — parents asking for structured, high-quality Tamil education close to home."
            />

            <Reveal delay={0.1} className="mt-10 space-y-6 text-base leading-8 text-muted">
              <p>
                We run Tamil classes and promote Tamil education and culture in
                the United Kingdom. Our students are taught a well-structured and
                widely accepted Tamil syllabus, and are prepared for Cambridge
                Assessment International Education qualifications at O Level and
                A Level.
              </p>
              <p>
                All of our teachers are properly trained and hold DBS clearance
                certificates — so families can be confident their children are
                learning in a safe, caring environment.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative">
            <img
              src={images.tamilWordmark}
              alt="The word தமிழ் (Tamil) drawn from many smaller Tamil letters"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-[2rem] bg-black object-cover shadow-xl shadow-ink/15"
            />
            <div className="absolute -bottom-8 left-6 right-6 rounded-3xl bg-white p-6 shadow-xl shadow-ink/10 sm:left-auto sm:right-8 sm:w-80">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson">
                Our mission
              </p>
              <p className="mt-3 text-sm leading-7 text-ink">{site.mission}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading
            align="center"
            eyebrow="Our journey"
            title="One school became three."
          />

          <ol className="relative mt-16 grid gap-6 md:grid-cols-3">
            <span className="brand-rule absolute left-0 right-0 top-[1.15rem] hidden h-1 rounded-full md:block" />
            {journey.map((step, index) => (
              <Reveal as="li" key={step.place} delay={index * 0.1} className="relative">
                <span
                  className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full ${step.color} font-display text-sm font-semibold text-white ring-8 ring-white`}
                >
                  {step.place[0]}
                </span>
                <div className="mt-6 rounded-3xl border border-line bg-paper p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    {step.place}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-ink-deep">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Promises */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Why families choose Arivu"
                title={site.promise}
                intro="Together with our sister school Chitrakalaimanram, our teachers bring more than two decades of experience to every class."
              />
              <Reveal delay={0.1} className="mt-8">
                <Button to="/learning" variant="ink">
                  How we teach
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </Button>
              </Reveal>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {promises.map((promise, index) => {
                const Icon = promiseIcons[index];

                return (
                  <Reveal
                    key={promise.title}
                    delay={index * 0.06}
                    className="rounded-3xl border border-line bg-white p-7"
                  >
                    <Icon size={26} className="text-crimson" />
                    <h3 className="mt-5 font-display text-lg font-semibold text-ink-deep">
                      {promise.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{promise.text}</p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <KuralBand />
      <SisterSchool />
      <EnrolCTA />
    </>
  );
}
