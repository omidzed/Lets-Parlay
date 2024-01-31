import { Modal } from './Modal';
import { RegistrationForm } from './RegistrationForm';
import { LoginForm } from './LoginForm';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getToken, removeToken, hasToken } from '../utlities/token-storage';
import { Sling } from 'hamburger-react';

export function NavBar() {
  const [modalType, setModalType] = useState('closed');
  const [hasUserToken, sethasUserToken] = useState(false);

  const token = getToken();
  const name = token?.user.name;
  const funds = token?.user.funds;

  const fundsInDollars: string = token?.user.funds
    ? (funds / 100).toFixed(2)
    : '0.00';

  const formattedFunds = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(parseFloat(fundsInDollars));

  function logOut() {
    removeToken();
    sethasUserToken(false);
  }

  function login() {
    sethasUserToken(true);
    toggleModal();
  }

  const registerModal = () => {
    setModalType('register');
  };

  const loginModal = () => {
    setModalType('login');
  };

  const toggleModal = () => {
    setModalType('closed');
  };

  const styles = {
    nav: 'flex justify-between items-center py-4 pr-20 bg-[#1F1F21] mb-8 pb-6',
    appName: 'flex text-x3l 2xl:text-5xl ml-40 cursor-pointer pt-2',
    parlay: 'text-white',
    lets: 'text-red-600',
    buttonsWrapper: 'flex items-center gap-2',
    login:
      'tracking-widest text-white font-bold bg-black border border-black rounded-md px-8 py-4 text-logout',
    join: 'tracking-widest text-white font-bold rounded-md bg-red-600 border border-red-600 px-8 py-4 text-logout',
    logout:
      'tracking-widest flex mr-4 justify-center items-center text-white text-logout rounded-xl bg-blue-800 px-8 py-4',
    list: 'text-smallest text-white mr-6 text-right mt-2',
    userName: 'text-xl tracking-widest text-white mr-2 text-right',
    funds: 'text-xl text-[#54D338]',
  };

  return (
    <div>
      <nav className={styles.nav}>
        <div className="absolute">
          <Sling color="#DC2625" direction="left" size={25} />
        </div>
        <Link to={'/HomePage'} className={styles.appName}>
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
            <button className={styles.login} onClick={loginModal}>
              LOGIN
            </button>
            <button className={styles.join} onClick={registerModal}>
              JOIN
            </button>
          </div>
        )}

        {modalType === 'login' && (
          <Modal
            header="Welcome back!"
            toggleModal={toggleModal}
            form={
              <LoginForm
                registerModal={registerModal}
                hasToken={hasUserToken}
                onSubmit={login}
              />
            }
          />
        )}

        {modalType === 'register' && (
          <Modal
            header="Let's create your account!"
            toggleModal={toggleModal}
            form={<RegistrationForm loginModal={loginModal} />}
          />
        )}
      </nav>
      <Outlet />
    </div>
  );
}
