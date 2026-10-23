import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";

import Logo from "../brand/Logo";
import { navigationLinks } from "../../data/navigation";
import { locations } from "../../data/locations";
import { site, whatsappLink } from "../../data/site";

export default function Footer() {
  return (
    <footer className="relative bg-ink-deep text-white">
      <div className="brand-rule h-1.5 w-full" />

      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-12 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <p className="font-tamil text-sm font-semibold text-leaf">
              {site.tamilName}
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
              Give your child the gift of Tamil.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact#enquiry"
              className="group inline-flex items-center gap-2 rounded-full bg-saffron px-6 py-3.5 text-sm font-semibold text-ink-deep transition hover:bg-[#f5b04f]"
            >
              Enquire about enrolment
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold transition hover:border-white hover:bg-white/10"
            >
              <FaWhatsapp size={17} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1.4fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              to="/"
              aria-label="Arivu Foundation home"
              className="inline-block"
            >
              <Logo tone="light" />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
              Tamil language education, culture and community for families in
              Coventry, Birmingham and Shirley. {site.promise}
            </p>

            <div className="mt-7 flex gap-3">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Arivu Foundation on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-saffron hover:text-saffron"
              >
                <FaFacebookF size={15} />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                aria-label="Arivu Foundation on WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-saffron hover:text-saffron"
              >
                <FaWhatsapp size={17} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
              Explore
            </p>
            <nav aria-label="Footer" className="flex flex-col gap-3">
              {navigationLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Schools */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
              Our schools
            </p>
            <div className="space-y-4">
              {locations.map((location) => (
                <Link
                  key={location.id}
                  to={location.path}
                  className="group block rounded-xl border border-white/10 p-4 transition hover:border-white/25 hover:bg-white/5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-semibold">
                      {location.name}
                    </span>
                    <span className="text-xs font-medium text-leaf">
                      {location.day} · {location.hours}
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-5 text-white/50">
                    {location.venue}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
              Contact
            </p>
            <div className="space-y-5 text-sm">
              <div className="flex gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-saffron" />
                <div className="leading-6 text-white/65">
                  <p className="text-white/90">{site.headOffice.label}</p>
                  {site.headOffice.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>

              <a
                href={site.phoneHref}
                className="flex items-center gap-3 text-white/65 transition hover:text-white"
              >
                <Phone size={16} className="text-saffron" />
                {site.phone}
              </a>

              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 break-all text-white/65 transition hover:text-white"
              >
                <Mail size={16} className="shrink-0 text-saffron" />
                {site.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              Sister school
            </p>
            <p className="mt-1 font-display text-lg font-semibold">
              Chitrakalaimanram — Centre for Performing Arts
            </p>
          </div>
          <a
            href="https://www.chitrakalaimanram.co.uk"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-leaf"
          >
            Bharatanatyam, music & more
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-white/45 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p>
            © {new Date().getFullYear()} Arivu Foundation. All rights reserved.
            Arivu Foundation® is a registered trademark.
          </p>
          <p className="font-tamil text-sm text-white/60">அறிவே அழகு</p>
        </div>
      </div>
    </footer>
  );
}
