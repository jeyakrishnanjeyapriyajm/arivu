import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import ContactForm from "../components/contact/ContactForm";
import GoogleMap from "../components/common/GoogleMap";
import { locations } from "../data/locations";
import { site, whatsappLink } from "../data/site";
import usePageTitle from "../hooks/usePageTitle";

const channels = [
  { icon: Phone, label: "Call", value: site.phone, href: site.phoneHref },
  { icon: FaWhatsapp, label: "WhatsApp", value: "Message us", href: whatsappLink() },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: FaFacebookF, label: "Facebook", value: "/arivufoundation", href: site.social.facebook },
];

export default function ContactPage() {
  usePageTitle("Contact & enrolment");

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk Tamil."
        tamil="தொடர்பு கொள்ளுங்கள்"
        intro="Questions about classes, levels or enrolment? Send us a message, call or WhatsApp — we’ll be happy to help."
      />

      <section className="relative z-10 -mt-10 px-5 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              {...(/^https?:/.test(href) ? { target: "_blank", rel: "noreferrer" } : {})}
              className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-lg shadow-ink/5 transition hover:-translate-y-0.5 hover:border-crimson/30"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-crimson/10 text-crimson">
                <Icon size={18} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-medium text-muted">{label}</span>
                <span className="block truncate font-semibold text-ink">{value}</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section id="enquiry" className="scroll-mt-28 py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:px-12">
          <Reveal className="rounded-[2rem] border border-line bg-white p-7 shadow-sm sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson">
              Enrolment enquiry
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink-deep sm:text-4xl">
              We’d love to hear from you.
            </h2>
            <p className="mb-8 mt-3 text-sm leading-7 text-muted">
              Fill in a few details and choose how to send — we’ll reply as soon
              as we can.
            </p>
            <ContactForm />
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.1} className="overflow-hidden rounded-[2rem] border border-line bg-white">
              <div className="h-64">
                <GoogleMap address="243 Cross Road, Coventry, CV6 5GP" />
              </div>
              <div className="flex gap-3 p-6">
                <MapPin size={18} className="mt-0.5 shrink-0 text-crimson" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-ink">{site.headOffice.label}</p>
                  <p className="text-muted">{site.headOffice.lines.join(", ")}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="rounded-[2rem] bg-ink-deep p-7 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
                Class times
              </p>
              <ul className="mt-5 divide-y divide-white/10">
                {locations.map((location) => (
                  <li key={location.id}>
                    <Link
                      to={location.path}
                      className="flex items-center justify-between gap-4 py-4 transition hover:text-saffron"
                    >
                      <span className="font-display text-lg font-semibold">
                        {location.name}
                      </span>
                      <span className="flex items-center gap-2 text-right text-sm text-white/70">
                        <Clock3 size={14} />
                        {location.day.slice(0, 3)} · {location.hours}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
