interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Thing',
    description: "it's a thing",
    price: 10.99,
  },
];

export function postgresProductInsert() {
  return ``;
}
