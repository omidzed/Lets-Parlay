import { NavBar } from './components/NavBar';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage';
import { History } from './pages/History';
import { ModalProvider } from './components/ModalContext';
import { Modal } from './components/Modal';
import { Auth, User } from './utilities';
import { UserProvider } from './components/AppContext';

const tokenKey = 'react-context-jwt';

function App() {
  const [user, setUser] = useState<User>();
  const [token, setToken] = useState<string>();
  const [isAuthorizing, setIsAuthorizing] = useState(true);

  useEffect(() => {
    // If user logged in previously on this browser, authorize them
    const auth = localStorage.getItem(tokenKey);
    if (auth) {
      const a = JSON.parse(auth);
      setUser(a.user);
      setToken(a.token);
    }
    setIsAuthorizing(false);
  }, []);

  if (isAuthorizing) return null;

  function handleSignIn(auth: Auth) {
    localStorage.setItem(tokenKey, JSON.stringify(auth));
    setUser(auth.user);
    setToken(auth.token);
  }

  function handleSignOut() {
    localStorage.removeItem(tokenKey);
    setUser(undefined);
    setToken(undefined);
  }

  const contextValue = { user, setUser, token, handleSignIn, handleSignOut };

  return (
    <UserProvider value={contextValue}>
      <ModalProvider>
        <Modal />
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<About />} />
            <Route path="history" element={<History />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ModalProvider>
    </UserProvider>
  );
}

export default App;
