export const instant = false;
 import { notFound } from "next/navigation";
import { Suspense } from "react";
import { categories, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;

  return (
    <Suspense fallback={<div className="p-8">লোড হচ্ছে...</div>}>
      <CategoryContent slug={slug} />
    </Suspense>
  );
}

function CategoryContent({ slug }) {
  const category = categories.find((item) => item.slug === slug);

  if (!category) notFound();

  const categoryProducts = products.filter(
    (product) => product.category === slug
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">
        {category.emoji} {category.name}
      </h1>

      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="py-10 text-gray-500">
          এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
        </p>
      )}
    </main>
  );
}