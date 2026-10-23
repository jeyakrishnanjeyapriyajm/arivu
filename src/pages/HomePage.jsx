import HomeHero from "../components/home/HomeHero";
import {
  AboutSection,
  EventsPreview,
  LearningSection,
  SchoolsSection,
  TeachersPreview,
} from "../components/home/HomeSections";
import KuralBand from "../components/sections/KuralBand";
import SisterSchool from "../components/sections/SisterSchool";
import EnrolCTA from "../components/sections/EnrolCTA";
import usePageTitle from "../hooks/usePageTitle";
import StoryIntro from "../components/home/StoryIntro";

export default function HomePage() {
  usePageTitle();

  return (
    <>
      <StoryIntro />
      <HomeHero />
      <SchoolsSection />
      <AboutSection />
      <LearningSection />
      <TeachersPreview />
      <KuralBand />
      <EventsPreview />
      <SisterSchool />
      <EnrolCTA />
    </>
  );
}
