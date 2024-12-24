import { RotatingBanner } from './RotatingBanner';

export const EventsCarousel = () => {
  const posters = ['1-11-25.png', '1-18-25.png'];

  return (
    <div className="mt-2">
      <RotatingBanner posters={posters} />
    </div>
  );
};
