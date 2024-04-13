import { EventsCarousel } from '../components/carousel/EventsCarousel';
import { useState } from 'react';
import { SearchBox } from '../components/SearchBox';
import { useFetchEvents } from '../hooks/useFetchEvents';
import { ScrollTopButton } from '../components/ScrollTopButton';
import { OddsTable } from '../components/OddsTable';

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

      <div className="2xl:w-[55%] w-10/12 mx-auto md:mb-10">
        <OddsTable filteredEvents={filteredEvents} />
      </div>
      <ScrollTopButton />
    </div>
  );
};

// import { EventsCarousel } from '../components/carousel/EventsCarousel';
// import { OddsTable } from '../components/OddsTable';
// import { useState } from 'react';
// import { SearchBox } from '../components/SearchBox';
// import { useFetchEvents } from '../hooks/useFetchEvents';
// import { Schedule } from '../components/Schedule';
// import { IoCalendarNumber } from 'react-icons/io5';
// import ScrollToTop from '../hooks/useScrollToTop';

// export const HomePage = () => {
//   const [inputValue, setInputValue] = useState<string | undefined>('');
//   const [isCalendarVisible, setIsCalendarVisible] = useState(false);

//   const toggleCalendarVisibility = () => {
//     setIsCalendarVisible((prev) => !prev);
//   };

//   const { events } = useFetchEvents();

//   const filteredEvents = events?.filter((event) =>
//     event.outcomes.some((outcome) =>
//       outcome.name?.toLowerCase().includes(inputValue.toLowerCase())
//     )
//   );

//   return (
//     <div>
//       <div className="flex justify-center items-center w-1/2 mx-auto">
//         <div className="fixed top-20 left-4 md:top-36 md:left-6">
//           <IoCalendarNumber
//             color="white"
//             size={30}
//             onClick={toggleCalendarVisibility}
//             className="cursor-pointer"
//           />
//           <div
//             className={`fixed left-6 top-48  ${
//               isCalendarVisible ? '' : 'hidden'
//             }`}>
//             <Schedule /> {/* Your calendar component */}
//           </div>
//         </div>
//         <div className="w-full">
//           <SearchBox setInputValue={setInputValue} />
//         </div>
//       </div>
//       <EventsCarousel />
//       <div className="2xl:w-[55%] w-10/12 mx-auto mb-10 md:mb-20">
//         <OddsTable filteredEvents={filteredEvents} />
//       </div>
//       <ScrollToTop />
//     </div>
//   );
// };
