import { RotatingBanner } from './RotatingBanner';

export const EventsCarousel = () => {
  const posters = ['images/2024-09-07.png'];

  return (
    <div className="mt-2">
      <RotatingBanner posters={posters} />
    </div>
  );
};
