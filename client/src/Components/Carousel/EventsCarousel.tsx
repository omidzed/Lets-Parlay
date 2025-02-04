import { RotatingBanner } from './RotatingBanner';

export const EventsCarousel = () => {
  const posters = [
    'images/2-8-25.png',
    'images/2-15-25.png',
    'images/2-22-25.png',
  ];

  return (
    <div className="mt-2">
      <RotatingBanner posters={posters} />
    </div>
  );
};
