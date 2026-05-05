const business = {
  name: "Front Range HVAC",
  city: "Colorado Springs",
  phone: "(719) 555-1234",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-20 bg-slate-100">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold mb-6">
          Contact {business.name}
        </h1>

        <p className="text-slate-600 mb-6">
          Call us or request a quote for HVAC service in {business.city}.
        </p>

        <a
          href={`tel:${business.phone}`}
          className="block bg-orange-500 text-white px-6 py-4 rounded-lg font-bold text-center mb-6"
        >
          Call Now: {business.phone}
        </a>

        <form className="space-y-4">
          <input
            className="w-full border rounded-lg px-4 py-3"
            placeholder="Your name"
          />
          <input
            className="w-full border rounded-lg px-4 py-3"
            placeholder="Phone number"
          />
          <textarea
            className="w-full border rounded-lg px-4 py-3"
            placeholder="How can we help?"
          />
          <button className="w-full bg-slate-950 text-white px-6 py-4 rounded-lg font-bold">
            Submit Request
          </button>
        </form>
      </div>
    </main>
  );
}