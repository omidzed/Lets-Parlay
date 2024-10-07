import { RotatingBanner } from './RotatingBanner';

export const EventsCarousel = () => {
  const posters = [
    'images/2024-10-12.png',
    'images/2024-10-19.png',
    'images/2024-10-26.png',
    'images/2024-11-2.png',
  ];

  return (
    <div className="mt-2">
      <RotatingBanner posters={posters} />
    </div>
  );
};
