import { motion } from "framer-motion";
import { ArrowUpRight, Music, Piano, Sparkles } from "lucide-react";

import { siteImages } from "../../data/siteImages";

const arts = [
  {
    title: "Bharathanatyam",
    icon: Sparkles,
  },
  {
    title: "Music",
    icon: Music,
  },
  {
    title: "Violin",
    icon: Music,
  },
  {
    title: "Veena",
    icon: Music,
  },
  {
    title: "Miruthangam",
    icon: Music,
  },
  {
    title: "Keyboard",
    icon: Piano,
  },
];

export default function SisterSchoolSection() {
  return (
    <section className="relative overflow-hidden bg-[#1b1715] py-24 text-white sm:py-32 lg:py-40">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute right-[-250px] top-[-250px] h-[700px] w-[700px] rounded-full bg-[#c9a45c]/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c9a45c]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e7d2a1]">
                Our Sister School
              </span>
            </div>

            <h2 className="font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Chitrakalaimanram
            </h2>

            <p className="font-tamil mt-6 text-2xl text-[#e7d2a1]">
              கலை • இசை • பாரம்பரியம்
            </p>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/60">
              With more than two decades of teaching experience, our sister
              school brings Tamil performing arts and creative learning to
              students across the UK and online.
            </p>

            {/* Link */}
            <a
              href="https://www.chitrakalaimanram.co.uk"
              target="_blank"
              rel="noreferrer"
              className="group mt-9 inline-flex items-center gap-3 rounded-full border border-[#e7d2a1]/30 px-6 py-3.5 text-sm font-semibold text-[#e7d2a1] transition duration-300 hover:bg-[#e7d2a1] hover:text-[#1b1715]"
            >
              Visit Chitrakalaimanram
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem]">
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.8 }}
                src={siteImages.arts}
                alt="Tamil performing arts"
                className="h-[560px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1b1715] via-[#1b1715]/20 to-transparent" />

              {/* Experience badge */}
              <div className="absolute left-6 top-6 rounded-2xl border border-white/20 bg-black/20 px-5 py-4 backdrop-blur-xl">
                <div className="font-display text-3xl text-[#e7d2a1]">24+</div>

                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/60">
                  Years of teaching
                </div>
              </div>

              {/* Arts */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {arts.map((art, index) => {
                    const Icon = art.icon;

                    return (
                      <motion.div
                        key={art.title}
                        initial={{
                          opacity: 0,
                          y: 15,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 0.3 + index * 0.08,
                        }}
                        className="flex items-center gap-2 rounded-xl border border-white/15 bg-black/20 px-3 py-3 backdrop-blur-md"
                      >
                        <Icon size={15} className="shrink-0 text-[#e7d2a1]" />

                        <span className="text-xs font-medium text-white/80">
                          {art.title}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
