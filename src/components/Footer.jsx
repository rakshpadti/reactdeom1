import { Link } from "react-router-dom";
import { NAV_LINKS } from "../data/data";

export default function Footer() {
  return (
    <footer className="bg-[#0D0B08] border-t border-[#C9A84C]/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl font-bold text-[#C9A84C] tracking-widest mb-4">
              Crumble &<span className="italic font-light text-[#F5EDD6]">Co</span>
            </p>

            <p
              className="text-[#A89878] text-sm leading-relaxed font-light max-w-xs"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Three Michelin stars. One unforgettable evening. Mumbai's luxury dessert & dining experience since 2008.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[0.6rem] tracking-[0.25em] uppercase text-[#C9A84C] mb-5">
              Navigation
            </p>

            <ul className="space-y-3">
              {NAV_LINKS.map((p) => {
                const path = p === "Home" ? "/" : `/${p.toLowerCase()}`;

                return (
                  <li key={p}>
                    <Link
                      to={path}
                      className="text-[#A89878] text-sm hover:text-[#F5EDD6] transition-colors"
                    >
                      {p}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[0.6rem] tracking-[0.25em] uppercase text-[#C9A84C] mb-5">
              Contact
            </p>

            <div className="space-y-2 text-[#A89878] text-sm font-light">
              <p>
                <a
                  href="https://www.google.com/maps/place/12,+Napean+Sea+Road,+Malabar+Hill,+Mumbai/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#C9A84C] underline"
                >
                  12, Napean Sea Road, Malabar Hill
                </a>
              </p>

              <p>Mumbai, Maharashtra 400 006</p>

              <p className="mt-4">+91 22 4001 9999</p>
              <p>reserve@crumbleco.in</p>

              <p>
                <a
                  href="https://www.instagram.com/crumble.co/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-[#C9A84C]"
                >
                  Instagram
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#C9A84C]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#A89878] text-xs tracking-widest">
            © 2026 Crumble & Co. All rights reserved.
          </p>

          <p className="text-[#A89878] text-xs tracking-widest">
            Crafted with passion in Mumbai
          </p>
        </div>
      </div>
    </footer>
  );
}