import { Link, Outlet, useLocation } from 'react-router-dom';
import { getToken, removeToken, hasToken } from '../utilities/token-storage';
import { useModal } from '../hooks/useModal';
import { useUser } from '../hooks/useUser';
import { AuthForm } from './AuthForm';
import { useState, useEffect, useContext } from 'react';
import { AppDrawer } from './Menu/AppDrawer';
import { Overlay } from './Menu/Overlay';
import { IoMenu } from 'react-icons/io5';
import { MenuItem } from '../utilities/data-types';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { FaQuestion } from 'react-icons/fa6';
import { FaRankingStar } from 'react-icons/fa6';
import { SlHome } from 'react-icons/sl';
import { TbDatabaseDollar } from 'react-icons/tb';
import { AppContext } from './AppContext';
import { IoMdHelp } from 'react-icons/io';

type ActionType = 'sign-up' | 'sign-in';

export const NavBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(hasToken());
  const [isOpen, setIsOpen] = useState(false);
  const [, setAction] = useState('');

  const { openModal, closeModal } = useModal();
  const { setUser } = useUser();
  const { funds, setFunds } = useContext(AppContext);
  const location = useLocation();

  const handleOpenModal = (action: ActionType) => {
    setAction(action);

    const modalContent = (
      <AuthForm
        key={action}
        action={action}
        onSignIn={handleAuthSuccess}
        toggleAction={() =>
          handleOpenModal(action === 'sign-up' ? 'sign-in' : 'sign-up')
        }
      />
    );
    openModal(
      modalContent,
      action === 'sign-up' ? `Let's create your account!` : 'Welcome back!'
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
    nav: 'flex justify-between p-2 py-6 md:pr-10 bg-[#1F1F21] mb-6 pr-2',
    appName:
      'text-lg italic ml-2 flex md:text-3xl lg:text-4xl xl:text-5xl md:ml-4 lg:ml-10 md:px-10',
    let: 'text-red-600 italic mr-1',
    s: 'mr-1 font-light ',
    parlay: 'text-blue-500',
    buttonsWrapper: 'flex items-center gap-1 md:gap-3 mr-1 md:mr-0',
    join: 'lg:text-custom xl:text-custom text-tiny tracking-wider p-1 bg-red-700 hover:bg-red-600 rounded-sm md:rounded-md px-2 md:px-7 md:py-2',
    login:
      'lg:text-custom xl:text-custom flex gap-1 text-tiny p-1 bg-blue-800 hover:bg-blue-700 rounded-sm md:rounded-md px-2 md:px-6 md:py-2',
    logout:
      'text-tiny md:text-custom lg:text-custom xl:text-custom 2xl:text-custom flex 2xl:gap-2 gap-1 p-1 mr-2 md:mr-0 border border-zinc-400 hover:border-white rounded-sm md:rounded-md bg-black px-2 md:px-6 md:py-2 hover:bg-zinc-900',
    list: 'flex md:justify-end md:items-end gap-0 md:mr-6 mr-2 flex-nowrap',
    userName: 'text-sm leading-2 md:text-2xl',
    funds: 'text-sm leading-2 md:text-2xl text-[#54D338] cursor-pointer',
  };

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const menuItems: MenuItem[] = [
    { title: 'Home', path: '/', icon: <SlHome /> },
    { title: 'Bets', path: '/bets', icon: <TbDatabaseDollar /> },
    {
      title: 'Schedule',
      path: '/schedule',
      icon: <IoCalendarNumberOutline />,
      isExternal: true,
    },
    {
      title: 'Rankings',
      path: '/rankings',
      icon: <FaRankingStar />,
      isExternal: true,
    },

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
            className="ml-2 text-lg md:text-3xl cursor-pointer hover:bg-slate-500 rounded-full w-14 h-14 p-3"
          />
          <Link to={'/'} className={styles.appName}>
            <p className={styles.let}>LET</p>
            <p className={styles.s}>$</p>
            <p className={styles.parlay}>PARLAY</p>
          </Link>
        </div>

        {hasToken() ? (
          <div className="flex justify-between items-center">
            <div className=" md:mr-4">
              <div className={styles.list}>
                <Link to={'/bets'} className="flex gap-2 hover:scale-105">
                  <p className={styles.userName}>{name}</p>
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
              <div className="className">SIGN IN </div>
            </button>
          </div>
        )}
        {location.pathname !== '/faq' && (
          <Link
            to={'/faq'}
            className="fixed top-28 md:top-32 right-4 md:right-20 z-50">
            <span style={{ transition: 'all 0.2s ease-in-out' }}>
              <IoMdHelp
                className="text-4xl p-1 text-gray-400 transform transition-transform duration-200 ease-in-out hover:bg-white hover:text-[#0f0f0f] hover:scale-150 border-gray-400 border-2 rounded-full"
                style={{ opacity: '0.75' }}
                onMouseOver={({ currentTarget }) =>
                  (currentTarget.style.opacity = '1')
                }
                onMouseOut={({ currentTarget }) =>
                  (currentTarget.style.opacity = '0.75')
                }
              />
            </span>
          </Link>
        )}
      </nav>
      <Outlet />
    </div>
  );
};
