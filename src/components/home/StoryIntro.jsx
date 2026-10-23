import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Background image from src/assets (Vite turns this import into the correct URL)
import bgIntro from "../../assets/bagroundintro.svg";
import baradhi from "../../assets/baradhi.png";

/* ------------------------------------------------------------------
   Arivu Foundation — scroll story intro (React + Tailwind v4 theme)
   Colours and fonts come from your @theme in index.css:
   ink, crimson, saffron, leaf, paper, muted, font-display, font-tamil
------------------------------------------------------------------- */

const IMG = "/images/story";
const IMAGES = {
  bg1: bgIntro, // your background (already has temple, leaves, flowers, lamp)
  bg3: `${IMG}/scene3-bg.webp`, // optional: background for scene 3
  logo: `${IMG}/arivu-logo.png`, // optional: your logo
};

/* ---------- timeline: 0 = section top, 1 = section end ---------- */
const T = {
  tamilIn: [0.05, 0.15],
  tamilOut: [0.27, 0.35],
  tagline1In: [0.12, 0.2],
  logoIn: [0.35, 0.45],
  logoOut: [0.58, 0.66],
  tagline2In: [0.43, 0.51],
  bg3In: [0.58, 0.72],
  baradhiIn: [0.62, 0.74],
  quoteIn: [0.7, 0.8],
  buttonIn: [0.8, 0.88],
};

/* ---------- helpers ---------- */
const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));
const range = (p, [start, end]) => clamp((p - start) / (end - start));
const lerp = (a, b, t) => a + (b - a) * t;

/** fades in + slides up as value goes 0 → 1 */
const rise = (v, dist = 40) => ({
  opacity: v,
  transform: `translate3d(0, ${(1 - v) * dist}px, 0)`,
});

function useScrollProgress(ref) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const distance = el.offsetHeight - window.innerHeight;
      const travelled = -el.getBoundingClientRect().top;
      setProgress(distance > 0 ? clamp(travelled / distance) : 1);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref]);

  return progress;
}

/** decorative image layer that disappears if the file is missing */
function Layer({ src, className = "", style, priority = false }) {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      draggable={false}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      onError={() => setOk(false)}
      className={`pointer-events-none absolute select-none ${className}`}
      style={style}
    />
  );
}

function Logo() {
  const [ok, setOk] = useState(true);
  if (ok) {
    return (
      <img
        src={IMAGES.logo}
        alt="Arivu Foundation logo"
        onError={() => setOk(false)}
        className="mx-auto h-28 w-auto md:h-36"
      />
    );
  }
  // fallback until you add your logo file
  return (
    <div
      className="mx-auto flex h-16 items-end justify-center gap-1.5"
      aria-hidden="true"
    >
      {[18, 28, 40, 32, 48].map((h, i) => (
        <span
          key={i}
          className="w-3 origin-bottom rounded-sm bg-gradient-to-t from-crimson to-saffron story-bar"
          style={{ height: h, animationDelay: `${i * 0.08}s` }}
        />
      ))}
    </div>
  );
}

/* floating letters sit in the empty sky, away from the temple */
const LETTERS = [
  {
    ch: "அ",
    top: "12%",
    left: "10%",
    size: "4.5rem",
    delay: "0s",
    color: "var(--color-crimson)",
  },
  {
    ch: "ஆ",
    top: "34%",
    left: "6%",
    size: "3rem",
    delay: "1.2s",
    color: "var(--color-saffron)",
  },
  {
    ch: "இ",
    top: "10%",
    left: "58%",
    size: "3.5rem",
    delay: "0.6s",
    color: "var(--color-crimson)",
  },
  {
    ch: "ஈ",
    top: "24%",
    left: "72%",
    size: "2.5rem",
    delay: "2s",
    color: "var(--color-saffron)",
  },
  {
    ch: "உ",
    top: "8%",
    left: "34%",
    size: "2.75rem",
    delay: "1.6s",
    color: "var(--color-crimson)",
  },
  {
    ch: "ஊ",
    top: "58%",
    left: "14%",
    size: "2.25rem",
    delay: "2.4s",
    color: "var(--color-saffron)",
  },
];

