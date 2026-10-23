import LogoMark from "./LogoMark";

// Horizontal lockup of the Arivu logo: bars over "தமிழ்", wordmark and the
// green "Centre For Languages" band.
export default function Logo({ tone = "dark", compact = false }) {
  const isLight = tone === "light";

  return (
    <span className="flex min-w-0 items-center gap-3">
      <span className="flex shrink-0 flex-col items-center">
        <LogoMark className="h-6 w-8 sm:h-7 sm:w-9" />
        <span
          className={`-mt-0.5 font-tamil text-[13px] font-bold leading-none sm:text-sm ${
            isLight ? "text-white" : "text-ink"
          }`}
        >
          தமிழ்
        </span>
      </span>

      <span className="min-w-0">
        <span
          className={`block truncate font-display text-[15px] font-semibold uppercase leading-none tracking-[0.14em] sm:text-base ${
            isLight ? "text-white" : "text-ink-deep"
          }`}
        >
          Arivu Foundation
        </span>

        {!compact && (
          <span className="mt-1.5 inline-block bg-leaf px-1.5 py-0.5 text-[10px] font-semibold italic leading-none text-white sm:text-[11px]">
            Centre For Languages
          </span>
        )}
      </span>
    </span>
  );
}
