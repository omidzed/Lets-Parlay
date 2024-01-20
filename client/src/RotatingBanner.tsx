import { useEffect, useState } from 'react';
import { Banner } from './Banner';

type RotatingBannerProps = {
  posters: string[];
};

export function RotatingBanner({ posters }: RotatingBannerProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % posters.length);
    }, 100000);

    return () => clearInterval(intervalId);
  }, [posters.length]);

  // function handlePrevClick() {
  //   index > 0 ? setIndex(index - 1) : setIndex(posters.length - 1);
  // }

  // function handleNextClick() {
  //   index < posters.length - 1 ? setIndex(index + 1) : setIndex(0);
  // }

  return (
    <div className="carousel">
      <div className="chevron-banner">
        <Banner index={index} posters={posters} />
      </div>
    </div>
  );
}
// <PrevButton  />onPrevClick={handlePrevClick}
// onNextClick={handleNextClick} index={index}
//  <NextButton  /> index={index}
