import { RotatingBanner } from './RotatingBanner';

export const EventsCarousel = () => {
  const posters = [
    '/images/2024-05-18.png',
    '/images/2024-06-01.png',
    '/images/2024-06-22.png',
    '/images/2024-06-29.png',
  ];

  return (
    <div className="mt-2">
      <RotatingBanner posters={posters} />
    </div>
  );
};
