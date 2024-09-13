import { CiSearch } from 'react-icons/ci';

export default function DropdownMarket() {
  return (
    <>
      <div className="relative mb-2">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
          <CiSearch />
        </div>
        <input
          type="text"
          id="input-group-1"
          className="border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border bg-white-100 p-2.5 ps-10 text-sm"
          placeholder="Pesquise um mercado"
        />
      </div>
      <div className="grid gap-4">
        <div>
          <div className="font-xl">Orlando</div>
          <div className="font-base opacity-50">Florida</div>
        </div>
        <div>
          <div className="font-xl">Jacksonville</div>
          <div className="font-base opacity-50">Florida</div>
        </div>
        <div>
          <div className="font-xl">Tampa</div>
          <div className="font-base opacity-50">Florida</div>
        </div>
        <div>
          <div className="font-xl">Tallahassee</div>
          <div className="font-base opacity-50">Florida</div>
        </div>
        <div>
          <div className="font-xl">Cape Coral</div>
          <div className="font-base opacity-50">Florida</div>
        </div>
      </div>
    </>
  );
}
