import { EventsCarousel } from '../components/carousels/EventsCarousel';
import { BettingOddsTable } from '../components/carousels/BettingOddsTable';

export function HomePage() {
  return (
    <div>
      <EventsCarousel />
      <BettingOddsTable />
    </div>
  );
}
