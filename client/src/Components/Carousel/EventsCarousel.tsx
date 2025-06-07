import { RotatingBanner } from './RotatingBanner';

export const EventsCarousel = () => {
  const posters = ['images/6-7-25.png', 'images/6-14-25.png'];

  return (
    <div className="mt-2">
      <RotatingBanner posters={posters} />
    </div>
  );
};
