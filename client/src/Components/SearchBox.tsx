import { useEffect, ChangeEvent, useState, KeyboardEvent } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useFetchEvents } from '../Hooks/useFetchEvents';
import { IoIosClose } from 'react-icons/io';

type SearchBoxProps = {
  setInputValue: (value: string) => void;
  className?: string;
};

export const SearchBox = ({
  setInputValue,
  className = '',
}: SearchBoxProps) => {
  const [inputValueLocal, setInputValueLocal] = useState<string>('');
  const [placeholder, setPlaceholder] = useState('Fighters...');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const { suggestions } = useFetchEvents();

  const handleClick = () => {
    setPlaceholder('');
  };

  const handleBlur = () => {
    setPlaceholder('Fighters...');
    setTimeout(() => setShowSuggestions(false), 100);
  };

 const onSuggestionClick = (e: React.MouseEvent, suggestion: string) => {
   e.preventDefault();
   e.stopPropagation();
   setInputValueLocal(suggestion);
   setInputValue(suggestion);
   setShowSuggestions(false);
   setActiveSuggestionIndex(0);
 };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredSuggestions.length > 0 && activeSuggestionIndex >= 0) {
        setInputValueLocal(filteredSuggestions[activeSuggestionIndex]); // Update the input field with the selected suggestion
        setInputValue(filteredSuggestions[activeSuggestionIndex]); // Update the external state, if necessary
        setShowSuggestions(false); // Hide the suggestions list
      }
    } else if (e.key === 'ArrowDown') {
      setActiveSuggestionIndex(
        (prevIndex) => (prevIndex + 1) % filteredSuggestions.length
      );
    } else if (e.key === 'ArrowUp') {
      setActiveSuggestionIndex(
        (prevIndex) =>
          (prevIndex - 1 + filteredSuggestions.length) %
          filteredSuggestions.length
      );
    }
  };

  useEffect(() => {
    if (!inputValueLocal) {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    const timeoutId = setTimeout(() => {
      const filtered = suggestions.filter((suggestion) =>
        suggestion?.toLowerCase().includes(inputValueLocal?.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
      setActiveSuggestionIndex(0);
    }, 700);

    return () => clearTimeout(timeoutId);
  }, [inputValueLocal, suggestions]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setInputValueLocal(userInput);
    setInputValue(userInput);

    if (!userInput) {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
    // No immediate filtering here; useEffect => debounce the input
  };

  const clearInput = () => {
    setInputValueLocal('');
    setInputValue('');
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center relative ${className}`}>
      <div className="relative w-full md:w-1/3 lg:w-full transition-all duration-300">
        <FaMagnifyingGlass className="absolute z-20 md:text-bigger text-thead left-4 top-5 [#2E2E31] text-black" />
        <input
          className=" md:w-full absolute-50 bg-gray-300 focus:bg-white md:bg-contain text-black lg:text-custom p-2 text-sm focus:outline-none
            2xl:text-lg pl-12 md:pl-16 pr-14 py-1 focus:py-2.5 rounded-2xl"
          placeholder={placeholder}
          onBlur={handleBlur}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={inputValueLocal}
          onClick={handleClick}
        />
        {inputValueLocal && (
          <button
            className="absolute right-4 top-7 -translate-y-1/2 text-gray-500 hover:text-gray-900 transition-colors z-30"
            onClick={clearInput}
            type="button"
            aria-label="Clear search">
            <IoIosClose size={30} />
          </button>
        )}
      </div>
      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className=" flex flex-col flex-nowrap items-center justify-start">
          <ul
            className="absolute z-10 pt-2 md:w-[55%]  lg:w-full top-9 md:top-10 rounded-b-xl bg-white lg:text-custom 2xl:text-lg text-sm"
            onMouseDown={(e) => e.preventDefault()}>
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className={`cursor-pointer text-black my-3 pl-12 md:pl-16 ${
                  index === activeSuggestionIndex ? 'bg-blue-200' : ''
                }`}
                onMouseDown={(e) => onSuggestionClick(e, suggestion)}>
                {index === activeSuggestionIndex
                  ? suggestion
                      .split('')
                      .map((char, i) => <span key={i}>{char}</span>)
                  : suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
