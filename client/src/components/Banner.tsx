import React, { useEffect, useState } from 'react';
import { RxChevronLeft, RxChevronRight } from 'react-icons/rx';

type BannerProps = {
  posters: string[];
};

const chevronStyling =
  'absolute top-1/2 transform -translate-y-1/2 z-50 group rounded-full  text-[#ffff] opacity-40 border-2 border-[#ffffff79] rounded-full group-hover:opacity-100 group-hover:text-[#ffffff] group-hover:border-[#ffffff] group-hover:bg-[#fffff0000] cursor-pointer';

const overlayStyling =
  'absolute w-[2.9rem] h-full bg-white opacity-0 group-hover:bg-[#626262be] group-hover:opacity-70 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer';

export function Banner({ posters }: BannerProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % posters.length);
    }, 700000);

    return () => clearInterval(intervalId);
  }, [posters.length]);
  function handlePrevClick() {
    index > 0 ? setIndex(index - 1) : setIndex(posters.length - 1);
  }

  function handleNextClick() {
    console.log('index', index);
    console.log('posters', posters.length);
    index < posters.length - 1 ? setIndex(index + 1) : setIndex(0);
  }

  return (
    <div className="relative w-[67.66%] h-[35rem] overflow-hidden">
      <img className="w-full h-full object-contain" src={posters[index]} />
      <div className="group">
        <RxChevronLeft
          className={`${chevronStyling} left-[3.2rem] `}
          onClick={handlePrevClick}
        />
        <div
          className={`${overlayStyling} left-11`}
          onClick={handlePrevClick}></div>
      </div>
      <div className="group">
        <RxChevronRight
          className={`${chevronStyling} right-[3.2rem]`}
          onClick={handleNextClick}
        />
        <div
          className={`${overlayStyling} right-11`}
          onClick={handleNextClick}></div>
      </div>
    </div>
  );
}
