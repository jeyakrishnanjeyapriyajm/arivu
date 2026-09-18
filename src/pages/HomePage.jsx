import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import HeroScene from "../components/home/HeroScene";
import StorySection from "../components/home/StorySection";
import LocationsSection from "../components/home/LocationsSection";
import EducationSection from "../components/home/EducationSection";
import LearningBanner from "../components/home/LearningBanner";
import TeachersSection from "../components/home/TeachersSection";
import SisterSchoolSection from "../components/home/SisterSchoolSection";
import EventsSection from "../components/home/EventsSection";
import WorksheetsSection from "../components/home/WorksheetsSection";
import FinalCTASection from "../components/home/FinalCTASection";

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden bg-[#f8f4ed]">
        {/* Decorative background */}
        <div className="absolute inset-0">
          <div className="absolute left-[-200px] top-[20%] h-[500px] w-[500px] rounded-full bg-[#6e1f2a]/10 blur-[120px]" />

          <div className="absolute bottom-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full bg-[#c9a45c]/15 blur-[120px]" />
        </div>

        {/* 3D Scene */}
        <div className="absolute right-[-5%] top-[12%] h-[650px] w-[55%] lg:h-[750px]">
          <HeroScene />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 lg:px-8">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#c9a45c]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6e1f2a]">
                24 Years of Teaching Excellence
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
              }}
              className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-[#46121a] sm:text-6xl lg:text-8xl"
            >
              Preserving Tamil
              <span className="block italic text-[#6e1f2a]">
                Language & Heritage
              </span>
            </motion.h1>

            {/* Tamil heading */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="font-tamil mt-7 text-2xl text-[#6e1f2a] sm:text-3xl"
            >
              தமிழ் மொழி • பண்பாடு • பாரம்பரியம்
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.45,
              }}
              className="mt-6 max-w-xl text-base leading-8 text-[#6e6962] sm:text-lg"
            >
              Inspiring the next generation through structured Tamil language
              education, cultural learning and a strong community spirit across
              the UK.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
              }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="group flex items-center gap-3 rounded-full bg-[#6e1f2a] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-[#6e1f2a]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#46121a]"
              >
                Explore Our Classes
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/coventry"
                className="flex items-center gap-2 rounded-full border border-[#6e1f2a]/20 bg-white/60 px-7 py-4 text-sm font-semibold text-[#46121a] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                <MapPin size={17} />
                Our Locations
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
              }}
              className="mt-16 flex flex-wrap gap-10 border-t border-[#6e1f2a]/10 pt-7"
            >
              <div>
                <div className="font-display text-3xl text-[#46121a]">24+</div>

                <div className="mt-1 text-xs uppercase tracking-widest text-[#6e6962]">
                  Years Experience
                </div>
              </div>

              <div>
                <div className="font-display text-3xl text-[#46121a]">3</div>

                <div className="mt-1 text-xs uppercase tracking-widest text-[#6e6962]">
                  UK Locations
                </div>
              </div>

              <div>
                <div className="font-display text-3xl text-[#46121a]">1</div>

                <div className="mt-1 text-xs uppercase tracking-widest text-[#6e6962]">
                  Shared Mission
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#6e6962]">
            Scroll to explore
          </span>

          <div className="h-12 w-px bg-[#6e1f2a]/30" />
        </motion.div>
      </section>

      <StorySection />
      <LocationsSection />
      <EducationSection />
      <LearningBanner />
      <TeachersSection />
      <SisterSchoolSection />
      <EventsSection />
      <WorksheetsSection />
      <FinalCTASection />
    </main>
  );
}
