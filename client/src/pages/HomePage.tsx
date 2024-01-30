import { EventsCarousel } from '../components/carousels/EventsCarousel';
import { BettingOddsTable } from '../components/carousels/BettingOddsTable';
import { Odds } from './Data';

export function HomePage() {
  const data = {
    id: 'ae09b57f4420642c6df3379c789e1b79',
    sport_key: 'mma_mixed_martial_arts',
    sport_title: 'MMA',
    commence_time: '2024-02-18T04:45:00Z',
    home_team: 'Ilia Topuria',
    away_team: 'Alex Volkanovski',
    bookmakers: [
      {
        key: 'fanduel',
        title: 'FanDuel',
        last_update: '2024-01-19T13:34:49Z',
        markets: [
          {
            key: 'h2h',
            last_update: '2024-01-19T13:34:49Z',
            outcomes: [
              {
                name: 'Alex Volkanovski',
                price: -148,
              },
              {
                name: 'Ilia Topuria',
                price: 114,
              },
            ],
          },
        ],
      },
    ],
  };

  const bookmakers = data.bookmakers;
  if (bookmakers && bookmakers.length > 0) {
    const markets = bookmakers[0].markets;
    if (markets && markets.length > 0) {
      const outcomes = markets[0].outcomes;
      if (outcomes && outcomes.length > 1) {
        const name = outcomes[1].name; // "Ilia Topuria"
        const price = outcomes[1].price; // 114

        console.log(`Name: ${name}, Price: ${price}`);
      }
    }
  }

  return (
    <div className="flex-col justify-center items-center">
      <EventsCarousel />
      <div className="flex-col ml-96">
        <Odds />
        <BettingOddsTable />
        <BettingOddsTable />
        <BettingOddsTable />
      </div>
    </div>
  );
}
