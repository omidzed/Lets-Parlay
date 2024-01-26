import { Modal } from './Modal';
import { RegistrationForm } from './RegistrationForm';
import { LoginForm } from './LoginForm';
import { useState } from 'react';

export function NavBar() {
  const [modalType, setModalType] = useState('closed');

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
    appName: 'flex items-center cursor-pointer px-4 lg:px-8 pl-4 lg:pl-[7rem]',
    parlay: 'text-white text-lg lg:text-xl xl:text-3xl 2xl:text-[2rem]',
    lets: 'text-red-500 sm:pl-2 text-lg lg:text-xl xl:text-3xl 2xl:text-[2rem]',
    buttonsWrapper:
      'flex items-center gap-2 px-4 lg:px-8 whitespace-nowrap pr-4 lg:pr-[7rem]',
    button: 'text-white text-sm lg:text-lg xl:text-xl 2xl:py-2 px-4 lg:px-8',
    login: 'bg-black border border-black rounded-md',
    join: 'rounded-md bg-red-500 border border-red-500',
  };

  return (
    <>
      <div className="bg-neutral-800 h-20 flex items-center justify-between">
        <div className={styles.appName}>
          <span className={styles.lets}>LET$</span>
          <span className={styles.parlay}>PARLAY</span>
        </div>
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
      </div>
      {modalType === 'login' && (
        <Modal
          modalType={modalType}
          toggleModal={toggleModal}
          form={<LoginForm />}
        />
      )}

      {modalType === 'register' && (
        <Modal
          modalType={modalType}
          toggleModal={toggleModal}
          form={<RegistrationForm />}
        />
      )}
    </>
  );
}
