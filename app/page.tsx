import { useEffect, useState } from 'react';

import seedDB from './lib/seedDB';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {}, []);

  return <h1>Home Page!</h1>;
}
