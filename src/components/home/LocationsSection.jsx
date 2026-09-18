import { motion } from "framer-motion";
import { ArrowUpRight, Clock3, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import { locations } from "../../data/locations";
import { siteImages } from "../../data/siteImages";

export default function LocationsSection() {
  return (
    <section className="relative overflow-hidden bg-[#46121a] py-24 text-white sm:py-32 lg:py-40">
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-[-200px] top-[-200px] h-[600px] w-[600px] rounded-full border border-[#c9a45c]/10" />

      <div className="pointer-events-none absolute bottom-[-250px] left-[-200px] h-[600px] w-[600px] rounded-full border border-white/5" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#c9a45c]" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e7d2a1]">
              Our Locations
            </span>
          </div>

          <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Three places.
            <span className="block italic text-[#e7d2a1]">One community.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-white/60">
            Find an Arivu Foundation Tamil School near you and become part of a
            growing community built around language, culture and connection.
          </p>
        </motion.div>

        {/* Locations */}
        <div className="space-y-4">
          {locations.map((location, index) => (
            <LocationCard key={location.id} location={location} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationCard({ location, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
      }}
    >
      <Link
        to={`/${location.id}`}
        className="group relative block overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 transition duration-500 hover:bg-white/[0.08] sm:p-8"
      >
        {/* Hover image */}
        <div className="absolute inset-y-0 right-0 hidden w-[35%] overflow-hidden opacity-0 transition-all duration-700 group-hover:opacity-100 lg:block">
          <img
            src={siteImages.locations[location.id]}
            alt={location.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#46121a] via-[#46121a]/50 to-transparent" />
        </div>

        <div className="relative z-10 flex items-center justify-between gap-6">
          <div className="flex items-start gap-6">
            {/* Number */}
            <div className="hidden font-display text-2xl text-[#c9a45c] sm:block">
              0{index + 1}
            </div>

            <div>
              <h3 className="font-display text-3xl transition-colors duration-300 group-hover:text-[#e7d2a1] sm:text-4xl">
                {location.name}
              </h3>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/50">
                <span className="flex items-center gap-2">
                  <Clock3 size={15} />
                  {location.day} • {location.hours}
                </span>

                <span className="flex items-center gap-2">
                  <MapPin size={15} />
                  UK
                </span>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 transition duration-300 group-hover:border-[#c9a45c] group-hover:bg-[#c9a45c] group-hover:text-[#46121a]">
            <ArrowUpRight
              size={20}
              className="transition-transform duration-300 group-hover:rotate-12"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
