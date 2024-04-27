import { useEffect, useState } from 'react';
import { RxChevronLeft, RxChevronRight } from 'react-icons/rx';

type BannerProps = {
  posters: string[];
};

const chevronStyling =
  'absolute top-1/2  transform -translate-y-1/2 z-35 group rounded-full text-[#ffff] opacity-40 border-2 border-[#ffffff79] group-hover:opacity-100 group-hover:text-[#ffffff] group-hover:border-[#ffffff] group-hover:bg-[#fffff0000] cursor-pointer  group-hover:scale-110';

const overlayStyling =
  'absolute bg-white opacity-0 w-[2.9rem] h-full  group-hover:opacity-10 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer group-hover:scale-115';

export const Banner = ({ posters }: BannerProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % posters.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [posters.length]);
  const handlePrevClick = () => {
    index > 0 ? setIndex(index - 1) : setIndex(posters.length - 1);
  };

  const handleNextClick = () => {
    index < posters.length - 1 ? setIndex(index + 1) : setIndex(0);
  };

  return (
    <div className="relative mt-4 w-3/4 md:w-2/5 lg:w-[38%] xl:w-[38%] 2xl:w-[38%] overflow-hidden">
      <img
        className="w-full mx-auto h-full rounded-md object-contain"
        src={posters[index]}
      />
      <div className="group">
        <RxChevronLeft
          className={`${chevronStyling} left-2 `}
          onClick={handlePrevClick}
        />
        <div
          className={`${overlayStyling} h-full left-0`}
          onClick={handlePrevClick}></div>
      </div>
      <div className="group">
        <RxChevronRight
          className={`${chevronStyling} right-2`}
          onClick={handleNextClick}
        />
        <div
          className={`${overlayStyling} right-0`}
          onClick={handleNextClick}></div>
      </div>
    </div>
  );
};
