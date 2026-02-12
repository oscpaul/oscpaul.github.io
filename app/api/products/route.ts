// app/api/products/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    {
         "id": 1,
    "name": "Product 1",
    "price": 19.99,
    "image": "/images/product1.jpg",
    "description": "Description for product 1"

    },
    {
         "id": 2,
    "name": "Product 2",
    "price": 19.99,
    "image": "/images/product2.jpg",
    "description": "Description for product 1"

    },
        {
         "id": 3,
    "name": "Product 3",
    "price": 19.99,
    "image": "/images/product3.jpg",
    "description": "Description for product 1"

    },
        {
         "id": 4,
    "name": "Product 4",
    "price": 19.99,
    "image": "/images/product4.jpg",
    "description": "Description for product 1"

    },
        {
         "id": 5,
    "name": "Product 5",
    "price": 19.99,
    "image": "/images/product5.jpg",
    "description": "Description for product 1"

    },
  ];

  return NextResponse.json(products);
}
