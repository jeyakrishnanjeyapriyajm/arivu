import { motion } from "framer-motion";
import { BookOpen, Languages, Music2, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function EducationSection() {
  const learningAreas = [
    {
      number: "01",
      icon: Languages,
      title: "Tamil Language",
      description:
        "Build strong foundations in Tamil through structured lessons, vocabulary, grammar and everyday communication.",
    },
    {
      number: "02",
      icon: BookOpen,
      title: "Reading & Writing",
      description:
        "Develop reading and writing skills progressively through age-appropriate learning activities and worksheets.",
    },
    {
      number: "03",
      icon: Music2,
      title: "Culture & Heritage",
      description:
        "Connect language learning with Tamil traditions, celebrations, arts and cultural experiences.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fffdf8] py-24 sm:py-32 lg:py-40">
      {/* Decorative background */}
      <div className="pointer-events-none absolute left-[-180px] top-[20%] h-[500px] w-[500px] rounded-full bg-[#c9a45c]/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#c9a45c]" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6e1f2a]">
              Tamil Education
            </span>

            <span className="h-px w-10 bg-[#c9a45c]" />
          </div>

          <h2 className="font-display text-4xl leading-tight text-[#46121a] sm:text-5xl lg:text-6xl">
            Learning Tamil
            <span className="block italic text-[#6e1f2a]">for life.</span>
          </h2>

          <p className="font-tamil mt-6 text-2xl text-[#6e1f2a]">
            கற்று • வளர்ந்து • இணைவோம்
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6e6962]">
            Our structured Tamil education approach helps children develop
            language skills while building confidence and a meaningful
            connection with their cultural heritage.
          </p>
        </motion.div>

        {/* Learning cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {learningAreas.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className="group relative overflow-hidden rounded-[2rem] border border-[#e8e1d6] bg-[#f8f4ed] p-8 transition duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-[#46121a]/10"
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl text-[#c9a45c]/70">
                    {item.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6e1f2a] text-white transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={21} />
                  </div>
                </div>

                <h3 className="mt-14 font-display text-3xl text-[#46121a]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#6e6962]">
                  {item.description}
                </p>

                <div className="mt-8 h-px w-full bg-[#e8e1d6]" />

                <div className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#6e1f2a]">
                  Learn & Grow
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex justify-center"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-full border border-[#6e1f2a]/20 bg-white px-7 py-4 text-sm font-semibold text-[#6e1f2a] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#6e1f2a] hover:shadow-xl"
          >
            Explore Our Classes
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
