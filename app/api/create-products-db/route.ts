import seedDB from '@/app/lib/seedDB';

export async function GET(request: Request) {
  let result;
  try {
    const { createTable: result } = await seedDB();
  } catch (e) {
    result = e;
  }

  return Response.json({ result });
}
