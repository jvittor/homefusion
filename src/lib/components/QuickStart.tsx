/* eslint-disable react/no-array-index-key */
/* eslint-disable @next/next/no-img-element */

import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';

import { steps } from '@/domain/items';

const QuickStart = () => {
  return (
    <div>
      <div className="mb-32 text-center font-bold text-black-100 md:mb-20">
        Quick Start
      </div>
      <div className="grid w-full grid-cols-1 items-center justify-center gap-32 gap-x-10 p-4 text-black-100 md:grid-cols-2 md:p-12 lg:grid-cols-3">
        {steps.map((step, index) => (
          <Card
            key={index}
            className="h-72 rounded-xl bg-white-100 py-4 shadow-xl"
          >
            <CardBody className="items-center justify-center overflow-visible py-2">
              <Image
                alt="Card background"
                className="relative bottom-32 mb-2 rounded-xl"
                src={step.imgSrc}
                width={200}
                height={200}
              />
            </CardBody>
            <CardHeader className="z-2 relative bottom-40 flex-col items-center px-4 pb-0 pt-10">
              <p className="text-tiny font-bold uppercase text-blue">
                {step.step}
              </p>
              <h4 className="text-default-500 text-lg">{step.title}</h4>
              <p className="text-xs text-black-200 lg:text-base">
                {step.description}
              </p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default QuickStart;
