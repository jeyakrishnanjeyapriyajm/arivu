import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-crimson text-white shadow-lg shadow-crimson/20 hover:bg-crimson-deep",
  ink: "bg-ink text-white hover:bg-ink-deep",
  outline:
    "border border-ink/15 bg-white/70 text-ink backdrop-blur hover:border-ink/40 hover:bg-white",
  light: "bg-white text-ink hover:bg-sand",
  ghostLight: "border border-white/25 text-white hover:border-white hover:bg-white/10",
  saffron: "bg-saffron text-ink-deep hover:bg-[#f5b04f]",
};

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5";

// Renders a router Link for internal paths, an <a> for everything else.
export default function Button({
  to,
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    const external = /^https?:/.test(href);

    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
