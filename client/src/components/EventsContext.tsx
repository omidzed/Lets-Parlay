import React, { createContext, ReactNode } from 'react';
import type { Event } from '../utilities/data-types';
import { useFetchEvents } from '../hooks/useFetchEvents';

export type EventsContextValues = {
  events: Event[] | undefined;
  loading: boolean;
  error: Error;
};

export const EventsContext = createContext<EventsContextValues>({
  events: undefined,
  loading: false,
  error: null,
});

type EventsProviderProps = {
  children: ReactNode;
};

export const EventsProvider: React.FC<EventsProviderProps> = ({ children }) => {
  const { events, loading, error } = useFetchEvents();

  return (
    <EventsContext.Provider value={{ events, loading, error }}>
      {children}
    </EventsContext.Provider>
  );
};
