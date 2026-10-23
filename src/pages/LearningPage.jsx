import { CheckCircle2 } from "lucide-react";

import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import { accents } from "../components/ui/accents";
import KuralBand from "../components/sections/KuralBand";
import EnrolCTA from "../components/sections/EnrolCTA";
import { pillars, promises } from "../data/learning";
import usePageTitle from "../hooks/usePageTitle";

const letters = ["அ", "ஆ", "இ", "ஈ", "உ", "ஊ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "ஔ"];

const pathway = [
  {
    stage: "Foundations",
    tamil: "அடிப்படை",
    text: "Listening, speaking and recognising Tamil letters and everyday words.",
  },
  {
    stage: "Literacy",
    tamil: "எழுத்தறிவு",
    text: "Reading and writing உயிர், மெய் and உயிர்மெய் letters, building to words and simple sentences.",
  },
  {
    stage: "Fluency",
    tamil: "சரளம்",
    text: "Grammar, comprehension, composition and confident speaking — on stage as well as at home.",
  },
  {
    stage: "Qualifications",
    tamil: "தகைமைகள்",
    text: "Preparation for Cambridge Assessment International Education Tamil at O Level and A Level.",
  },
];

export default function LearningPage() {
  usePageTitle("Learning & curriculum");

  return (
    <>
      <PageHero
        eyebrow="Learning"
        title="From the first letter to A Level."
        tamil="கற்க கசடற"
        intro="Our students follow a well-structured and widely accepted Tamil syllabus, taught by trained, DBS-checked teachers, with a clear path towards Cambridge International qualifications."
      />

      {/* Alphabet ribbon */}
      <div className="overflow-hidden border-b border-line bg-white py-5" aria-hidden="true">
        <div className="flex justify-center gap-6 px-4 font-tamil text-2xl font-bold text-ink/15 sm:gap-10 sm:text-3xl">
          {letters.map((letter, index) => (
            <span key={letter} className={index % 4 === 0 ? "text-crimson" : ""}>
              {letter}
            </span>
          ))}
        </div>
      </div>

      {/* Pillars */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="What we teach"
            title="Four pillars of an Arivu education."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const accent = accents[pillar.color];

              return (
                <Reveal
                  key={pillar.id}
                  delay={index * 0.06}
                  className="group flex gap-6 rounded-3xl border border-line bg-white p-7 sm:p-9"
                >
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${accent.soft} ${accent.text}`}
                  >
                    <Icon size={26} />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-ink-deep">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 font-tamil text-sm font-medium text-muted">
                      {pillar.tamil}
                    </p>
                    <p className="mt-4 text-base leading-8 text-muted">
                      {pillar.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pathway */}
      <section className="grain bg-ink-deep py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading
            tone="light"
            eyebrow="The learning pathway"
            title="Step by step, year by year."
            intro="Children progress through the syllabus at their own pace, building on what they have learnt — just as the rising bars in our logo grow."
          />

          <ol className="mt-16 grid items-end gap-5 md:grid-cols-4">
            {pathway.map((step, index) => (
              <Reveal
                as="li"
                key={step.stage}
                delay={index * 0.1}
                className="flex flex-col"
              >
                <div
                  className={`rounded-3xl border border-white/10 bg-white/[0.05] p-6 ${
                    ["md:min-h-[15rem]", "md:min-h-[18rem]", "md:min-h-[21rem]", "md:min-h-[24rem]"][index]
                  } flex flex-col`}
                >
                  <span className="font-display text-sm font-semibold text-saffron">
                    Stage {index + 1}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                    {step.stage}
                  </h3>
                  <p className="mt-1 font-tamil text-sm text-leaf">{step.tamil}</p>
                  <p className="mt-auto pt-6 text-sm leading-7 text-white/65">{step.text}</p>
                </div>
                <span
                  className={`mt-3 h-2 rounded-full ${["bg-vermilion", "bg-saffron", "bg-crimson", "bg-leaf"][index]}`}
                />
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Promises */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading
            align="center"
            eyebrow="Our commitment"
            title="What every family can expect."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((promise, index) => (
              <Reveal
                key={promise.title}
                delay={index * 0.06}
                className="rounded-3xl border border-line bg-white p-7"
              >
                <CheckCircle2 size={24} className="text-leaf-deep" />
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-deep">
                  {promise.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">{promise.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <KuralBand />
      <EnrolCTA />
    </>
  );
}
