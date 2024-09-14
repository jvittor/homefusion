// application/useDropdown.ts
import { useState, useRef, useEffect } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useDropdown = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [selectedTexts, setSelectedTexts] = useState({
    1: 'Escolha uma estratégia',
    2: 'Escolha um mercado',
    3: 'Escolha um preço',
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
      setSelected(null);
    }
  };

  const handleItemClick = (step: number, label: string) => {
    setSelectedTexts((prev) => ({
      ...prev,
      [step]: label,
    }));
    setSelected(null);
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
      ? 'bg-white-100 text-black rounded-2xl transform transition-transform duration-300 scale-10 z-20'
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
