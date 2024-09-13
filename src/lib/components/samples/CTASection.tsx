/* eslint-disable @next/next/no-img-element */

import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';

const CTASection = () => {
  return (
    <>
      <div className="justify-items-center">sdfds</div>
      <div className="flex w-full justify-items-center gap-4 p-12">
        <Card className="flex-1 py-4">
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
            />
          </CardBody>
        </Card>
        <Card className="flex-1 py-4">
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
            />
          </CardBody>
        </Card>
        <Card className="flex-1 py-4">
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
            />
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default CTASection;
