import { EventsCarousel } from '../components/carousels/EventsCarousel';
import { BettingOddsTable } from '../components/carousels/BettingOddsTable';

export function HomePage() {
  return (
    <div>
      <EventsCarousel />
      <div className="flex-col justify-center items-center">
        <BettingOddsTable />
        <BettingOddsTable />
        <BettingOddsTable />
      </div>
    </div>
  );
}
