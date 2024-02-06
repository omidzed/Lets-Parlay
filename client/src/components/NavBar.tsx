import { Link, Outlet } from 'react-router-dom';
import { getToken, removeToken, hasToken } from '../utilities/token-storage';
import { useModal } from './ModalContext';
import { useUser } from './useUser';
import { AuthForm } from './AuthForm';
import { useState, useEffect } from 'react';

export function NavBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasToken());
  const { openModal, closeModal } = useModal();
  const { setUser } = useUser();

  useEffect(() => {
    setIsAuthenticated(hasToken());
  }, [isAuthenticated]);

  const handleAuthSuccess = (data) => {
    localStorage.setItem('token', JSON.stringify(data));
    setUser(data.user);
    setIsAuthenticated(true);
    closeModal();
  };

  const token = getToken();
  const name = token?.user.name;
  const funds = token?.user.funds;

  const handleLogin = () => {
    openModal(
      <AuthForm
        action="sign-in"
        onSignIn={handleAuthSuccess}
        closeModal={closeModal}
      />,
      'WELCOME BACK!'
    );
  };

  const handleRegister = () => {
    openModal(
      <AuthForm
        action="sign-up"
        onSignIn={handleAuthSuccess}
        closeModal={closeModal}
      />,
      `Let's create your account!`
    );
  };

  const logOut = () => {
    removeToken();
    setUser(null);
    setIsAuthenticated(false);
  };

  const fundsInDollars: string = token?.user.funds
    ? (funds / 100).toFixed(2)
    : '0.00';

  const formattedFunds = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(parseFloat(fundsInDollars));

  const styles = {
    nav: 'flex justify-between items-center py-4 pr-20 bg-[#1F1F21] mb-8 pb-6',
    appName: 'flex  text-5xl ml-10 cursor-pointer pt-2 px-8 xs:text-md',
    parlay: 'text-white',
    lets: 'text-red-600',
    buttonsWrapper: 'flex border-orange-200 gap-4',
    login:
      'tracking-widest text-white font-bold bg-black border border-yellow-400 rounded-md px-8 py-4 text-logout',
    join: 'tracking-widest text-white shadow-inner font-bold rounded-md bg-red-600 border border-yellow-400 px-8 py-4 text-logout',
    logout:
      'tracking-widest flex mr-4 justify-center items-center text-white text-logout rounded-lg bg-blue-800 px-8 py-4',

    list: 'text-smallest text-white mr-6 text-right mt-2',
    userName: 'text-xl tracking-widest text-white mr-2 text-right',
    funds: 'text-xl text-[#54D338]',
  };

  return (
    <div>
      <nav className={styles.nav}>
        <div className="absolute">
          {/* <Sling color="#DC2625" direction="left" size={25} /> */}
        </div>
        <Link to={'/'} className={styles.appName}>
          <p className={styles.lets}>LET$</p>
          <p className={styles.parlay}>PARLAY</p>
        </Link>
        {hasToken() ? (
          <div className="flex justify-between items-center">
            <div className="flex-col mr-4 justify-center items-center">
              <ul className={styles.list}>
                <li className={styles.userName}>{name}</li>
                <li className={styles.funds}>{formattedFunds}</li>
              </ul>
            </div>
            <button className={styles.logout} onClick={logOut}>
              LOGOUT
            </button>
          </div>
        ) : (
          <div className={styles.buttonsWrapper}>
            <button className={styles.login} onClick={handleLogin}>
              LOGIN
            </button>
            <button className={styles.join} onClick={handleRegister}>
              JOIN
            </button>
          </div>
        )}
      </nav>
      <Outlet />
    </div>
  );
}
