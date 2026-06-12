import Image from "next/image";

export default function Home() {
return ( <main className="bg-gradient-to-b from-purple-950 via-purple-900 to-purple-800 text-white">

  {/* Navigation */}
<nav className="fixed top-0 left-0 right-0 bg-purple-950/80 backdrop-blur-md border-b border-purple-700 z-50">

  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

    <div className="flex items-center gap-3">

      <Image
        src="/logo.png"
        alt="Church Logo"
        width={45}
        height={45}
        className="rounded-full"
      />

      <div>
        <h2 className="font-bold">
          All Saints' Tamil Church
        </h2>

        <p className="text-xs text-yellow-400">
          Golden Jubilee 2026
        </p>
      </div>

    </div>

    <div className="hidden md:flex gap-6 text-sm">

      <a href="/" className="hover:text-yellow-400">
        Home
      </a>

      <a href="/about" className="hover:text-yellow-400">
        About
      </a>

      <a href="/ministries" className="hover:text-yellow-400">
        Ministries
      </a>

      <a href="/gallery" className="hover:text-yellow-400">
        Gallery
      </a>

      <a href="/jubilee" className="hover:text-yellow-400">
        Jubilee
      </a>

      <a href="/contact" className="hover:text-yellow-400">
        Contact
      </a>

    </div>

  </div>

</nav>

  {/* Hero Section */}
  <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24">

    <Image
      src="/logo.png"
      alt="Church Logo"
      width={220}
      height={220}
      className="rounded-full shadow-[0_0_60px_rgba(251,191,36,0.4)]"
    />

    <p className="mt-6 uppercase tracking-[0.4em] text-yellow-400 font-semibold">
      ESTD 1976
    </p>

    <h1 className="text-6xl md:text-8xl font-extrabold mt-6">
      All Saints' Tamil Church
    </h1>

    <h2 className="text-3xl md:text-4xl text-purple-200 mt-4">
      (C.N.I) Govandi, Mumbai
    </h2>

    <div className="mt-8 bg-yellow-400 text-black px-8 py-3 rounded-full font-bold">
      Golden Jubilee 1976 – 2026
    </div>

    <p className="max-w-4xl mt-8 text-2xl text-purple-100">
      Celebrating 50 Years of God's Faithfulness, Grace and Service.
    </p>

    <p className="mt-6 italic text-purple-200 max-w-3xl">
      “For the Lord is good and His love endures forever;
      His faithfulness continues through all generations.”
    </p>

    <p className="text-yellow-400 mt-2">
      Psalm 100:5
    </p>

    <div className="flex gap-4 mt-10 flex-wrap justify-center">
      <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
        Explore Our Journey
      </button>

      <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-purple-900 transition">
        Golden Jubilee
      </button>
    </div>

  </section>

  {/* Countdown Section */}
<section className="max-w-6xl mx-auto px-6 pb-20">

  <h2 className="text-5xl font-bold text-center mb-10">
    Golden Jubilee Countdown
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    <div className="bg-white/10 p-8 rounded-2xl text-center">
      <h3 className="text-5xl font-bold text-yellow-400">
        50
      </h3>
      <p className="mt-2">Years</p>
    </div>

    <div className="bg-white/10 p-8 rounded-2xl text-center">
      <h3 className="text-5xl font-bold text-yellow-400">
        600
      </h3>
      <p className="mt-2">Months</p>
    </div>

    <div className="bg-white/10 p-8 rounded-2xl text-center">
      <h3 className="text-5xl font-bold text-yellow-400">
        18250
      </h3>
      <p className="mt-2">Days</p>
    </div>

    <div className="bg-white/10 p-8 rounded-2xl text-center">
      <h3 className="text-5xl font-bold text-yellow-400">
        3
      </h3>
      <p className="mt-2">Generations</p>
    </div>

  </div>

</section>

  {/* Service Section */}
  <section className="max-w-6xl mx-auto px-6 py-20">

    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 text-center">

      <h3 className="text-4xl font-bold text-yellow-400">
        Sunday Worship Service
      </h3>

      <p className="text-3xl mt-4">
        11:30 AM – 1:00 PM
      </p>

      <p className="mt-6 text-purple-200">
        Plot No.40, Road No.8, Govandi Slums,
        Govandi West, Adasa Nagar,
        Shivaji Nagar, Mumbai – 400043
      </p>

    </div>

  </section>

  {/* Ministries Preview */}
  <section className="max-w-6xl mx-auto px-6 pb-20">

    <h2 className="text-5xl font-bold text-center mb-12">
      Our Ministries
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white/10 p-8 rounded-2xl">
        <h3 className="text-2xl font-bold text-yellow-400">
          Sunday School
        </h3>
      </div>

      <div className="bg-white/10 p-8 rounded-2xl">
        <h3 className="text-2xl font-bold text-yellow-400">
          Youth Fellowship
        </h3>
      </div>

      <div className="bg-white/10 p-8 rounded-2xl">
        <h3 className="text-2xl font-bold text-yellow-400">
          Women's Fellowship
        </h3>
      </div>

    </div>

  </section>

  {/* Footer */}
<footer className="border-t border-purple-700 py-10 text-center">

  <h3 className="text-2xl font-bold text-yellow-400">
    All Saints' Tamil Church (C.N.I)
  </h3>

  <p className="mt-2">
    Govandi, Mumbai
  </p>

  <p className="mt-2">
    Established 1976
  </p>

  <p className="mt-6 text-sm text-purple-300">
    © 2026 All Saints' Tamil Church. All Rights Reserved.
  </p>

</footer>

</main>

);
}
