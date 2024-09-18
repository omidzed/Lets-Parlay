import { RotatingBanner } from './RotatingBanner';

export const EventsCarousel = () => {
  const posters = [
    'images/2024-09-28.png',
    'images/2024-10-12.png',
    'images/2024-10-5.png',
  ];

  return (
    <div className="mt-2">
      <RotatingBanner posters={posters} />
    </div>
  );
};
