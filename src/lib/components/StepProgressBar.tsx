/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import { Card, CardBody, Divider } from '@nextui-org/react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';

export default function App() {
  const [selected, setSelected] = useState(null);

  const handleClick = (step: number | null) => {
    setSelected((prevSelected) => (prevSelected === step ? null : step));
  };

  const getClassName = (step: number | null) => {
    return selected === step
      ? 'bg-white text-black'
      : 'bg-black-200 text-gray-500';
  };

  return (
    <div className="flex">
      {/* Primeira Coluna */}
      <div className="flex-1">
        <Card className="rounded-2xl shadow-lg">
          <CardBody className="p-0">
            <div
              className={`divide-gray-300 flex flex-1 cursor-pointer items-center justify-between divide-x rounded-2xl p-4 ${getClassName(1)}`}
              onClick={() => handleClick(1)}
            >
              <div>
                <div className="text-sm">Passo 1</div>
                <div className="font-semibold">Estratégia</div>
                <div className="text-sm">Escolha uma estratégia</div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Divider Vertical */}
      <div className="flex h-full items-center justify-center">
        <Divider
          orientation="vertical"
          style={{ backgroundColor: 'gray', width: '2px', height: '50%' }}
        />
      </div>

      {/* Segunda Coluna */}
      <div className="flex-1">
        <Card className="rounded-2xl shadow-lg">
          <CardBody className="p-0">
            <div
              className={`divide-gray-300 flex flex-1 cursor-pointer items-center justify-between divide-x rounded-2xl p-4 ${getClassName(1)}`}
              onClick={() => handleClick(1)}
            >
              <div>
                <div className="text-sm">Passo 1</div>
                <div className="font-semibold">Estratégia</div>
                <div className="text-sm">Escolha uma estratégia</div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
