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

const App = () => {
  return (
    <EventsProvider>
      <UserProvider>
        <ModalProvider>
          <Modal />
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route index element={<HomePage />} />
              <Route path="bets" element={<Bets />} />
              <Route path="rankings" element={<Rankings />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ModalProvider>
      </UserProvider>
    </EventsProvider>
  );
};

export default App;
