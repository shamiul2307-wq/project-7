 
import Hero from "@/components/Hero";
import ProductSections from "@/components/ProductSections";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl space-y-12 px-4 py-8 sm:py-10">
      <Hero />
      <ProductSections />
    </main>
  );
}
