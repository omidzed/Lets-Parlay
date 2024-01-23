import React from 'react';
import { useEffect, useState } from 'react';
import { Banner } from './Banner';
import { RxChevronRight, RxChevronLeft } from 'react-icons/rx';

type RotatingBannerProps = {
  posters: string[];
};

export function RotatingBanner({ posters }: RotatingBannerProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % posters.length);
    }, 7000);

    return () => clearInterval(intervalId);
  }, [posters.length]);

  function handlePrevClick() {
    index > 0 ? setIndex(index - 1) : setIndex(posters.length - 1);
  }

  function handleNextClick() {
    index < posters.length - 1 ? setIndex(index + 1) : setIndex(0);
  }

  return (
    <div className="relative flex justify-center">
      <Banner index={index} posters={posters} />
      <div
        className="text-white absolute  left-96 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
        onClick={handlePrevClick}>
        <RxChevronLeft />
      </div>
      <div
        className="text-white absolute right-96 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
        onClick={handleNextClick}>
        <RxChevronRight />
      </div>
    </div>
  );
}
