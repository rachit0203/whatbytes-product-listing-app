import { Suspense } from "react";
import ProductListing from "@/components/ProductListing";

export default function Home() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8">Loading...</div>}>
      <ProductListing />
    </Suspense>
  );
}
