import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

function LanguageDropdown() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = ['English', 'Spanish', 'French', 'German'];

  const handleSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

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
    <div className="relative inline-block content-center mr-[136px]" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1 text-sm text-white"
      >
        <span>{selectedLanguage}</span>
        <ChevronDown size={16}  className={`transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
        }`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-20 mt-2 w-36 rounded-md bg-white py-2 shadow-lg">
          {languages.map((language) => (
            <button
              key={language}
              type="button"
              onClick={() => handleSelect(language)}
              className="block w-full px-4 py-2 text-left text-sm text-black hover:bg-gray-100"
            >
              {language}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageDropdown;