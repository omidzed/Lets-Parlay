import { NavBar } from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage';
import { Bets } from './pages/Bets';
import { ModalProvider } from './Context/ModalContext';
import { Modal } from './components/Modal';
import { UserProvider } from './Context/UserContext';
import { EventsProvider } from './Context/EventsContext';
import { Rankings } from './components/Menu/Rankings';
import { FAQ } from './pages/FAQ';
import { UfcSchedule } from './components/Menu/UfcSchedule';
import { SettleBets } from './pages/SettleBets';
import { BetsProvider } from './Context/BetsContext';

export const App = () => {
  return (
    <ModalProvider>
      <EventsProvider>
        <BetsProvider>
          <UserProvider>
            <Modal />
            <NavBar />
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="bets" element={<Bets />} />
              <Route path="rankings" element={<Rankings />} />
              <Route path="schedule" element={<UfcSchedule />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="settle" element={<SettleBets />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </UserProvider>
        </BetsProvider>
      </EventsProvider>
    </ModalProvider>
  );
};
