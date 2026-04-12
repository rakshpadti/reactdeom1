import { useState } from "react";
import { PORTFOLIO_ITEMS } from "../data/data";

/* Helpers (same as your code) */
function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-4">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A84C]" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A84C]" />
    </div>
  );
}

function SectionLabel({ label }) {
  return (
    <p className="text-[#C9A84C] text-[0.65rem] tracking-[0.3em] uppercase font-medium mb-2">
      {label}
    </p>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const FILTERS = ["All", "Food", "Interior", "Events"];

  const filtered =
    filter === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((i) => i.category === filter);

  return (
    <div className="bg-[#F5EDD6] pt-28">
      
      {/* Header */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <SectionLabel label="Visual Story" />

        <h2 className="font-serif text-5xl md:text-6xl mb-4">
          Our{" "}
          <em
            className="relative inline-block"
            style={{
              background:
                "linear-gradient(90deg, #C9A84C 0%, #F5EDD6 50%, #C9A84C 100%)",
              backgroundSize: "200% auto",
              color: "transparent",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              animation: "shine 2.5s linear infinite",
            }}
          >
            Portfolio
          </em>
        </h2>

        <GoldDivider />

        <style jsx>{`
          @keyframes shine {
            0% { background-position: 200% center; }
            100% { background-position: -200% center; }
          }
        `}</style>
      </section>

      {/* Filters */}
      <div className="flex justify-center gap-6 mb-12 px-6 flex-wrap">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-[0.65rem] tracking-[0.2em] uppercase pb-1 border-b transition-all duration-300 ${
              filter === f
                ? "border-[#C9A84C] text-[#C9A84C]"
                : "border-transparent text-[#A47148] hover:text-[#C9A84C]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-28">
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {filtered.map((item, i) => (
            <div
              key={`${filter}-${i}`}
              onClick={() => setLightbox(item)}
              className="group relative break-inside-avoid overflow-hidden cursor-zoom-in rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full object-cover rounded-xl transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B08]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 rounded-xl">
                <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#F5EDD6] px-3 py-1 bg-[#C9A84C]/20 rounded-full">
                  {item.category}
                </span>
                <p className="font-serif text-[#F5EDD6] text-base text-center px-2">
                  {item.title}
                </p>
                <p className="text-[#A89878] text-xl">⊕</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-[#0D0B08]/95 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-8 text-[#C9A84C] text-2xl">
            ✕
          </button>

          <div
            className="max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.img}
              alt={lightbox.title}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />

            <div className="mt-4 text-center">
              <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#F5EDD6] px-3 py-1 bg-[#C9A84C]/20 rounded-full">
                {lightbox.category}
              </span>
              <p className="font-serif text-xl text-[#F5EDD6] mt-1">
                {lightbox.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}