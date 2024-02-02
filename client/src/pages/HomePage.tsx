import { EventsCarousel } from '../components/carousels/EventsCarousel';
import { OddsTable } from '../components/OddsTable';
import { useEffect, useState } from 'react';

export type Event = {
  eventId: string;
  commenceTime: Date;
  outcomes: [
    { name: string; moneyline: number },
    { name: string; moneyline: number }
  ];
};

export function HomePage() {
  const [data, setData] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://api.the-odds-api.com/v4/sports/mma_mixed_martial_arts/odds/?apiKey=92e9e45ffad129163005d31aa7443f13&regions=us&markets=h2h&oddsFormat=american'
        );
        if (!response.ok) {
          throw new Error('network response was not ok.');
        }
        const result = await response.json();
        const filteredData = result.map((event) => {
          const eventId = event.id;
          const commenceTime = event.commence_time;
          const apiOutcomes =
            event.bookmakers?.[0]?.markets?.[0]?.outcomes || [];
          return {
            eventId,
            commenceTime,
            outcomes: [
              { name: apiOutcomes[0]?.name, moneyline: apiOutcomes[0]?.price },
              { name: apiOutcomes[1]?.name, moneyline: apiOutcomes[1]?.price },
            ],
          };
        });
        setData(filteredData.slice(0, 67));
      } catch (error) {
        console.error(error);
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  console.log('data', data);

  return (
    <div className="flex-col justify-center items-center">
      <EventsCarousel />
      <div className="flex-col w-[60%] items-center mx-auto">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <OddsTable events={data} />
      </div>
    </div>
  );
}
