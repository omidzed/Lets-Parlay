import { RotatingBanner } from './RotatingBanner';

export const EventsCarousel = () => {
  const posters = [
    'images/2024-09-07.png',
    'images/2024-09-14.png',
    'images/2024-09-28.png',
  ];

  return (
    <div className="mt-2">
      <RotatingBanner posters={posters} />
    </div>
  );
};
