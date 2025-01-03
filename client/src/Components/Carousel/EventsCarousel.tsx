import { RotatingBanner } from './RotatingBanner';

export const EventsCarousel = () => {
  const posters = [
    'images/1-11-25.png',
    'images/1-18-25.png',
    'images/2-1-25.png',
    'images/2-8-25.png',
  ];

  return (
    <div className="mt-2">
      <RotatingBanner posters={posters} />
    </div>
  );
};
