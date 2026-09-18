import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navigationLinks } from "../../data/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="rounded-2xl border border-white/20 bg-white/85 px-5 py-3 shadow-lg backdrop-blur-xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6e1f2a] text-lg font-bold text-white">
                அ
              </div>

              <div>
                <div className="font-display text-lg font-semibold text-[#46121a]">
                  Arivu Foundation
                </div>

                <div className="text-[10px] uppercase tracking-[0.25em] text-gray-500">
                  Tamil Language School
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-7 md:flex">
              {navigationLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm font-medium text-gray-700 transition hover:text-[#6e1f2a]"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                to="/contact"
                className="rounded-full bg-[#6e1f2a] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#46121a]"
              >
                Join Us
              </Link>
            </div>

            {/* Mobile button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-lg p-2 text-gray-800 md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileOpen && (
            <div className="mt-4 border-t border-gray-200 pt-4 md:hidden">
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f8f4ed] hover:text-[#6e1f2a]"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 rounded-full bg-[#6e1f2a] px-5 py-3 text-center text-sm font-semibold text-white"
                >
                  Join Us
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
