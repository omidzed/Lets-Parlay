import { RotatingBanner } from './RotatingBanner';

export const EventsCarousel = () => {
  const posters = [
    'images/3-15-25.png',
    'images/3-22-25.png',
    'images/3-29-25.png',
  ];

  return (
    <div className="mt-2">
      <RotatingBanner posters={posters} />
    </div>
  );
};
