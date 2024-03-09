import { RotatingBanner } from './RotatingBanner';

export const EventsCarousel = () => {
  const posters = [
    '/images/2024-03-09.png',
    '/images/2024-03-16.png',
    '/images/2024-03-23.png',
    '/images/2024-03-30.png',
    '/images/2024-04-06.png',
    '/images/2024-04-13.png',
  ];

  return (
    <div className="mt-2">
      <RotatingBanner posters={posters} />
    </div>
  );
};
