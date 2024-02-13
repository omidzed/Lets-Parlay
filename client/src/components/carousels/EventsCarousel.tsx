import { RotatingBanner } from './RotatingBanner';

export function EventsCarousel() {
  const posters = [
    '/images/2024-02-17.png',
    '/images/2024-02-24.png',
    '/images/2024-03-09.png',
    '/images/2024-03-16.png',
    '/images/2024-03-23.png',
    '/images/2024-03-30.png',
    '/images/2024-04-06.png',
    '/images/UFC-300.jpg',
  ];

  return (
    <div className="mt-2">
      <RotatingBanner posters={posters} />
    </div>
  );
}
