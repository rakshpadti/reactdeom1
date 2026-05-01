import GoldDivider from "../components/GoldDivider";
import SectionLabel from "../components/SectionLabel";
import { TIMELINE } from "../data/data.js";

export default function About() {
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
