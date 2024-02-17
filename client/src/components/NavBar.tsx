import { Link, Outlet } from 'react-router-dom';
import { getToken, removeToken, hasToken } from '../utilities/token-storage';
import { useModal } from './useModal';
import { useUser } from './useUser';
import { AuthForm } from './AuthForm';
import { useState, useEffect } from 'react';
import { AppDrawer } from './Hamburger/AppDrawer';
import { Overlay } from './Hamburger/Overlay';
import { IoMenu } from 'react-icons/io5';
import { MenuItem } from '../utilities/data-types';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { FaQuestion } from 'react-icons/fa6';
import { FaRankingStar } from 'react-icons/fa6';
import { SlHome } from 'react-icons/sl';
import { TbDatabaseDollar } from 'react-icons/tb';

export function NavBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasToken());
  const [isOpen, setIsOpen] = useState(false);
  const [action, setAction] = useState<'sign-up' | 'sign-in'>(undefined);
  const [funds, setFunds] = useState<string>(() => {
    const tokenData = getToken();
    return tokenData ? (tokenData.user.funds / 100).toFixed(2) : '1000.00';
  });

  //ask Shawn about this
  action;

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
    if (isAuthenticated) {
      const tokenData = getToken();
      const fundsFromToken = tokenData?.user.funds
        ? (tokenData.user.funds / 100).toFixed(2)
        : '1000.00';
      setFunds(fundsFromToken);
    } else {
      setFunds('1000.00');
    }
  }, [isAuthenticated]);

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
  }).format(parseFloat(funds));

  const styles = {
    nav: 'flex pr-2 justify-between  py-6 md:py-5 md:pr-20 bg-[#1F1F21] mb-6 pb-4',
    appName:
      'text-bigger italic flex ml-2 md:text-5xl md:ml-20 cursor-pointer md:py-2 md:px-10',
    let: 'text-red-600 italic mr-1',
    s: 'text-yellow-300 md:text-4xl mr-1 font-light ',
    buttonsWrapper: 'flex  items-center gap-1 md:gap-3 mr-1 md:mr-0',
    join: 'text-rounds px-3 p-1 tracking-widest text-white bg-black border border-yellow-200 rounded-sm md:rounded-md md:px-7 md:py-2 md:text-custom',
    login:
      'text-rounds px-3 p-1 md:tracking-widest text-white bg-blue-800 border border-yellow-200 rounded-sm md:rounded-md md:px-6 md:py-2 md:text-custom',
    logout:
      'text-rounds p-1 md:tracking-wider text-white mr-2 md:mr-4 border border-yellow-200 md:text-custom rounded-lg rounded-sm md:rounded-md bg-red-700 px-2 md:px-6 md:py-2',
    list: 'flex gap-0  md:top-10 md:right-60 text-smallest text-white md:mr-11 mr-3',
    userName:
      'text-tiny leading-2 md:text-odds md:tracking-widest text-white mr-1 md:mr-2 text-left',
    funds: 'text-tiny leading-2 md:text-odds text-[#54D338]',
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
            color="#FFFFFF"
            className="ml-2 text-sm md:text-3xl cursor-pointer"
          />
          <Link
            to={'/'}
            className={`app-name text-[#9c9b9b] ${styles.appName}`}>
            <p className={styles.let}>LET</p>
            <p className={styles.s}>{' $ '}</p>
            <p>PARLAY</p>
          </Link>
        </div>

        {hasToken() ? (
          <div className="flex justify-between items-center">
            <div className="flex-col md:mr-4">
              <div className={styles.list}>
                <p className={styles.userName}>{name}</p>
                <p className={styles.funds}>{`(${formattedFunds})`}</p>
              </div>
            </div>
            <button className={styles.logout} onClick={logOut}>
              Log Out
            </button>
          </div>
        ) : (
          <div className={styles.buttonsWrapper}>
            <button className={styles.join} onClick={handleRegister}>
              JOIN
            </button>
            <button className={styles.login} onClick={handleLogin}>
              LOG IN
            </button>
          </div>
        )}
      </nav>
      <Outlet />
    </div>
  );
}
