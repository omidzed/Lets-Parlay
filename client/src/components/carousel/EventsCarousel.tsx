import { RotatingBanner } from './RotatingBanner';

export const EventsCarousel = () => {
  const posters = [
    '/images/2024-04-13.png',
    '/images/2024-04-27.png',
    '/images/2024-05-04.png',
    '/images/2024-05-11.png',
    '/images/2024-05-18.png',
    '/images/2024-06-22.png',
  ];

  return (
    <div className="mt-2">
      <RotatingBanner posters={posters} />
    </div>
  );
};
