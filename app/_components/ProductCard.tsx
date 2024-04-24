import { Product } from '../_types/product';

import Image from 'next/image';

import AddToCartButton from './AddToCartButton';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard(props: ProductCardProps) {
  const { product } = props;
  return (
    <div className='card card-compact w-80 bg-base-100 shadow-xl'>
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
}
