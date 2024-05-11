import { sql } from '@vercel/postgres';

export default async function seedDB() {
  const createTable = await sql`
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      productID integer,
      name VARCHAR(255) NOT NULL,
      brand VARCHAR(255) NOT NULL,
      description text,
      price NUMERIC(6, 2)
    );
    `;

  const products = await Promise.all([
    sql`
          INSERT INTO products (productID, name, brand, description, price)
          VALUES (1, 'Product #1', 'Olsen', 'It is a cool thing', 10.99);
      `,
    sql`
          INSERT INTO products (productID, name, brand, description, price)
          VALUES (2, 'Product #2', 'Madelyn', 'It is another cool thing', 15.99);
      `,
    sql`
          INSERT INTO products (productID, name, brand, description, price)
          VALUES (3, 'Product #3', 'Madelyn', 'I cannot belive this cool stuff', 15.99);
      `,
    sql`
          INSERT INTO products (productID, name, brand, description, price)
          VALUES (4, 'Product #4', 'Madelyn', 'It is an amazing thing', 15.99);
      `,
    sql`
          INSERT INTO products (productID, name, brand, description, price)
          VALUES (5, 'Product #5', 'Madelyn', 'It is another amazing thing', 15.99);
      `,
    sql`
          INSERT INTO products (productID, name, brand, description, price)
          VALUES (6, 'Product #6', 'Madelyn', 'Be blown away by how cool and amazing this is', 15.99);
      `,
    sql`
          INSERT INTO products (productID, name, brand, description, price)
          VALUES (7, 'Product #7', 'Madelyn', 'This is not cool or amazing. It is spectacular', 15.99);
      `,
    sql`
          INSERT INTO products (productID, name, brand, description, price)
          VALUES (8. 'Product #8', 'Madelyn', 'It is another spectacular thing', 15.99);
      `,
    sql`
          INSERT INTO products (productID, name, brand, description, price)
          VALUES (9, 'Product #9', 'Madelyn', 'You will not believe the stupendousness of this thing', 15.99);
      `,
    sql`
          INSERT INTO products (productID, name, brand, description, price)
          VALUES (10, 'Product #10', 'Madelyn', 'It is another stupendous thing', 15.99);
      `,
    sql`
          INSERT INTO products (productID, name, brand, description, price)
          VALUES (11, 'Product #11', 'Madelyn', 'Wowee. This is a product of products right here', 15.99);
      `,
    sql`
          INSERT INTO products (productID, name, brand, description, price)
          VALUES (12, 'Product #12', 'Madelyn', 'You will be the envy of everyone you know', 15.99);
      `,
    sql`
          INSERT INTO products (productID, name, brand, description, price)
          VALUES (13, 'Product #13', 'Madelyn', 'This is essential to your very being. You have to have it.', 15.99);
      `,
    sql`
          INSERT INTO products (productID, name, brand, description, price)
          VALUES (14, 'Product #14', 'Madelyn', 'A thing like this will sell out quickly. Better buy!', 15.99);
      `,
    sql`
          INSERT INTO products (productID, name, brand, description, price)
          VALUES (15, 'Product #15', 'Madelyn', 'You are practically stealing from us at this price!', 15.99);
      `,
    sql`
          INSERT INTO products (productID, name, brand, description, price)
          VALUES (16, 'Product #16', 'Madelyn', 'What a fantastic thing', 15.99);
      `,
    sql`
          INSERT INTO products (productID, name, brand, description, price)
          VALUES (17, 'Product #17', 'Madelyn', 'It is another fantastic thing', 15.99);
      `,
    sql`
          INSERT INTO products (productID, name, brand, description, price)
          VALUES (18, 'Product #18', 'Madelyn', 'You want this. You need this. We have this. You buy this.', 15.99);
      `,
  ]);

  return {
    createTable,
    products,
  };
}
