import { Link, Outlet } from 'react-router-dom';
import { getToken, removeToken, hasToken } from '../utilities/token-storage';
import { useModal } from './ModalContext';
import { useUser } from './useUser';
import { AuthForm } from './AuthForm';
import { useState, useEffect } from 'react';
import { Sling } from 'hamburger-react';

// type SlingProps = {
//   onClick: () => void;
//   toggled: boolean;
//   toggle: (toggled: boolean) => void;
//   color?: string;
//   size?: number;
//   direction?: 'left' | 'right';
// };

export function NavBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasToken());
  const [action, setAction] = useState<'sign-up' | 'sign-in'>(undefined);
  const [isOpen, setOpen] = useState(false);
  const { openModal, closeModal } = useModal();
  const { setUser } = useUser();

  const handleOpenModal = (actionType: 'sign-up' | 'sign-in') => {
    setAction(actionType);

    const modalContent = (
      <AuthForm
        key={actionType}
        action={actionType}
        onSignIn={handleAuthSuccess}
        closeModal={closeModal}
        toggleAction={() =>
          handleOpenModal(actionType === 'sign-up' ? 'sign-in' : 'sign-up')
        }
      />
    );
    openModal(
      modalContent,
      actionType === 'sign-up' ? `Let's create your account!` : 'Welcome back!'
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

  const handleLogin = () => handleOpenModal('sign-in');
  const handleRegister = () => handleOpenModal('sign-up');

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

  action;

  const styles = {
    nav: 'flex pr-6 justify-between items-center py-8 lg:pr-20 bg-[#1F1F21] mb-8 pb-6',
    appName:
      'text-logout flex items-center lg:text-5xl lg:ml-20 cursor-pointer pt-2 px-8',
    parlay: 'text-gray-400 italic',
    let: 'text-red-600 italic mr-1',
    s: 'text-yellow-300 text-2xl mr-1 font-light',
    buttonsWrapper: 'flex items-center gap-2 border-orange-200 lg:gap-4',
    login:
      'text-sm p-2 tracking-widest text-white bg-black border border-white rounded-md md:px-8 md:py-4 md:text-custom',
    join: 'text-sm p-2 tracking-widest text-white  rounded-md bg-red-600 border border-white md:px-8 md:py-4 md:text-custom',
    logout:
      'text-sm tracking-wider text-white border border-white mr-4  md:text-custom rounded-lg bg-blue-800 md:px-8 md:py-4',

    list: 'text-smallest text-white mr-6 text-right mt-2',
    userName: 'text-bigger tracking-widest text-white mr-2 text-right',
    funds: 'flex justify-end items-end text-sm md:text-xl text-[#54D338]',
  };

  return (
    <div>
      <nav className={styles.nav}>
        <div className="absolute"></div>
        <Link to={'/'} className={styles.appName}>
          <p className={styles.let}>LET</p>
          <p className={styles.s}>{' $$ '}</p>
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
            <Sling
              // onClick={handleRegister}
              toggled={isOpen}
              toggle={setOpen}
              color="#FFFFFF"
              size={18}
              direction="left"
            />
          </div>
        ) : (
          <div className={styles.buttonsWrapper}>
            <button className={styles.join} onClick={handleRegister}>
              JOIN
            </button>
            <button className={styles.login} onClick={handleLogin}>
              LOGIN
            </button>
            <Sling
              // onClick={handleRegister}
              toggled={isOpen}
              toggle={setOpen}
              color="#FFFFFF"
              size={20}
              direction="left"
            />
          </div>
        )}
      </nav>
      <Outlet />
    </div>
  );
}

{
  /* <button
              className="text-sm p-2 tracking-widest text-white font-bold rounded-md bg-gray-500 border border-white md:px-8 md:py-2 md:text-custom"
              onClick={() => setIsAuthenticated(hasToken())}>
              GUEST CHECK IN
            </button> */
}
