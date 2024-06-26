import { useEffect, ChangeEvent, useState, KeyboardEvent } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useFetchEvents } from '../hooks/useFetchEvents';
import { IoIosClose } from 'react-icons/io';

type SearchBoxProps = {
  setInputValue: (value: string) => void;
};

export const SearchBox = ({ setInputValue }: SearchBoxProps) => {
  const [inputValueLocal, setInputValueLocal] = useState<string>('');
  const [placeholder, setPlaceholder] = useState('Search fighters...');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const { suggestions } = useFetchEvents();

  const handleClick = () => {
    setPlaceholder('');
  };

  const handleBlur = () => {
    setPlaceholder('Search fighters...');
    setTimeout(() => setShowSuggestions(false), 100);
  };

  const onSuggestionClick = (suggestion: string) => {
    setInputValueLocal(suggestion); // This updates the search box to show the full suggestion
    setInputValue(suggestion); // Update the external state, if necessary
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
      return;
    }
    // No immediate filtering here; useEffect => debounce the input
  };

  return (
    <div className="flex flex-col items-center justify-center relative">
      <div className="relative w-[55%] md:w-1/3 lg:w-1/4">
        <FaMagnifyingGlass className="absolute z-20 md:text-bigger text-thead left-4 top-5 [#2E2E31] text-zinc-500" />
        <input
          className="w-full absolute-50 md:bg-contain text-black lg:text-custom p-2 text-sm focus:outline-none
            2xl:text-lg pl-10 md:pl-16 pr-14 py-3 rounded-2xl"
          placeholder={placeholder}
          onBlur={handleBlur}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={inputValueLocal}
          onClick={handleClick}
        />
        <IoIosClose
          onClick={() => {
            setInputValueLocal('');
            setInputValue('');
          }}
          className={`absolute z-20 text-gray-500 text-4xl cursor-pointer right-5 top-3 ${
            inputValueLocal ? '' : 'hidden'
          }`}
        />
      </div>
      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className=" flex flex-col flex-nowrap items-center justify-start">
          <ul className="absolute z-10 pt-2 w-[55%] md:w-1/3 lg:w-1/4 top-9 md:top-10  rounded-b-xl bg-white lg:text-custom 2xl:text-lg text-sm">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className={`cursor-pointer text-black my-2 pl-10 md:pl-16 ${
                  index === activeSuggestionIndex ? 'bg-blue-100' : ''
                }`}
                onClick={() => onSuggestionClick(suggestion)}>
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
