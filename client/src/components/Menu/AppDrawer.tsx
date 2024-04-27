import { Menu } from './Menu';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { MenuItem } from '../../utilities/data-types';
import { BackButton } from './BackButton';

type AppDrawerProps = {
  isOpen: boolean;
  toggleMenu: () => void;
  menuItems: MenuItem[];
};

export const AppDrawer = ({
  isOpen,
  toggleMenu,
  menuItems,
}: AppDrawerProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
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

  return (
    <div
      className={`fixed top-0 left-0 h-screen z-50 transition-transform duration-700 ease-in-out bg-[#171718] ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[25%] 2xl:w-[20%]`}>
      <div className={'drawer-container'}>
        <div className={isOpen ? 'hidden' : 'hamburger-container'}></div>
        <div className={isOpen ? 'menu-drawer open' : 'menu-drawer closed'}>
          <div className="flex justify-center ">
            <div className="fixed top-24 right-14 md:top-20 cursor-pointer md:opacity-50 opacity-85 hover:opacity-100 hover:scale-125 transition ease-out">
              <BackButton toggleMenu={toggleMenu} />
            </div>
            <div>
              <Menu
                toggleMenu={toggleMenu}
                onSelect={handleSelect}
                menuItems={menuItems}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
