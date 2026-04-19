import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

function QuantitySelector({
  value = 1,
  onChange,
  min = 1,
  max = 99,
  className = '',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const selectedItemRef = useRef(null);

  const options = useMemo(
    () => Array.from({ length: max - min + 1 }, (_, index) => min + index),
    [min, max]
  );

  const formatValue = (number) => String(number).padStart(2, '0');

  const handleSelect = (number) => {
    onChange(number);
    setIsOpen(false);
  };

  const handleIncrease = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const handleDecrease = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  useEffect(() => {
    if (isOpen && selectedItemRef.current) {
      selectedItemRef.current.scrollIntoView({
        block: 'center',
      });
    }
  }, [isOpen, value]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={`relative w-fit ${className}`}>
      <div className="flex h-[44px] w-[72px] overflow-hidden rounded-[4px] border border-black/20 bg-white">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex flex-1 items-center justify-center text-base text-black"
          aria-label="Open quantity selector"
        >
          {formatValue(value)}
        </button>

        <div className="flex w-[22px] flex-col border-l border-black/20">
          <button
            type="button"
            onClick={handleIncrease}
            className="flex flex-1 items-center justify-center text-black transition hover:bg-gray-100"
            aria-label="Increase quantity"
          >
            <ChevronUp size={12} />
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex flex-1 items-center justify-center border-t border-black/20 text-black transition hover:bg-gray-100"
            aria-label="Open quantity dropdown"
          >
            <ChevronDown size={12} />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-2 h-[220px] w-[72px] overflow-y-auto rounded-[4px] border border-black/20 bg-white shadow-lg">
          {options.map((number) => {
            const isSelected = number === value;

            return (
              <button
                key={number}
                ref={isSelected ? selectedItemRef : null}
                type="button"
                onClick={() => handleSelect(number)}
                className={`flex h-[36px] w-full items-center justify-center text-sm transition ${
                  isSelected
                    ? 'bg-red-500 text-white'
                    : 'text-black hover:bg-gray-100'
                }`}
              >
                {formatValue(number)}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default QuantitySelector;