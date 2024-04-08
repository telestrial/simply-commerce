import Image from 'next/image';
import { sql } from '@vercel/postgres';

import seedDB from '../lib/seedDB';

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
    <div className='grid grid-cols-4 gap-4'>
      {products
        .sort((a, b) => a.id - b.id)
        .map((product) => {
          return (
            <div
              key={product.id}
              className='card card-compact w-96 bg-base-100 shadow-xl'
            >
              <figure>
                <Image
                  src={`/product-images/${product.id}.jpg`}
                  alt='Shoes'
                  width='300'
                  height='150'
                  objectFit='cover'
                />
              </figure>
              <div className='card-body'>
                <h2 className='card-title'>{product.name}</h2>
                <p>{product.description}</p>
                <div className='card-actions justify-end'>
                  <button className='btn btn-primary'>Buy Now</button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
