/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// ui/App.tsx

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

import { useDropdown } from '@/application/useDropdown';
import { items } from '@/domain/items';

import DropdownMarket from './DropdownMarket';
import DropdownPrice from './DropdownPrice';

export default function App() {
  const {
    selectedTexts,
    handleClick,
    handleItemClick,
    getClassName,
    containerRef,
  } = useDropdown();

  return (
    <div
      ref={containerRef}
      className="relative flex items-stretch text-black-100"
    >
      {/* Estratégia 1 */}
      <div className="z-10 flex-1">
        <Dropdown className="z-50 w-full rounded-2xl bg-white-100 p-3">
          <DropdownTrigger>
            <Card className="m-0">
              <CardBody className="p-0">
                <div
                  className={`divide-gray-300 flex flex-1 cursor-pointer items-center justify-between divide-x rounded-s-2xl p-2 sm:p-4 ${getClassName(1)}`}
                  onClick={() => handleClick(1)}
                >
                  <div>
                    <div className="text-sm">Passo 1</div>
                    <div className="font-semibold">Estratégia</div>
                    <div className="text-sm">{selectedTexts[1]}</div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </DropdownTrigger>
          <DropdownMenu
            className="w-64 text-base text-black-100"
            aria-label="Dynamic Actions"
          >
            {items.map((item) => (
              <DropdownItem
                key={item.key}
                onClick={() => handleItemClick(1, item.label)}
                className="mb-4"
              >
                {item.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>

      <DividerComponent />

      {/* Estratégia 2 */}
      <div className="z-10 flex-1">
        <Dropdown className="z-50 w-full rounded-2xl bg-white-100 p-3">
          <DropdownTrigger>
            <Card className="m-0">
              <CardBody className="p-0">
                <div
                  className={`divide-gray-300 flex flex-1 cursor-pointer items-center justify-between divide-x p-2 sm:p-4 ${getClassName(3)}`}
                  onClick={() => handleClick(3)}
                >
                  <div>
                    <div className="text-sm">Passo 3</div>
                    <div className="font-semibold">Estratégia</div>
                    <div className="text-sm">{selectedTexts[3]}</div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </DropdownTrigger>
          <DropdownMenu
            className="w-64 text-base text-black-100"
            aria-label="Dynamic Actions"
            closeOnSelect={false}
          >
            <DropdownItem className="mb-4" key="price">
              <DropdownMarket />
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <DividerComponent />

      {/* Estratégia 3 */}
      <div className="z-10 flex-1">
        <Dropdown className="z-50 w-full rounded-2xl bg-white-100 p-3">
          <DropdownTrigger>
            <Card className="m-0">
              <CardBody className="p-0">
                <div
                  className={`divide-gray-300 flex flex-1 cursor-pointer items-center justify-between divide-x rounded-e-xl p-2 sm:p-4 ${getClassName(2)}`}
                  onClick={() => handleClick(2)}
                >
                  <div>
                    <div className="text-sm">Passo 2</div>
                    <div className="font-semibold">Estratégia</div>
                    <div className="text-sm">{selectedTexts[2]}</div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </DropdownTrigger>
          <DropdownMenu
            className="w-72 text-base text-black-100"
            aria-label="Dynamic Actions"
            closeOnSelect={false}
          >
            <DropdownItem
              key="prince"
              className="flex items-center justify-center"
            >
              <div>
                <DropdownPrice />
              </div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}

function DividerComponent() {
  return (
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
  );
}
