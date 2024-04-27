import { NavBar } from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage';
import { Bets } from './pages/Bets';
import { ModalProvider } from './Context/ModalContext';
import { Modal } from './components/Modal';
import { UserProvider } from './Context/AppContext';
import { EventsProvider } from './Context/EventsContext';
import { Rankings } from './components/Menu/Rankings';
import { FAQ } from './pages/FAQ';
import { UfcSchedule } from './components/Menu/UfcSchedule';

export const App = () => {
  return (
    <ModalProvider>
      <EventsProvider>
        <UserProvider>
          <Modal />
          <NavBar />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="bets" element={<Bets />} />
            <Route path="rankings" element={<Rankings />} />
            <Route path="schedule" element={<UfcSchedule />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserProvider>
      </EventsProvider>
    </ModalProvider>
  );
};
