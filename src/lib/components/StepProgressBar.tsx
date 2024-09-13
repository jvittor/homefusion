/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import {
  Card,
  CardBody,
  Divider,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';

export default function App() {
  const items = [
    {
      key: 'text',
      label: '🔨 Fix & Flip',
    },
    {
      key: 'text',
      label: '💵 Seller financing',
    },
    {
      key: 'text',
      label: '🏠 Casa de Aluguel',
    },
    {
      key: 'text',
      label: '🚪 House Hack',
    },
    {
      key: 'text',
      label: '👥 Multifamily',
    },
    {
      key: 'text',
      label: '⭐ New construction',
    },
  ];
  const [selected, setSelected] = useState<number | null>(null);

  const handleClick = (step: number | null) => {
    // Alterna o estado de seleção, desmarcando se já estiver selecionado
    setSelected((prevSelected) => (prevSelected === step ? null : step));
  };

  const getClassName = (step: number) => {
    if (selected === null) {
      return 'bg-white-100 text-gray-500';
    }
    return selected === step
      ? 'bg-white-100 text-black rounded-2xl transform transition-transform duration-300 scale-105 z-20'
      : 'bg-white-200 text-gray-500';
  };

  return (
    <div className="relative flex items-stretch text-black-100">
      {/* Estratégia 1 */}
      <div className="z-10 flex-1">
        <Dropdown className="z-50 w-full rounded-2xl bg-white-100 p-3">
          <DropdownTrigger>
            <Card className="m-0">
              <CardBody className="p-0">
                <div
                  className={`divide-gray-300 flex flex-1 cursor-pointer items-center justify-between divide-x rounded-s-2xl p-4 ${getClassName(1)}`}
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
          </DropdownTrigger>
          <DropdownMenu
            className="w-64 text-base text-black-100"
            aria-label="Dynamic Actions"
            items={items}
          >
            {(item) => (
              <DropdownItem
                key={item.key}
                color={item.key === 'delete' ? 'danger' : 'default'}
                className={`mb-4 ${item.key === 'delete' ? 'text-danger' : ''}`}
              >
                {item.label}
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
      </div>

      {/* Divider central */}
      <div className="relative z-10 flex items-center justify-center">
        <Divider
          orientation="vertical"
          className="absolute"
          style={{
            backgroundColor: 'black',
            width: '5px',
            height: '50%',
            opacity: '20%',
          }}
        />
      </div>

      {/* Estratégia 2 */}
      <div className="z-10 flex-1">
        <Card className="m-0">
          <CardBody className="p-0">
            <div
              className={`divide-gray-300 flex flex-1 cursor-pointer items-center justify-between divide-x p-4 ${getClassName(2)}`}
              onClick={() => handleClick(2)}
            >
              <div>
                <div className="text-sm">Passo 2</div>
                <div className="font-semibold">Estratégia</div>
                <div className="text-sm">Escolha uma estratégia</div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Divider central */}
      <div className="relative z-10 flex items-center justify-center">
        <Divider
          orientation="vertical"
          className="absolute"
          style={{
            backgroundColor: 'black',
            width: '5px',
            height: '50%',
            opacity: '20%',
          }}
        />
      </div>

      {/* Estratégia 3 */}
      <div className="z-10 flex-1">
        <Card className="m-0">
          <CardBody className="p-0">
            <div
              className={`divide-gray-300 flex flex-1 cursor-pointer items-center justify-between divide-x rounded-e-2xl p-4 ${getClassName(3)}`}
              onClick={() => handleClick(3)}
            >
              <div>
                <div className="text-sm">Passo 3</div>
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
