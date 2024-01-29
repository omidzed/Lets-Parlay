import { Modal } from './Modal';
import { RegistrationForm } from './RegistrationForm';
import { LoginForm } from './LoginForm';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  getToken,
  removeToken,
  hasToken as hasTokenV2,
} from '../utlities/token-storage';

export function NavBar() {
  const [modalType, setModalType] = useState('closed');
  const [hasToken, sethasToken] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (hasToken) {
      const fetchName = async () => {
        try {
          const token = await getToken();
          const name = token.user.name;
          setUserName(name);
        } catch (error) {
          console.error("Error fetching user's name");
        }
      };
      fetchName();
    }
  }, [hasToken]);

  function logOut() {
    removeToken();
    sethasToken(false);
  }

  function toggleHasToken() {
    !hasToken ? sethasToken(true) : logOut();
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
    logout: 'text-xs rounded-md bg-blue-500 mr-2',
  };

  return (
    <div>
      <nav className={styles.nav}>
        <Link to={'/HomePage'} className={styles.appName}>
          <p className={styles.lets}>LET$</p>
          <p className={styles.parlay}>PARLAY</p>
        </Link>
        {hasTokenV2() ? (
          <div className="flex justify-center items-center">
            <button
              className={`${styles.button} ${styles.logout}`}
              onClick={toggleHasToken}>
              LOGOUT
            </button>
            <span className="text-xs text-white whitespace-nowrap">
              {userName}
            </span>
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
                hasToken={hasToken}
                onSubmit={toggleModal}
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
