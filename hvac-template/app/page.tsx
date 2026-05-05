const business = {
  name: "JMS Home Comfort Experts",
  city: "Falcon",
  state: "CO",
  phone: "(719) 300-5983",
  serviceArea:
    "Falcon, Peyton, Colorado Springs, Black Forest, Fountain, Security-Widefield, Fort Carson, Air Force Academy, Monument, Manitou Springs, Woodland Park, and nearby El Paso County areas",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* ── Header ── */}
      <section className="bg-slate-950 text-white px-6 py-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <div className="text-xl font-bold leading-tight">{business.name}</div>
            <div className="text-xs text-slate-400 mt-0.5">
              Falcon &amp; Colorado Springs, CO
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href="/contact"
              className="bg-white text-slate-950 px-4 py-2.5 rounded-lg font-bold text-sm"
            >
              Contact
            </a>
            <a
              href={`tel:${business.phone}`}
              className="bg-orange-500 text-white px-4 py-2.5 rounded-lg font-bold text-sm"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ── Hero ── */}
      <section className="px-6 py-16 bg-slate-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wide mb-2">
              Serving Falcon &amp; El Paso County
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Home Comfort You Can Count On — Heating, Cooling &amp; Plumbing
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              JMS Home Comfort Experts is your local, family-friendly service team
              in Falcon, CO. We handle HVAC, plumbing, and home repairs — fast
              response, honest pricing, no runaround.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href={`tel:${business.phone}`}
                className="bg-orange-500 text-white px-6 py-4 rounded-lg font-bold text-base"
              >
                Call {business.phone}
              </a>
              <a
                href="/contact"
                className="bg-slate-950 text-white px-6 py-4 rounded-lg font-bold text-base"
              >
                Free Estimate
              </a>
            </div>

            <div className="text-sm font-semibold space-y-1 text-slate-700">
              <p>⭐ Trusted by Falcon &amp; Colorado Springs homeowners</p>
              <p>✅ Licensed &amp; Insured — El Paso County</p>
              <p>🔧 HVAC · Plumbing · Handyman</p>
              <p>🕐 24/7 Emergency Service Available</p>
            </div>
          </div>

          {/* Quote form */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-1">Request a Free Estimate</h2>
            <p className="text-slate-500 text-sm mb-4">
              We&apos;ll get back to you fast — usually same day.
            </p>

            <input
              className="w-full mb-3 border border-slate-200 p-3 rounded-lg text-sm"
              placeholder="Your Name"
            />
            <input
              className="w-full mb-3 border border-slate-200 p-3 rounded-lg text-sm"
              placeholder="Phone Number"
            />
            <select className="w-full mb-3 border border-slate-200 p-3 rounded-lg text-sm text-slate-600">
              <option value="">What do you need help with?</option>
              <option>AC Repair or Replacement</option>
              <option>Furnace / Heating Repair</option>
              <option>HVAC Installation</option>
              <option>Ductless System</option>
              <option>Thermostat Service</option>
              <option>Plumbing</option>
              <option>Handyman Service</option>
              <option>Emergency Service</option>
              <option>Other</option>
            </select>
            <textarea
              className="w-full mb-4 border border-slate-200 p-3 rounded-lg text-sm"
              rows={3}
              placeholder="Briefly describe the issue (optional)"
            />

            <button className="w-full bg-orange-500 text-white p-3 rounded-lg font-bold text-base">
              Send My Request
            </button>
            <p className="text-xs text-slate-400 text-center mt-3">
              Or call us directly: {business.phone}
            </p>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">
              HVAC, Plumbing &amp; Home Comfort Services
            </h2>
            <p className="text-slate-500">
              Serving Falcon, Colorado Springs, and El Paso County
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "AC Repair & Cooling",
                desc: "Fast AC diagnosis and repair to keep your home cool all summer. We service all major brands.",
              },
              {
                title: "Furnace & Heating Repair",
                desc: "Heating issues in Colorado winters are urgent. We show up fast and get your heat back on.",
              },
              {
                title: "HVAC Installation",
                desc: "New system installs, replacements, and upgrades for homes across El Paso County.",
              },
              {
                title: "Ductless Systems",
                desc: "Mini-split installation and service for efficient heating and cooling in any room.",
              },
              {
                title: "Thermostat Service",
                desc: "Smart thermostat installs, wiring fixes, and thermostat replacements done right.",
              },
              {
                title: "HVAC Maintenance",
                desc: "Seasonal tune-ups that extend equipment life and catch problems before they cost you.",
              },
              {
                title: "Plumbing",
                desc: "Leaks, clogs, water heaters, fixture repairs — residential plumbing handled locally.",
              },
              {
                title: "Handyman Services",
                desc: "Odds and ends around the house — we handle the small stuff so you don't have to.",
              },
              {
                title: "Emergency Service",
                desc: "No heat in January? AC out in July? We offer emergency response when it matters most.",
              },
            ].map((s) => (
              <div key={s.title} className="border border-slate-200 p-6 rounded-xl hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why JMS ── */}
      <section className="px-6 py-14 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Why Falcon Homeowners Choose JMS</h2>
          <p className="text-slate-600 mb-10">
            We&apos;re a small local team — not a big franchise. That means faster
            response, personal service, and someone who actually knows your neighborhood.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: "📍",
                title: "Truly Local",
                desc: "Based in Falcon, CO — we know El Paso County homes and Colorado weather.",
              },
              {
                icon: "⚡",
                title: "Fast Response",
                desc: "We pick up the phone and get out to you quickly, especially for emergencies.",
              },
              {
                icon: "💰",
                title: "Honest Pricing",
                desc: "Upfront quotes. No surprises. We tell you what it costs before we start.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Area ── */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Service Area</h2>
          <p className="text-slate-600 text-sm">
            {business.serviceArea}.
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Not sure if we cover your area? Just call — we&apos;ll let you know.
          </p>
        </div>
      </section>

      {/* ── Emergency CTA ── */}
      <section className="px-6 py-14 bg-slate-950 text-white text-center">
        <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-2">
          24/7 Emergency HVAC Service
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          No Heat? AC Down? We&apos;re Ready.
        </h2>
        <p className="text-slate-300 mb-6">
          Call JMS Home Comfort Experts now for fast emergency service in Falcon
          and Colorado Springs.
        </p>
        <a
          href={`tel:${business.phone}`}
          className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg"
        >
          Call Now: {business.phone}
        </a>
      </section>

      {/* ── Footer ── */}
      <footer className="px-6 py-8 bg-slate-100 text-center text-sm text-slate-500">
        <p className="font-semibold text-slate-700 mb-1">{business.name}</p>
        <p>Falcon, CO · {business.phone}</p>
        <p className="mt-1">Serving El Paso County &amp; Surrounding Areas</p>
      </footer>

    </main>
  );
}
