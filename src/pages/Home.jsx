import { useState, useEffect } from "react";
import GoldDivider from "../components/GoldDivider";
import SectionLabel from "../components/SectionLabel";
import { TESTIMONIALS, PORTFOLIO_ITEMS } from "../data/data";

export default function Home({ setActivePage }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveTestimonial((p) => (p + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-[#F5EDE3]">
      
            {/* ── HERO ── */}
{/* ── HERO ── */}
{/* ── HERO ── */}
     <section className="relative h-screen flex items-center justify-center overflow-hidden">

  {/* Background */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1551024601-bec78aea704b?w=1800&q=85"
      alt="Desserts"
      className="w-full h-full object-cover scale-105"
    />
    <div className="absolute inset-0 bg-black/10" />
  </div>

  {/* Soft Cream Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
  {/* Content */}
  <div className="relative text-center px-6 max-w-3xl mx-auto">

    <p
      className="text-white tracking-[0.3em] text-xs uppercase mb-6 drop-shadow-md"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      Freshly Baked • Everyday
    </p>
<h1
  className="text-5xl md:text-7xl font-semibold text-white leading-[1.15] mb-6"
  style={{
    fontFamily: "Playfair Display, serif",
    textShadow: `
      0 0 10px rgba(0,0,0,0.6),
      0 0 20px rgba(0,0,0,0.4),
      0 0 40px rgba(0,0,0,0.3)
    `
  }}
>
  Where Every Bite <br />
  <span
    style={{
      color: "#D6A77A",
      fontStyle: "italic",
      fontWeight: "400",
      textShadow: "0 0 15px rgba(0,0,0,0.5)"
    }}
  >
    Feels Like Home
  </span>
</h1>
    <p
      className="text-white/80 text-lg md:text-xl max-w-lg mx-auto mb-10 leading-relaxed"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      From rich brownies to creamy cheesecakes — made with love, served fresh.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">

      <button
        onClick={() => setActivePage("Contact")}
        className="px-8 py-3 bg-[#A47148] text-white text-xs tracking-[0.2em] uppercase rounded-full hover:bg-[#8B5E3C] transition-all duration-300"
      >
        Order Now
      </button>

      <button
        onClick={() => setActivePage("Services")}
        className="px-8 py-3 border border-[#A47148] text-[#A47148] text-xs tracking-[0.2em] uppercase rounded-full hover:bg-[#A47148]/10 transition-all duration-300"
      >
        View Menu
      </button>

    </div>
  </div>

  {/* Scroll */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
    <div className="w-[2px] h-10 bg-gradient-to-b from-[#A47148] to-transparent" />
    <span className="text-white/70 text-[0.6rem] tracking-[0.3em] uppercase">
      Scroll
    </span>
  </div>

</section>
    {/* ── WHY CHOOSE CRUMBLE ── */}
<section className="py-24 bg-[#111009] border-y border-[#D6A77A]/10">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <SectionLabel label="The Crumble Promise" />

      <h2 className="font-serif text-4xl md:text-5xl mb-4 relative inline-block">
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
          Why Choose Crumble
        </span>
      </h2>

      <GoldDivider />

      <style jsx>{`
        @keyframes shine {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          icon: "🍰",
          title: "Freshly Baked Daily",
          desc: "Every dessert is baked from scratch each day, ensuring unmatched freshness and flavor."
        },
        {
          icon: "🌿",
          title: "Premium Ingredients",
          desc: "We select the finest ingredients — from rich chocolates to organic fruits — for every treat."
        },
        {
          icon: "👩‍🍳",
          title: "Masterful Craftsmanship",
          desc: "Our pastry chefs bring passion and expertise, turning every dessert into an edible masterpiece."
        },
        {
          icon: "❤️",
          title: "Made with Love",
          desc: "From preparation to presentation, every bite is crafted to delight and comfort."
        }
      ].map((u, i) => (
        <div
          key={i}
          className="
            group
            relative
            text-center
            p-8
            border border-[#D6A77A]/10
            rounded-2xl
            transition-all duration-500
            hover:-translate-y-3
            hover:shadow-2xl
            overflow-hidden
          "
        >
          {/* Animated gradient background */}
          <div className="
            absolute inset-0
            bg-gradient-to-r from-[#D6A77A]/20 via-[#FFD88C]/20 to-[#D6A77A]/20
            opacity-0
            group-hover:opacity-100
            transition-opacity duration-700
            rounded-2xl
            pointer-events-none
          " />

          {/* Content */}
          <div className="relative z-10">
            <div className="text-4xl mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
              {u.icon}
            </div>
            <h3 className="font-serif text-lg text-[#E8C97A] mb-3 transition-colors duration-300 group-hover:text-[#FFD88C]">
              {u.title}
            </h3>
            <p className="text-[#A89878] text-sm leading-relaxed font-light">
              {u.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* ── CHEF HIGHLIGHT ── */}
{/* ── CHEF HIGHLIGHT ── */}
<section className="py-28 max-w-7xl mx-auto px-6">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    
    {/* Female Chef Image */}
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1731576089270-9e806089a40f?q=80&w=687&auto=format&fit=crop"
        alt="Chef Ishita Kapoor"
        className="w-full h-[600px] object-cover rounded-2xl shadow-lg"
        loading="lazy"
      />
      {/* Decorative borders */}
      <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#A47148]/40" />
      <div className="absolute -top-6 -left-6 w-32 h-32 border border-[#A47148]/20" />
    </div>

    {/* Chef Info */}
    <div>
      <SectionLabel label="Meet the Maestro" />
      <h2 className="font-serif text-4xl md:text-5xl mb-2"
          style={{ 
            color: "#A47148", 
            textShadow: "2px 2px 8px rgba(0,0,0,0.3)" 
          }}>
        Chef Ishita Kapoor
      </h2>
      <GoldDivider />

      <p className="leading-relaxed mb-6 font-light"
         style={{ 
           color: "#8B5E3C", 
           fontFamily: "'Cormorant Garamond', serif", 
           fontSize: "1.1rem" 
         }}>
        With over a decade of experience across Mumbai, Delhi, and Bengaluru, Chef Ishita Kapoor brings a passion for artisanal desserts and innovative flavors. Her creations celebrate both tradition and modern indulgence.
      </p>

      <p className="leading-relaxed mb-10 font-light"
         style={{ 
           color: "#8B5E3C", 
           fontFamily: "'Cormorant Garamond', serif", 
           fontSize: "1.1rem" 
         }}>
        "Baking is my language of love — every dessert tells a story, every flavor speaks to the heart.”
      </p>

      <div className="flex gap-8">
        {[
          ["12+", "Years of Mastery"],
          ["2", "International Awards"],
          ["8", "Global Recognitions"]
        ].map(([num, label]) => (
          <div key={label}>
            <p className="font-serif text-3xl" style={{ color: "#A47148" }}>{num}</p>
            <p className="text-xs tracking-widest uppercase mt-1" style={{ color: "#8B5E3C" }}>{label}</p>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>
      {/* ── TESTIMONIALS ── */}
{/* ── TESTIMONIALS ── */}
<section className="py-24 bg-[#111009] border-y border-[#C9A84C]/10">
  <div className="max-w-3xl mx-auto px-6 text-center">
    <SectionLabel label="Guest Voices" />
    <h2 className="font-serif text-4xl text-[#F5EDD6] mb-4">What They Say</h2>
    <GoldDivider />

    <div className="mt-12 min-h-[180px] transition-all duration-500">
      <p
        className="text-[#F2EBD9] text-xl md:text-2xl font-light leading-relaxed mb-8 italic"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        "{TESTIMONIALS[activeTestimonial].quote}"
      </p>
      
      <div className="text-[#C9A84C] text-lg mb-3">
        {"★".repeat(TESTIMONIALS[activeTestimonial].stars)}
      </div>

      <p className="text-[#F5EDD6] font-medium text-sm tracking-wide">
        {TESTIMONIALS[activeTestimonial].name}
      </p>
      <p className="text-[#A89878] text-xs tracking-widest uppercase mt-1">
        {TESTIMONIALS[activeTestimonial].role}
      </p>
    </div>

    {/* Indicator buttons with hover effect */}
    <div className="flex justify-center gap-2 mt-10">
      {TESTIMONIALS.map((_, i) => (
        <button
          key={i}
          onClick={() => setActiveTestimonial(i)}
          className={`w-6 h-px transition-all duration-300 relative overflow-hidden ${
            i === activeTestimonial
              ? "bg-[#C9A84C] w-10"
              : "bg-[#A89878]/40"
          }`}
        >
          {/* Hover animation */}
          <span className="absolute left-0 top-0 w-0 h-full bg-[#C9A84C] transition-all duration-300 group-hover:w-full"></span>
        </button>
      ))}
    </div>
  </div>
</section>
{/* ── GALLERY PREVIEW ── */}
    {/* ── GALLERY PREVIEW ── */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel label="The Aurum World" />
          <h2 className="font-serif text-4xl md:text-5xl text-[#5C3A21] mb-4">Gallery Preview</h2>
          <GoldDivider />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {PORTFOLIO_ITEMS.slice(0, 6).map((item, i) => (
            <div key={i} className="group relative overflow-hidden aspect-square">
              <img src={item.img} alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-[#0D0B08]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="font-serif text-[#F5EDD6] text-sm">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button onClick={() => setActivePage("Portfolio")}
            className="text-[0.65rem] tracking-[0.25em] uppercase border border-[#C9A84C]/50 text-[#C9A84C] px-8 py-3 hover:bg-[#C9A84C] hover:text-[#0D0B08] transition-all duration-300">
            View Full Portfolio
          </button>
        </div>
      </section>
    </div>
  );
} 
