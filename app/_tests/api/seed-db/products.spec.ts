import {
  postgresProductInsertStatement,
  products,
} from '@/app/api/seed-db/products';

describe('postgresProductInsertStatement', () => {
  it('should contain value statements at the length of the number of products', () => {
    const result = postgresProductInsertStatement();

    expect(result.length).toBe(products.length);
  });
  // it('should contain products from products', () => {
  //   const insertStatement = postgresProductInsertStatement();
  //   const randomIndex = Math.floor(Math.random() * (products.length - 1 - 0) + 0)
  //   const randomProduct =
  //     products[randomIndex];

  //   expect(insertStatement[randomIndex]).toContain(randomProduct.name);
  // });
});
