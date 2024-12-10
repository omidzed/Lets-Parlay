import { EventsCarousel } from '../Components/Carousel/EventsCarousel';
import { ScrollTopButton } from '../Components/ScrollTopButton';
import { OddsTable } from '../Components/OddsTable';
import { useEvents } from '../Hooks/useEvents';
import { SearchBox } from '../Components/SearchBox';
import { useLocation } from "react-router-dom";
import { FaqButton } from "../Components/FaqButton";

export const HomePage = () => {
  const { setInputValue, filteredEvents } = useEvents();
  const location = useLocation();

  return (
    <div>
      <div className="block flex justify-center xl:hidden">
        <SearchBox
          className=""
          setInputValue={setInputValue}
        />
      </div>
      <EventsCarousel />
      <div className="2xl:w-[60%] w-10/12 mx-auto md:mb-10">
        <OddsTable filteredEvents={filteredEvents} />
      </div>
      <FaqButton location={location} />
      <ScrollTopButton />
    </div>
  );
};
