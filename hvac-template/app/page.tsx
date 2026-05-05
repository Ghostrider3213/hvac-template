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
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">{business.name}</div>

          <div className="flex gap-3">
            <a
              href="/contact"
              className="bg-white text-slate-950 px-5 py-3 rounded-lg font-bold"
            >
              Contact
            </a>

            <a
              href={`tel:${business.phone}`}
              className="bg-orange-500 text-white px-5 py-3 rounded-lg font-bold"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-5xl font-extrabold mb-6">
              Colorado Springs' Trusted HVAC Company
            </h1>

            <p className="text-lg mb-6">
              Family-owned for 32+ years. Reliable AC, heating, and emergency
              HVAC services across Colorado Springs and surrounding areas.
            </p>

            <div className="flex gap-4">
              <a
                href={`tel:${business.phone}`}
                className="bg-orange-500 text-white px-6 py-4 rounded-lg font-bold"
              >
                Call {business.phone}
              </a>

              <a
                href="/contact"
                className="bg-slate-950 text-white px-6 py-4 rounded-lg font-bold"
              >
                Get a Free Estimate
              </a>
            </div>

            <div className="mt-6 text-sm font-semibold space-y-1">
              <p>⭐ 4.9 Stars · 4,949 Reviews</p>
              <p>✅ BBB Accredited A+</p>
              <p>🔧 Parts & Labor Guarantee</p>
              <p>🕐 24/7 Emergency Service</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h2 className="text-2xl font-bold mb-4">Request Service</h2>

            <input className="w-full mb-3 border p-3 rounded" placeholder="Name" />
            <input className="w-full mb-3 border p-3 rounded" placeholder="Phone" />
            <textarea className="w-full mb-3 border p-3 rounded" placeholder="What do you need?" />

            <button className="w-full bg-orange-500 text-white p-3 rounded font-bold">
              Request Estimate
            </button>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            HVAC Services in Colorado Springs
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "AC Repair",
              "Heating Repair",
              "HVAC Installation",
              "Emergency HVAC",
              "Ductless Systems",
              "Maintenance",
            ].map((service) => (
              <div key={service} className="border p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-2">{service}</h3>
                <p className="text-slate-600">
                  Reliable {service.toLowerCase()} for homes in {business.city}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-orange-500 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">
          Need HVAC Service Today?
        </h2>

        <a
          href={`tel:${business.phone}`}
          className="bg-white text-black px-8 py-4 rounded-lg font-bold"
        >
          Call Now: {business.phone}
        </a>
      </section>
    </main>
  );
}