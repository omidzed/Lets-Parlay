import { NavBar } from './Components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './Pages/NotFound';
import { HomePage } from './Pages/HomePage';
import { Bets } from './Pages/Bets';
import { Modal } from './Components/Modal';
import { Rankings } from './Components/Menu/Rankings';
import { FAQ } from './Pages/FAQ';
import { UfcSchedule } from './Components/Menu/UfcSchedule';
import { SettleBets } from './Pages/SettleBets';
import ProtectedAdminRoute from './Pages/ProtectedAdminRoute';
import { Providers } from './Providers';

export const App = () => {
  return (
    <Providers>
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
    </Providers>
  );
};
