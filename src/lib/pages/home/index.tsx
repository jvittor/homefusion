import type { NextPage } from 'next';

import QuickStart from '@/lib/components/samples/QuickStart';
import SomeText from '@/lib/components/samples/SomeText';

const Home: NextPage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 text-center">
      <SomeText />
      <QuickStart />
    </div>
  );
};

export default Home;
