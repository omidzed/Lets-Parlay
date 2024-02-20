import { useEffect, ChangeEvent, useState, KeyboardEvent } from 'react';

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
      <input
        className="relative h-10 w-[75%] md:max-w-xs bg-[url('./search-solid.svg')] md:bg-contain bg-no-repeat text-zinc-900
           p-2 text-sm md:text-lg tracking-wider bg-white pl-12 border rounded-full ;"
        style={{
          backgroundSize: '1rem',
          backgroundPosition: '1rem',
        }}
        placeholder={placeholder}
        onClick={handleClick}
        onBlur={handleBlur}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />

      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className=" flex flex-col flex-nowrap items-center justify-start ">
          <ul className="absolute z-10 w-[80%] md:w-[18%] pl-8 top-full tracking-tighter shadow-lg bg-white md:text-lg text-sm p-2 text-zinc-900 transition-opacity duration-300 ease-in-out">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className={
                  index === activeSuggestionIndex
                    ? 'active cursor-pointer tracking-tighter bg-slate-100 w-[90%]'
                    : 'cursor-pointer'
                }
                onClick={() => onSuggestionClick(suggestion)}>
                {index === activeSuggestionIndex
                  ? suggestion.split('').map((char, i) => (
                      <span
                        className="bg-slate-100 text-black tracking-tighter"
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
