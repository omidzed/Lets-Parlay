import React, { createContext, ReactNode } from 'react';
import type { Event } from '../utilities/data-types';
import { useFetchEvents } from '../pages/useFetchEvents';

export type EventsContextValues = {
  events: Event[] | undefined;
  isLoading: boolean;
  error: Error;
};

export const EventsContext = createContext<EventsContextValues>({
  events: undefined,
  isLoading: false,
  error: null,
});

type EventsProviderProps = {
  children: ReactNode;
};

export const EventsProvider: React.FC<EventsProviderProps> = ({ children }) => {
  const { events, isLoading, error } = useFetchEvents();

  return (
    <EventsContext.Provider value={{ events, isLoading, error }}>
      {children}
    </EventsContext.Provider>
  );
};
