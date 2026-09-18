import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Play } from "lucide-react";

import { events } from "../../data/events";

export default function EventsSection() {
  const featuredEvent = events[0];

  return (
    <section className="relative overflow-hidden bg-[#fffdf8] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c9a45c]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6e1f2a]">
                Events & Culture
              </span>
            </div>

            <h2 className="font-display text-4xl leading-tight text-[#46121a] sm:text-5xl lg:text-6xl">
              Celebrating Tamil
              <span className="block italic text-[#6e1f2a]">
                culture together.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#6e6962]">
            From festivals and performances to community events, our
            celebrations create opportunities for students, parents and families
            to come together.
          </p>
        </motion.div>

        {/* Featured event */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-16 overflow-hidden rounded-[2rem] bg-[#46121a]"
        >
          <div className="grid lg:grid-cols-2">
            {/* Video */}
            <div className="relative min-h-[320px] overflow-hidden lg:min-h-[520px]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/6s4jwjMG7Ec?rel=0"
                title="Tamil Vedham 2023 Event"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              {/* Video label */}
              <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                <Play size={13} fill="currentColor" />
                Featured Event
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 text-white sm:p-12 lg:p-16">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#e7d2a1]">
                <CalendarDays size={14} />
                {featuredEvent.year}
              </div>

              <h3 className="font-display mt-6 text-4xl leading-tight sm:text-5xl">
                Tamil Vedham
                <span className="block italic text-[#e7d2a1]">2023</span>
              </h3>

              <p className="mt-6 text-base leading-8 text-white/60">
                Our Tamil Vedham event brought together students, parents and
                the wider community for a celebration of Tamil language, talent
                and culture.
              </p>

              <div className="mt-8">
                <a
                  href="https://youtube.com/watch?v=6s4jwjMG7Ec"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full border border-[#e7d2a1]/30 px-6 py-3.5 text-sm font-semibold text-[#e7d2a1] transition hover:bg-[#e7d2a1] hover:text-[#46121a]"
                >
                  Watch on YouTube
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Event cards */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {events.slice(0, 3).map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventCard({ event, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="group overflow-hidden rounded-[1.75rem] border border-[#e8e1d6] bg-[#f8f4ed]"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#46121a]/70 to-transparent" />

        {/* Year */}
        <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#6e1f2a] backdrop-blur">
          {event.year}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c9a45c]">
          {event.category}
        </div>

        <h3 className="mt-3 font-display text-2xl leading-tight text-[#46121a]">
          {event.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#6e6962]">
          {event.description}
        </p>
      </div>
    </motion.article>
  );
}
