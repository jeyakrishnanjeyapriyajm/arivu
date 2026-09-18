import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Play } from "lucide-react";
import { events } from "../data/events";

export default function EventsPage() {
  return (
    <div className="bg-[#fffdf8]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#46121a] px-6 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-24 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: [0, 10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full border border-[#c9a45c]/20"
          />

          <motion.div
            animate={{
              rotate: [0, -8, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-48 -left-48 h-[32rem] w-[32rem] rounded-full border border-white/10"
          />

          <div className="absolute right-[20%] top-[25%] h-2 w-2 rounded-full bg-[#c9a45c]" />
          <div className="absolute bottom-[20%] left-[15%] h-3 w-3 rounded-full bg-[#c9a45c]/40" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c9a45c]" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e7d2a1]">
                Events & Culture
              </span>
            </div>

            <h1 className="font-display text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Celebrating Tamil
              <span className="block text-[#e7d2a1]">culture together.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/65">
              From festivals and performances to community celebrations, our
              events give students and families opportunities to learn,
              participate and celebrate together.
            </p>

            <p className="mt-6 font-tamil text-xl text-[#e7d2a1]">
              கலை • கலாசாரம் • சமூகத்துடன் இணைவு
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured event */}
      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[2rem] bg-[#f8f4ed] lg:grid-cols-[1.15fr_0.85fr]">
            {/* Video */}
            <div className="relative aspect-video min-h-[300px] bg-[#1d1b19] lg:min-h-[500px] lg:aspect-auto">
              <iframe
                src="https://www.youtube.com/embed/6s4jwjMG7Ec?rel=0"
                title="Tamil Vedham 2023 Opening"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6e1f2a]">
                  Featured
                </span>

                <span className="h-px w-8 bg-[#c9a45c]" />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-[#c9a45c]">
                2023
              </p>

              <h2 className="mt-3 font-display text-4xl leading-tight text-[#1d1b19] sm:text-5xl">
                Tamil Vedham
                <br />
                Opening
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#6e6962]">
                A celebration bringing together students, parents and the wider
                Tamil community through language, performance and cultural
                expression.
              </p>

              <a
                href="https://www.youtube.com/watch?v=6s4jwjMG7Ec"
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#6e1f2a] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#46121a]"
              >
                <Play size={16} fill="currentColor" />
                Watch on YouTube
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Event archive */}
      <section className="bg-[#f8f4ed] px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6e1f2a]">
              Event archive
            </p>

            <h2 className="mt-4 font-display text-4xl leading-tight text-[#1d1b19] sm:text-5xl">
              Moments worth remembering.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#6e6962] sm:text-base">
              Explore some of the celebrations, performances and community
              moments that have shaped the Arivu Foundation journey.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {events.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Cultural CTA */}
      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#46121a] px-8 py-14 text-center sm:px-12 lg:px-20 lg:py-20">
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full border border-[#c9a45c]/20" />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a45c]">
                More to discover
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl text-white sm:text-5xl">
                Language is learned.
                <span className="block text-[#e7d2a1]">
                  Culture is experienced.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60">
                Explore our Tamil classes and discover a learning environment
                where language, heritage and community come together.
              </p>

              <a
                href="/coventry"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#c9a45c] px-7 py-4 text-sm font-semibold text-[#46121a] transition hover:bg-[#e7d2a1]"
              >
                Explore Our Classes
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function EventCard({ event, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      className="group overflow-hidden rounded-[1.5rem] border border-[#e8e1d6] bg-white"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#1d1b19]/70 via-transparent to-transparent" />

        <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#46121a] backdrop-blur-sm">
          {event.year}
        </div>

        <div className="absolute bottom-5 left-5 flex items-center gap-2 text-xs font-medium text-white">
          <CalendarDays size={14} />
          {event.category}
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <h3 className="font-display text-2xl text-[#1d1b19]">{event.title}</h3>

        <p className="mt-3 text-sm leading-7 text-[#6e6962]">
          {event.description}
        </p>

        <div className="mt-6 h-px w-10 bg-[#c9a45c] transition-all duration-300 group-hover:w-16" />
      </div>
    </motion.article>
  );
}
