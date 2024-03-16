import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

import { postgresProductInsertStatement } from './products';

export async function GET(request: Request) {
  try {
    const dropResult = await sql`DROP TABLE Products;`;
    const createResult =
      await sql`CREATE TABLE Products ( id integer, name text, brand text, description text, price NUMERIC(6, 2));`;
    const insertResult = await sql`${postgresProductInsertStatement()}`;
    return NextResponse.json(
      { drop: dropResult, create: createResult, insert: insertResult },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

// id: number;
// name: string;
// brand: string;
// description: string;
// price: number;
