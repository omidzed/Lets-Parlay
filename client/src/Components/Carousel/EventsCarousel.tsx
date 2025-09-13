import { RotatingBanner } from './RotatingBanner';

export const EventsCarousel = () => {
  const posters = ['images/9-27-25.png', 'images/10-4-25.png'];

  return (
    <div className="mt-2">
      <RotatingBanner posters={posters} />
    </div>
  );
};
