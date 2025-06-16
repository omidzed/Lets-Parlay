import { Menu } from './Menu';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { MenuItem } from '../../utils/data-types';
import { FaArrowLeft } from 'react-icons/fa6';

type AppDrawerProps = {
  isOpen: boolean;
  toggleMenu: () => void;
  menuItems: MenuItem[];
  onLogout?: () => void;
  isAuthenticated: boolean;
  handleLogin: () => void;
};

export const AppDrawer = ({
  isOpen,
  toggleMenu,
  menuItems,
  isAuthenticated,
  handleLogin,
  onLogout,
}: AppDrawerProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        toggleMenu();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, toggleMenu]);

  const handleSelect = (path: string) => {
    navigate(path);
  };

  const wrappedHandleLogin = () => {
    handleLogin(); // Perform login
    toggleMenu(); // Close drawer after login
  };

  const wrappedOnLogout = () => {
    if (onLogout) {
      onLogout(); // Perform logout
    }
    toggleMenu(); // Close drawer after logout
  };

  return (
    <div
      className={`${styles.appDrawer} ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
      <div className={'drawer-container'}>
        <div className={isOpen ? 'hidden' : 'hamburger-container'}></div>
        <div className={isOpen ? 'menu-drawer open' : 'menu-drawer closed'}>
          <div className="flex justify-center ">
            <div className="fixed top-12 right-6 md:top-16 cursor-pointer">
              <FaArrowLeft
                onClick={() => toggleMenu()}
                color="white"
                size={40}
                className={styles.back}
              />
            </div>
            <div className="mt-14 flex flex-col justify-center items-center">
              <Menu
                toggleMenu={toggleMenu}
                onSelect={handleSelect}
                menuItems={menuItems}
              />
              {isAuthenticated ? (
                <button
                  onClick={wrappedOnLogout}
                  className={styles.button}
                  aria-label="Log out"
                  style={{ transition: 'background-color 0.2s' }}>
                  Log Out
                </button>
              ) : (
                <button
                  onClick={wrappedHandleLogin}
                  className={styles.login}
                  aria-label="Log in">
                  LOG IN | SIGN UP
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  appDrawer:
    'w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[25%] 2xl:w-[17%] fixed top-0 left-0 h-screen z-50 transition-transform duration-700 ease-in-out bg-[#141414]',
  button:
    'transition duration-300 ease-in-out text-thead bg-black border text-white border-black hover:border-yellow-500 hover:text-yellow-400 px-10 py-2 mt-2 rounded-md',
  back: 'md:ml-5 p-2 cursor-pointer hover:border-2 hover:scale-90 transition-all duration-200 hover:border-yellow-400 hover:bg-black rounded-full',
  login:
    'transition duration-300 ease-in-out text-small bg-yellow-500 hover:bg-yellow-400 border text-black border-black hover:border-white px-8 py-2 mt-2 rounded-md',
};
