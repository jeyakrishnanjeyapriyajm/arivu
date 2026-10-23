import { ArrowUpRight } from "lucide-react";

import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { images } from "../../data/site";

const arts = [
  "Bharatanatyam",
  "Vocal music",
  "Violin",
  "Veena",
  "Mridangam",
  "Keyboard",
];

const centres = ["Coventry", "Birmingham", "Shirley", "Rugby", "Online"];

export default function SisterSchool() {
  return (
    <section className="bg-sand py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
        <div>
          <SectionHeading
            eyebrow="Sister school"
            title="Chitrakalaimanram — Centre for Performing Arts"
            tamil="கலைப்பாடசாலை சித்ரகலைமன்றம்"
            intro="With over two decades of teaching excellence, our sister school brings the Tamil fine arts to families in the same communities we serve."
          />

          <Reveal delay={0.1} className="mt-8">
            <div className="flex flex-wrap gap-2">
              {arts.map((art) => (
                <span
                  key={art}
                  className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink"
                >
                  {art}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm text-muted">
              Classes in{" "}
              <span className="font-semibold text-ink">{centres.join(" · ")}</span>
            </p>

            <a
              href="https://www.chitrakalaimanram.co.uk"
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-ink-deep"
            >
              Visit chitrakalaimanram.co.uk
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative">
            <div className="absolute -inset-3 -rotate-2 rounded-[2rem] bg-leaf/30" />
            <img
              src={images.sisterFlyer}
              alt="Chitrakalaimanram and Arivu Foundation flyer listing Bharatanatyam, vocal music, violin, mridangam, keyboard and Tamil classes"
              loading="lazy"
              className="relative w-full rounded-[1.75rem] shadow-2xl shadow-ink/20"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
