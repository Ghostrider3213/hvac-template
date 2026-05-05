const business = {
  name: "R Buck Heating & Air Conditioning",
  city: "Colorado Springs",
  state: "CO",
  phone: "(719) 771-4660",
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
              Colorado Springs&apos; Trusted HVAC Company
            </h1>

            <p className="text-lg text-slate-700 mb-8">
              Family-owned and operated for 32+ years. Serving Colorado Springs,
              Pueblo, Fountain, Monument, and surrounding communities with
              reliable heating and cooling service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href={`tel:${business.phone}`}
                className="bg-orange-500 text-white px-6 py-4 rounded-lg font-bold text-center"
              >
                Call {business.phone}
              </a>

              <a
                href="#quote"
                className="bg-slate-950 text-white px-6 py-4 rounded-lg font-bold text-center"
              >
                Get a Free Estimate
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 text-sm font-semibold">
              <p>⭐ 4.9 Stars · 4,949 Reviews</p>
              <p>✅ BBB Accredited A+</p>
              <p>🔧 Parts & Labor Guarantee</p>
              <p>🕐 24/7 Emergency Service</p>
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
                <option>AC Installation</option>
                <option>Heating Repair</option>
                <option>Heating Installation</option>
                <option>Emergency HVAC</option>
                <option>Ductless System</option>
              </select>
              <textarea
                className="w-full border rounded-lg px-4 py-3"
                placeholder="Tell us what you need"
              />
              <button className="w-full bg-orange-500 text-white px-6 py-4 rounded-lg font-bold">
                Request Free Estimate
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Full-Service Heating & Cooling in Colorado Springs
          </h2>

          <p className="text-slate-600 mb-8 max-w-3xl">
            From summer AC repairs to winter furnace emergencies, R Buck has
            handled it all for Colorado Springs families since 1993.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "AC Repair & Maintenance",
                text: "Fast diagnosis and dependable repairs for central air and ductless cooling systems.",
              },
              {
                title: "Heating Repair & Maintenance",
                text: "Furnace trouble on a cold Colorado night? Get responsive heating service when you need it.",
              },
              {
                title: "HVAC Installation",
                text: "New systems and replacements installed correctly with a parts and labor guarantee.",
              },
              {
                title: "Ductless Heating & AC",
                text: "Efficient mini-split systems for additions, garages, and homes without ductwork.",
              },
              {
                title: "Ducts, Vents & Thermostats",
                text: "Repair, replacement, and upgrades for better comfort and efficiency.",
              },
              {
                title: "Emergency HVAC Service",
                text: "24/7 emergency heating and cooling service across Colorado Springs and nearby areas.",
              },
            ].map((service) => (
              <div key={service.title} className="border rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Why Colorado Springs Chooses R Buck
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">Family-Owned Since 1993</h3>
              <p className="text-slate-600">
                Local people who stand behind their work.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">4.9 Stars on Google</h3>
              <p className="text-slate-600">
                Nearly 5,000 reviews from local customers.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">BBB Accredited A+</h3>
              <p className="text-slate-600">
                Trusted service backed by a strong local reputation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">Parts & Labor Guarantee</h3>
              <p className="text-slate-600">
                If something is not right, they make it right.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">Free Estimates</h3>
              <p className="text-slate-600">
                Clear next steps before work begins.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">24/7 Emergency Service</h3>
              <p className="text-slate-600">
                Heating and cooling problems do not wait for business hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              HVAC Emergency in Colorado Springs?
            </h2>
            <p className="text-slate-600 mb-6">
              If your heat goes out during a Colorado winter or your AC fails in
              peak summer, R Buck is ready with 24/7 emergency HVAC service.
            </p>
            <a
              href={`tel:${business.phone}`}
              className="inline-block bg-orange-500 text-white px-6 py-4 rounded-lg font-bold"
            >
              Call Now — {business.phone}
            </a>
          </div>

          <div className="bg-slate-950 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Popular Services</h3>
            <ul className="space-y-3">
              <li>✓ AC repair and replacement</li>
              <li>✓ Furnace repair and replacement</li>
              <li>✓ Thermostat installation and repair</li>
              <li>✓ Seasonal HVAC maintenance</li>
              <li>✓ Ductless heating and cooling</li>
              <li>✓ Emergency heating and cooling</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Proudly Serving Colorado Springs & Surrounding Communities
          </h2>

          <p className="text-slate-600 mb-6">
            R Buck Heating & Air Conditioning provides service across the Pikes
            Peak region, including Colorado Springs, Canon City, Pueblo,
            Fountain, Manitou Springs, Monument, Divide, Black Forest, Falcon,
            Security-Widefield, Fort Carson, Air Force Academy, and nearby
            communities.
          </p>

          <p className="font-semibold">
            Not sure if your area is covered? Call {business.phone}.
          </p>
        </div>
      </section>

      <section id="quote" className="px-6 py-16 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Ready for Honest, Reliable HVAC Service?
          </h2>
          <p className="text-lg mb-8">
            Over 32 years. Nearly 5,000 Google reviews. One local company that
            still picks up the phone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-slate-950 text-white px-8 py-4 rounded-lg font-bold"
            >
              Get a Free Estimate
            </a>

            <a
              href={`tel:${business.phone}`}
              className="inline-block bg-white text-slate-950 px-8 py-4 rounded-lg font-bold"
            >
              Call {business.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}