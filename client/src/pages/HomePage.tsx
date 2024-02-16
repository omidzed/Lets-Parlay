import { EventsCarousel } from '../components/carousels/EventsCarousel';
import { OddsTable } from '../components/OddsTable';
import { useState, ChangeEvent } from 'react';
import { SearchBox } from '../components/SearchBox';
import { useFetchEvents } from './useFetchEvents';
import { AppDrawer } from '../components/Hamburger/AppDrawer';

export function HomePage() {
  const [inputValue, setInputValue] = useState('');

  const { events } = useFetchEvents();

  const filteredEvents = events?.filter((event) =>
    event.outcomes.some((outcome) =>
      outcome.name.toLowerCase().includes(inputValue.toLowerCase())
    )
  );

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }
  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Bets', path: '/bets' },
    { title: 'Rankings', path: '/rankings' },
    { title: 'FAQ', path: '/faq' },
  ];

  return (
    <div className="flex-col justify-center items-center">
      <div className="absolute top-10 cursor-pointer">
        <AppDrawer menuItems={menuItems} />
      </div>
      <SearchBox value={inputValue} onInputChange={handleInputChange} />
      <EventsCarousel />
      <div className="flex-col 2xl:w-[55%] items-center mx-auto">
        <OddsTable filteredEvents={filteredEvents} />
      </div>
    </div>
  );
}
