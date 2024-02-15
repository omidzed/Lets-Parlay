import { NavBar } from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage';
import { Bets } from './pages/Bets';
import { ModalProvider } from './components/ModalContext';
import { Modal } from './components/Modal';
import { UserProvider } from './components/AppContext';
import { EventsProvider } from './components/EventsContext';

function App() {
  return (
    <EventsProvider>
      <UserProvider>
        <ModalProvider>
          <Modal />
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<About />} />
              <Route path="bets" element={<Bets />} />
              {/* <Route path="rankings" element={<Rankings />} /> */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ModalProvider>
      </UserProvider>
    </EventsProvider>
  );
}

export default App;