const PETALS = Array.from({ length: 10 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  duration: `${9 + (i % 4) * 2}s`,
  delay: `${(i * 1.3) % 8}s`,
  drift: `${(i % 2 ? 1 : -1) * (30 + (i % 3) * 20)}px`,
}));

export default function StoryIntro() {
  const sectionRef = useRef(null);
  const p = useScrollProgress(sectionRef);

  // one-time "page loaded" animation
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  /* ---- values for each element ---- */
  const tamilIn = range(p, T.tamilIn);
  const tamilOut = range(p, T.tamilOut);
  const tamil = Math.min(tamilIn, 1 - tamilOut);
  const tagline1 = Math.min(range(p, T.tagline1In), 1 - tamilOut);

  const logoIn = range(p, T.logoIn);
  const logoOut = range(p, T.logoOut);
  const logo = Math.min(logoIn, 1 - logoOut);
  const tagline2 = Math.min(range(p, T.tagline2In), 1 - logoOut);

  const bg3 = range(p, T.bg3In);
  const bharathi = range(p, T.baradhiIn);
  const quote = range(p, T.quoteIn);
  const button = range(p, T.buttonIn);

  const letters = 1 - range(p, [0.28, 0.38]);

  // hide the site navigation bar while the intro is playing
  const introPlaying = p < 0.98;
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.intro = introPlaying ? "playing" : "done";
    return () => {
      delete root.dataset.intro; // show the nav again on other pages
    };
  }, [introPlaying]);

  return (
    <section
      ref={sectionRef}
      id="arivu-story"
      className="relative h-[500vh] bg-paper"
    >
      <h1 className="sr-only">
        Arivu Foundation – Arivu Tamil School, weekend Tamil classes in
        Coventry, Birmingham and Shirley
      </h1>

      {/* sticky stage: stays on screen while the 500vh section scrolls */}
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        {/* LAYER 0 — soft fallback colour (always there) */}
        <div className="absolute inset-0 bg-gradient-to-b from-paper via-sand to-sand" />

        {/* LAYER 1 — YOUR BACKGROUND: zooms in on load, slowly zooms more on scroll */}
        <div
          className={`absolute inset-0 transition-[opacity,transform] duration-[1800ms] ease-out ${
            loaded ? "scale-100 opacity-100" : "scale-110 opacity-0"
          }`}
        >
          <Layer
            src={IMAGES.bg1}
            priority
            className="inset-0 h-full w-full object-cover object-right md:object-center will-change-transform"
            style={{
              transform: `scale(${lerp(1.05, 1.2, p)})`,
              opacity: lerp(1, 0.35, bg3),
            }}
          />
        </div>

        {/* soft light wash in the centre so the text is easy to read */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,250,242,0.8),rgba(255,250,242,0.3)_45%,transparent_72%)]" />

        {/* LAYER 2 — scene 3 background cross-fades in (optional) */}
        <Layer
          src={IMAGES.bg3}
          className="inset-0 h-full w-full object-cover"
          style={{ opacity: bg3, transform: `scale(${lerp(1.12, 1, bg3)})` }}
        />

        {/* LAYER 3 — warm sun glow (animated) */}
        <div className="pointer-events-none absolute left-[60%] top-[28%] h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,210,140,0.5),transparent_65%)] story-glow" />

        {/* LAYER 4 — floating Tamil letters */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: loaded ? letters : 0 }}
          aria-hidden="true"
        >
          {LETTERS.map((l) => (
            <span
              key={l.ch}
              className="font-tamil absolute story-float"
              style={{
                top: l.top,
                left: l.left,
                fontSize: l.size,
                color: l.color,
                opacity: 0.5,
                animationDelay: l.delay,
              }}
            >
              {l.ch}
            </span>
          ))}
        </div>

        {/* LAYER 5 — falling petals */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          {PETALS.map((pt, i) => (
            <span
              key={i}
              className="absolute top-0 h-3 w-2 rounded-[60%_0] bg-crimson/70 story-petal"
              style={{
                left: pt.left,
                animationDuration: pt.duration,
                animationDelay: pt.delay,
                "--drift": pt.drift,
              }}
            />
          ))}
        </div>

        {/* ================= TEXT ================= */}

        {/* Scene 1 — தமிழ் (dark blue heading) */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center">
          <div
            style={{
              opacity: tamil,
              transform: `translate3d(0, ${(1 - tamilIn) * 50}px, 0) scale(${1 + tamilOut * 0.15})`,
              filter: `blur(${tamilOut * 8}px)`,
            }}
          >
            <p className="font-tamil text-[clamp(4.5rem,15vw,10rem)] font-bold leading-none text-crimson drop-shadow-[0_4px_12px_rgba(163,22,46,0.25)]">
              தமிழ்
            </p>
            <p className="font-tamil mt-4 text-base text-muted md:text-lg">
              தமிழ் மொழி · பண்பாடு · பாரம்பரியம்
            </p>
            <div className="mx-auto mt-6 max-w-sm" style={rise(tagline1, 24)}>
              <p className="font-display text-2xl text-ink md:text-3xl">
                A language that carries generations.
              </p>
              <p className="mt-2 font-sans text-sm text-muted md:text-base">
                Every letter holds a story. Every word carries our heritage.
              </p>
            </div>
          </div>
        </div>

        {/* Scene 2 — logo */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center">
          <div
            style={{
              opacity: logo,
              transform: `scale(${lerp(0.85, 1, logoIn) + logoOut * 0.1})`,
              filter: `blur(${logoOut * 6}px)`,
            }}
          >
            <Logo />
            <p className="font-tamil mt-3 text-3xl font-bold text-crimson">
              தமிழ்
            </p>
            <p className="font-display mt-1 text-4xl font-semibold text-ink md:text-6xl">
              Arivu Foundation
            </p>
            <p className="font-display mt-1 text-xl text-leaf-deep md:text-2xl">
              Centre for Languages
            </p>
            <div className="mx-auto mt-4 h-1 w-40 rounded-full bg-gradient-to-r from-crimson via-saffron to-leaf" />
            <p
              className="mx-auto mt-6 max-w-md font-sans text-muted md:text-lg"
              style={rise(tagline2, 20)}
            >
              Keeping Tamil language and heritage alive for the next generation.
            </p>
          </div>
        </div>

        {/* Scene 3 — Bharathi image */}
        <img
          src={baradhi}
          alt="Mahakavi Subramania Bharathi"
          draggable={false}
          className="pointer-events-none absolute bottom-0 left-1/2 h-[48%] w-auto max-w-none -translate-x-1/2 select-none object-contain md:left-[4vw] md:h-[88%] md:translate-x-0"
          style={{
            opacity: bharathi,
            transform: `translate3d(${(1 - bharathi) * -40}px, ${(1 - bharathi) * 30}px, 0) scale(${lerp(0.95, 1, bharathi)})`,
          }}
        />

        {/* Scene 3 — quote + button only */}
        <div
          className="absolute inset-0 flex items-start justify-center px-6 pt-[14vh] text-center md:items-center md:justify-end md:px-[8vw] md:pt-0 md:text-left"
          style={{ pointerEvents: button > 0.5 ? "auto" : "none" }}
        >
          <div className="max-w-lg">
            <blockquote
              className="font-tamil text-2xl font-semibold leading-snug text-ink md:text-4xl"
              style={rise(quote)}
            >
              <span className="font-display text-crimson">“</span>
              யாமறிந்த மொழிகளிலே
              <br />
              தமிழ்மொழி போல் இனிதாவது
              <br />
              எங்கும் காணோம்
              <span className="font-display text-crimson">”</span>
            </blockquote>
            <p
              className="mt-3 font-display text-sm text-muted"
              style={rise(quote, 20)}
            >
              — மகாகவி பாரதியார்
            </p>

            <div className="mt-8" style={rise(button, 20)}>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 rounded-full bg-crimson px-7 py-3 font-display text-white shadow-lg shadow-crimson/20 transition hover:bg-crimson-deep"
              >
                Our story <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* scroll hint */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center pb-6 font-sans text-sm text-muted"
          style={{ opacity: 1 - range(p, [0.6, 0.7]) }}
        >
          <span className="animate-bounce">Scroll to discover ↓</span>
        </div>
      </div>
    </section>
  );
}
