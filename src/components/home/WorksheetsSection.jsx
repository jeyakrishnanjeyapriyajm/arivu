import { motion } from "framer-motion";
import { ArrowDownToLine, BookOpen } from "lucide-react";

import { resources } from "../../data/resources";

export default function WorksheetsSection() {
  return (
    <section className="bg-[#f8f4ed] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c9a45c]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6e1f2a]">
                Resources
              </span>
            </div>

            <h2 className="font-display text-4xl leading-tight text-[#46121a] sm:text-5xl">
              Learning doesn't stop
              <span className="block italic text-[#6e1f2a]">
                when class ends.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-[#6e6962]">
              Support your child's Tamil learning journey with useful resources
              and practice materials that can be used at home.
            </p>
          </motion.div>

          {/* Resource */}
          <div className="space-y-4">
            {resources.map((resource, index) => (
              <motion.a
                key={resource.id}
                href={resource.file}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="group flex items-center justify-between rounded-[1.5rem] border border-[#e8e1d6] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6e1f2a] text-white">
                    <BookOpen size={22} />
                  </div>

                  <div>
                    <h3 className="font-display text-2xl text-[#46121a]">
                      {resource.title}
                    </h3>

                    <p className="mt-1 text-sm text-[#6e6962]">
                      {resource.description}
                    </p>

                    <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c9a45c]">
                      {resource.type}
                    </div>
                  </div>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#e8e1d6] text-[#6e1f2a] transition duration-300 group-hover:bg-[#6e1f2a] group-hover:text-white">
                  <ArrowDownToLine size={18} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
