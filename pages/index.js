import { useEffect } from 'react';
import Layout from '@components/Layout';

export default function Home() {
  useEffect(() => {
    console.log('Boilerplate Ready');
  }, []);

  return <Layout title="Boilerplate">Hello World</Layout>;
}
