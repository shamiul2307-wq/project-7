
"use client";

import { useMemo, useState } from "react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const matchesCategory =
        category === "all" || product.category === category;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.trim().toLowerCase());

      return matchesCategory && matchesSearch;
    });

    if (sort === "low") {
      result.sort((a, b) => a.minPrice - b.minPrice);
    } else if (sort === "high") {
      result.sort((a, b) => b.minPrice - a.minPrice);
    }

    return result;
  }, [category, sort, search]);

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-black">সব পণ্য</h1>
      <p className="mt-2 text-gray-500">
        পণ্য খুঁজুন, ক্যাটাগরি নির্বাচন করুন ও দাম অনুযায়ী সাজান।
      </p>

      <div className="my-7 grid gap-3 sm:grid-cols-3">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="পণ্যের নাম লিখুন..."
          className="rounded-xl border bg-white px-4 py-3 outline-none focus:border-green-600"
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="rounded-xl border bg-white px-4 py-3"
        >
          <option value="all">সব ক্যাটাগরি</option>
          {categories.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.name}
            </option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(event) => setSort(event.target.value)}
          className="rounded-xl border bg-white px-4 py-3"
        >
          <option value="default">সাজান: ডিফল্ট</option>
          <option value="low">দাম: কম থেকে বেশি</option>
          <option value="high">দাম: বেশি থেকে কম</option>
        </select>
      </div>

      <p className="mb-4 text-sm text-gray-500">
        মোট {filteredProducts.length}টি পণ্য
      </p>

      {filteredProducts.length ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl bg-white p-10 text-center">
          <p className="text-xl font-bold">কোনো পণ্য পাওয়া যায়নি</p>
          <button
            onClick={() => {
              setSearch("");
              setCategory("all");
              setSort("default");
            }}
            className="mt-4 rounded-lg bg-green-700 px-5 py-3 text-white"
          >
            ফিল্টার মুছে ফেলুন
          </button>
        </div>
      )}
    </main>
  );
}
