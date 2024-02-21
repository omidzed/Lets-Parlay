import { NavBar } from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage';
import { Bets } from './pages/Bets';
import { ModalProvider } from './components/ModalContext';
import { Modal } from './components/Modal';
import { UserProvider } from './components/AppContext';
import { EventsProvider } from './components/EventsContext';
import { Rankings } from './components/Rankings';
import { FAQ } from './pages/FAQ';
import { Schedule } from './components/Schedule';

const App = () => {
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
            <Route path="schedule" element={<Schedule />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserProvider>
      </EventsProvider>
    </ModalProvider>
  );
};

export default App;
