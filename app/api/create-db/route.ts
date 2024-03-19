import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const createResult =
      await sql`CREATE TABLE products ( productID integer, name text, brand text, description text, price NUMERIC(6, 2));`;

    return NextResponse.json({ create: createResult }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
