import { ChangeEvent, useState } from 'react';

type SearchBoxProps = {
  value: string;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
export const SearchBox = ({ value, onInputChange }: SearchBoxProps) => {
  const [placeholder, setPlaceholder] = useState('Search by fighter...');

  const handleClick = () => {
    setPlaceholder('');
  };

  const handleBlur = () => {
    setPlaceholder('Search by fighter...');
  };

  return (
    <div className="flex justify-center">
      <input
        id="search-box"
        placeholder={placeholder}
        onClick={handleClick}
        onBlur={handleBlur}
        value={value}
        onChange={onInputChange}></input>
    </div>
  );
};
