const business = {
  name: "Front Range HVAC",
  city: "Colorado Springs",
  state: "CO",
  phone: "(719) 555-1234",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-950 text-white px-6 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-4">
          <div className="text-2xl font-bold">{business.name}</div>

          <div className="flex gap-3">
            <a
              href="/contact"
              className="bg-white text-slate-950 px-5 py-3 rounded-lg font-bold text-center"
            >
              Contact
            </a>

            <a
              href={`tel:${business.phone}`}
              className="bg-orange-500 text-white px-5 py-3 rounded-lg font-bold text-center"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-orange-600 font-bold mb-3">
              HVAC Service in {business.city}, {business.state}
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Fast, Reliable Heating & Cooling Service
            </h1>

            <p className="text-lg text-slate-700 mb-8">
              Professional AC repair, furnace repair, HVAC installation, and
              emergency service for homeowners in {business.city}.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${business.phone}`}
                className="bg-orange-500 text-white px-6 py-4 rounded-lg font-bold text-center"
              >
                Call Now
              </a>

              <a
                href="#quote"
                className="bg-slate-950 text-white px-6 py-4 rounded-lg font-bold text-center"
              >
                Get a Free Quote
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Request Service</h2>

            <form className="space-y-4">
              <input
                className="w-full border rounded-lg px-4 py-3"
                placeholder="Your name"
              />
              <input
                className="w-full border rounded-lg px-4 py-3"
                placeholder="Phone number"
              />
              <select className="w-full border rounded-lg px-4 py-3">
                <option>AC Repair</option>
                <option>Furnace Repair</option>
                <option>HVAC Installation</option>
                <option>Emergency Service</option>
              </select>
              <textarea
                className="w-full border rounded-lg px-4 py-3"
                placeholder="Tell us what you need"
              />
              <button className="w-full bg-orange-500 text-white px-6 py-4 rounded-lg font-bold">
                Request Quote
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">HVAC Services</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "AC Repair",
              "Furnace Repair",
              "HVAC Installation",
              "Emergency HVAC",
            ].map((service) => (
              <div key={service} className="border rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">{service}</h3>
                <p className="text-slate-600">
                  Reliable {service.toLowerCase()} for homes in{" "}
                  {business.city}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-slate-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-2">Same-Day Service</h3>
            <p className="text-slate-600">
              Fast heating and cooling help when your home needs it most.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-2">Licensed Technicians</h3>
            <p className="text-slate-600">
              Professional HVAC service from trained local technicians.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-2">Upfront Pricing</h3>
            <p className="text-slate-600">
              Clear estimates before work begins. No surprise charges.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Emergency HVAC Service in {business.city}
            </h2>
            <p className="text-slate-600 mb-6">
              When your AC quits in the summer or your furnace stops in the
              winter, you need help fast. {business.name} provides responsive
              heating and cooling service throughout {business.city}.
            </p>
            <a
              href={`tel:${business.phone}`}
              className="inline-block bg-orange-500 text-white px-6 py-4 rounded-lg font-bold"
            >
              Call {business.phone}
            </a>
          </div>

          <div className="bg-slate-950 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Popular Services</h3>
            <ul className="space-y-3">
              <li>✓ AC repair and replacement</li>
              <li>✓ Furnace repair and replacement</li>
              <li>✓ Thermostat installation</li>
              <li>✓ Seasonal maintenance</li>
              <li>✓ Emergency heating and cooling</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="quote" className="px-6 py-16 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Need HVAC Service Today?
          </h2>
          <p className="text-lg mb-8">
            Call now or request a quote for fast service in {business.city}.
          </p>
          <a
            href={`tel:${business.phone}`}
            className="inline-block bg-white text-slate-950 px-8 py-4 rounded-lg font-bold"
          >
            Call Now: {business.phone}
          </a>
        </div>
      </section>
    </main>
  );
}