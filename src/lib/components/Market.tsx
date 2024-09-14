/* eslint-disable react/no-array-index-key */
/* eslint-disable @next/next/no-img-element */

import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';

import { markets } from '@/domain/items';

const Market = () => {
  return (
    <div>
      <div className="mb-32 text-center text-2xl font-bold text-black-100 md:mb-20">
        Os melhores mercados
      </div>
      <div className="grid w-full grid-cols-1 items-center justify-center gap-32 gap-x-10 p-4 text-black-100 md:grid-cols-2 md:p-12 lg:grid-cols-3">
        {markets.map((market, index) => (
          <Card
            key={index}
            className="h-72 rounded-xl bg-white-100 py-4 shadow-xl"
          >
            <CardBody className="items-center justify-center overflow-visible py-2">
              <Image
                alt="Card background"
                className="mb-2 rounded-xl"
                src={market.imgSrc}
                width={150}
                height={150}
              />
            </CardBody>
            <CardHeader className="flex-col items-center px-4 pb-0">
              <h4 className="text-default-500 text-lg">{market.title}</h4>
              <p className="text-xs text-black-200 lg:text-base">
                {market.description}
              </p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Market;
