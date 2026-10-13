
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 bg-green-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2">
        <div>
          <Link href="/" className="text-2xl font-black">
            🥬 বাজার দর
          </Link>
          <p className="mt-3 max-w-md leading-7 text-green-100/80">
            প্রয়োজনীয় পণ্যের দাম এক নজরে। সচেতন কেনাকাটায়
            আপনার বিশ্বস্ত ডিজিটাল সঙ্গী।
          </p>
        </div>

        <div className="sm:text-right">
          <h3 className="font-bold">দ্রুত লিংক</h3>
          <div className="mt-3 flex flex-wrap gap-4 sm:justify-end">
            <Link href="/">হোম</Link>
            <Link href="/products">সব পণ্য</Link>
            <Link href="/categories/sobji">শাক-সবজি</Link>
            <Link href="/signin">লগইন</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-sm text-green-100/70">
         © ২০২৬ বাজার দর (BazarDor). সর্বস্বত্ব সংরক্ষিত।
      </div>
    </footer>
  );
}
