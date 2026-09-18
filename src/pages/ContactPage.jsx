import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import ContactForm from "../components/contact/ContactForm";
import GoogleMap from "../components/common/GoogleMap";

const headOffice = "243 Cross Road, Coventry, CV6 5GP, UK";

const hours = [
  {
    location: "Coventry",
    day: "Sunday",
    time: "9:00 AM – 2:00 PM",
  },
  {
    location: "Birmingham",
    day: "Saturday",
    time: "9:00 AM – 1:00 PM",
  },
  {
    location: "Shirley",
    day: "Saturday",
    time: "2:00 PM – 6:00 PM",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[#fffdf8]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#46121a] px-6 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-24 lg:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{
              rotate: [0, 10, 0],
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full border border-[#c9a45c]/20"
          />

          <div className="absolute left-[12%] top-[30%] h-3 w-3 rounded-full bg-[#c9a45c]/50" />
          <div className="absolute right-[25%] bottom-[20%] h-2 w-2 rounded-full bg-[#c9a45c]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c9a45c]" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e7d2a1]">
                Get in touch
              </span>
            </div>

            <h1 className="font-display text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Let's stay
              <span className="block text-[#e7d2a1]">connected.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/65">
              Whether you're looking for Tamil classes, have a question about
              one of our schools, or simply want to connect with Arivu
              Foundation, we're here to help.
            </p>

            <p className="mt-6 font-tamil text-xl text-[#e7d2a1]">
              தொடர்பில் இருப்போம்
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact area */}
      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Information */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6e1f2a]">
              Contact details
            </p>

            <h2 className="mt-4 font-display text-4xl leading-tight text-[#1d1b19] sm:text-5xl">
              We're here to help.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#6e6962]">
              Reach out to us directly or use the enquiry form and tell us how
              we can help.
            </p>

            <div className="mt-10 space-y-5">
              <ContactItem
                icon={<Phone size={19} />}
                label="Phone"
                value="07961 277728"
                href="tel:+447961277728"
              />

              <ContactItem
                icon={<Mail size={19} />}
                label="Email"
                value="arivufoundation@outlook.com"
                href="mailto:arivufoundation@outlook.com"
              />

              <ContactItem
                icon={<MessageCircle size={19} />}
                label="WhatsApp"
                value="Message us on WhatsApp"
                href="https://wa.me/447961277728"
                external
              />
            </div>

            {/* Office */}
            <div className="mt-10 rounded-2xl bg-[#f8f4ed] p-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#6e1f2a]">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6e6962]">
                    Head Office UK
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#1d1b19]">
                    243 Cross Road
                    <br />
                    Coventry, CV6 5GP
                    <br />
                    United Kingdom
                  </p>
                </div>
              </div>
            </div>

            {/* Directions */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=243+Cross+Road,+Coventry,+CV6+5GP,+UK"
              target="_blank"
              rel="noreferrer"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#6e1f2a]"
            >
              Get directions
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </section>

      {/* Map */}
      <section className="px-6 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem]">
          <div className="h-[350px] sm:h-[450px]">
            <GoogleMap address={headOffice} />
          </div>
        </div>
      </section>

      {/* Opening hours */}
      <section className="bg-[#f8f4ed] px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6e1f2a]">
              School hours
            </p>

            <h2 className="mt-4 font-display text-4xl text-[#1d1b19] sm:text-5xl">
              Find the right time to visit.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {hours.map((item) => (
              <div
                key={item.location}
                className="rounded-2xl border border-[#e8e1d6] bg-white p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#c9a45c]">
                  {item.day}
                </p>

                <h3 className="mt-4 font-display text-2xl text-[#1d1b19]">
                  {item.location}
                </h3>

                <p className="mt-2 text-sm text-[#6e6962]">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-7 rounded-[2rem] bg-[#6e1f2a] p-8 sm:p-12 lg:flex-row lg:items-center lg:p-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a45c]">
                Quick enquiry
              </p>

              <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
                Prefer WhatsApp?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/60">
                Send us a message directly and ask about classes, locations or
                anything else you'd like to know.
              </p>
            </div>

            <a
              href="https://wa.me/447961277728"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#c9a45c] px-7 py-4 text-sm font-semibold text-[#46121a] transition hover:bg-[#e7d2a1]"
            >
              Chat on WhatsApp
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactItem({ icon, label, value, href, external = false }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-2xl border border-[#e8e1d6] bg-white p-5 transition hover:border-[#c9a45c]/60"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f8f4ed] text-[#6e1f2a]">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6e6962]">
          {label}
        </p>

        <p className="mt-1 truncate text-sm font-medium text-[#1d1b19]">
          {value}
        </p>
      </div>

      <ArrowUpRight
        size={16}
        className="ml-auto shrink-0 text-[#6e6962] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#6e1f2a]"
      />
    </a>
  );
}
