import { Product } from '../_types/product';

import Image from 'next/image';

import AddToCartButton from './AddToCartButton';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard(props: ProductCardProps) {
  const { product } = props;
  return (
    <div className='card card-compact w-full md:w-80  bg-base-100 shadow-xl'>
      <figure className='h-96'>
        <Image
          className='object=cover'
          src={`/product-images/${product.id}.jpg`}
          alt={product.name}
          // Remember: these values are not actually used literally, unless they can be. This
          // works as a sort of desktop -> mobile aspect ratio. Aim high, but Image scales down
          // as the space the image needs to occupy goes down.
          width={350}
          height={250}
        />
      </figure>
      <div className='card-body'>
        <div className='flex items-center'>
          <h2 className='text-lg font-bold grow'>{product.name}</h2>
          <p className='text-right'>${product.price}</p>
        </div>
        <div className='card-actions justify-end'>
          <AddToCartButton product={product as Product} />
        </div>
      </div>
    </div>
  );
}
