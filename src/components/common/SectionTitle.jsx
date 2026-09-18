export default function SectionTitle({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p
          className={[
            "text-sm font-black uppercase tracking-[0.25em]",
            light ? "text-amber-300" : "text-red-700",
          ].join(" ")}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={[
          "mt-4 text-3xl font-black leading-tight sm:text-5xl",
          light ? "text-white" : "text-slate-950",
        ].join(" ")}
      >
        {title}
      </h2>

      {description && (
        <p
          className={[
            "mt-5 text-base leading-8 sm:text-lg",
            light ? "text-slate-300" : "text-slate-600",
          ].join(" ")}
        >
          {description}
        </p>
      )}
    </div>
  );
}
