import { motion } from "framer-motion";

const PALETTE = [
  "bg-vermilion",
  "bg-saffron",
  "bg-crimson",
  "bg-saffron",
  "bg-vermilion",
  "bg-crimson",
];

const LOGO_HEIGHTS = [38, 78, 100, 76, 38, 100];

const bar = {
  hidden: { scaleY: 0 },
  shown: { scaleY: 1 },
};

// The logo's rising bars as a decorative, animated motif. The in-view trigger
// sits on the container: bars start at scaleY 0 and have no area to observe.
export default function RisingBars({
  heights = LOGO_HEIGHTS,
  className = "",
  barClassName = "w-full",
  animate = true,
  delay = 0,
}) {
  return (
    <motion.div
      className={`flex items-end ${className}`}
      aria-hidden="true"
      initial={animate ? "hidden" : false}
      whileInView="shown"
      viewport={{ once: true }}
      transition={{ delayChildren: delay, staggerChildren: 0.08 }}
    >
      {heights.map((height, index) => (
        <motion.span
          key={index}
          variants={bar}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className={`block origin-bottom ${PALETTE[index % PALETTE.length]} ${barClassName}`}
          style={{ height: `${height}%` }}
        />
      ))}
    </motion.div>
  );
}
