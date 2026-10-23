import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import RisingBars from "./RisingBars";

export default function PageHero({ eyebrow, title, tamil, intro, children }) {
  return (
    <section className="grain relative overflow-hidden bg-ink-deep px-5 pb-20 pt-36 sm:px-8 lg:px-12 lg:pb-28 lg:pt-44">
      <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-crimson/30 blur-[120px]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-saffron/15 blur-[110px]" />

      <RisingBars
        className="pointer-events-none absolute bottom-0 right-6 hidden h-56 w-64 gap-3 opacity-90 md:flex lg:right-16 lg:h-72 lg:w-80"
        delay={0.2}
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-1.5 text-xs font-medium text-white/50"
        >
          <Link to="/" className="transition hover:text-white">
            Home
          </Link>
          <ChevronRight size={13} />
          <span className="text-white/80">{eyebrow}</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl md:max-w-xl lg:max-w-3xl"
        >
          <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>

          {tamil && (
            <p className="mt-5 font-tamil text-xl font-semibold text-leaf sm:text-2xl">
              {tamil}
            </p>
          )}

          {intro && (
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              {intro}
            </p>
          )}

          {children && <div className="mt-9">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
