import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { siteImages } from "../../data/siteImages";

export default function StorySection() {
  return (
    <section className="relative overflow-hidden bg-[#fffdf8] py-24 sm:py-32 lg:py-40">
      {/* Decorative number */}
      <div className="pointer-events-none absolute right-[-60px] top-20 hidden font-display text-[240px] leading-none text-[#6e1f2a]/[0.035] lg:block">
        24
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* Gold frame */}
            <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border border-[#c9a45c]/30 sm:-right-6 sm:-top-6" />

            <div className="relative overflow-hidden rounded-[2rem]">
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.7 }}
                src={siteImages.students}
                alt="Students learning together"
                className="h-[500px] w-full object-cover sm:h-[600px]"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#46121a]/50 via-transparent to-transparent" />

              {/* Floating stat */}
              <div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-white/90 p-5 shadow-xl backdrop-blur-xl">
                <div className="font-display text-4xl font-semibold text-[#6e1f2a]">
                  24+
                </div>

                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-[#6e6962]">
                  Years of Excellence
                </div>
              </div>
            </div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c9a45c]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6e1f2a]">
                Our Story
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-display text-4xl leading-tight text-[#46121a] sm:text-5xl lg:text-6xl">
              24 years of
              <span className="block italic text-[#6e1f2a]">
                keeping Tamil alive.
              </span>
            </h2>

            {/* Tamil */}
            <p className="font-tamil mt-6 text-2xl text-[#6e1f2a]">
              தமிழ் மொழி எங்கள் அடையாளம்
            </p>

            {/* Description */}
            <div className="mt-7 space-y-5 text-base leading-8 text-[#6e6962]">
              <p>
                Arivu Foundation began with a simple purpose: to create
                opportunities for children and families to learn, understand and
                connect with the Tamil language.
              </p>

              <p>
                Over the years, our Tamil education community has grown beyond
                Coventry, reaching Birmingham and Shirley while continuing to
                build a strong connection between language, culture and
                community.
              </p>
            </div>

            {/* Feature list */}
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#e8e1d6] bg-[#f8f4ed] p-5">
                <div className="font-display text-2xl text-[#46121a]">
                  Language
                </div>

                <p className="mt-2 text-sm leading-6 text-[#6e6962]">
                  Structured Tamil learning for the next generation.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e8e1d6] bg-[#f8f4ed] p-5">
                <div className="font-display text-2xl text-[#46121a]">
                  Culture
                </div>

                <p className="mt-2 text-sm leading-6 text-[#6e6962]">
                  Creating meaningful connections with Tamil heritage.
                </p>
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="group mt-9 inline-flex items-center gap-3 border-b border-[#6e1f2a] pb-2 text-sm font-semibold text-[#6e1f2a]"
            >
              Learn more about Arivu Foundation
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
