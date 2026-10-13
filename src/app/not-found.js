
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[65vh] flex-col items-center justify-center px-4 text-center">
      <span className="text-7xl">🥬</span>
      <h1 className="mt-5 text-5xl font-black text-green-800">404</h1>
      <h2 className="mt-3 text-2xl font-bold">পেজটি পাওয়া যায়নি</h2>
      <p className="mt-2 text-gray-500">
        তুমি যে পেজটি খুঁজছ, সেটি এখানে নেই।
      </p>
      <Link
        href="/"
        className="mt-6 rounded-xl bg-green-700 px-6 py-3 font-bold text-white"
      >
        হোম পেজে ফিরে যাও
      </Link>
    </main>
  );
}
