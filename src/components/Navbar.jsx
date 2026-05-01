import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../data/data.js";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed z-50 left-1/2 -translate-x-1/2 max-w-6xl transition-all duration-500
        ${
          scrolled
            ? "top-4 w-[95%] py-3 bg-[#F5EDE3] border border-[#D6A77A]/20 shadow-md"
            : "top-6 w-[95%] py-5 bg-[#F5EDE3]"
        }
        rounded-full flex items-center justify-between px-6 md:px-10`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-lg md:text-xl tracking-[0.25em] text-[#5A4530]"
        >
          Crumble & Co
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((p) => {
            const path = p === "Home" ? "/" : `/${p.toLowerCase()}`;
            const active = location.pathname === path;

            return (
              <li key={p}>
                <Link
                  to={path}
                  className="relative text-[0.65rem] tracking-[0.25em] uppercase text-[#6B5B4A]"
                >
                  {p}
                  <span
                    className={`absolute left-0 -bottom-1 h-px bg-[#A47148] transition-all duration-300 
                    ${active ? "w-full" : "w-0"}`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden md:block px-6 py-2 text-[0.65rem] tracking-[0.2em] uppercase border border-[#A47148] bg-[#A47148] text-[#F5EDE3] rounded-full"
        >
          Order Now
        </Link>

        {/* Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 bg-[#F5EDE3] flex flex-col items-center justify-center gap-8 z-40">
          {NAV_LINKS.map((p) => {
            const path = p === "Home" ? "/" : `/${p.toLowerCase()}`;
            return (
              <Link key={p} to={path} onClick={() => setMenuOpen(false)}>
                {p}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}