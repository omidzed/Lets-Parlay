import { EventsCarousel } from '../Components/Carousel/EventsCarousel';
import { useState } from 'react';
import { SearchBox } from '../Components/SearchBox';
import { useFetchEvents } from '../Hooks/useFetchEvents';
import { ScrollTopButton } from '../Components/ScrollTopButton';
import { OddsTable } from '../Components/OddsTable';

export const HomePage = () => {
  const [inputValue, setInputValue] = useState<string>('');
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

      <div className="2xl:w-[60%] w-10/12 mx-auto md:mb-10">
        <OddsTable filteredEvents={filteredEvents} />
      </div>
      <ScrollTopButton />
    </div>
  );
};
