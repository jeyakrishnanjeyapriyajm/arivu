import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const locations = [
  {
    name: "Coventry",
    address: "Lyng Hall School, Blackberry Lane",
    path: "/coventry",
  },
  {
    name: "Birmingham",
    address: "West Bromwich Collegiate Academy, Kelvin Way",
    path: "/birmingham",
  },
  {
    name: "Shirley",
    address: "Light Hall School, Hathaway Road",
    path: "/shirley",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1d1b19] text-white">
      {/* Top CTA strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a45c]">
              Arivu Foundation
            </p>

            <h3 className="font-display text-2xl text-white sm:text-3xl">
              Keep Tamil alive for the next generation.
            </h3>
          </div>

          <Link
            to="/contact"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#c9a45c] px-6 py-3.5 text-sm font-semibold text-[#46121a] transition hover:bg-[#e7d2a1]"
          >
            Get in touch
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.8fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c9a45c]/60 text-xl font-semibold text-[#e7d2a1]">
                அ
              </div>

              <div>
                <p className="font-display text-xl font-semibold">
                  Arivu Foundation
                </p>

                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c9a45c]">
                  Tamil Language School
                </p>
              </div>
            </Link>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/55">
              Supporting Tamil language education, cultural learning and
              community connection across Coventry, Birmingham and Shirley.
            </p>

            <p className="mt-6 font-tamil text-lg text-[#e7d2a1]">
              தமிழ் மொழி • பண்பாடு • பாரம்பரியம்
            </p>

            {/* Social icons */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-[#c9a45c] hover:text-[#c9a45c]"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-[#c9a45c] hover:text-[#c9a45c]"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-[#c9a45c] hover:text-[#c9a45c]"
              >
                <FaYoutube size={17} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a45c]">
              Explore
            </p>

            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/coventry"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Coventry
              </Link>

              <Link
                to="/birmingham"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Birmingham
              </Link>

              <Link
                to="/shirley"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Shirley
              </Link>

              <Link
                to="/events"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Events
              </Link>

              <Link
                to="/contact"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a45c]">
              Contact
            </p>

            <div className="space-y-5">
              <div className="flex gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-[#c9a45c]" />

                <div className="text-sm leading-6 text-white/60">
                  <p className="text-white/80">Head Office UK</p>
                  <p>243 Cross Road</p>
                  <p>Coventry, CV6 5GP</p>
                  <p>United Kingdom</p>
                </div>
              </div>

              <a
                href="tel:+447961277728"
                className="flex items-center gap-3 text-sm text-white/60 transition hover:text-white"
              >
                <Phone size={17} className="text-[#c9a45c]" />
                07961 277728
              </a>

              <a
                href="mailto:arivufoundation@outlook.com"
                className="flex items-center gap-3 text-sm text-white/60 transition hover:text-white"
              >
                <Mail size={17} className="text-[#c9a45c]" />
                arivufoundation@outlook.com
              </a>
            </div>
          </div>
        </div>

        {/* Locations */}
        <div className="mt-16 border-t border-white/10 pt-10">
          <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a45c]">
                Our Schools
              </p>

              <p className="mt-2 text-sm text-white/40">
                Find your nearest Arivu Tamil School.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {locations.map((location, index) => (
              <Link
                key={location.name}
                to={location.path}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-[#c9a45c]/40 hover:bg-white/[0.06]"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold text-[#c9a45c]">
                    0{index + 1}
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="text-white/30 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c9a45c]"
                  />
                </div>

                <h4 className="mt-5 font-display text-xl">{location.name}</h4>

                <p className="mt-2 text-xs leading-5 text-white/40">
                  {location.address}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Sister school */}
        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-[#c9a45c]/20 bg-[#c9a45c]/5 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#c9a45c]">
              Sister School
            </p>

            <p className="mt-2 font-display text-lg text-white">
              Chitrakalaimanram
            </p>
          </div>

          <a
            href="https://www.chitrakalaimanram.co.uk"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#e7d2a1]"
          >
            Explore arts & music
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-white/35 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p>
            © {new Date().getFullYear()} Arivu Foundation. All rights reserved.
          </p>

          <p className="font-tamil text-sm">அறிவே அழகு</p>

          <p>Tamil Language • Culture • Community</p>
        </div>
      </div>
    </footer>
  );
}
