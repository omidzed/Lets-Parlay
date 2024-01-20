import { RotatingBanner } from './RotatingBanner';

export function EventsCarousel() {
  const posters = [
    '/images/ufc297.png',
    '/images/ufc298.webp',
    '/images/ufc299.jpg',
  ];
  return (
    <div className="react-carousel">
      <RotatingBanner posters={posters} />
    </div>
  );
}
