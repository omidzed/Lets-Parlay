import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
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
import { SearchBox } from '../SearchBox';
import { useEvents } from '../../Hooks/useEvents';

interface NavBarLeftSectionProps {
  toggleMenu: () => void;
}

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useModal();
  const { user, handleSignOut, funds } = useUser();
  const { setBets } = useBets();

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
      </nav>
      <Outlet />
    </div>
  );
};

const NavBarLeftSection: React.FC<NavBarLeftSectionProps> = ({
  toggleMenu,
}) => {
  const { setInputValue } = useEvents();
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center justify-center">
        <button
          onClick={toggleMenu}
          className={styles.menuIcon}
          aria-label="Toggle menu">
          <RiMenu2Line className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <Link to={'/'} className={styles.appName}>
          <p className={styles.let}>LET</p>
          <p className={styles.s}>$</p>
          <p className={styles.parlay}>PARLAY</p>
        </Link>
        <SearchBox
          className="hidden md:block md:relative md:left-56"
          setInputValue={setInputValue}
        />
      </div>
    </div>
  );
};

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
            <Link
              to={'/bets'}
              className="flex gap-2 transition duration-200 ease-in-out hover:scale-105">
              <p className={styles.userName}>{name}</p>
              <p className={styles.funds}>{`(${formattedFunds})`}</p>
            </Link>
          </div>
        </div>
        <button
          className={`${styles.logout} md:mr-20 whitespace-nowrap`}
          onClick={logOut}>
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

const formatFunds = (funds?: number | string): string => {
  let numericFunds = Number(funds); // Convert to number if it's a string
  if (isNaN(numericFunds)) return 'N/A'; // Check if the conversion result is a valid number

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(numericFunds);
};

const styles = {
  nav: 'flex justify-between py-2 md:py-6 md:pr-2 bg-[#1F1F21] mb-4 pr-2',
  appName:
    'flex justify-start items-center text-custom italic flex md:text-2xl lg:text-3xl xl:text-4xl md:ml-4 lg:ml-8 md:px-10',
  let: 'text-yellow-500 italic mr-1',
  s: 'mr-1 text-smallest md:text-xl lg:text-2xl xl:text-3xl flex items-end font-light',
  parlay: 'text-yellow-500',
  buttonsWrapper: 'flex items-center gap-1 md:gap-3 mr-2 md:mr-10',
  login:
    'transition duration-300 ease-in-out hover:font-medium hover:bg-yellow-400 lg:text-small text-black flex gap-1 text-tiny p-1 bg-yellow-500 border border-black hover:border-white rounded-md md:rounded-md px-4 md:px-8 py-1 md:py-2',
  logout:
    'hidden xl:block text-tiny md:mr-8 md:text-thead p-1 mx-2 md:mr-0 border border-black hover:border-yellow-500 hover:text-yellow-500 transition duration-300 ease-in-out rounded-sm md:rounded-md bg-[#070707] px-2 md:px-10 md:py-2',
  list: 'flex md:justify-end md:items-end gap-0 md:mr-6 mr-2 flex-nowrap font-thin',
  userName: 'text-sm leading-2 md:text-xl',
  funds: 'text-sm leading-2 md:text-xl text-[#54D338] cursor-pointer',
  menuIcon:
    'flex items-center mr-2 hover:scale-75 p-2 border-2 border-transparent hover:border-yellow-400 justify-center w-8 h-8 md:w-10 md:h-10 ml-2 md:ml-4 hover:bg-black rounded-full transition-all duration-300',
};
