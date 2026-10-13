


import Link from "next/link";

export default function Hero() {
  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-green-950 via-green-800 to-emerald-600 text-white">
      <div className="grid items-center gap-8 px-6 py-12 sm:px-10 md:grid-cols-2 md:px-14 md:py-16">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-medium">
            🌿 আপনার প্রতিদিনের বাজার সঙ্গী
          </p>

          <h1 className="text-4xl font-black leading-tight sm:text-5xl">
            সঠিক বাজারদর,
            <br />
            <span className="text-lime-300">সাশ্রয়ী কেনাকাটা</span>
          </h1>

          <p className="mt-5 max-w-lg leading-7 text-green-50">
            বাজারে যাওয়ার আগে জেনে নিন নিত্যপ্রয়োজনীয় পণ্যের দাম।
            বিভিন্ন বাজারের দামের তুলনা করুন সহজেই।
          </p>

          <a
            href="#sob-panno"
            className="mt-7 inline-flex rounded-xl bg-lime-300 px-6 py-3 font-bold text-green-950 transition hover:bg-lime-200"
          >
            পণ্যের দাম দেখুন ↓
          </a>
        </div>

        <div className="flex min-h-56 items-center justify-center">
          <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-white/10 sm:h-72 sm:w-72">
            <div className="absolute h-52 w-52 rounded-full border border-white/20 sm:h-60 sm:w-60" />
            <span className="text-9xl drop-shadow-xl">🧺</span>
            <span className="absolute right-0 top-7 rounded-2xl bg-white p-3 text-3xl shadow-lg">
              🥦
            </span>
            <span className="absolute bottom-6 left-0 rounded-2xl bg-white p-3 text-3xl shadow-lg">
              🍅
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
