import { EventsCarousel } from '../components/carousels/EventsCarousel';
import { OddsTable } from '../components/OddsTable';
import { useEffect, useState } from 'react';
import { events } from '../utilities/api-data';

console.log('api data', events);
export type Event = {
  eventId: string;
  commenceTime: Date;
  outcomes: [
    { name: string; moneyline: number },
    { name: string; moneyline: number }
  ];
};

export type Outcome = [
  { name: string; moneyline: number },
  { name: string; moneyline: number }
];

export function HomePage() {
  const [data, setData] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setData(events.slice(0, 67));
      } catch (error) {
        console.error(error);
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex-col justify-center items-center">
      <EventsCarousel />
      <div className="flex-col 2xl:w-[60%] items-center mx-auto">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <OddsTable events={data} />
      </div>
    </div>
  );
}
