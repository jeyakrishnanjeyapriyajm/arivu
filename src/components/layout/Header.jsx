import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navigationLinks } from "../../data/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto mt-3 max-w-7xl px-3 sm:mt-4 sm:px-6 lg:px-8">
        <nav className="rounded-2xl border border-white/20 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-xl sm:px-5">
          <div className="flex items-center justify-between">
            {/* =========================
                LOGO
            ========================== */}
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="flex min-w-0 items-center gap-2.5 sm:gap-3"
            >
              {/* Logo mark */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6e1f2a] text-lg font-bold text-white sm:h-11 sm:w-11">
                அ
              </div>

              {/* Brand name */}
              <div className="min-w-0">
                <div className="truncate font-display text-base font-semibold text-[#46121a] sm:text-lg">
                  Arivu Foundation
                </div>

                <div className="truncate text-[8px] font-semibold uppercase tracking-[0.18em] text-gray-500 sm:text-[10px] sm:tracking-[0.25em]">
                  Tamil Language School
                </div>
              </div>
            </Link>

            {/* =========================
                DESKTOP NAVIGATION
            ========================== */}
            <div className="hidden items-center gap-5 md:flex lg:gap-7">
              {navigationLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-sm font-medium transition ${
                    isActive(item.path)
                      ? "text-[#6e1f2a]"
                      : "text-gray-700 hover:text-[#6e1f2a]"
                  }`}
                >
                  {item.label}

                  {/* Active underline */}
                  {isActive(item.path) && (
                    <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[#c9a45c]" />
                  )}
                </Link>
              ))}

              {/* Join Us */}
              <Link
                to="/contact"
                className="ml-1 rounded-full bg-[#6e1f2a] px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#46121a]"
              >
                Join Us
              </Link>
            </div>

            {/* =========================
                MOBILE MENU BUTTON
            ========================== */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-gray-800 transition hover:bg-[#f8f4ed] md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>

          {/* =========================
              MOBILE NAVIGATION
          ========================== */}
          <div
            className={`overflow-hidden transition-all duration-300 md:hidden ${
              mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col gap-1">
                {navigationLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                      isActive(item.path)
                        ? "bg-[#f8f4ed] text-[#6e1f2a]"
                        : "text-gray-700 hover:bg-[#f8f4ed] hover:text-[#6e1f2a]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>

                      {isActive(item.path) && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#c9a45c]" />
                      )}
                    </div>
                  </Link>
                ))}

                {/* Mobile Join Us */}
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-3 rounded-full bg-[#6e1f2a] px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#46121a]"
                >
                  Join Us
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
