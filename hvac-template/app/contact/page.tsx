const business = {
  name: "JMS Home Comfort Experts",
  city: "Falcon",
  state: "CO",
  phone: "(719) 300-5983",
  serviceArea:
    "Falcon, Peyton, Colorado Springs, Black Forest, Fountain, Security-Widefield, Fort Carson, Air Force Academy, Monument, Manitou Springs, Woodland Park, and nearby El Paso County areas",
};

export default function ContactPage() {
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
              href="/"
              className="bg-white text-slate-950 px-4 py-2.5 rounded-lg font-bold text-sm"
            >
              Home
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

      {/* ── Contact Content ── */}
      <section className="px-6 py-16 bg-slate-100">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start">

          {/* Left — info */}
          <div>
            <h1 className="text-4xl font-extrabold mb-4">
              Contact {business.name}
            </h1>
            <p className="text-slate-600 mb-6">
              Ready to get a quote or schedule service? Call us or fill out the
              form — we respond fast, usually the same day.
            </p>

            <a
              href={`tel:${business.phone}`}
              className="block bg-orange-500 text-white p-4 rounded-xl text-center font-bold text-lg mb-6"
            >
              📞 Call Now: {business.phone}
            </a>

            <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3 text-sm">
              <div>
                <p className="font-semibold text-slate-800">📍 Based In</p>
                <p className="text-slate-600">Falcon, Colorado</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">🗺️ Service Area</p>
                <p className="text-slate-600">{business.serviceArea}.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">🕐 Emergency Service</p>
                <p className="text-slate-600">Available 24/7 — call for urgent needs</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">🔧 Services</p>
                <p className="text-slate-600">
                  HVAC, Heating, Cooling, Plumbing, Ductless Systems,
                  Thermostat Service, Handyman
                </p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-1">Request a Free Estimate</h2>
            <p className="text-slate-500 text-sm mb-5">
              Fill this out and we&apos;ll get back to you shortly.
            </p>

            <input
              className="w-full mb-3 border border-slate-200 p-3 rounded-lg text-sm"
              placeholder="Your Name"
            />
            <input
              className="w-full mb-3 border border-slate-200 p-3 rounded-lg text-sm"
              placeholder="Phone Number"
            />
            <input
              className="w-full mb-3 border border-slate-200 p-3 rounded-lg text-sm"
              placeholder="City / Zip Code"
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
              rows={4}
              placeholder="Describe what's going on (optional but helpful)"
            />

            <button className="w-full bg-orange-500 text-white p-3 rounded-lg font-bold text-base">
              Send My Request
            </button>
            <p className="text-xs text-slate-400 text-center mt-3">
              Prefer to call? {business.phone}
            </p>
          </div>
        </div>
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
