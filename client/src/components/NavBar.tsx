import { Link, Outlet } from 'react-router-dom';
import { getToken, removeToken, hasToken } from '../utilities/token-storage';
import { useModal } from './useModal';
import { useUser } from './useUser';
import { AuthForm } from './AuthForm';
import { useState, useEffect, useContext } from 'react';
import { AppDrawer } from './Hamburger/AppDrawer';
import { Overlay } from './Hamburger/Overlay';
import { IoMenu } from 'react-icons/io5';
import { MenuItem } from '../utilities/data-types';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { FaQuestion } from 'react-icons/fa6';
import { FaRankingStar } from 'react-icons/fa6';
import { SlHome } from 'react-icons/sl';
import { TbDatabaseDollar } from 'react-icons/tb';
import { AppContext } from './AppContext';

export const NavBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(hasToken());
  const [isOpen, setIsOpen] = useState(false);
  const [action, setAction] = useState<'sign-up' | 'sign-in' | undefined>(
    undefined
  );

  //ask Shawn about this
  action;

  const { openModal, closeModal } = useModal();
  const { setUser } = useUser();
  const { funds, setFunds } = useContext(AppContext);

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
    if (isAuthenticated) {
      const tokenData = getToken();
      if (tokenData?.user.funds) {
        setFunds(tokenData?.user.funds);
      }
    } else {
      setFunds(0); // reducing funds to zero if not authenticated
    }
  }, [isAuthenticated, setFunds]); // Only re-run if isAuthenticated or setFunds changes

  const handleAuthSuccess = (data) => {
    localStorage.setItem('token', JSON.stringify(data));
    setUser(data.user);
    setIsAuthenticated(true);
    closeModal();
  };

  const token = getToken();
  const name = token?.user.name;

  const handleLogin = () => handleOpenModal('sign-in');
  const handleRegister = () => handleOpenModal('sign-up');

  const logOut = () => {
    removeToken();
    setUser(null);
    setIsAuthenticated(false);
  };

  const formattedFunds = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(funds);

  const styles = {
    nav: 'flex justify-between p-2 py-4 md:py-8 md:pr-20 bg-[#1F1F21] mb-6 pr-2',
    appName:
      'text-xl italic flex ml-2 md:text-5xl md:ml-16 cursor-pointer md:px-10',
    let: 'text-red-600 italic mr-1',
    s: 'md:text-4xl md:flex md:items-center mr-1 font-light ',
    parlay: 'text-blue-500',
    buttonsWrapper: 'flex  items-center gap-1 md:gap-3 mr-1 md:mr-0',
    join: 'xl:text-custom text-tiny tracking-wider p-1 bg-red-700 rounded-sm md:rounded-md px-2 md:px-7 md:py-2',
    login:
      'xl:text-custom flex gap-1 text-tiny p-1 bg-blue-800 rounded-sm md:rounded-md px-2 md:px-6 md:py-2',
    logout:
      'xl:text-custom  text-tiny flex 2xl:gap-2 gap-1 p-1 mr-2 md:mr-0 border border-zinc-400 rounded-sm md:rounded-md bg-black px-2 md:px-6 md:py-2',
    list: 'flex md:justify-end md:items-end gap-0 md:mr-6 mr-2 flex-nowrap',
    userName: 'text-sm leading-2 md:text-2xl mr-1 md:mr-2',
    funds: 'text-sm leading-2 md:text-2xl text-[#54D338] cursor-pointer',
  };

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const menuItems: MenuItem[] = [
    { title: 'Home', path: '/', icon: <SlHome /> },
    { title: 'Bets', path: '/bets', icon: <TbDatabaseDollar /> },
    { title: 'Schedule', path: '/schedule', icon: <IoCalendarNumberOutline /> },
    { title: 'Rankings', path: '/rankings', icon: <FaRankingStar /> },
    { title: 'FAQ', path: '/faq', icon: <FaQuestion /> },
  ];

  return (
    <div>
      {isOpen && <Overlay onClick={toggleMenu} isOpen={isOpen} />}
      <nav className={styles.nav}>
        {isOpen && (
          <AppDrawer
            toggleMenu={toggleMenu}
            isOpen={isOpen}
            menuItems={menuItems}
          />
        )}
        <div className="flex justify-center items-center">
          <IoMenu
            onClick={() => toggleMenu()}
            color="white"
            className="ml-2 text-lg md:text-3xl cursor-pointer"
          />
          <Link to={'/'} className={styles.appName}>
            <p className={styles.let}>LET</p>
            <p className={styles.s}>$</p>
            <p className={styles.parlay}>PARLAY</p>
          </Link>
        </div>

        {hasToken() ? (
          <div className="flex justify-between items-center">
            <div className="flex-col md:mr-4">
              <div className={styles.list}>
                <p className={styles.userName}>{name}</p>
                <Link to={'/bets'}>
                  <p className={styles.funds}>{`(${formattedFunds})`}</p>
                </Link>
              </div>
            </div>
            <button className={styles.logout} onClick={logOut}>
              <div>LOG</div>
              <div>OUT</div>
            </button>
          </div>
        ) : (
          <div className={styles.buttonsWrapper}>
            <button className={styles.join} onClick={handleRegister}>
              JOIN
            </button>
            <button className={styles.login} onClick={handleLogin}>
              <div className="className">LOG </div>
              <div className="className">IN</div>
            </button>
          </div>
        )}
      </nav>
      <Outlet />
    </div>
  );
};
