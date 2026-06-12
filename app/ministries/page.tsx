export default function MinistriesPage() {
  return (
    <main className="min-h-screen bg-purple-950 text-white p-10">

      <h1 className="text-5xl font-bold text-yellow-400 mb-10">
        Our Ministries
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white/10 p-8 rounded-2xl">
          Sunday School
        </div>

        <div className="bg-white/10 p-8 rounded-2xl">
          Youth Fellowship
        </div>

        <div className="bg-white/10 p-8 rounded-2xl">
          Women's Fellowship
        </div>

        <div className="bg-white/10 p-8 rounded-2xl">
          Choir Ministry
        </div>

      </div>

    </main>
  );
}