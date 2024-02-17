import { EventsCarousel } from '../components/carousels/EventsCarousel';
import { OddsTable } from '../components/OddsTable';
import { useState } from 'react';
import { SearchBox } from '../components/SearchBox';
import { useFetchEvents } from './useFetchEvents';

export const HomePage = () => {
  const [inputValue, setInputValue] = useState<string | undefined>('');
  const { suggestions, events } = useFetchEvents();

  const filteredEvents = events?.filter((event) =>
    event.outcomes.some((outcome) =>
      outcome.name.toLowerCase().includes(inputValue.toLowerCase())
    )
  );

  return (
    <div className="flex-col justify-center items-center">
      <SearchBox
        value={inputValue}
        setInputValue={setInputValue}
        suggestions={suggestions}
      />
      <EventsCarousel />
      <div className="flex-col 2xl:w-[55%] items-center mx-auto">
        <OddsTable filteredEvents={filteredEvents} />
      </div>
    </div>
  );
};
