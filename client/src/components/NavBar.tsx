import { Modal } from './Modal';
import { RegistrationForm } from './RegistrationForm';
import { LoginForm } from './LoginForm';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getToken, removeToken, hasToken } from '../utlities/token-storage';

export function NavBar() {
  const [modalType, setModalType] = useState('closed');
  const [hasUserToken, sethasUserToken] = useState(false);

  const token = getToken();
  const name = token?.user.name;
  const funds = token?.user.funds;

  // Convert to dollars and format as a string
  const fundsInDollars: string = token?.user.funds
    ? (funds / 100).toFixed(2)
    : '0.00';

  // Format as currency
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
    nav: 'flex justify-between items-center p-2 px-4 bg-zinc-800 mb-8',
    appName: 'flex text-xl 2xl:text-5xl cursor-pointer',
    parlay: 'text-white',
    lets: 'text-red-600',
    buttonsWrapper: 'flex items-center gap-2',
    button: 'text-white text-sm lg:text-lg xl: 2xl:text-xl h-8 px-4',
    login: 'bg-black border border-black rounded-md',
    join: 'rounded-md bg-red-600 border border-red-600',
    logout: 'text-xs rounded-md bg-blue-500 mr-2 h-12',
    userName: 'text-smaller  text-white border',
    funds: 'text-white text-smaller',
  };

  return (
    <div>
      <nav className={styles.nav}>
        <Link to={'/HomePage'} className={styles.appName}>
          <p className={styles.lets}>LET$</p>
          <p className={styles.parlay}>PARLAY</p>
        </Link>
        {hasToken() ? (
          <div className="flex justify-center items-center">
            <div className="flex-col mr-4 justify-center items-center">
              <div>
                <span className={styles.userName}>{name}</span>
              </div>
              <div>
                <span className={styles.funds}>{formattedFunds}</span>
              </div>
            </div>
            <button
              className={`${styles.button} ${styles.logout}`}
              onClick={logOut}>
              LOGOUT
            </button>
          </div>
        ) : (
          <div className={styles.buttonsWrapper}>
            <button
              className={`${styles.button} ${styles.login}`}
              onClick={loginModal}>
              LOGIN
            </button>
            <button
              className={`${styles.button} ${styles.join}`}
              onClick={registerModal}>
              JOIN
            </button>
          </div>
        )}

        {modalType === 'login' && (
          <Modal
            modalType={modalType}
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
            modalType={modalType}
            toggleModal={toggleModal}
            form={<RegistrationForm loginModal={loginModal} />}
          />
        )}
      </nav>
      <Outlet />
    </div>
  );
}
