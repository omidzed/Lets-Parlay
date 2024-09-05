import { useState, useEffect } from 'react';
import type { ApiEvent, Event } from '../utils/data-types';
import { apiKey } from '../utils/api-data';

export const useFetchEvents = () => {
  const [events, setEvents] = useState<Event[] | undefined>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>();
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const cachedEvents = localStorage.getItem('events');
        if (cachedEvents) {
          const parsedCache = JSON.parse(cachedEvents);
          const isCacheRecent =
            new Date().getTime() - parsedCache.timestamp < 259200000; // 3 days in milliseconds
          if (isCacheRecent) {
            setEvents(parsedCache.data);
            setLoading(false);
            return;
          }
        }

        const response = await fetch(
          `https://api.the-odds-api.com/v4/sports/mma_mixed_martial_arts/odds/?regions=us&oddsFormat=american&apiKey=${apiKey.apiKey}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const apiEvents = await response.json();
        console.log('apiEvents', apiEvents);

        const filteredData: Event[] = apiEvents.map((event: ApiEvent) => ({
          id: event.id,
          commenceTime: event.commence_time,
          outcomes:
            event.bookmakers?.[0]?.markets?.[0]?.outcomes.map((outcome) => ({
              name: outcome.name,
              moneyline: outcome.price,
            })) || [],
          overUnderOdds: [
            { name: 'O 2.5', overUnderOdds: -190 },
            { name: 'U 2.5', overUnderOdds: 150 },
          ],
        }));

        localStorage.setItem(
          'events',
          JSON.stringify({
            data: filteredData,
            timestamp: new Date().getTime(),
          })
        );
        setEvents(filteredData);
        console.log('filteredData', filteredData);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error('Failed to fetch data')
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 259200000); // Every 3 days
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const extractedNames: Set<string> = new Set();
    events?.forEach((event) => {
      event.outcomes.forEach((outcome) => extractedNames.add(outcome.name));
    });
    setSuggestions(Array.from(extractedNames));
  }, [events]);

  return { events, loading, error, suggestions };
};
