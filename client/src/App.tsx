import { NavBar } from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage';
import { Bets } from './pages/Bets';
import { ModalProvider } from './components/ModalContext';
import { Modal } from './components/Modal';
import { UserProvider } from './components/AppContext';

function App() {
  // const [user, setUser] = useState<User>();
  // // const [token, setToken] = useState<string>();
  // const [isAuthorizing, setIsAuthorizing] = useState(true);

  // useEffect(() => {
  //   const auth = localStorage.getItem(tokenKey);
  //   if (auth) {
  //     const a = JSON.parse(auth);
  //     setUser(a.user);
  //     setToken(a.token);
  //   }
  //   setIsAuthorizing(false);
  // }, []);

  // if (isAuthorizing) return null;

  // function handleSignIn(auth: Auth) {
  //   localStorage.setItem(tokenKey, JSON.stringify(auth));
  //   setUser(auth.user);
  //   setToken(auth.token);
  // }

  // function handleSignOut() {
  //   localStorage.removeItem(tokenKey);
  //   setUser(undefined);
  //   setToken(undefined);
  // const { funds, setFunds } = useContext(AppContext);

  //   const contextValue = { user, setUser, token, funds, setFunds, handleSignIn, handleSignOut };

  return (
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
  );
}

export default App;
