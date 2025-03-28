import { useEffect, useState } from 'react';
import { RxChevronLeft, RxChevronRight } from 'react-icons/rx';
import { FaCircle } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa6';

type BannerProps = {
  posters: string[];
};

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
    <div className="relative my-3 w-4/5 md:w-2/5">
      <img
        className="w-full mx-auto h-full rounded-lg lg:rounded-xl object-contain cursor-pointer"
        src={posters[index]}
        onClick={togglePlayPause}
      />
      {!isPlaying && (
        <div>
          <FaPlay
            size={50}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-90 cursor-pointer"
            onClick={togglePlayPause}
          />
        </div>
      )}
      <div className="group">
        <RxChevronLeft
          className={`${chevronStyling} left-4 group-hover:-translate-x-1 group-hover:border  group-hover:rounded-full transition-transform `}
          onClick={handlePrevClick}
          size={30}
        />
        <div
          className={`${overlayStyling} h-full left-0 rounded-l-xl`}
          onClick={handlePrevClick}></div>
      </div>
      <div className="group">
        <RxChevronRight
          className={`${chevronStyling} right-4 group-hover:translate-x-1 group-hover:border  group-hover:rounded-full transition-transform`}
          onClick={handleNextClick}
          size={30}
        />
        <div
          className={`${overlayStyling} right-0 h-full rounded-r-xl`}
          onClick={handleNextClick}></div>
      </div>
      <div className="absolute bottom-[.5rem] md:bottom-[.5rem] left-1/2 transform -translate-x-1/2 flex gap-1 space-x-0">
        {posters.map((_, idx) =>
          index === idx ? (
            <FaCircle
              key={idx}
              className="text-white cursor-pointer"
              size={5}
              onClick={() => handleCircleClick(idx)}
            />
          ) : (
            <FaCircle
              key={idx}
              className="text-white cursor-pointer opacity-30 hover:scale-125"
              size={5}
              onClick={() => handleCircleClick(idx)}
            />
          )
        )}
      </div>
    </div>
  );
};

const chevronStyling =
  'absolute top-1/2  ease-in-out duration-200 hover:text-yellow-400 transform -translate-y-1/2 z-35 text-[#ffff] opacity-25 group-hover:opacity-100 cursor-pointer group-hover:scale-125';

const overlayStyling =
  'absolute bg-white opacity-0 w-[3.3rem] h-full  group-hover:opacity-15 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer';
