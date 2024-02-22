import { useState, useEffect } from 'react';
import type { ApiEvent, Event } from '../utilities/data-types';
import apiEvents from '../utilities/api-data';

export const useFetchEvents = () => {
  const [events, setEvents] = useState<Event[] | undefined>([]);
  const [isLoading, setIsLoading] = useState<boolean | undefined>();
  const [error, setError] = useState<Error | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response: ApiEvent[] = apiEvents.slice(13, 73);

        const filteredData: Event[] = response.map((event) => {
          const commenceTime = event.commence_time;
          const apiOutcomes =
            event.bookmakers?.[0]?.markets?.[0]?.outcomes || [];
          return {
            commenceTime,
            outcomes: [
              { name: apiOutcomes[0]?.name, moneyline: apiOutcomes[0]?.price },
              { name: apiOutcomes[1]?.name, moneyline: apiOutcomes[1]?.price },
            ],
          };
        });

        setEvents(filteredData);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error('Failed to fetch data')
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const extractedNames: string[] = [];
    events.forEach((event) => {
      const fighterOne = event.outcomes[0].name;
      const fighterTwo = event.outcomes[1].name;
      extractedNames.push(fighterOne, fighterTwo);
    });
    setSuggestions(extractedNames);
  }, [events]);

  return { events, isLoading, error, suggestions };
};
