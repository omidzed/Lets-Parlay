import { useContext } from 'react';
import {
  EventsContext,
  EventsContextValues,
} from '../Providers/EventsProvider';

export const useEvents = (): EventsContextValues => {
  if (!EventsContext) {
    throw new Error('useUser must be used within a EventsProvider');
  }
  return useContext(EventsContext);
};
