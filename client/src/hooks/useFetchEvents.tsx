import { useState, useEffect } from 'react';
import type { Event } from '../utils/data-types';
import { apiKey } from '../utils/api-data';

export const useFetchEvents = () => {
  const [events, setEvents] = useState<Event[] | undefined>([]);
  const [loading, setLoading] = useState<boolean | undefined>();
  const [error, setError] = useState<Error | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Load cached data if available
        const cachedEvents = localStorage.getItem('events');
        if (
          cachedEvents &&
          new Date().getTime() - JSON.parse(cachedEvents).timestamp <
            259200 * 1000
        ) {
          const eventsData = JSON.parse(cachedEvents).data;
          setEvents(eventsData);
          setLoading(false);
          return; // Avoid making an API call if cached data is recent
        }

        const response = await fetch(
          `https://api.the-odds-api.com/v4/sports/mma_mixed_martial_arts/odds/?regions=us&oddsFormat=american&apiKey=${apiKey.apiKey}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const events = await response.json();
        const filteredData: Event[] = events.map((event) => {
          const id = event.id;
          const commenceTime = event.commence_time;
          const apiOutcomes =
            event.bookmakers?.[0]?.markets?.[0]?.outcomes || [];
          return {
            id,
            commenceTime,
            outcomes: [
              { name: apiOutcomes[0]?.name, moneyline: apiOutcomes[0]?.price },
              { name: apiOutcomes[1]?.name, moneyline: apiOutcomes[1]?.price },
            ],
            overUnderOdds: [
              { name: 'O 2.5', overUnderOdds: -190 },
              { name: 'U 2.5', overUnderOdds: 150 },
            ],
          };
        });

        localStorage.setItem('events', JSON.stringify(filteredData));
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
    const interval = setInterval(fetchData, 259200 * 1000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only on mount and unmount

  useEffect(() => {
    const extractedNames: Set<string> = new Set();
    events.forEach((event) => {
      const fighterOne = event.outcomes[0].name;
      const fighterTwo = event.outcomes[1].name;
      extractedNames.add(fighterOne);
      extractedNames.add(fighterTwo);
    });
    setSuggestions(Array.from(extractedNames));
  }, [events]);

  return { events, loading, error, suggestions };
};
