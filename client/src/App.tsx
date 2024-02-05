import { NavBar } from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage';
import { History } from './pages/History';
// import { Modal } from './components/Modal';

function App() {
  return (
    <>
      {/* <Modal /> */}
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="history" element={<History />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
