import type { NextPage } from 'next';

import Hero from '@/lib/components/Hero';
import Market from '@/lib/components/Market';
import QuickStart from '@/lib/components/QuickStart';

const Home: NextPage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 text-center">
      <Hero />
      <QuickStart />
      <Market />
    </div>
  );
};

export default Home;
