import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    await sql`DROP TABLE Products;`;
    const result =
      await sql`CREATE TABLE Products ( Name varchar(255), Brand varchar(255),  );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
