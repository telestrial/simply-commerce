'use client';

import { useEffect, useState } from 'react';
import { sql } from '@vercel/postgres';

import seedDB from '../lib/seedDB';

export default function ProductFeed() {
  const [data, setData] = useState(null);

  useEffect(() =>
    // Select SQl call
    // if not that, seed
    {}, []);

  return <div>Hello</div>;
}
