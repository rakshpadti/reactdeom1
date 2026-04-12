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

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: ""
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);

    setTimeout(() => setSent(false), 4000);

    setForm({
      name: "",
      email: "",
      phone: "",
      date: "",
      message: ""
    });
  };

  const inputClass =
    "w-full bg-transparent border-b border-[#C9A84C]/20 focus:border-[#C9A84C] outline-none py-3 text-[#0D0B08] text-sm placeholder-[#A89878]/50 transition";

  return (
    <div className="bg-[#F5EDD6] pt-28">
      
      {/* Header */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <SectionLabel label="Get In Touch" />

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

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 pb-28 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Form */}
        <div className="bg-[#111009] border border-[#C9A84C]/15 p-10 rounded-xl hover:shadow-2xl transition">
          <h3 className="font-serif text-2xl text-[#F5EDD6] mb-8">
            Reserve Your Table
          </h3>

          {sent && (
            <div className="mb-6 p-4 border border-[#C9A84C]/40 bg-[#C9A84C]/10 text-[#C9A84C] text-sm rounded-md">
              ✓ Your reservation request has been received.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input
                type="text"
                placeholder="Full Name"
                className={inputClass}
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <input
                type="email"
                placeholder="Email"
                className={inputClass}
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input
                type="tel"
                placeholder="Phone"
                className={inputClass}
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
              />

              <input
                type="date"
                className={inputClass}
                value={form.date}
                onChange={(e) =>
                  setForm({ ...form, date: e.target.value })
                }
              />
            </div>

            <textarea
              rows={4}
              placeholder="Special Requests"
              className={`${inputClass} resize-none`}
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
            />

            <button
              type="submit"
              className="w-full py-4 bg-[#C9A84C] text-[#0D0B08] text-xs tracking-[0.25em] uppercase hover:bg-[#E8C97A] transition"
            >
              Confirm Reservation
            </button>
          </form>
        </div>

        {/* Info */}
        <div className="space-y-10">
          
          {/* Map */}
          <div className="p-8 bg-[#111009] border border-[#C9A84C]/15 rounded-xl text-center">
            <p className="text-3xl mb-2">📍</p>
            <p className="font-serif text-[#F5EDD6]">Crumble & Co</p>
            <p className="text-[#A89878] text-sm">
              Malabar Hill, Mumbai
            </p>
          </div>

          {/* Hours */}
          <div className="p-8 bg-[#111009] border border-[#C9A84C]/15 rounded-xl">
            <h3 className="font-serif text-[#E8C97A] mb-4">
              Opening Hours
            </h3>

            <p className="text-[#A89878] text-sm">
              Mon – Fri: 12 PM – 11 PM
            </p>
            <p className="text-[#A89878] text-sm">
              Sat – Sun: 11 AM – 11 PM
            </p>
          </div>

          {/* Contact */}
          <div className="p-8 bg-[#111009] border border-[#C9A84C]/15 rounded-xl">
            <p className="text-[#A89878] text-sm">
              +91 22 4001 9999
            </p>
            <p className="text-[#A89878] text-sm">
              reserve@crumbleco.in
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}