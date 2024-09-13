import { Divider } from '@nextui-org/react';

export default function DropdownPrice() {
  return (
    <div className="flex space-x-2 p-3">
      <div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
            $
          </div>
          <input
            type="text"
            id="input-group-1"
            className="border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border bg-white-100 p-2.5 ps-10 text-sm"
            placeholder="Mínimo"
          />
        </div>
      </div>
      <Divider className="my-5 w-5" />
      <div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
            $
          </div>
          <input
            type="text"
            id="input-group-1"
            className="border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border bg-white-100 p-2.5 ps-10 text-sm"
            placeholder="Máximo"
          />
        </div>
      </div>
    </div>
  );
}
