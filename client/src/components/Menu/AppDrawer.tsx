import { Menu } from './Menu';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { MenuItem } from '../../utils/data-types';
import { IoClose } from 'react-icons/io5';

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
      className={`fixed top-0 left-0 h-screen z-50 transition-transform duration-700 ease-in-out bg-[#141414] ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[25%] 2xl:w-[17%]`}>
      <div className={'drawer-container'}>
        <div className={isOpen ? 'hidden' : 'hamburger-container'}></div>
        <div className={isOpen ? 'menu-drawer open' : 'menu-drawer closed'}>
          <div className="flex justify-center ">
            <div className="fixed top-12 right-6 md:top-16 cursor-pointer">
              <IoClose
                onClick={() => toggleMenu()}
                color="white"
                size={45}
                className="md:ml-5 p-2 cursor-pointer hover:border-2 hover:scale-90 duration-200 hover:border-yellow-400 hover:bg-black rounded-full transition ease-out"
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
                  className="text-thead bg-black border text-white border-black hover:border-red-600 px-10 py-2 mt-2 rounded-md"
                  aria-label="Log out"
                  style={{ transition: 'background-color 0.2s' }}>
                  Log Out
                </button>
              ) : (
                <button
                  onClick={wrappedHandleLogin}
                  className="text-small bg-yellow-400 border text-black border-black hover:border-white px-8 py-2 mt-2 rounded-md"
                  aria-label="Log in">
                  Log In | Sign Up
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
