import { Link, Outlet } from 'react-router-dom';
import { getToken, removeToken, hasToken } from '../utilities/token-storage';
import { useModal } from './ModalContext';
import { useUser } from './useUser';
import { AuthForm } from './AuthForm';
import { useState, useEffect } from 'react';
import { Sling } from 'hamburger-react';

export function NavBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasToken());
  const [action, setAction] = useState<'sign-up' | 'sign-in'>('sign-in');
  const [isOpen, setOpen] = useState(false);
  const { openModal, closeModal } = useModal();
  const { setUser } = useUser();

  const toggleAction = () => {
    setAction((prevAction) =>
      prevAction === 'sign-up' ? 'sign-in' : 'sign-up'
    );
  };

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
        action={action}
        onSignIn={handleAuthSuccess}
        closeModal={closeModal}
        toggleAction={toggleAction}
      />,
      'Welcome back!'
    );
  };

  const handleRegister = () => {
    openModal(
      <AuthForm
        action={action}
        onSignIn={handleAuthSuccess}
        closeModal={closeModal}
        toggleAction={toggleAction}
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
    nav: 'flex pr-6 justify-between items-center py-4 lg:pr-20 bg-[#1F1F21] mb-8 pb-6',
    appName: 'text-logout flex lg:text-5xl lg:ml-10 cursor-pointer pt-2 px-8',
    parlay: 'text-white',
    lets: 'text-red-600',
    buttonsWrapper: 'flex gap-2 border-orange-200 lg:gap-4',
    login:
      'text-sm p-2 tracking-widest text-white font-bold bg-black border border-white rounded-md md:px-8 md:py-5 md:text-logout',
    join: 'text-sm p-2 tracking-widest text-white font-bold rounded-md bg-red-600 border border-white md:px-8 md:py-5 md:text-logout',
    logout:
      'text-sm tracking-widest text-white border border-white p-2 mr-4  md:text-logout rounded-lg bg-blue-800 md:px-8 md:py-5',

    list: 'text-smallest text-white mr-6 text-right mt-2',
    userName: 'text-bigger tracking-widest text-white mr-2 text-right',
    funds: 'text-sm md:text-xl text-[#54D338]',
  };

  return (
    <div>
      <nav className={styles.nav}>
        <div className="absolute">
          <Sling
            toggled={isOpen}
            toggle={setOpen}
            color="#DC2625"
            size={15}
            direction="left"
          />
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
