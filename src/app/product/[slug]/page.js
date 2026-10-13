
import { headers } from "next/headers";
import { redirect, notFound } from "next/navigation";
import { auth } from "@/lib/auth";
import { products } from "@/data/products";
import Link from "next/link";

function taka(value) {
  return new Intl.NumberFormat("bn-BD").format(value);
}

export default async function ProductDetailsPage({ params }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/signin");
  }

  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) notFound();

  const average = Math.round(
    product.markets.reduce((sum, market) => sum + market.price, 0) /
      product.markets.length
  );

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-10">
      <Link href="/products" className="text-green-700">
        ← সব পণ্য
      </Link>

      <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm sm:p-10">
        <div className="flex flex-wrap items-center gap-5">
          <div className="rounded-2xl bg-green-50 p-5 text-6xl">
            {product.emoji}
          </div>
          <div>
            <h1 className="text-3xl font-black">{product.name}</h1>
            <p className="mt-2 text-gray-500">{product.description}</p>
            <p className="mt-2 text-sm text-green-700">
              একক: {product.unit}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            ["সর্বনিম্ন দাম", product.minPrice],
            ["সর্বোচ্চ দাম", product.maxPrice],
            ["গড় দাম", average],
          ].map(([label, price]) => (
            <div key={label} className="rounded-2xl bg-green-50 p-5">
              <p className="text-sm text-gray-600">{label}</p>
              <p className="mt-2 text-2xl font-black text-green-800">
                ৳{taka(price)}
              </p>
            </div>
          ))}
        </div>

        <h2 className="mt-10 text-xl font-bold">
          বাজারভিত্তিক আজকের দাম
        </h2>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="p-4">বাজার</th>
                <th className="p-4">দাম</th>
              </tr>
            </thead>
            <tbody>
              {product.markets.map((market) => (
                <tr key={market.name} className="border-b">
                  <td className="p-4">{market.name}</td>
                  <td className="p-4 font-bold text-green-800">
                    ৳{taka(market.price)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 text-xs text-gray-500">
          এগুলো অ্যাসাইনমেন্টের ডেমো ডেটা; প্রকৃত বাজারদর নয়।
        </p>
      </section>
    </main>
  );
}
