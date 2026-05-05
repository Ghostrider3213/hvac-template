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

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* ── Announcement bar ── */}
      <div
        className="text-white text-center text-sm py-2 px-4 font-semibold"
        style={{ backgroundColor: "#D32F2F" }}
      >
        📞 Call or text anytime — {business.phone} · Falcon, CO &amp; El Paso County
      </div>

      {/* ── Header ── */}
      <header
        className="text-white px-6 py-4 sticky top-0 z-50"
        style={{ backgroundColor: "#1565C0" }}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <div className="text-xl font-extrabold leading-tight tracking-tight">
              {business.name}
            </div>
            <div className="text-xs opacity-75">
              Licensed &amp; Insured · Falcon, CO
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <a
              href="/"
              className="hidden md:block text-white opacity-80 hover:opacity-100 text-sm font-semibold px-3 py-2"
            >
              ← Home
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

      {/* ── Contact content ── */}
      <section
        className="px-6 py-14 text-white"
        style={{
          background: "linear-gradient(135deg, #0D3B7A 0%, #1565C0 60%, #0D3B7A 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">

          {/* Left — info */}
          <div>
            <div
              className="inline-block text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide"
              style={{ backgroundColor: "#D32F2F" }}
            >
              Free Estimates · Fast Response
            </div>
            <h1 className="text-4xl font-extrabold mb-4 leading-tight">
              Contact {business.name}
            </h1>
            <p className="text-blue-100 mb-6">
              Ready to schedule service or get a free estimate? Call us or fill
              out the form — we typically respond the same day.
            </p>

            <a
              href={`tel:${business.phoneRaw}`}
              className="flex items-center justify-center gap-2 text-white p-4 rounded-xl font-bold text-lg mb-6 transition-colors"
              style={{ backgroundColor: "#D32F2F" }}
            >
              📞 Call Now: {business.phone}
            </a>

            <div className="bg-white text-slate-900 rounded-xl p-5 space-y-4 text-sm">
              <div>
                <p className="font-bold mb-0.5" style={{ color: "#1565C0" }}>📍 Based In</p>
                <p className="text-slate-600">Falcon, Colorado (El Paso County)</p>
              </div>
              <div>
                <p className="font-bold mb-1" style={{ color: "#1565C0" }}>🗺️ Service Area</p>
                <div className="flex flex-wrap gap-1.5">
                  {business.serviceArea.map((area) => (
                    <span
                      key={area}
                      className="text-white text-xs px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: "#1565C0" }}
                    >
                      {area}
                    </span>
                  ))}
                  <span
                    className="text-white text-xs px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: "#1565C0" }}
                  >
                    + nearby El Paso County
                  </span>
                </div>
              </div>
              <div>
                <p className="font-bold mb-0.5" style={{ color: "#1565C0" }}>🕐 Emergency Service</p>
                <p className="text-slate-600">Available 24/7 — call for urgent HVAC needs</p>
              </div>
              <div>
                <p className="font-bold mb-0.5" style={{ color: "#1565C0" }}>🔧 Services</p>
                <p className="text-slate-600">
                  HVAC · Heating · Cooling · Plumbing · Ductless Systems ·
                  Thermostat Service · Indoor Air Quality · Handyman
                </p>
              </div>
              <div>
                <p className="font-bold mb-0.5" style={{ color: "#1565C0" }}>🏆 Credentials</p>
                <p className="text-slate-600">BBB Accredited · Licensed &amp; Insured · 15 Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold mb-1">Request a Free Estimate</h2>
            <p className="text-slate-500 text-sm mb-5">
              Fill this out and we'll get back to you — usually same day.
            </p>

            <input
              className="w-full mb-3 border border-slate-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2"
              placeholder="Your Name"
            />
            <input
              className="w-full mb-3 border border-slate-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2"
              placeholder="Phone Number"
            />
            <input
              className="w-full mb-3 border border-slate-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2"
              placeholder="Email Address (optional)"
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
              rows={4}
              placeholder="Describe what's going on — the more detail, the better we can help (optional)"
            />
            <button
              className="w-full text-white p-3.5 rounded-lg font-bold text-base transition-colors"
              style={{ backgroundColor: "#D32F2F" }}
            >
              Send My Request →
            </button>
            <p className="text-xs text-slate-400 text-center mt-3">
              Prefer to call?{" "}
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
