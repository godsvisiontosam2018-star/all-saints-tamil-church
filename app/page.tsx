import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-purple-800 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-purple-700">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Church Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <h1 className="font-bold text-lg">
              All Saints' Tamil Church
            </h1>
            <p className="text-sm text-yellow-400">
              Golden Jubilee 2026
            </p>
          </div>
        </div>

        <div className="hidden md:flex gap-6">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Golden Jubilee</a>
          <a href="#">Gallery</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">

        <Image
          src="/logo.png"
          alt="Church Logo"
          width={180}
          height={180}
          className="mb-6"
        />

        <p className="uppercase tracking-[0.3em] text-yellow-400 mb-3">
          Estd 1976
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          All Saints' Tamil Church
        </h1>

        <h2 className="text-2xl md:text-3xl mt-4 text-purple-200">
          (C.N.I) Govandi, Mumbai
        </h2>

        <div className="mt-8">
          <span className="bg-yellow-400 text-black px-6 py-2 rounded-full font-bold">
            Golden Jubilee 1976 – 2026
          </span>
        </div>

        <p className="max-w-3xl mt-8 text-xl text-purple-100">
          Celebrating 50 Years of God's Faithfulness, Grace and Service.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
            Explore Our Journey
          </button>

          <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-purple-900 transition">
            Golden Jubilee Events
          </button>
        </div>
      </section>

      {/* Service Time */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center">
          <h3 className="text-3xl font-bold text-yellow-400 mb-4">
            Sunday Worship Service
          </h3>

          <p className="text-2xl">
            11:30 AM – 1:00 PM
          </p>

          <p className="mt-4 text-purple-200">
            Plot No.40, Road No.8, Govandi West,
            Mumbai - 400043
          </p>
        </div>
      </section>

    </main>
  );
}