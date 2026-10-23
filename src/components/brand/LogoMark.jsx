// The six rising bars from the Arivu Foundation logo, redrawn as SVG so they
// stay crisp at any size. Proportions follow the original artwork.
const BARS = [
  { x: 0, y: 207, h: 128, fill: "var(--color-vermilion)" },
  { x: 78, y: 75, h: 260, fill: "var(--color-saffron)" },
  { x: 157, y: 0, h: 335, fill: "var(--color-crimson)" },
  { x: 236, y: 82, h: 253, fill: "var(--color-saffron)" },
  { x: 315, y: 207, h: 128, fill: "var(--color-vermilion)" },
  { x: 394, y: 0, h: 335, fill: "var(--color-crimson)" },
];

export default function LogoMark({ className = "", title }) {
  return (
    <svg
      viewBox="0 0 449 335"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {BARS.map((bar) => (
        <rect
          key={bar.x}
          x={bar.x}
          y={bar.y}
          width="55"
          height={bar.h}
          fill={bar.fill}
        />
      ))}
    </svg>
  );
}
