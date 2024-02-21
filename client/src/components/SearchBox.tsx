import { useEffect, ChangeEvent, useState, KeyboardEvent } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

type SearchBoxProps = {
  setInputValue: (value: string) => void;
  suggestions: string[];
};

export const SearchBox = ({ setInputValue, suggestions }: SearchBoxProps) => {
  const [inputValue, setInputValueLocal] = useState<string | undefined>(
    undefined
  );
  const [placeholder, setPlaceholder] = useState('Search by fighter...');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);

  const handleClick = () => {
    setPlaceholder('');
  };

  const handleBlur = () => {
    setPlaceholder('Search by fighter...');
    setTimeout(() => setShowSuggestions(false), 100);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredSuggestions.length > 0 && activeSuggestionIndex >= 0) {
        const selectedSuggestion = filteredSuggestions[activeSuggestionIndex];
        setInputValue(selectedSuggestion); // Update the external state, if necessary
        setInputValueLocal(selectedSuggestion); // Update the local component state
        setShowSuggestions(false); // Hide the suggestions list
        setActiveSuggestionIndex(0); // Reset the active suggestion index
      }
    } else if (e.key === 'ArrowDown') {
      setActiveSuggestionIndex((prevIndex) =>
        prevIndex === filteredSuggestions.length - 1 ? 0 : prevIndex + 1
      );
    } else if (e.key === 'ArrowUp') {
      setActiveSuggestionIndex((prevIndex) =>
        prevIndex === 0 ? filteredSuggestions.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    if (!inputValue) {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    const timeoutId = setTimeout(() => {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(inputValue?.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
      setActiveSuggestionIndex(0);
    }, 700);

    return () => clearTimeout(timeoutId);
  }, [inputValue, suggestions]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setInputValueLocal(userInput);
    setInputValue(userInput); // Optionally keep this if you need to lift state up

    if (!userInput) {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    // No immediate filtering here; let useEffect handle it to debounce the input
  };

  const onSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
    setActiveSuggestionIndex(0);
  };

  return (
    <div className="flex flex-col items-center justify-center relative">
      <div className="relative w-[75%] md:w-[21%]">
        <FaMagnifyingGlass
          className="absolute left-4 top-7 [#2E2E31] transform -translate-y-1/2 text-zinc-500"
          style={{ fontSize: '1rem' }}
        />
        <input
          className="w-full md:bg-contain bg-no-repeat text-zinc-900
           p-2 text-sm md:text-lg tracking-wider pl-12 border rounded-full ;"
          placeholder={placeholder}
          onClick={handleClick}
          onBlur={handleBlur}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      </div>
      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className=" flex flex-col flex-nowrap items-center justify-start ">
          <ul className="absolute z-10 w-[65%] md:w-[18%] pl-7 top-full tracking-tighter shadow-lg bg-white md:text-lg text-sm text-zinc-900 transition-opacity duration-300 ease-in-out">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className={
                  index === activeSuggestionIndex
                    ? 'active cursor-pointer tracking-tighte w-[90%]'
                    : 'cursor-pointer'
                }
                onClick={() => onSuggestionClick(suggestion)}>
                {index === activeSuggestionIndex
                  ? suggestion.split('').map((char, i) => (
                      <span
                        className="bg-slate-200 text-black tracking-tighter"
                        key={i}>
                        {char}
                        {i !== suggestion.length - 1 && <b>&nbsp;</b>}
                      </span>
                    ))
                  : suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
