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
        className="bg-white w-[70%] bg-no-repeat bg-[length:20px_20px]
        bg-[position:20px_15px] pl-8 md:w-1/5 h-8 md:h-10 text-base
        border border-gray-200 rounded-full mb-2.5"
        id="search-box"
        placeholder={placeholder}
        onClick={handleClick}
        onBlur={handleBlur}
        value={value}
        onChange={onInputChange}></input>
    </div>
  );
};
