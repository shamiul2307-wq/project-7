

import Link from "next/link";

function toBanglaNumber(value) {
  return new Intl.NumberFormat("bn-BD").format(value);
}

export default function ProductCard({ product }) {
  const change = product.maxPrice - product.previousPrice;

  const status =
    change > 0
      ? { label: "▲ দাম বেড়েছে", color: "text-red-600 bg-red-50" }
      : change < 0
      ? { label: "▼ দাম কমেছে", color: "text-green-700 bg-green-50" }
      : { label: "● দাম অপরিবর্তিত", color: "text-gray-600 bg-gray-100" };

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex items-start justify-between">
        <span className="rounded-xl bg-green-50 p-3 text-4xl">
          {product.emoji}
        </span>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${status.color}`}>
          {status.label}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-bold text-gray-900">
        {product.name}
      </h3>
      <p className="mt-1 text-sm text-gray-500">{product.unit}</p>

      <div className="mt-4 border-t border-dashed pt-4">
        <p className="text-sm text-gray-500">আজকের দাম</p>
        <p className="mt-1 text-2xl font-black text-green-800">
          ৳{toBanglaNumber(product.minPrice)}–{toBanglaNumber(product.maxPrice)}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="text-gray-500">বিস্তারিত দেখুন</span>
        <span className="font-bold text-green-700 transition group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}
