import { useState } from "react";

/* Helpers */
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

export default function Help() {
  const faqs = [
    {
      q: "How do I make a reservation?",
      a: "You can reserve your table through our Contact page by filling out the reservation form."
    },
    {
      q: "Do you offer home delivery?",
      a: "Yes, we provide delivery across Mumbai for selected items."
    },
    {
      q: "Can I customize cakes?",
      a: "Absolutely! We offer fully customized cakes for all occasions."
    },
    {
      q: "What are your opening hours?",
      a: "We are open daily from 11:00 AM to 11:00 PM."
    },
    {
      q: "Do you offer vegan options?",
      a: "Yes, we have a range of vegan and eggless desserts."
    },
    {
      q: "How far in advance should I book?",
      a: "We recommend booking at least 24–48 hours in advance."
    },
    {
      q: "Do you host private events?",
      a: "Yes, we offer private dining and event hosting services."
    },
    {
      q: "Where are you located?",
      a: "We are located in Malabar Hill, Mumbai."
    },
    {
      q: "Do you offer catering?",
      a: "Yes, we provide luxury catering services."
    },
    {
      q: "How can I contact support?",
      a: "You can reach us via email or phone listed on the Contact page."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-[#F5EDD6] pt-28 min-h-screen">

      {/* Header */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <SectionLabel label="Support" />

        <h2 className="font-serif text-5xl md:text-6xl mb-4">
          <span
            style={{
              background:
                "linear-gradient(90deg, #C9A84C 0%, #F5EDD6 50%, #C9A84C 100%)",
              backgroundSize: "200% auto",
              color: "transparent",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              animation: "shine 2.5s linear infinite"
            }}
          >
            Help & FAQs
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

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 pb-28 space-y-4">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="border border-[#C9A84C]/20 rounded-xl overflow-hidden transition"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === i ? null : i)
              }
              className="w-full text-left p-5 flex justify-between items-center bg-[#FFF7ED] hover:bg-[#F5EDD6] transition"
            >
              <span className="font-serif text-[#5C3A21]">
                {item.q}
              </span>

              <span className="text-[#C9A84C] text-xl">
                {openIndex === i ? "−" : "+"}
              </span>
            </button>

            {openIndex === i && (
              <div className="p-5 text-[#8B6A46] text-sm leading-relaxed bg-white">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}