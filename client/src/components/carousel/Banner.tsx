import { useEffect, useState } from 'react';
import { RxChevronLeft, RxChevronRight } from 'react-icons/rx';
import { FaCircle } from 'react-icons/fa';
import { FaPause, FaPlay } from 'react-icons/fa6';

type BannerProps = {
  posters: string[];
};

const chevronStyling =
  'absolute top-1/2  transform -translate-y-1/2 z-35 group  text-[#ffff] opacity-20  group-hover:opacity-100 group-hover:text-[#ffffff] group-hover:border-[#ffffff] group-hover:bg-[#fffff0000] cursor-pointer  group-hover:scale-125';

const overlayStyling =
  'absolute bg-white opacity-0 w-[3.2rem] h-full  group-hover:opacity-15 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer';

export const Banner = ({ posters }: BannerProps) => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (isPlaying) {
      const intervalId = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % posters.length);
      }, 7000);
      return () => clearInterval(intervalId);
    }
  }, [isPlaying, posters.length]);

  const handlePrevClick = () => {
    index > 0 ? setIndex(index - 1) : setIndex(posters.length - 1);
  };

  const handleNextClick = () => {
    index < posters.length - 1 ? setIndex(index + 1) : setIndex(0);
  };

  const handleCircleClick = (idx: number) => {
    setIndex(idx);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative roumt-4 my-2 w-3/4 md:w-2/5 lg:w-[38%] xl:w-[38%] 2xl:w-[38%] overflow-visible">
      <img
        className="w-full mx-auto  h-full rounded-md object-contain"
        src={posters[index]}
      />
      <div className="group">
        <RxChevronLeft
          className={`${chevronStyling} left-2 group-hover:-translate-x-1 transition-transform `}
          onClick={handlePrevClick}
          size={40}
        />
        <div
          className={`${overlayStyling} h-full left-0 rounded-l-2xl`}
          onClick={handlePrevClick}></div>
      </div>
      <div className="group">
        <RxChevronRight
          className={`${chevronStyling} right-2 group-hover:translate-x-1 transition-transform `}
          onClick={handleNextClick}
          size={40}
        />
        <div
          className={`${overlayStyling} right-0 h-full rounded-r-2xl`}
          onClick={handleNextClick}></div>
      </div>
      <div className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 flex gap-1 space-x-1">
        {posters.map((_, idx) =>
          index === idx ? (
            <FaCircle
              className="text-white cursor-pointer"
              size={10}
              onClick={() => handleCircleClick(idx)}
            />
          ) : (
            <FaCircle
              className="text-white cursor-pointer opacity-10"
              size={10}
              onClick={() => handleCircleClick(idx)}
            />
          )
        )}
      </div>
      <div
        onClick={togglePlayPause}
        className="cursor-pointer text-white opacity-30 border px-3 py-1 border-1 border-white rounded-full hover:opacity-100 absolute -bottom-11 right-[42%] md:right-[46%] flex space-x-1.5">
        {isPlaying ? (
          <>
            <FaPause size={10} />
            <FaPlay className="opacity-10" size={10} />
          </>
        ) : (
          <>
            <FaPause className="opacity-10" size={10} />
            <FaPlay size={10} />
          </>
        )}
      </div>
    </div>
  );
};
