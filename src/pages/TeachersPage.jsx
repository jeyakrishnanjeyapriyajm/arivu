import { BadgeCheck } from "lucide-react";

import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import TeacherCard from "../components/sections/TeacherCard";
import EnrolCTA from "../components/sections/EnrolCTA";
import { teachers } from "../data/teachers";
import usePageTitle from "../hooks/usePageTitle";

export default function TeachersPage() {
  usePageTitle("Our teachers");

  return (
    <>
      <PageHero
        eyebrow="Our teachers"
        title="Teachers who make Tamil feel like home."
        tamil="எமது தமிழ் ஆசிரியர்கள்"
        intro="Experienced, trained and DBS-checked — meet the teachers behind our Coventry, Birmingham and Shirley schools in their own words."
      />

      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <Reveal className="mb-12 flex items-center gap-3 rounded-2xl border border-leaf/40 bg-leaf/10 px-5 py-4 text-sm text-ink">
            <BadgeCheck size={20} className="shrink-0 text-leaf-deep" />
            All Arivu teachers are properly trained and hold DBS clearance
            certificates.
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teachers.map((teacher, index) => (
              <Reveal key={teacher.id} delay={(index % 3) * 0.08}>
                <TeacherCard teacher={teacher} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EnrolCTA />
    </>
  );
}
