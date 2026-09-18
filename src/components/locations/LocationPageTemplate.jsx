import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Clock3, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import GoogleMap from "../common/GoogleMap";

export default function LocationPageTemplate({ location, image }) {
  return (
    <div className="bg-[#fffdf8]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#46121a] px-6 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-24 lg:pt-40">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: [0, 8, 0],
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
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-52 -left-52 h-[34rem] w-[34rem] rounded-full border border-white/10"
          />

          <div className="absolute right-[20%] top-[25%] h-2 w-2 rounded-full bg-[#c9a45c]" />
          <div className="absolute bottom-[20%] left-[15%] h-3 w-3 rounded-full bg-[#c9a45c]/40" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#c9a45c]" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e7d2a1]">
                  Arivu Tamil School
                </span>
              </div>

              <h1 className="font-display text-5xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                {location.name}
              </h1>

              <p className="mt-5 font-tamil text-2xl text-[#e7d2a1]">
                {location.tamilLine}
              </p>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
                {location.description}
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#classes"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#c9a45c] px-6 py-3.5 text-sm font-semibold text-[#46121a] transition hover:bg-[#e7d2a1]"
                >
                  Explore Classes
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -bottom-4 -left-4 h-full w-full rounded-[2rem] border border-[#c9a45c]/40" />

              <div className="relative h-[420px] overflow-hidden rounded-[2rem] sm:h-[500px]">
                <img
                  src={image}
                  alt={`${location.name} Tamil School`}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#46121a]/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-black/20 p-5 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#e7d2a1]">
                    School Location
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white">
                    {location.address}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Information cards */}
      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            <InfoCard
              icon={<CalendarDays size={20} />}
              label="Classes"
              value={location.day}
            />

            <InfoCard
              icon={<Clock3 size={20} />}
              label="Class Hours"
              value={location.hours}
            />

            <InfoCard
              icon={<Phone size={20} />}
              label="Enquiries"
              value={location.phone}
            />
          </div>
        </div>
      </section>

      {/* Classes */}
      <section
        id="classes"
        className="bg-[#f8f4ed] px-6 py-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6e1f2a]">
              Learning at {location.name}
            </p>

            <h2 className="mt-4 font-display text-4xl leading-tight text-[#1d1b19] sm:text-5xl">
              A structured approach to learning Tamil.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#6e6962] sm:text-base">
              Our Tamil classes combine language learning with reading, writing,
              communication and cultural understanding.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <ClassCard
              number="01"
              title="Tamil Language"
              description="Build a strong foundation in Tamil vocabulary, grammar and communication."
            />

            <ClassCard
              number="02"
              title="Reading & Writing"
              description="Develop confidence in reading and writing through structured learning."
            />

            <ClassCard
              number="03"
              title="Culture & Heritage"
              description="Connect language learning with Tamil traditions, values and culture."
            />
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[2rem] bg-[#46121a] lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a45c]">
                Find us
              </p>

              <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">
                Visit our {location.name} school.
              </h2>

              <div className="mt-8 flex gap-4">
                <MapPin size={22} className="mt-1 shrink-0 text-[#c9a45c]" />

                <div>
                  <p className="text-sm leading-7 text-white/70">
                    {location.address}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {/* Call */}
                <a
                  href={`tel:${location.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#c9a45c] hover:text-[#e7d2a1]"
                >
                  <Phone size={17} />
                  Call Us
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${location.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c9a45c] px-5 py-3 text-sm font-semibold text-[#46121a] transition hover:bg-[#e7d2a1]"
                >
                  WhatsApp
                  <ArrowRight size={16} />
                </a>

                {/* Directions */}
                <a
                  href={location.directions}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#c9a45c] hover:text-[#e7d2a1]"
                >
                  <MapPin size={17} />
                  Directions
                </a>
              </div>
            </div>

            <div className="min-h-[320px] overflow-hidden bg-[#6e1f2a]">
              <GoogleMap address={location.address} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoCard({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-[#e8e1d6] bg-white p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f4ed] text-[#6e1f2a]">
        {icon}
      </div>

      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#6e6962]">
        {label}
      </p>

      <p className="mt-2 font-display text-xl text-[#1d1b19]">{value}</p>
    </div>
  );
}

function ClassCard({ number, title, description }) {
  return (
    <div className="group rounded-2xl border border-[#e8e1d6] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#c9a45c]/60">
      <span className="text-xs font-semibold text-[#c9a45c]">{number}</span>

      <h3 className="mt-8 font-display text-2xl text-[#1d1b19]">{title}</h3>

      <p className="mt-4 text-sm leading-7 text-[#6e6962]">{description}</p>

      <div className="mt-7 h-px w-10 bg-[#c9a45c] transition-all duration-300 group-hover:w-16" />
    </div>
  );
}
