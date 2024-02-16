import { Menu } from './Menu';
import { useState } from 'react';
import { OverlayShade } from './OverlayShade';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from '../../utilities/data-types';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { IoMenu } from 'react-icons/io5';

type AppDrawerProps = {
  menuItems: MenuItem[];
};

export const AppDrawer = ({ menuItems }: AppDrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  function onSelect(menuItem: MenuItem) {
    navigate(menuItem.path);
    toggleDrawer();
  }

  return (
    <div className={'drawer-container'}>
      <div className={isOpen ? 'hidden' : 'hamburger-container'}>
        <IoMenu
          onClick={toggleDrawer}
          color="#FFFFFF"
          className="ml-2 text-sm md:text-3xl"
        />
      </div>
      <div className={isOpen ? 'menu-drawer open' : 'menu-drawer closed'}>
        {isOpen && (
          <FaArrowLeftLong
            className="text-white mt-4 mb-10 ml-8 text-custom cursor-pointer"
            onClick={toggleDrawer}
          />
        )}
        <Menu onSelect={onSelect} menuItems={menuItems} />
      </div>
      <OverlayShade toggle={toggleDrawer} isOpen={isOpen} />
      <div
        className={
          isOpen
            ? 'absolute h-screen w-screen bg-black opacity-25 top-0'
            : 'hidden'
        }></div>
    </div>
  );
};
