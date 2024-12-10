import { useEffect, ChangeEvent, useState, KeyboardEvent, useRef } from 'react';
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
   const [previousValue, setPreviousValue] = useState<string>('');
  const [placeholder, setPlaceholder] = useState('Fighters...');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const { suggestions } = useFetchEvents();
  const inputRef = useRef<HTMLInputElement>(null);

 const handleClick = () => {
   setPreviousValue(inputValueLocal); // Save current value before modifying
   setPlaceholder('');
 };

 const clearInput = () => {
   setPreviousValue(''); // Reset previous value when clearing
   setInputValueLocal('');
   setInputValue('');
   setPlaceholder('');
   setFilteredSuggestions([]);
   setShowSuggestions(false);
   inputRef.current?.focus();
 };

 const handleBlur = () => {
   // Restore previous state
   setInputValueLocal(previousValue);
   setInputValue(previousValue);
   setPlaceholder('Fighters...');
   setFilteredSuggestions([]); // Reset suggestions
   setShowSuggestions(false);
   setActiveSuggestionIndex(0);
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

  return (
    <div className={`relative w-3/4 md:w-1/3 xl:w-full ${className}`}>
      <div className="relative w-full group">
        <FaMagnifyingGlass className="absolute z-20 text-thead left-4 top-5 text-gray-400 group-focus-within:text-black transition-colors duration-200" />
        <input
          ref={inputRef}
          className={`w-full bg-gray-800 bg-black xl:bg-[#080808] focus:bg-white focus:border-b-rounded-none text-black text-custom p-2 focus:outline-none
             pl-12 md:pl-16 pr-14 py-1 ${
               showSuggestions && filteredSuggestions.length > 0
                 ? 'rounded-t-2xl'
                 : 'rounded-full'
             }`}
          placeholder={placeholder}
          onBlur={handleBlur}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={inputValueLocal}
          onClick={handleClick}
        />
        {inputValueLocal && (
          <button
            className="absolute border border-transparent hover:border-blue-100 rounded-full right-2 top-4 text-black hover:bg-blue-100 transition-colors z-30"
            onClick={clearInput}
            type="button"
            aria-label="Clear search">
            <IoIosClose size={25} />
          </button>
        )}
      </div>
      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className="absolute top-10 z-10 w-full bg-white rounded-b-xl shadow-lg">
          <ul
            className="w-full pt-2 text-custom"
            onMouseDown={(e) => e.preventDefault()}>
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className={`cursor-pointer text-black my-3 pl-12 md:pl-16 ${
                  index === activeSuggestionIndex ? 'bg-blue-100' : ''
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
