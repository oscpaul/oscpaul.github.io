// app/page.js (using App Router) or pages/index.js (using Pages Router)

import ProductCard from '../../components/ProductCard';
import { Product } from '@/.next/types/product';

// For App Router, fetch data directly in the component (Server Component)
async function getProducts(): Promise<Product[]> {  const res = await fetch('http://localhost:3000/api/products'); // Replace with your API endpoint
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {
  const products = await getProducts(); // Data fetched on the server

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}