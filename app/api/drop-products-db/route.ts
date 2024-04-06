import { sql } from '@vercel/postgres';

export async function GET(request: Request) {
  const dropResult = sql`DROP TABLE products;`;

  return Response.json({ dropResult });
}
