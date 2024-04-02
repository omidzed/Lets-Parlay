import { EventsCarousel } from '../components/carousels/EventsCarousel';
import { OddsTable } from '../components/OddsTable';
import { useState } from 'react';
import { SearchBox } from '../components/SearchBox';
import { useFetchEvents } from './useFetchEvents';
import ScrollToTop from '../components/ScrollToTop';

export const HomePage = () => {
  const [inputValue, setInputValue] = useState<string | undefined>('');
  const { events } = useFetchEvents();
  const filteredEvents = events?.filter((event) =>
    event.outcomes.some((outcome) =>
      outcome.name?.toLowerCase().includes(inputValue.toLowerCase())
    )
  );

  return (
    <div>
      <SearchBox setInputValue={setInputValue} />
      <EventsCarousel />
      <div className="2xl:w-[55%] w-10/12 mx-auto">
        <OddsTable filteredEvents={filteredEvents} />{' '}
      </div>
      <ScrollToTop />
    </div>
  );
};
