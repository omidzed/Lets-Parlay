import { useState, useEffect } from 'react';
import type { Event } from '../utilities/data-types';

export const useFetchEvents = () => {
  const [events, setEvents] = useState<Event[] | undefined>([]);
  const [loading, setLoading] = useState<boolean | undefined>();
  const [error, setError] = useState<Error | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const targetUrl = encodeURIComponent(
          `https://api.the-odds-api.com/v4/sports/mma_mixed_martial_arts/odds/?regions=us&oddsFormat=american&apiKey=92e9e45ffad129163005d31aa7443f13`
        );
        const response = await fetch(
          'https://lfz-cors.herokuapp.com/?url=' + targetUrl
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const events = await response.json();
        const filteredData: Event[] = events.map((event) => {
          const commenceTime = event.commence_time;
          const apiOutcomes =
            event.bookmakers?.[0]?.markets?.[0]?.outcomes || [];
          return {
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
        setEvents(filteredData);
        console.log(filteredData);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error('Failed to fetch data')
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 86400 * 1000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only on mount and unmount

  useEffect(() => {
    const extractedNames: string[] = [];
    events.forEach((event) => {
      const fighterOne = event.outcomes[0].name;
      const fighterTwo = event.outcomes[1].name;
      extractedNames.push(fighterOne, fighterTwo);
    });
    setSuggestions(extractedNames);
  }, [events]);

  return { events, loading, error, suggestions };
};
