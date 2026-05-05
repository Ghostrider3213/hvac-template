// Brand colors pulled from JMS logo:
// Primary red:  #D32F2F  (action buttons, CTAs, accents)
// Primary blue: #1565C0  (header, dark sections, trust elements)
// Both used in Tailwind inline styles where needed

const business = {
  name: "JMS Home Comfort Experts",
  city: "Falcon",
  state: "CO",
  phone: "(719) 300-5983",
  phoneRaw: "7193005983",
  serviceArea: [
    "Falcon",
    "Peyton",
    "Colorado Springs",
    "Black Forest",
    "Fountain",
    "Security-Widefield",
    "Fort Carson",
    "Air Force Academy",
    "Monument",
    "Manitou Springs",
    "Woodland Park",
  ],
};

const services = [
  {
    icon: "❄️",
    title: "AC Repair & Installation",
    desc: "Fast diagnosis, honest repair, and properly-sized new systems. We keep your home cool when it matters.",
  },
  {
    icon: "🔥",
    title: "Furnace & Heating Repair",
    desc: "Colorado winters are serious. We respond quickly to heating failures and get your heat back on fast.",
  },
  {
    icon: "🏠",
    title: "HVAC Installation",
    desc: "New system or full replacement — we size and install equipment built to last in Colorado's climate.",
  },
  {
    icon: "💨",
    title: "Ductless Mini-Splits",
    desc: "Add heating and cooling to any room without ductwork. Great for additions, garages, and older homes.",
  },
  {
    icon: "🌡️",
    title: "Thermostat Service",
    desc: "Smart thermostat installs, wiring fixes, and full thermostat replacements done right the first time.",
  },
  {
    icon: "🔧",
    title: "HVAC Maintenance",
    desc: "Seasonal tune-ups that extend equipment life, catch problems early, and keep energy bills in check.",
  },
  {
    icon: "🚿",
    title: "Plumbing",
    desc: "Leaks, clogs, water heater issues, and fixture repairs — local residential plumbing handled fast.",
  },
  {
    icon: "🌬️",
    title: "Indoor Air Quality",
    desc: "Whole-home humidifiers, air filtration, and allergen control for cleaner air year-round.",
  },
  {
    icon: "🚨",
    title: "Emergency Service",
    desc: "No heat in January or AC out in July? We offer emergency response when you can't wait.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* ── Announcement bar — JMS red ── */}
      <div
        className="text-white text-center text-sm py-2 px-4 font-semibold"
        style={{ backgroundColor: "#D32F2F" }}
      >
        📞 Call or text anytime — {business.phone} · Serving Falcon, CO Springs &amp; El Paso County
      </div>

      {/* ── Header — JMS blue ── */}
      <header
        className="text-white px-6 py-4 sticky top-0 z-50"
        style={{ backgroundColor: "#1565C0" }}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            {/* Logo placeholder — swap with <img> tag pointing to their actual logo */}
            <div className="text-xl font-extrabold leading-tight tracking-tight">
              {business.name}
            </div>
            <div className="text-xs opacity-75">
              Licensed &amp; Insured · Falcon, CO
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <a
              href="/contact"
              className="hidden md:block text-white opacity-80 hover:opacity-100 text-sm font-semibold px-3 py-2"
            >
              Free Estimate
            </a>
            <a
              href={`tel:${business.phoneRaw}`}
              className="text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-colors"
              style={{ backgroundColor: "#D32F2F" }}
            >
              Call {business.phone}
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero — dark photo feel, JMS blue overlay ── */}
      <section
        className="px-6 py-14 md:py-20 text-white"
        style={{
          background: "linear-gradient(135deg, #0D3B7A 0%, #1565C0 50%, #0D3B7A 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div
              className="inline-block text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide"
              style={{ backgroundColor: "#D32F2F" }}
            >
              Falcon &amp; El Paso County's Local HVAC Team
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
              Heating, Cooling &amp; Plumbing —{" "}
              <span style={{ color: "#FFCDD2" }}>Done Right &amp; Fast</span>
            </h1>
            <p className="text-blue-100 text-lg mb-4">
              JMS Home Comfort Experts is a small local company based in Falcon,
              CO. 15 years of experience. Honest pricing. We answer the phone.
            </p>
            <ul className="text-blue-100 text-sm space-y-1.5 mb-7">
              <li>✅ Licensed &amp; Insured — El Paso County</li>
              <li>✅ BBB Accredited — Honest, Transparent Service</li>
              <li>✅ 15 Years of HVAC Experience</li>
              <li>✅ 24/7 Emergency Service Available</li>
              <li>✅ Free Estimates — No Obligation</li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${business.phoneRaw}`}
                className="text-white px-7 py-4 rounded-lg font-bold text-base transition-colors"
                style={{ backgroundColor: "#D32F2F" }}
              >
                📞 Call {business.phone}
              </a>
              <a
                href="#estimate"
                className="bg-white px-7 py-4 rounded-lg font-bold text-base hover:bg-blue-50 transition-colors"
                style={{ color: "#1565C0" }}
              >
                Get a Free Estimate
              </a>
            </div>
          </div>

          {/* ── Quote form ── */}
          <div id="estimate" className="bg-white text-slate-900 p-7 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold mb-1">Request a Free Estimate</h2>
            <p className="text-slate-500 text-sm mb-5">
              We respond fast — usually the same day.
            </p>
            <input
              className="w-full mb-3 border border-slate-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2"
              style={{ "--tw-ring-color": "#1565C0" } as React.CSSProperties}
              placeholder="Your Name"
            />
            <input
              className="w-full mb-3 border border-slate-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2"
              placeholder="Phone Number"
            />
            <input
              className="w-full mb-3 border border-slate-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2"
              placeholder="City or Zip Code"
            />
            <select className="w-full mb-3 border border-slate-200 p-3 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2">
              <option value="">What do you need help with?</option>
              <option>AC Repair or Replacement</option>
              <option>Furnace / Heating Repair</option>
              <option>HVAC Installation</option>
              <option>Ductless Mini-Split</option>
              <option>Thermostat Service</option>
              <option>HVAC Maintenance / Tune-Up</option>
              <option>Plumbing</option>
              <option>Indoor Air Quality</option>
              <option>Emergency Service</option>
              <option>Not Sure — Need Advice</option>
            </select>
            <textarea
              className="w-full mb-4 border border-slate-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2"
              rows={3}
              placeholder="Describe the issue (optional)"
            />
            <button
              className="w-full text-white p-3.5 rounded-lg font-bold text-base transition-colors"
              style={{ backgroundColor: "#D32F2F" }}
            >
              Send My Request →
            </button>
            <p className="text-xs text-slate-400 text-center mt-3">
              Or call us directly:{" "}
              <a
                href={`tel:${business.phoneRaw}`}
                className="font-semibold"
                style={{ color: "#D32F2F" }}
              >
                {business.phone}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <section className="px-6 py-10 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: "📍", label: "Based in Falcon, CO", sub: "Truly local — we know your neighborhood" },
            { icon: "⚡", label: "Fast Response", sub: "Same-day service in most cases" },
            { icon: "💬", label: "Honest Pricing", sub: "Upfront quotes, no surprises" },
            { icon: "🏆", label: "BBB Accredited", sub: "15 years experience, licensed & insured" },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="font-bold text-sm">{item.label}</div>
              <div className="text-xs text-slate-500 mt-0.5">{item.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">
              HVAC, Plumbing &amp; Home Comfort Services
            </h2>
            <p className="text-slate-500 text-sm">
              Serving Falcon, Colorado Springs, and all of El Paso County
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="border border-slate-200 p-6 rounded-xl hover:shadow-md transition-all"
                style={{ borderTopWidth: "3px", borderTopColor: "#1565C0" }}
              >
                <div className="text-2xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-base mb-1.5">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href={`tel:${business.phoneRaw}`}
              className="inline-block text-white px-8 py-4 rounded-lg font-bold transition-colors"
              style={{ backgroundColor: "#D32F2F" }}
            >
              Call to Schedule Service — {business.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── Emergency CTA — JMS blue ── */}
      <section
        className="px-6 py-14 text-white"
        style={{ backgroundColor: "#0D3B7A" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="inline-block text-white text-sm font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest"
            style={{ backgroundColor: "#D32F2F" }}
          >
            24/7 Emergency HVAC Service
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            No Heat? AC Out? Don't Wait.
          </h2>
          <p className="text-blue-200 mb-7 text-lg">
            We handle emergency calls in Falcon, Colorado Springs, and surrounding
            El Paso County areas. Call now — we'll help you figure out next steps.
          </p>
          <a
            href={`tel:${business.phoneRaw}`}
            className="inline-block text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors"
            style={{ backgroundColor: "#D32F2F" }}
          >
            📞 Call Now: {business.phone}
          </a>
          <p className="text-blue-300 text-sm mt-4">
            Available for emergency calls — Falcon, CO and nearby areas
          </p>
        </div>
      </section>

      {/* ── Service Area ── */}
      <section className="px-6 py-12 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Areas We Serve</h2>
          <p className="text-slate-500 text-sm mb-5">
            Proudly serving homeowners across El Paso County, CO
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {business.serviceArea.map((area) => (
              <span
                key={area}
                className="text-white text-sm font-medium px-4 py-1.5 rounded-full"
                style={{ backgroundColor: "#1565C0" }}
              >
                {area}
              </span>
            ))}
            <span
              className="text-white text-sm font-medium px-4 py-1.5 rounded-full"
              style={{ backgroundColor: "#1565C0" }}
            >
              + nearby El Paso County
            </span>
          </div>
          <p className="text-slate-400 text-xs mt-4">
            Not sure if we cover your area? Call us — {business.phone}
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        className="px-6 py-8 text-sm"
        style={{ backgroundColor: "#0D3B7A" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-white font-bold text-base">{business.name}</p>
            <p className="text-blue-300 mt-0.5">Falcon, CO · Licensed &amp; Insured · BBB Accredited</p>
          </div>
          <div className="text-center md:text-right">
            <a
              href={`tel:${business.phoneRaw}`}
              className="font-bold text-base"
              style={{ color: "#FFCDD2" }}
            >
              {business.phone}
            </a>
            <p className="text-blue-300 mt-0.5">HVAC · Plumbing · Emergency Service</p>
          </div>
        </div>
      </footer>

    </main>
  );
}
