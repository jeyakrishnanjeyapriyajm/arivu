import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  tamil,
  intro,
  align = "left",
  tone = "dark",
  className = "",
}) {
  const centered = align === "center";
  const light = tone === "light";

  return (
    <Reveal
      className={`${centered ? "mx-auto text-center" : ""} max-w-3xl ${className}`}
    >
      {eyebrow && (
        <div
          className={`mb-5 flex items-center gap-3 ${centered ? "justify-center" : ""}`}
        >
          <span className="brand-rule h-1 w-10 rounded-full" />
          <span
            className={`text-xs font-semibold uppercase tracking-[0.24em] ${
              light ? "text-saffron" : "text-crimson"
            }`}
          >
            {eyebrow}
          </span>
        </div>
      )}

      <h2
        className={`font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl ${
          light ? "text-white" : "text-ink-deep"
        }`}
      >
        {title}
      </h2>

      {tamil && (
        <p
          className={`mt-4 font-tamil text-lg font-semibold ${
            light ? "text-leaf" : "text-crimson"
          }`}
        >
          {tamil}
        </p>
      )}

      {intro && (
        <p
          className={`mt-5 text-base leading-8 sm:text-lg ${
            light ? "text-white/70" : "text-muted"
          } ${centered ? "mx-auto max-w-2xl" : ""}`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
