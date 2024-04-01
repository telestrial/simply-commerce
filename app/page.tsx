import { useEffect, useState } from 'react';
import { sql } from '@vercel/postgres';

import seedDB from './lib/seedDB';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() =>
    // Select SQl call
    // if not that, seed
    {}, []);

  return <h1>Home Page!</h1>;
}
