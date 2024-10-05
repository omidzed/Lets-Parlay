import React, { createContext, ReactNode, useState } from 'react';
import type { Event } from '../utils/data-types';
import { useFetchEvents } from '../Hooks/useFetchEvents';

export type EventsContextValues = {
  events: Event[];
  inputValue: string;
  setInputValue: (inputValue: string) => void;
  filteredEvents: Event[];
};

const initialContextValue: EventsContextValues = {
  events: [],
  inputValue: '',
  setInputValue: () => {},
  filteredEvents: [],
};

export const EventsContext =
  createContext<EventsContextValues>(initialContextValue);

type EventsProviderProps = {
  children: ReactNode;
};

export const EventsProvider: React.FC<EventsProviderProps> = ({ children }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const { events } = useFetchEvents();

  const filteredEvents = events?.filter((event) =>
    event.outcomes.some((outcome) =>
      outcome.name?.toLowerCase().includes(inputValue.toLowerCase())
    )
  );

  return (
    <EventsContext.Provider
      value={{ events, inputValue, setInputValue, filteredEvents }}>
      {children}
    </EventsContext.Provider>
  );
};
