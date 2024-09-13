/* eslint-disable import/prefer-default-export */
// application/useDropdown.ts
import { useState, useRef, useEffect } from 'react';

export const useDropdown = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [selectedTexts, setSelectedTexts] = useState({
    // eslint-disable-next-line sonarjs/no-duplicate-string
    1: 'Escolha uma estratégia',
    2: 'Escolha uma mercado',
    3: 'Escolha uma preço',
  });

  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (step: number | null) => {
    setSelected((prevSelected) => (prevSelected === step ? null : step));
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setSelected(null); // Reset selection if clicking outside
    }
  };

  const handleItemClick = (step: number, label: string) => {
    setSelectedTexts((prev) => ({
      ...prev,
      [step]: label,
    }));
    setSelected(null); // Close dropdown after selection
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const getClassName = (step: number) => {
    if (selected === null) {
      return 'bg-white-100 text-gray-500';
    }
    return selected === step
      ? 'bg-white-100 text-black rounded-2xl transform transition-transform duration-300 scale-105 z-20'
      : 'bg-white-200 text-gray-500';
  };

  return {
    selected,
    selectedTexts,
    handleClick,
    handleItemClick,
    getClassName,
    containerRef,
  };
};
