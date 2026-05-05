const business = {
  name: "R Buck Heating & Air Conditioning",
  city: "Colorado Springs",
  phone: "(719) 771-4660",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-20 bg-slate-100">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow">
        <h1 className="text-4xl font-bold mb-6">
          Contact {business.name}
        </h1>

        <p className="mb-6">
          Call us or request a quote for HVAC service in {business.city}.
        </p>

        <a
          href={`tel:${business.phone}`}
          className="block bg-orange-500 text-white p-4 rounded text-center font-bold mb-6"
        >
          Call Now: {business.phone}
        </a>

        <input className="w-full mb-3 border p-3 rounded" placeholder="Name" />
        <input className="w-full mb-3 border p-3 rounded" placeholder="Phone" />
        <textarea className="w-full mb-3 border p-3 rounded" placeholder="Message" />

        <button className="w-full bg-slate-950 text-white p-3 rounded font-bold">
          Send Request
        </button>
      </div>
    </main>
  );
}