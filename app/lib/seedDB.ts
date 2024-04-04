import { sql } from '@vercel/postgres';

export default async function seedDB() {
  const createTable = await sql`
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      brand VARCHAR(255) NOT NULL,
      description text,
      price NUMERIC(6, 2)
    );
    `;

  console.log(`Created "products" table`);

  const products = await Promise.all([
    sql`
          INSERT INTO products (name, brand, description, price)
          VALUES ('Product #1', 'Olsen', 'It is a cool thing', 0010.99);
      `,
    sql`
          INSERT INTO products (name, brand, description, price)
          VALUES ('Product #2', 'Madelyn', 'It is another cool thing', 0015.99);
      `,
  ]);
  console.log(products);
  console.log(`Seeded ${products.length} products`);

  return {
    createTable,
    products,
  };
}
