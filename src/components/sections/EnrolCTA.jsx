import { ArrowRight, Download } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import RisingBars from "../ui/RisingBars";
import { resources } from "../../data/learning";
import { whatsappLink } from "../../data/site";

export default function EnrolCTA() {
  const worksheet = resources[0];

  return (
    <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.5fr_1fr]">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-crimson p-8 text-white sm:p-12">
          <RisingBars
            className="pointer-events-none absolute -bottom-1 right-6 h-32 w-32 gap-1.5 opacity-15 [&>span]:bg-white sm:h-44 sm:w-44"
          />

          <p className="relative font-tamil text-base font-semibold text-saffron">
            சேர்க்கை திறந்துள்ளது
          </p>
          <h2 className="relative mt-3 max-w-xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Ready to start your child’s Tamil journey?
          </h2>
          <p className="relative mt-5 max-w-md text-base leading-8 text-white/80">
            Speak to us about places, levels and which of our three schools
            suits your family best.
          </p>

          <div className="relative mt-9 flex flex-wrap gap-3">
            <Button to="/contact#enquiry" variant="light">
              Send an enquiry
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href={whatsappLink()} variant="ghostLight">
              <FaWhatsapp size={17} />
              WhatsApp us
            </Button>
          </div>
        </Reveal>

        <Reveal
          delay={0.1}
          className="flex flex-col justify-between rounded-[2rem] border border-line bg-white p-8 sm:p-10"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf-deep">
              Free resource
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-ink-deep">
              {worksheet.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              {worksheet.description}
            </p>
          </div>

          <a
            href={worksheet.file}
            download
            className="group mt-8 flex items-center justify-between rounded-2xl bg-sand p-4 transition hover:bg-line"
          >
            <span className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white font-tamil text-xl font-bold text-crimson">
                அ
              </span>
              <span>
                <span className="block text-sm font-semibold text-ink">
                  Download worksheet
                </span>
                <span className="block text-xs text-muted">
                  {worksheet.type} · {worksheet.size}
                </span>
              </span>
            </span>
            <Download size={18} className="text-ink transition group-hover:translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
