import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { IoMdHelp } from 'react-icons/io';
import { RiMenu2Line } from 'react-icons/ri';
import { SlHome } from 'react-icons/sl';
import { TbDatabaseDollar } from 'react-icons/tb';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { FaRankingStar, FaQuestion } from 'react-icons/fa6';
import { useModal } from '../../Hooks/useModal';
import { useUser } from '../../Hooks/useUser';
import { AuthForm } from '../Forms/AuthForm';
import { AppDrawer } from '../Menu/AppDrawer';
import { Overlay } from '../Menu/Overlay';
import { MenuItem } from '../../utils/data-types';
import { ActionType } from '../../utils/data-types';
import { useBets } from '../../Hooks/useBets';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { openModal } = useModal();
  const { user, handleSignOut, funds } = useUser();
  const { setBets } = useBets();

  const location = useLocation();
  const navigate = useNavigate();

  const isAuthenticated = !!user;
  const name = user?.name;
  const formattedFunds = formatFunds(funds);

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

  const handleOpenModal = (action: ActionType) => {
    openModal(
      <AuthForm
        key={action}
        action={action}
        toggleAction={() =>
          handleOpenModal(action === 'sign-up' ? 'sign-in' : 'sign-up')
        }
      />,
      action === 'sign-up' ? `Let's create your account!` : 'Welcome back!'
    );
  };

  const logOut = () => {
    setBets([]);
    handleSignOut();
    navigate('/');
  };

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div>
      {isOpen && <Overlay onClick={toggleMenu} isOpen={isOpen} />}
      <nav className={styles.nav}>
        {isOpen && (
          <AppDrawer
            toggleMenu={toggleMenu}
            isOpen={isOpen}
            menuItems={menuItems}
            onLogout={logOut}
            isAuthenticated={isAuthenticated}
            handleLogin={() => handleOpenModal('sign-in')}
          />
        )}
        <NavBarLeftSection toggleMenu={toggleMenu} />
        <NavBarRightSection
          isAuthenticated={isAuthenticated}
          name={name}
          formattedFunds={formattedFunds}
          handleLogin={() => handleOpenModal('sign-in')}
          logOut={logOut}
        />
        <FaqButton location={location} />
      </nav>
      <Outlet />
    </div>
  );
};

const NavBarLeftSection: React.FC<{ toggleMenu: () => void }> = ({
  toggleMenu,
}) => (
  <div className="flex justify-center items-center">
    <RiMenu2Line
      onClick={toggleMenu}
      color="white"
      size={40}
      className={styles.menuIcon}
    />
    <Link to={'/'} className={styles.appName}>
      <p className={styles.let}>LET</p>
      <p className={styles.s}>$</p>
      <p className={styles.parlay}>PARLAY</p>
    </Link>
  </div>
);

const NavBarRightSection: React.FC<{
  isAuthenticated: boolean;
  name?: string;
  formattedFunds: string;
  handleLogin: () => void;
  logOut: () => void;
}> = ({ isAuthenticated, name, formattedFunds, handleLogin, logOut }) => (
  <div className="flex justify-between items-center">
    {isAuthenticated ? (
      <>
        <div className="md:mr-4">
          <div className={styles.list}>
            <Link to={'/bets'} className="flex gap-2 hover:scale-105">
              <p className={styles.userName}>{name}</p>
              <p className={styles.funds}>{`(${formattedFunds})`}</p>
            </Link>
          </div>
        </div>
        <button className={`${styles.logout} md:mr-20`} onClick={logOut}>
          Log Out
        </button>
      </>
    ) : (
      <div className={styles.buttonsWrapper}>
        <button className={styles.login} onClick={handleLogin}>
          <div>Log In | Sign Up</div>
        </button>
      </div>
    )}
  </div>
);

const FaqButton: React.FC<{ location: { pathname: string } }> = ({
  location,
}) =>
  location.pathname !== '/faq' && (
    <Link to={'/faq'} className={styles.faqLink}>
      <span className={styles.faqIcon}>
        <IoMdHelp className={styles.faqIconSvg} />
      </span>
    </Link>
  );

const formatFunds = (funds?: number | string): string => {
  let numericFunds = Number(funds); // Convert to number if it's a string
  if (isNaN(numericFunds)) return 'N/A'; // Check if the conversion result is a valid number

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(numericFunds);
};

const styles = {
  nav: 'flex justify-between md:py-4 md:pr-10 bg-[#1F1F21] mb-4 pr-2',
  appName:
    'flex justify-start items-center text-custom italic flex md:text-2xl lg:text-3xl xl:text-4xl md:ml-4 lg:ml-10 md:px-10',
  let: 'text-yellow-400 italic mr-1',
  s: 'mr-1 text-smallest md:text-xl lg:text-2xl xl:text-3xl flex items-end font-light',
  parlay: 'text-yellow-400',
  buttonsWrapper: 'flex items-center gap-1 md:gap-3 mr-2 md:mr-20',
  login:
    'lg:text-small text-black flex gap-1 text-tiny p-1 bg-yellow-400 border border-black hover:border-white rounded-md md:rounded-md px-4 md:px-8 py-1 md:py-2',
  logout:
    'hidden md:block text-tiny md:mr-20 md:text-thead p-1 mx-2 md:mr-0 border border-black hover:border-red-700 rounded-sm md:rounded-md bg-black px-2 md:px-10 md:py-2',
  list: 'flex md:justify-end md:items-end gap-0 md:mr-6 mr-2 flex-nowrap font-thin',
  userName: 'text-sm leading-2 md:text-xl',
  funds: 'text-sm leading-2 md:text-xl text-[#54D338] cursor-pointer',
  menuIcon:
    'icon-resize md:ml-5 mr-1 p-3 md:p-2 cursor-pointer hover:border-2 hover:scale-90 hover:border-yellow-400 hover:bg-black rounded-full transform transition-transform duration-300 ease-in-out',
  faqLink: 'fixed top-5 md:top-4 right-4 md:right-10 z-50',
  faqIcon: 'transition: all 0.2s ease-in-out',
  faqIconSvg:
    'hidden md:block md:text-extraLarge p-1 text-white-300 transform transition-transform duration-500 ease-in-out hover:bg-black hover:text-white hover:scale-90 border-gray-400 hover:border-yellow-400 border-2 rounded-full opacity-75 hover:opacity-100',
};
