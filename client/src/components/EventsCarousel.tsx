import { RotatingBanner } from './RotatingBanner';

export function EventsCarousel() {
  const posters = ['/images/ufc298.webp', '/images/ufc299.png'];

  // const wrapperStyling = ' bg-[#17191A] ';

  return (
    <div className="mt-16">
      <RotatingBanner posters={posters} />
    </div>
  );
}
