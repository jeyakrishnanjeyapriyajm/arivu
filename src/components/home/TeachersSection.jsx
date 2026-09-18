import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { teachers } from "../../data/teachers";
import { siteImages } from "../../data/siteImages";

export default function TeachersSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f4ed] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c9a45c]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6e1f2a]">
                Our Teachers
              </span>
            </div>

            <h2 className="font-display text-4xl leading-tight text-[#46121a] sm:text-5xl lg:text-6xl">
              Experienced educators.
              <span className="block italic text-[#6e1f2a]">
                Passionate about Tamil.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#6e6962] lg:text-right">
            Our teachers bring experience, dedication and a shared passion for
            helping the next generation connect with the Tamil language and its
            heritage.
          </p>
        </motion.div>

        {/* Teacher grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher, index) => (
            <TeacherCard key={teacher.id} teacher={teacher} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeacherCard({ teacher, index }) {
  const image = siteImages.teachers[teacher.id];

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
      }}
      className="group"
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-[1.75rem] bg-[#e8e1d6]">
        <img
          src={image}
          alt={teacher.name}
          className="aspect-[4/5] w-full object-cover grayscale-[20%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#46121a]/70 via-transparent to-transparent opacity-70" />

        {/* Number */}
        <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/10 text-xs font-semibold text-white backdrop-blur-md">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Hover icon */}
        <div className="absolute right-5 top-5 flex h-10 w-10 translate-y-[-8px] items-center justify-center rounded-full bg-white text-[#6e1f2a] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </div>

        {/* Image bottom text */}
        <div className="absolute bottom-5 left-5 right-5 text-white">
          <div className="text-xs uppercase tracking-[0.2em] text-white/70">
            {teacher.location}
          </div>

          <h3 className="mt-2 font-display text-2xl">{teacher.name}</h3>
        </div>
      </div>

      {/* Details */}
      <div className="px-2 pt-5">
        <div className="text-sm font-semibold text-[#6e1f2a]">
          {teacher.role}
        </div>

        <p className="mt-2 text-sm leading-6 text-[#6e6962]">
          {teacher.description}
        </p>
      </div>
    </motion.article>
  );
}
