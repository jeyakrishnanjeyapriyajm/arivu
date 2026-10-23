import Reveal from "../ui/Reveal";
import { images } from "../../data/site";

// Thirukkural 391 — on learning — set against the Thiruvalluvar portrait.
export default function KuralBand() {
  return (
    <section className="relative overflow-hidden bg-[#121212] text-white">
      <div className="mx-auto grid max-w-7xl items-center lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative h-80 sm:h-[26rem] lg:h-[34rem]">
          <img
            src={images.thiruvalluvar}
            alt="Portrait of the Tamil poet Thiruvalluvar writing on palm leaf"
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#121212]" />
        </div>

        <Reveal className="px-6 pb-16 pt-4 sm:px-10 lg:py-20 lg:pl-6 lg:pr-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-saffron">
            Thirukkural · 391
          </p>

          <blockquote className="mt-6 font-tamil text-2xl font-semibold leading-relaxed sm:text-3xl lg:text-4xl lg:leading-snug">
            கற்க கசடறக் கற்பவை கற்றபின்
            <br />
            நிற்க அதற்குத் தக.
          </blockquote>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
            “Learn thoroughly what is worth learning — and then live by what you
            have learnt.” Two thousand years on, Thiruvalluvar’s words still
            guide how we teach.
          </p>

          <div className="brand-rule mt-10 h-1 w-24 rounded-full" />
        </Reveal>
      </div>
    </section>
  );
}
