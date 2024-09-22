import { NavBar } from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './Pages/NotFound';
import { HomePage } from './Pages/HomePage';
import { Bets } from './Pages/Bets';
import { ModalProvider } from './Context/ModalContext';
import { Modal } from './components/Modal';
import { UserProvider } from './Context/UserContext';
import { EventsProvider } from './Context/EventsContext';
import { Rankings } from './components/Menu/Rankings';
import { FAQ } from './Pages/FAQ';
import { UfcSchedule } from './components/Menu/UfcSchedule';
import { SettleBets } from './Pages/SettleBets';
import { BetsProvider } from './Context/BetsContext';
import ProtectedAdminRoute from './Pages/ProtectedAdminRoute';

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
              <Route
                path="settle"
                element={
                  <ProtectedAdminRoute>
                    <SettleBets />
                  </ProtectedAdminRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </UserProvider>
        </BetsProvider>
      </EventsProvider>
    </ModalProvider>
  );
};
