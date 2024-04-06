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
          VALUES ('Product #1', 'Olsen', 'It is a cool thing', 10.99);
      `,
    sql`
          INSERT INTO products (name, brand, description, price)
          VALUES ('Product #2', 'Madelyn', 'It is another cool thing', 15.99);
      `,
    sql`
          INSERT INTO products (name, brand, description, price)
          VALUES ('Product #3', 'Madelyn', 'I cannot belive this cool stuff', 15.99);
      `,
    sql`
          INSERT INTO products (name, brand, description, price)
          VALUES ('Product #4', 'Madelyn', 'It is an amazing thing', 15.99);
      `,
    sql`
          INSERT INTO products (name, brand, description, price)
          VALUES ('Product #5', 'Madelyn', 'It is another amazing thing', 15.99);
      `,
    sql`
          INSERT INTO products (name, brand, description, price)
          VALUES ('Product #6', 'Madelyn', 'Be blown away by how cool and amazing this is', 15.99);
      `,
    sql`
          INSERT INTO products (name, brand, description, price)
          VALUES ('Product #7', 'Madelyn', 'This is not cool or amazing. It is spectacular', 15.99);
      `,
    sql`
          INSERT INTO products (name, brand, description, price)
          VALUES ('Product #8', 'Madelyn', 'It is another spectacular thing', 15.99);
      `,
    sql`
          INSERT INTO products (name, brand, description, price)
          VALUES ('Product #9', 'Madelyn', 'You will not believe the stupendousness of this thing', 15.99);
      `,
    sql`
          INSERT INTO products (name, brand, description, price)
          VALUES ('Product #10', 'Madelyn', 'It is another stupendous thing', 15.99);
      `,
    sql`
          INSERT INTO products (name, brand, description, price)
          VALUES ('Product #11', 'Madelyn', 'Wowee. This is a product of products right here', 15.99);
      `,
    sql`
          INSERT INTO products (name, brand, description, price)
          VALUES ('Product #12', 'Madelyn', 'You will be the envy of everyone you know', 15.99);
      `,
    sql`
          INSERT INTO products (name, brand, description, price)
          VALUES ('Product #13', 'Madelyn', 'This is essential to your very being. You have to have it.', 15.99);
      `,
    sql`
          INSERT INTO products (name, brand, description, price)
          VALUES ('Product #14', 'Madelyn', 'A thing like this will sell out quickly. Better buy!', 15.99);
      `,
    sql`
          INSERT INTO products (name, brand, description, price)
          VALUES ('Product #15', 'Madelyn', 'You are practically stealing from us at this price!', 15.99);
      `,
    sql`
          INSERT INTO products (name, brand, description, price)
          VALUES ('Product #16', 'Madelyn', 'What a fantastic thing', 15.99);
      `,
    sql`
          INSERT INTO products (name, brand, description, price)
          VALUES ('Product #17', 'Madelyn', 'It is another fantastic thing', 15.99);
      `,
    sql`
          INSERT INTO products (name, brand, description, price)
          VALUES ('Product #18', 'Madelyn', 'You want this. You need this. We have this. You buy this.', 15.99);
      `,
  ]);
  console.log(products);
  console.log(`Seeded ${products.length} products`);

  return {
    createTable,
    products,
  };
}
