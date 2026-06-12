export default function JubileePage() {
  return (
    <main className="min-h-screen bg-purple-950 text-white p-10">

      <h1 className="text-5xl font-bold text-yellow-400 mb-8">
        Golden Jubilee 2026
      </h1>

      <p className="text-xl mb-10">
        Celebrating 50 Years of God's Faithfulness
      </p>

      <div className="grid md:grid-cols-5 gap-6">

        <div className="bg-white/10 p-6 rounded-xl">
          1976 - Church Founded
        </div>

        <div className="bg-white/10 p-6 rounded-xl">
          1985 - Growth
        </div>

        <div className="bg-white/10 p-6 rounded-xl">
          1998 - Youth Ministry
        </div>

        <div className="bg-white/10 p-6 rounded-xl">
          2010 - Renovation
        </div>

        <div className="bg-white/10 p-6 rounded-xl">
          2026 - Golden Jubilee
        </div>

      </div>

    </main>
  );
}