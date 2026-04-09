import { useState, useEffect, useRef } from "react";

/* ─── DATA ─────────────────────────────────────────── */
const NAV_LINKS = ["Home", "About", "Services", "Portfolio", "Help", "Contact"];

const DISHES = [
  { name: "Saffron Lobster Bisque", desc: "House-smoked cream, micro herbs, caviar pearls", tag: "Chef's Signature", img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80" },
  { name: "Wagyu Tenderloin A5", desc: "Truffle jus, pomme purée, seasonal greens", tag: "Most Loved", img: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80" },
  { name: "Black Truffle Risotto", desc: "Aged parmesan, wild mushrooms, gold leaf", tag: "Vegetarian", img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80" },
  { name: "Miso Glazed Sea Bass", desc: "Dashi broth, pickled radish, yuzu foam", tag: "Seasonal", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80" },
];

const USPS = [
  { icon: "🌿", title: "Farm-to-Table Ingredients", desc: "Every ingredient is sourced fresh daily from certified organic farms and local artisan producers." },
  { icon: "🏆", title: "Award-Winning Chefs", desc: "Our team holds 3 Michelin stars and has been recognized by the World's 50 Best Restaurants." },
  { icon: "✨", title: "Unmatched Ambience", desc: "Every corner of Aurum is designed to transport you — from the lighting to the table linens." },
  { icon: "🍷", title: "Curated Wine Cellar", desc: "Over 800 labels selected by our resident sommelier from the finest vineyards worldwide." },
];

const TESTIMONIALS = [
  {
    quote: "The chocolate croissants are heavenly! Every bite melts in your mouth.",
    stars: 5,
    name: "Riya Sharma",
    role: "Food Blogger"
  },
  {
    quote: "Crumble & Co’s cheesecakes are my weekend ritual. Simply divine!",
    stars: 5,
    name: "Amit Patel",
    role: "Dessert Enthusiast"
  },
  {
    quote: "Freshly baked bread and warm pastries every morning — can’t get enough!",
    stars: 4,
    name: "Neha Kapoor",
    role: "Local Customer"
  }
];
const SERVICES = [
  { icon: "🍽️", title: "Fine Dining Experience", desc: "An intimate à la carte journey through seasonal tasting menus, crafted fresh each evening by Chef Laurent and his brigade." },
  { icon: "🥂", title: "Private Events & Dining", desc: "Exclusive private rooms for up to 40 guests. Perfect for anniversaries, proposals, corporate celebrations, and bespoke occasions." },
  { icon: "🚐", title: "Luxury Catering", desc: "Bring our Crumble & Co experience to your venue. Our catering team delivers the same Michelin-starred quality, wherever you are." },
  { icon: "📅", title: "Online Reservations", desc: "Secure your table instantly via our seamless booking system. Personalise your visit with dietary notes and special requests." },
];
const PORTFOLIO_ITEMS = [
  { category: "Food", img: "https://images.unsplash.com/photo-1654692995371-c9baf9d72059?q=80&w=823&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=600&q=80", title: "Crumble's Special" },
  { category: "Interior", img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80", title: "The Main Hall" },
  { category: "Food", img: "https://images.unsplash.com/photo-1693464308725-827772e8f3cd?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=600&q=80", title: "Crumble's Newly Launched" },
  { category: "Events", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80", title: "Private Gala Evening" },
  { category: "Interior", img: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&q=80", title: "Wine Cellar" },
  { category: "Food", img: "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?w=600&q=80", title: "Garden Harvest" },
  { category: "Events", img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80", title: "Corporate Dinner" },
  { category: "Interior", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80", title: "The Lounge Bar" },
  { category: "Food", img: "https://images.unsplash.com/photo-1589375025852-a66cdd127efb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=600&q=80", title: "Crumble's Signature" },
];
const TIMELINE = [
  { year: "2008", title: "The Beginning", desc: "Chef Laurent Moreau opens Aurum as a 30-seat bistro in South Mumbai with a single vision: honest luxury." },
  { year: "2012", title: "First Michelin Star", desc: "Four years of relentless refinement earns Aurum its first Michelin star — the first in Maharashtra." },
  { year: "2017", title: "The Grand Expansion", desc: "A full renovation transforms Aurum into a 120-seat temple of fine dining, with a private event wing." },
  { year: "2022", title: "Third Star Awarded", desc: "Aurum joins a rarefied group of three-star establishments in Asia, cementing its global reputation." },
];

/* ─── HELPERS ───────────────────────────────────────── */
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
    <p className="text-[#C9A84C] text-[0.65rem] tracking-[0.3em] uppercase font-medium font-sans mb-2">
      {label}
    </p>
  );
}

/* ─── NAVBAR ─────────────────────────────────────────── */
function Navbar({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed z-50 left-1/2 -translate-x-1/2 max-w-6xl transition-all duration-500
        ${scrolled
          ? "top-4 w-[95%] py-3 bg-[#F5EDE3] border border-[#D6A77A]/20 shadow-md"
          : "top-6 w-[95%] py-5 bg-[#F5EDE3]"
        }
        rounded-full flex items-center justify-between px-6 md:px-10`}
      >
        {/* Logo */}
        <button
          onClick={() => setActivePage("Home")}
          className="font-serif text-lg md:text-xl tracking-[0.25em] text-[#5A4530] hover:text-[#D6A77A] transition"
        >
          Crumble & Co
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((p) => (
            <li key={p}>
              <button
                onClick={() => setActivePage(p)}
                className={`group relative text-[0.65rem] tracking-[0.25em] uppercase text-[#6B5B4A] hover:text-[#D6A77A] transition`}
              >
                {p}
                <span
                  className={`absolute left-0 -bottom-1 h-px bg-[#A47148] transition-all duration-300 
                  ${activePage === p ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => setActivePage("Contact")}
          className="hidden md:block px-6 py-2 text-[0.65rem] tracking-[0.2em] uppercase border border-[#A47148] bg-[#A47148] text-[#F5EDE3] hover:bg-[#D6A77A] hover:text-[#5A4530] transition-all duration-300 rounded-full"
        >
          Order Now
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#6B5B4A] text-2xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F5EDE3] flex flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((p) => (
            <button
              key={p}
              onClick={() => {
                setActivePage(p);
                setMenuOpen(false);
              }}
              className="text-lg tracking-[0.2em] uppercase text-[#6B5B4A] hover:text-[#D6A77A] transition"
            >
              {p}
            </button>
          ))}

          <button
            onClick={() => {
              setActivePage("Contact");
              setMenuOpen(false);
            }}
            className="mt-6 px-8 py-3 border border-[#A47148] bg-[#A47148] text-[#F5EDE3] hover:bg-[#D6A77A] hover:text-[#5A4530] transition rounded-full"
          >
            Order Now
          </button>
        </div>
      )}
    </>
  );
}
/* ─── HOME PAGE ──────────────────────────────────────── */
/* ─── HOME PAGE ──────────────────────────────────────── */
function Home({ setActivePage }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeDish, setActiveDish] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % TESTIMONIALS.length), 5000);
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

/* ─── ABOUT PAGE ─────────────────────────────────────── */
/* ─── ABOUT PAGE ─────────────────────────────────────── */
function About() {
  return (
    <div className="bg-[#FDF6EB] pt-28 min-h-screen">
      {/* Story */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionLabel label="Our Story" />
          <h2 className="font-serif text-5xl md:text-6xl text-[#5C3A21] leading-tight mb-6">
            Born from<br /><em className="text-[#C9A84C]">Love for Baking.</em><br />Refined by Craft.
          </h2>
          <GoldDivider />
          <div className="space-y-5 mt-8" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}>
            <p className="text-[#7A6245] leading-relaxed">
              Crumble & Co was never meant to be just a bakery. When Chef Anika Kapoor opened the first shop in Mumbai in 2010 with a passion for artisanal desserts, she dreamed of creating a place where every bite tells a story — a story of flavor, tradition, and joy.
            </p>
            <p className="text-[#7A6245] leading-relaxed">
              What began as a small patisserie in Bandra has now grown into a beloved destination for dessert lovers. Signature cheesecakes, tarts, and pastries crafted with care, all served in an ambiance that blends modern luxury with the warmth of home.
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1737796348706-82e426321856?q=80&w=799&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Crumble & Co interior"
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
          <div className="absolute -bottom-5 -left-5 bg-[#C9A84C] p-6 rounded-lg">
            <p className="font-serif text-4xl text-[#5C3A21] font-bold">2010</p>
            <p className="text-[#5C3A21] text-xs tracking-widest uppercase mt-1">Est. Mumbai</p>
          </div>
        </div>
      </section>
   {/* ── TIMELINE / MILESTONES ── */}
<section className="bg-[#111009] border-y border-[#C9A84C]/10 py-24 px-6">
  <div className="max-w-4xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-16">
      <SectionLabel label="Our Journey" />
      <h2 className="font-serif text-4xl text-[#F5EDD6]">Milestones</h2>
      <GoldDivider />
    </div>

    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#C9A84C]/20" />

      <div className="space-y-12">
        {[
          { year: "2010", title: "First Patisserie Opens", desc: "Anika Kapoor opens the first Crumble & Co store in Bandra, Mumbai, bringing artisanal desserts to the city." },
          { year: "2012", title: "Signature Cheesecake Launch", desc: "The iconic Crumble’s Signature Cheesecake debuts, becoming a favorite among dessert lovers." },
          { year: "2015", title: "Bakery Expansion", desc: "Second store opens in Lower Parel, with expanded menu and luxurious dessert experiences." },
          { year: "2018", title: "Dessert Workshops", desc: "Crumble & Co introduces interactive baking workshops for aspiring pastry enthusiasts." },
          { year: "2021", title: "Online Delivery Launch", desc: "Crumble & Co desserts are now available online, delivering joy across Mumbai." },
          { year: "2024", title: "Award Recognition", desc: "Awarded Best Bakery Experience in Mumbai, celebrating years of sweet craftsmanship." },
        ].map((item, i) => (
          <div key={i} className={`flex gap-8 items-start ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
            {/* Text Content */}
            <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} pl-16 md:pl-0`}>
              <span className="font-serif text-[#C9A84C] text-2xl block mb-2">{item.year}</span>
              <h3 className="font-serif text-xl text-[#F5EDD6] mb-2">{item.title}</h3>
              <p className="text-[#A89878] text-sm leading-relaxed">{item.desc}</p>
            </div>

            {/* Timeline Dot */}
            <div className="relative flex-shrink-0 hidden md:block">
              <div className="w-3 h-3 rounded-full bg-[#C9A84C] ring-4 ring-[#C9A84C]/20" />
            </div>

            <div className="flex-1 hidden md:block" />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
     {/* Awards */}
<section className="py-24 max-w-7xl mx-auto px-6">
  <div className="text-center mb-16">
    <SectionLabel label="Recognition" />
    <h2 className="font-serif text-4xl text-[#A47148]">Awards & Acclaim</h2>
    <GoldDivider />
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {[
      ["⭐⭐⭐", "Michelin Stars", "2022–Present"],
      ["🥇", "Asia's Best Bakery", "World's 50 Best, 2023"],
      ["🍷", "Best Wine Pairing", "James Beard, 2021"],
      ["🏛️", "Luxury Dessert Award", "Condé Nast, 2024"],
    ].map(([icon, award, org]) => (
      <div
        key={award}
        className="text-center p-6 border border-[#C9A84C]/30 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-[#C9A84C] hover:shadow-[#C9A84C]/30 cursor-pointer"
      >
        <div className="text-3xl mb-4">{icon}</div>
        <p className="font-serif text-[#E8C97A] text-sm mb-1">{award}</p>
        <p className="text-[#A89878] text-xs tracking-widest">{org}</p>
      </div>
    ))}
  </div>
</section>
{/* Ambience Images */}
      <section className="pb-28 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-3 h-[400px] md:h-[500px]">
          <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=85" alt="Ambience 1" className="col-span-2 w-full h-full object-cover" loading="lazy" />
          <div className="flex flex-col gap-3">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=85" alt="Ambience 2" className="w-full h-1/2 object-cover" loading="lazy" />
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=85" alt="Ambience 3" className="w-full h-1/2 object-cover" loading="lazy" />
          </div>
        </div>
      </section>
    </div>
  );
} 

/* ─── SERVICES PAGE ──────────────────────────────────── */
function Services({ setActivePage }) {
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
/* ─── PORTFOLIO PAGE ─────────────────────────────────── */
/* ─── PORTFOLIO PAGE ─────────────────────────────────── */
function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const FILTERS = ["All", "Food", "Interior", "Events"];
  const filtered =
    filter === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((i) => i.category === filter);

  return (
    <div className="bg-[#F5EDD6] pt-28">
     {/* Section Header */}
{/* Section Header */}
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

  {/* Scoped animation styles */}
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

      {/* Masonry-style grid */}
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
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B08]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 rounded-xl">
                <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#F5EDD6] px-3 py-1 bg-[#C9A84C]/20 rounded-full drop-shadow-md">
                  {item.category}
                </span>
                <p className="font-serif text-[#F5EDD6] text-base drop-shadow-md text-center px-2">
                  {item.title}
                </p>
                <p className="text-[#A89878] text-xl drop-shadow-md">⊕</p>
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
          <button className="absolute top-6 right-8 text-[#C9A84C] text-2xl hover:text-white transition-colors">
            ✕
          </button>
          <div
            className="max-w-3xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.img}
              alt={lightbox.title}
              className="w-full max-h-[80vh] object-contain rounded-xl shadow-lg"
            />
            <div className="mt-4 text-center">
              <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#F5EDD6] px-3 py-1 bg-[#C9A84C]/20 rounded-full drop-shadow-md">
                {lightbox.category}
              </span>
              <p className="font-serif text-xl text-[#F5EDD6] mt-1 drop-shadow-md">
                {lightbox.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
/* ─── CONTACT PAGE ───────────────────────────────────── */
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", date: "", message: "" });
  };

  const inputClass = "w-full bg-transparent border-b border-[#C9A84C]/20 focus:border-[#C9A84C] outline-none py-3 text-[#0D0B08] text-sm placeholder-[#A89878]/50 transition-colors duration-300 font-light";

  return (
    <div className="bg-[#F5EDD6] pt-28">
      {/* Heading */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <SectionLabel label="Get In Touch" />
        <h2 className="font-serif text-5xl md:text-6xl mb-4">
          <span
            className="relative inline-block"
            style={{
              background:
                'linear-gradient(90deg, #C9A84C 0%, #F5EDD6 50%, #C9A84C 100%)',
              backgroundSize: '200% auto',
              color: 'transparent',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              animation: 'shine 2.5s linear infinite',
            }}
          >
            Make a Reservation
          </span>
        </h2>
        <GoldDivider />
        <style jsx>{`
          @keyframes shine {
            0% { background-position: 200% center; }
            100% { background-position: -200% center; }
          }
        `}</style>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-28 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Reserve Your Table */}
        <div className="bg-[#111009] border border-[#C9A84C]/15 p-10 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <h3 className="font-serif text-2xl text-[#0D0B08] mb-8">Reserve Your Table</h3>
          {sent && (
            <div className="mb-6 p-4 border border-[#C9A84C]/40 bg-[#C9A84C]/10 text-[#C9A84C] text-sm tracking-wide rounded-md">
              ✓ Your reservation request has been received. We'll confirm within 24 hours.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="text-[0.6rem] tracking-[0.2em] uppercase text-[#A89878] block mb-2">Full Name</label>
                <input type="text" required placeholder="Priya Mehta" className={inputClass} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
              <div>
                <label className="text-[0.6rem] tracking-[0.2em] uppercase text-[#A89878] block mb-2">Email</label>
                <input type="email" required placeholder="hello@example.com" className={inputClass} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="text-[0.6rem] tracking-[0.2em] uppercase text-[#A89878] block mb-2">Phone</label>
                <input type="tel" placeholder="+91 98765 43210" className={inputClass} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div>
                <label className="text-[0.6rem] tracking-[0.2em] uppercase text-[#A89878] block mb-2">Preferred Date</label>
                <input type="date" className={inputClass} value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
              </div>
            </div>
            <div>
              <label className="text-[0.6rem] tracking-[0.2em] uppercase text-[#A89878] block mb-2">Special Requests</label>
              <textarea rows={4} placeholder="Dietary requirements, occasion details, seating preferences..." className={`${inputClass} resize-none`} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
            </div>
            <button type="submit" className="w-full py-4 bg-[#C9A84C] text-[#0D0B08] text-[0.7rem] tracking-[0.25em] uppercase font-medium hover:bg-[#E8C97A] transition-all duration-300">
              Confirm Reservation
            </button>
          </form>
        </div>

        {/* Info Cards */}
        <div className="space-y-10">
          {/* Map */}
          <div className="relative overflow-hidden h-56 bg-[#1A1611] border border-[#C9A84C]/15 flex items-center justify-center rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-center">
              <p className="text-[#C9A84C] text-3xl mb-2">📍</p>
              <p className="font-serif text-[#0D0B08]">Crumble & Co</p>
              <p className="text-[#A89878] text-sm mt-1">12, Napean Sea Road, Malabar Hill</p>
              <p className="text-[#A89878] text-sm">Mumbai, Maharashtra 400 006</p>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-block mt-4 text-[0.6rem] tracking-[0.2em] uppercase text-[#C9A84C] border-b border-[#C9A84C]/30 hover:border-[#C9A84C] transition-all duration-300">
                Open in Maps →
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="p-8 border border-[#C9A84C]/15 bg-[#111009] rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="font-serif text-xl text-[#E8C97A] mb-6">Opening Hours</h3>
            {[
              ["Monday – Friday", "12:00 PM – 11:00 PM"],
              ["Saturday", "11:00 AM – 11:30 PM"],
              ["Sunday", "11:00 AM – 10:00 PM"]
            ].map(([day, time]) => (
              <div key={day} className="flex justify-between py-3 border-b border-[#C9A84C]/10 last:border-0">
                <span className="text-[#A89878] text-sm">{day}</span>
                <span className="text-[#0D0B08] text-sm font-light">{time}</span>
              </div>
            ))}
          </div>

          {/* Contact Details with Icons */}
          <div className="space-y-5">
            {[ 
              { icon: "https://cdn-icons-png.flaticon.com/512/15/15874.png", label: "Reservations", val: "+91 22 4001 9999" },
              { icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png", label: "Email", val: "reserve@crumbleco.in" },
              { icon: "https://cdn-icons-png.flaticon.com/512/174/174855.png", label: "Instagram", val: "https://www.instagram.com/crumble.co/" },
            ].map(({ icon, label, val }) => (
              <div key={label} className="flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <img src={icon} alt={label} className="w-6 h-6 flex-shrink-0" />
                <div>
                  <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#A89878]">{label}</p>
                  {label === "Instagram" ? (
                    <a href={val} target="_blank" rel="noreferrer" className="text-[#0D0B08] text-sm mt-0.5 underline hover:text-[#C9A84C]">
                      {val}
                    </a>
                  ) : (
                    <p className="text-[#0D0B08] text-sm mt-0.5">{val}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
/* ─── FOOTER ─────────────────────────────────────────── */
/* ─── FOOTER ─────────────────────────────────────────── */
function Footer({ setActivePage }) {
  return (
    <footer className="bg-[#0D0B08] border-t border-[#C9A84C]/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
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
            <p className="text-[0.6rem] tracking-[0.25em] uppercase text-[#C9A84C] mb-5">Navigation</p>
            <ul className="space-y-3">
              {NAV_LINKS.map(p => (
                <li key={p}>
                  <button
                    onClick={() => setActivePage(p)}
                    className="text-[#A89878] text-sm hover:text-[#F5EDD6] transition-colors"
                  >
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[0.6rem] tracking-[0.25em] uppercase text-[#C9A84C] mb-5">Contact</p>
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

        {/* Footer Bottom */}
        <div className="border-t border-[#C9A84C]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#A89878] text-xs tracking-widest">© 2026 Crumble & Co. All rights reserved.</p>
          <p className="text-[#A89878] text-xs tracking-widest">Crafted with passion in Mumbai</p>
        </div>
      </div>
    </footer>
  );
}
/* ─── APP ROOT ───────────────────────────────────────── */
export default function App() {
  const [activePage, setActivePage] = useState("Home");

  const navigate = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const PAGE = { Home, About, Services, Portfolio, Contact };
  const PageComponent = PAGE[activePage];

  return (
    <div className="min-h-screen bg-[#0D0B08]">
      <Navbar activePage={activePage} setActivePage={navigate} />
      <main>
        <PageComponent setActivePage={navigate} />
      </main>
      <Footer setActivePage={navigate} />
    </div>
  );
}