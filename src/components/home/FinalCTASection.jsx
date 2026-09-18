import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f4ed] px-6 py-24 sm:px-8 lg:px-12">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 8, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#c9a45c]/30"
        />

        <motion.div
          animate={{
            rotate: [0, -8, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full border border-[#6e1f2a]/10"
        />

        <div className="absolute right-[15%] top-[20%] h-2 w-2 rounded-full bg-[#c9a45c]" />
        <div className="absolute bottom-[25%] left-[12%] h-3 w-3 rounded-full bg-[#6e1f2a]/20" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] bg-[#46121a] px-8 py-16 text-center sm:px-12 lg:px-20 lg:py-20">
          {/* Small label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center justify-center gap-3"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e7d2a1]">
              Begin the journey
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto max-w-4xl font-display text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Give your child the gift of
            <span className="block text-[#e7d2a1]">
              Tamil language & heritage.
            </span>
          </motion.h2>

          {/* Tamil */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 font-tamil text-xl text-[#e7d2a1] sm:text-2xl"
          >
            தமிழ் மொழி • பண்பாடு • பாரம்பரியம்
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base"
          >
            Join a welcoming community where children learn Tamil, build
            confidence and develop a lasting connection with their heritage.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Link
              to="/coventry"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#c9a45c] px-7 py-4 text-sm font-semibold text-[#46121a] transition-all duration-300 hover:bg-[#e7d2a1]"
            >
              Explore Our Classes
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
