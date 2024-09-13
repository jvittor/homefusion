// src/components/ItemList.jsx
import { DropdownItem } from '@nextui-org/react';
import { useState } from 'react';
import type React from 'react';

// Define a type for the items if you're using TypeScript
type Item = {
  key: string;
  label: string;
};

const items: Item[] = [{ key: 'text1', label: '🔨 Fix & Flip' }];

interface ItemListProps {
  onItemClick: (key: string) => void;
}

const ItemList: React.FC<ItemListProps> = ({ onItemClick }) => {
  const [searchTerm, setSearchTerm] = useState(''); // State to handle the search input

  // Filter the items based on the search term
  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Pesquisar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '8px',
          marginBottom: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          width: '100%',
        }} // Inline styles to make sure input is visible
      />

      {/* Dropdown Items */}
      {filteredItems.map((item) => (
        <DropdownItem
          key={item.key}
          className="mb-4"
          onClick={() => onItemClick(item.key)}
        >
          {item.label}
        </DropdownItem>
      ))}
    </>
  );
};

export default ItemList;
