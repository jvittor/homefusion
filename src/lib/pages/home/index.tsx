import type { NextPage } from 'next';

import SomeText from '@/lib/components/samples/SomeText';

const Home: NextPage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 px-0 text-center">
      <SomeText />
    </div>
  );
};

export default Home;
