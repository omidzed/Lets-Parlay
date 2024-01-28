import { RotatingBanner } from './RotatingBanner';

export function EventsCarousel() {
  const posters = [
    '/images/2024-02-03.png',
    '/images/2024-02-10.png',
    '/images/2024-02-17.png',
    '/images/2024-02-24.png',
    '/images/2024-03-09.png',
    '/images/2024-03-16.png',
    '/images/2024-03-23.png',
    '/images/2024-03-30.png',
    '/images/2024-04-06.png',
  ];

  return (
    <div className="mt-2">
      <RotatingBanner posters={posters} />
    </div>
  );
}
