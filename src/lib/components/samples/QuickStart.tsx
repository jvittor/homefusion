/* eslint-disable @next/next/no-img-element */

import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';

const CTASection = () => {
  return (
    <>
      <div className="mb-4 bg-white-100 text-center">sdfds</div>
      <div className="grid w-full grid-cols-1 items-center justify-center gap-x-10 p-4 text-black-100 md:grid-cols-2 md:p-12 lg:grid-cols-3">
        <Card className="h-72 rounded-xl bg-white-100 py-4 shadow-xl">
          <CardBody className="items-center justify-center overflow-visible py-2">
            <Image
              alt="Card background"
              className="relative bottom-32 mb-2 rounded-xl"
              src="https://homefusion.s3.sa-east-1.amazonaws.com/Data+extraction-amico+1.png"
              width={200}
              height={200}
            />
          </CardBody>
          <CardHeader className="z-2 relative bottom-40 flex-col items-center px-4 pb-0 pt-10">
            <p className="text-tiny font-bold uppercase text-blue">Passo 1</p>
            <h4 className="text-default-500 text-lg">Defina sua Estratégia</h4>
            <p className="text-xs text-black-200 lg:text-base">
              Defina a melhor abordagem para a sua busca: quer comprar, investir
              ou revender? Cada estratégia otimiza os resultados para seu
              objetivo.
            </p>
          </CardHeader>
        </Card>
        <Card className="py-4">
          <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
            <p className="text-tiny font-bold uppercase">Daily Mix</p>
            <small className="text-default-500">12 Tracks</small>
            <h4 className="text-large font-bold">Frontend Radio</h4>
          </CardHeader>
          <CardBody className="w-full overflow-visible py-2">
            <Image
              alt="Card background"
              className="rounded-xl object-cover"
              src="https://nextui.org/images/hero-card-complete.jpeg"
              width={270}
              height={180}
            />
          </CardBody>
        </Card>
        <Card className="py-4">
          <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
            <p className="text-tiny font-bold uppercase">Daily Mix</p>
            <small className="text-default-500">12 Tracks</small>
            <h4 className="text-large font-bold">Frontend Radio</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="rounded-xl object-cover"
              src="https://nextui.org/images/hero-card-complete.jpeg"
              width={270}
              height={180}
            />
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default CTASection;
