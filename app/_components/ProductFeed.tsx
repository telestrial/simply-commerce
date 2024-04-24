import Image from 'next/image';
import { sql } from '@vercel/postgres';

import seedDB from '../lib/seedDB';

import AddToCartButton from './AddToCartButton';

import { Product } from '../_types/product';

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
          .sort((a, b) => a.id - b.id)
          .map((product) => {
            return (
              <div
                key={product.id}
                className='card card-compact w-80 bg-base-100 shadow-xl'
              >
                <figure className='h-96'>
                  <Image
                    className='object=cover'
                    src={`/product-images/${product.id}.jpg`}
                    alt={product.name}
                    width={350}
                    height={250}
                  />
                </figure>
                <div className='card-body'>
                  <div className='flex'>
                    <h2 className='card-title'>{product.name}</h2>
                    <p className='align-center'>${product.price}</p>
                  </div>
                  <div className='card-actions justify-end'>
                    <AddToCartButton product={product as Product} />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
