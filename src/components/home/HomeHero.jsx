import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, GraduationCap, MapPin } from "lucide-react";

import Button from "../ui/Button";
import RisingBars from "../ui/RisingBars";
import { images, site } from "../../data/site";
import { locations } from "../../data/locations";

const ease = [0.22, 1, 0.36, 1];

function fadeUp(delay) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  };
}

const trust = [
  { icon: BadgeCheck, label: "DBS-checked teachers" },
  { icon: GraduationCap, label: "Cambridge O & A Level" },
  { icon: MapPin, label: "3 schools in the Midlands" },
];

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-paper pb-16 pt-32 sm:pt-36 lg:pb-24 lg:pt-40">
      {/* Soft brand light */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[28rem] w-[28rem] rounded-full bg-saffron/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-[26rem] w-[26rem] rounded-full bg-leaf/15 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-12">
        {/* Copy */}
        <div>
          <motion.p
            {...fadeUp(0)}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-4 py-2 text-xs font-semibold text-ink shadow-sm"
          >
            <span className="font-tamil text-crimson">{site.tamilName}</span>
            <span className="hidden h-3 w-px bg-line sm:block" />
            <span className="hidden sm:inline">Coventry · Birmingham · Shirley</span>
          </motion.p>

          <motion.h1
            {...fadeUp(0.08)}
            className="mt-7 font-display text-[2.9rem] font-semibold leading-[1.02] tracking-tight text-ink-deep sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
          >
            Learn Tamil.
            <span className="block text-crimson">Live the heritage.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.18)}
            className="mt-6 font-tamil text-xl font-semibold text-leaf-deep sm:text-2xl"
          >
            தமிழ் மொழி • பண்பாடு • பாரம்பரியம்
          </motion.p>

          <motion.p
            {...fadeUp(0.26)}
            className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg"
          >
            Arivu Foundation – Centre for Languages runs weekend Tamil schools
            for children across the West Midlands, with a structured syllabus,
            trained teachers and a warm, close-knit community.
          </motion.p>

          <motion.div {...fadeUp(0.34)} className="mt-9 flex flex-wrap gap-3">
            <Button to="/schools">
              Find your nearest school
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button to="/contact#enquiry" variant="outline">
              Enquire about enrolment
            </Button>
          </motion.div>

          <motion.ul
            {...fadeUp(0.42)}
            className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-line pt-7"
          >
            {trust.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-medium text-ink/80">
                <Icon size={17} className="text-crimson" />
                {label}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[#262626] shadow-2xl shadow-ink/25">
            <img
              src={images.tamilLetter}
              alt="The Tamil letter அ formed from many smaller Tamil letters"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/85 via-ink-deep/10 to-transparent" />

            <RisingBars className="absolute bottom-0 left-7 h-40 w-36 gap-2 sm:h-48 sm:w-44" delay={0.5} />

            <div className="absolute bottom-7 right-7 text-right text-white">
              <p className="font-display text-5xl font-semibold leading-none sm:text-6xl">
                {site.yearsTeaching}+
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Years of teaching
              </p>
            </div>
          </div>

          {/* Floating logo card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
            className="absolute -left-4 top-8 w-36 rounded-2xl bg-white p-3 shadow-xl shadow-ink/15 sm:-left-10 sm:w-44"
          >
            <img src={site.logo} alt="Arivu Foundation – Centre for Languages logo" className="w-full" />
          </motion.div>

          {/* Floating timetable card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease }}
            className="absolute -right-3 top-1/2 hidden w-56 -translate-y-1/2 rounded-2xl bg-white p-4 shadow-xl shadow-ink/15 sm:block lg:-right-8"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              Weekend classes
            </p>
            <ul className="mt-3 space-y-2.5">
              {locations.map((location, index) => (
                <li key={location.id} className="flex items-center gap-2.5">
                  <span
                    className={`h-7 w-1 rounded-full ${["bg-crimson", "bg-saffron", "bg-leaf"][index]}`}
                  />
                  <span className="text-sm">
                    <span className="block font-semibold leading-tight text-ink">
                      {location.name}
                    </span>
                    <span className="text-xs text-muted">
                      {location.day.slice(0, 3)} · {location.hours}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
