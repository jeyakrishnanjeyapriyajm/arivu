import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { siteImages } from "../../data/siteImages";

export default function LearningBanner() {
  return (
    <section className="bg-[#fffdf8] pb-24 sm:pb-32 lg:pb-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] bg-[#6e1f2a]"
        >
          {/* Image */}
          <img
            src={siteImages.classroom}
            alt="Tamil classroom"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#46121a]/80" />

          {/* Content */}
          <div className="relative z-10 grid min-h-[420px] items-center gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e7d2a1]">
                Learning Together
              </div>

              <h3 className="font-display mt-5 text-4xl leading-tight text-white sm:text-5xl">
                Language becomes
                <span className="block italic text-[#e7d2a1]">
                  a lifelong connection.
                </span>
              </h3>
            </div>

            <div>
              <p className="max-w-xl text-base leading-8 text-white/70">
                From early language foundations to reading, writing and cultural
                understanding, our learning journey is designed to help children
                carry Tamil with them wherever life takes them.
              </p>

              <button className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-white">
                Discover our approach
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
