import { RotatingBanner } from './RotatingBanner';

export const EventsCarousel = () => {
  const posters = ['images/3-29-25.png', 'images/4-12-25.png'];

  return (
    <div className="mt-2">
      <RotatingBanner posters={posters} />
    </div>
  );
};
