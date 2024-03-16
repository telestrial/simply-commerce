import {
  postgresProductInsertStatement,
  products,
} from '@/app/api/seed-db/products';

describe('postgresProductInsertStatement', () => {
  it('should contain the correct insert prefix', () => {
    const result = postgresProductInsertStatement();

    expect(result).toContain(
      'INSERT INTO products (id, name, brand, description, price) VALUES'
    );
  });
  it('should contain value statements at the length of the number of products', () => {
    const result = postgresProductInsertStatement();
    let openCount = 0;
    let closeCount = 0;

    for (let char of result) {
      if (char === '(') openCount++;
      if (char === ')') closeCount++;
    }

    // +1 for the columns at the beginning
    expect(openCount).toBe(products.length + 1);
    expect(closeCount).toBe(products.length + 1);
  });
  it('should contain products from products', () => {
    const insertStatement = postgresProductInsertStatement();
    const randomProduct =
      products[Math.floor(Math.random() * (products.length - 1 - 0) + 0)];

    expect(insertStatement).toContain(randomProduct.name);
  });
});
