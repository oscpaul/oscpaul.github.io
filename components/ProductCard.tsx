// components/ProductCard.tsx
import Link from 'next/link';
import Image from 'next/image';

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image?: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
        {/* Product Image */}
        <div className="relative w-full h-64">
          <Image
            src={product.image ?? '/images/default-product.jpg'}
            alt={product.name}
            fill
            className="object-cover"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300" />
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
            {product.name}
          </h2>
          <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
          <p className="text-gray-500 mt-2 text-sm line-clamp-2">
            {product.description}
          </p>

          {/* View Details Button */}
          <span className="mt-4 inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700 transition">
            View Details
          </span>
        </div>
      </div>
    </Link>
  );
}
