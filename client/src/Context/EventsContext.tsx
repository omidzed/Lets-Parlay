import React, { createContext, ReactNode } from 'react';
import type { Event } from '../utils/data-types';
import { useFetchEvents } from '../hooks/useFetchEvents';

export type EventsContextValues = {
  events: Event[] | undefined;
};

export const EventsContext = createContext<EventsContextValues>({
  events: undefined,
});

type EventsProviderProps = {
  children: ReactNode;
};

export const EventsProvider: React.FC<EventsProviderProps> = ({ children }) => {
  const { events } = useFetchEvents();

  return (
    <EventsContext.Provider value={{ events }}>
      {children}
    </EventsContext.Provider>
  );
};
