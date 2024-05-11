import Image from 'next/image';
import { sql } from '@vercel/postgres';

import seedDB from '../lib/seedDB';
import { Product } from '../_types/product';

import ProductCard from './ProductCard';

export default async function ProductFeed() {
  let data;

  try {
    data = await sql`SELECT * FROM products;`;
  } catch (e: any) {
    if (e.message.includes('relation "products" does not exist')) {
      console.log(
        'Table does not exist, creating and seeding it with dummy data now...'
      );
      // Table is not created yet
      await seedDB();
      data = await sql`SELECT * FROM products;`;
    } else {
      throw e;
    }
  }

  const { rows: products } = data;

  return (
    <div className='flex w-100 justify-center pt-10'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-9'>
        {products
          .sort((a, b) => a.productID - b.productID)
          .map((product) => {
            return (
              <ProductCard key={product.id} product={product as Product} />
            );
          })}
      </div>
    </div>
  );
}
