import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

import { postgresProductInsertStatement } from './products';

export async function GET(request: Request) {
  try {
    await sql`DROP TABLE products;`;
    const createResult = await sql`CREATE TABLE products ( 
        id integer, 
        name text,
        brand text,
        description text,
        price NUMERIC(6, 2)  
        );`;
    const insertResult = await sql`${postgresProductInsertStatement()}`;
    return NextResponse.json(
      { create: createResult, insert: insertResult },
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
