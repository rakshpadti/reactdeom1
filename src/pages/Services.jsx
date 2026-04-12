import GoldDivider from "../components/GoldDivider";
import SectionLabel from "../components/SectionLabel";
import { SERVICES } from "../data/data";

export default function Services({ setActivePage }) {
  return (
    <div className="bg-[#F5EDD6] pt-28">
      {/* Section Header */}
<section className="max-w-3xl mx-auto px-6 py-20 text-center">
  <SectionLabel label="What We Offer" />

  <h2 className="font-serif text-5xl md:text-6xl leading-tight mb-4 relative inline-block">
    <span
      className="relative inline-block"
      style={{
        background: 'linear-gradient(90deg, #C9A84C 0%, #F5EDD6 50%, #C9A84C 100%)',
        backgroundSize: '200% auto',
        color: 'transparent',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        animation: 'shine 2.5s linear infinite',
      }}
    >
      Our <em className="text-[#C9A84C]">Services</em>
    </span>
  </h2>

  <GoldDivider />

  <p
    className="text-[#8B6A46] mt-6 leading-relaxed"
    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem" }}
  >
    Every service at Crumble & Co is curated with the same exacting standard — an obsessive attention to detail that transforms any occasion into an extraordinary memory.
  </p>

  {/* Animation Keyframes */}
  <style jsx>{`
    @keyframes shine {
      0% { background-position: 200% center; }
      100% { background-position: -200% center; }
    }
  `}</style>
</section>
      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-28 grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((s, i) => (
          <div
            key={i}
            className="group relative p-10 border border-[#C9A84C]/15 hover:border-[#C9A84C]/50 bg-[#FFF7ED] hover:bg-[#F5EDD6]/50 transition-all duration-500 overflow-hidden rounded-xl shadow-lg"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-5xl mb-6">{s.icon}</div>
            <h3 className="font-serif text-2xl text-[#5C3A21] mb-3 group-hover:text-[#C9A84C] transition-colors duration-300">
              {s.title}
            </h3>
            <p className="text-[#8B6A46] leading-relaxed font-light">{s.desc}</p>
            <button
              onClick={() => setActivePage("Contact")}
              className="mt-8 text-[0.6rem] tracking-[0.2em] uppercase text-[#C9A84C] border-b border-[#C9A84C]/30 pb-0.5 hover:border-[#C9A84C] transition-all duration-300"
            >
              Enquire Now →
            </button>
          </div>
        ))}
      </section>

      {/* Private Dining Promo */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1800&q=80"
          alt="Private dining"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="relative text-center px-6">
          <p className="font-serif text-3xl md:text-4xl text-[#5C3A21] mb-4 italic">
            Experience Crumble & Co
          </p>
          <button
            onClick={() => setActivePage("Contact")}
            className="px-8 py-4 bg-[#C9A84C] text-[#0D0B08] text-[0.7rem] tracking-[0.2em] uppercase font-medium hover:bg-[#E8C97A] transition-all duration-300 rounded-lg"
          >
            Talk to Our Events Team
          </button>
        </div>
      </section>
    </div>
  );
}
