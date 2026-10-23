import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

import Logo from "../brand/Logo";
import { navigationLinks } from "../../data/navigation";

function isActivePath(pathname, item) {
  if (item.path === "/") return pathname === "/";
  if (pathname.startsWith(item.path)) return true;
  return item.children?.some((child) => pathname.startsWith(child.path));
}

function SchoolsDropdown({ item, active }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <Link
        to={item.path}
        aria-haspopup="true"
        aria-expanded={open}
        className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition ${
          active ? "text-crimson" : "text-ink/75 hover:text-ink"
        }`}
      >
        {item.label}
        <ChevronDown
          size={15}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3"
          >
            <div className="overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-xl shadow-ink/10">
              {item.children.map((child, index) => (
                <Link
                  key={child.path}
                  to={child.path}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-sand"
                >
                  <span
                    className={`h-8 w-1.5 rounded-full ${
                      ["bg-crimson", "bg-saffron", "bg-leaf"][index]
                    }`}
                  />
                  <span>
                    <span className="block text-sm font-semibold text-ink">
                      {child.label}
                    </span>
                    <span className="block text-xs text-muted">{child.note}</span>
                  </span>
                </Link>
              ))}

              <Link
                to={item.path}
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-xl bg-sand px-3 py-2.5 text-xs font-semibold text-crimson transition hover:bg-line"
              >
                Compare all schools →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close the mobile menu whenever the route changes.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto max-w-7xl px-3 transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled ? "pt-2" : "pt-3 sm:pt-4"
        }`}
      >
        <nav
          aria-label="Main"
          className={`rounded-2xl border bg-white/95 px-4 py-2.5 backdrop-blur-xl transition-all duration-300 sm:px-5 ${
            scrolled
              ? "border-line shadow-lg shadow-ink/10"
              : "border-white/60 shadow-md shadow-ink/5"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <Link to="/" aria-label="Arivu Foundation home" className="min-w-0">
              <Logo />
            </Link>

            <div className="hidden items-center gap-0.5 lg:flex">
              {navigationLinks.map((item) =>
                item.children ? (
                  <SchoolsDropdown
                    key={item.path}
                    item={item}
                    active={isActivePath(pathname, item)}
                  />
                ) : (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      `rounded-full px-3 py-2 text-sm font-medium transition ${
                        isActive ? "text-crimson" : "text-ink/75 hover:text-ink"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ),
              )}
            </div>

            <div className="flex items-center gap-2">
              <Link
                to="/contact#enquiry"
                className="hidden rounded-full bg-crimson px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-crimson-deep sm:inline-flex"
              >
                Enrol now
              </Link>

              <button
                type="button"
                onClick={() => setMobileOpen((prev) => !prev)}
                className="flex h-10 w-10 items-center justify-center rounded-xl text-ink transition hover:bg-sand lg:hidden"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          <AnimatePresence initial={false}>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden lg:hidden"
              >
                <div className="mt-3 border-t border-line pb-2 pt-3">
                  {navigationLinks.map((item) => {
                    const active = isActivePath(pathname, item);

                    return (
                      <div key={item.path}>
                        <Link
                          to={item.path}
                          className={`flex items-center justify-between rounded-xl px-3 py-3 text-[15px] font-medium transition ${
                            active
                              ? "bg-sand text-crimson"
                              : "text-ink hover:bg-sand"
                          }`}
                        >
                          {item.label}
                          {active && (
                            <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
                          )}
                        </Link>

                        {item.children && (
                          <div className="mb-1 ml-3 grid grid-cols-3 gap-2 pl-3">
                            {item.children.map((child) => (
                              <Link
                                key={child.path}
                                to={child.path}
                                className={`rounded-lg border px-2 py-2 text-center text-xs font-semibold transition ${
                                  pathname === child.path
                                    ? "border-crimson bg-crimson text-white"
                                    : "border-line text-ink/80 hover:border-crimson/40"
                                }`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}

                  <Link
                    to="/contact#enquiry"
                    className="mt-3 block rounded-full bg-crimson px-5 py-3.5 text-center text-sm font-semibold text-white"
                  >
                    Enrol now
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}
