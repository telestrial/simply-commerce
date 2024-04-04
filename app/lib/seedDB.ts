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

  const users = await Promise.all([
    sql`
          INSERT INTO users (name, brand, description, price)
          VALUES ('Product #1', 'Olsen', 'It is a cool thing', 0010.99);
      `,
    sql`
          INSERT INTO users (name, brand, description, price)
          VALUES ('Product #2', 'Madelyn', 'It is another cool thing', 0015.99);
      `,
  ]);
  console.log(users);
  console.log(`Seeded ${users.length} products`);

  return {
    createTable,
    users,
  };
}
