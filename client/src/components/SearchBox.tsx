import { ChangeEvent, useState, KeyboardEvent } from 'react';

type SearchBoxProps = {
  value: string;
  setInputValue: (value: string) => void;
  suggestions: string[];
};

export const SearchBox = ({
  value,
  setInputValue,
  suggestions,
}: SearchBoxProps) => {
  const [placeholder, setPlaceholder] = useState('Search by fighter...');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);

  const handleClick = () => {
    setPlaceholder('');
  };

  const handleBlur = () => {
    setPlaceholder('Search by fighter...');
    setShowSuggestions(false);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setInputValue(filteredSuggestions[activeSuggestionIndex]);
      setShowSuggestions(false);
      setActiveSuggestionIndex(0);
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

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setInputValue(userInput);
    const filtered = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(userInput.toLowerCase())
    );
    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
    setActiveSuggestionIndex(0);
  };

  const onSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
    setActiveSuggestionIndex(0);
  };

  return (
    <div className="flex flex-col items-center justify-start">
      <input
        className="bg-white text-black w-[70%] bg-no-repeat bg-[length:20px_20px] bg-[position:20px_15px] pl-8 md:w-1/5 h-8 md:h-10 text-base border border-gray-200 rounded-full mb-2.5"
        id="search-box"
        placeholder={placeholder}
        onClick={handleClick}
        onBlur={handleBlur}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className="flex justify-start items-start">
          <ul className="bg-[#2E2E31] text-left mr-28 text-lg rounded-lg">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className={index === activeSuggestionIndex ? 'active' : ''}
                onClick={() => onSuggestionClick(suggestion)}>
                {index === activeSuggestionIndex
                  ? suggestion
                      .toLowerCase()
                      .split('')
                      .map((char, i) => (
                        <span className="bg-white text-black" key={i}>
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
