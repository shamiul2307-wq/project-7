


 import Link from "next/link";
import { products, categories } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductSections() {
  const risers = products
    .filter((p) => p.maxPrice > p.previousPrice)
    .sort(
      (a, b) =>
        (b.maxPrice - b.previousPrice) -
        (a.maxPrice - a.previousPrice)
    )
    .slice(0, 6);

  const fallers = products
    .filter((p) => p.maxPrice < p.previousPrice)
    .sort(
      (a, b) =>
        (a.maxPrice - a.previousPrice) -
        (b.maxPrice - b.previousPrice)
    )
    .slice(0, 6);

  return (
    <div className="space-y-14">
      <section>
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-red-600">
              📈 আজকের বাজার
            </p>
            <h2 className="mt-1 text-2xl font-black text-gray-900">
              আজ দাম বেড়েছে ↑
            </h2>
          </div>
          <Link href="/products" className="font-semibold text-green-700">
            সব পণ্য →
          </Link>
        </div>

        {risers.length ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {risers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="rounded-xl bg-gray-50 p-5 text-gray-600">
            এই মুহূর্তে দাম বৃদ্ধির কোনো ডেমো পণ্য নেই।
          </p>
        )}
      </section>

      <section>
        <div className="mb-5">
          <p className="text-sm font-semibold text-green-700">
            📉 দামের পরিবর্তন
          </p>
          <h2 className="mt-1 text-2xl font-black text-gray-900">
            আজ দাম কমেছে ↓
          </h2>
        </div>

        {fallers.length ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fallers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="rounded-xl bg-gray-50 p-5 text-gray-600">
            আপাতত দাম কমেছে এমন কোনো ডেমো পণ্য নেই।
          </p>
        )}
      </section>

      <section id="sob-panno">
        <div className="mb-5">
          <p className="text-sm font-semibold text-green-700">
            🛒 বাজারের তালিকা
          </p>
          <h2 className="mt-1 text-2xl font-black text-gray-900">
            সব পণ্য
          </h2>
          <p className="mt-2 text-gray-500">
            নিত্যপ্রয়োজনীয় পণ্যের দাম এক জায়গায় দেখুন।
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
