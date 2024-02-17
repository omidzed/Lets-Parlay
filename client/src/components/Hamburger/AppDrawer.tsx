import { Menu } from './Menu';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { MenuItem } from '../../utilities/data-types';

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

  function handleSelect(path: string) {
    navigate(path);
  }

  return (
    <div
      className="fixed top-0 w-52 md:w-80 h-screen z-50 bg-[#171718]
       transition-transform duration-200 ease-in-out">
      <div className={'drawer-container'}>
        <div className={isOpen ? 'hidden' : 'hamburger-container'}></div>
        <div className={isOpen ? 'menu-drawer open' : 'menu-drawer closed'}>
          <Menu
            toggleMenu={toggleMenu}
            onSelect={handleSelect}
            menuItems={menuItems}
          />
        </div>
      </div>
    </div>
  );
};
