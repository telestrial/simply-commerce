import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

import { postgresProductInsertStatement } from './products';

export async function GET(request: Request) {
  try {
    const productPostgresSQLValues = postgresProductInsertStatement();

    // const insertResults = [];
    // for (let value of productPostgresSQLValues) {
    //   const result =
    //     await sql`INSERT INTO products (productID, name, brand, description, price) VALUES ${value}`;
    //   insertResults.push(result);
    // }

    const insertResults =
      await sql`INSERT INTO products VALUES (1, "test", "test", "test", 0003.99);`;

    return NextResponse.json({ insertResults: insertResults }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
