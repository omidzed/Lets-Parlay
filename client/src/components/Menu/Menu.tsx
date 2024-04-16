import type { MenuItem } from '../../utilities/data-types';
import { FaExternalLinkAlt } from 'react-icons/fa';

type MenuProps = {
  toggleMenu: () => void;
  onSelect: (menuItemPath: string) => void;
  menuItems: MenuItem[];
};

export const ExternalIcon = () => {
  return <FaExternalLinkAlt />;
};

export const Menu = ({ onSelect, toggleMenu, menuItems }: MenuProps) => {
  const menuItemsList = menuItems.map((menuItem) => (
    <li
      key={menuItem.title}
      className="md:ml-20 ml-8 mb-2 md:mb-4 cursor-pointer"
      onClick={() => onSelect(menuItem.path)}>
      <div className="flex gap-2 md:gap-4 items-center  transition ease-in-out hover:scale-110 cursor-pointer w-1/4">
        <span className=" text-red-600">{menuItem.icon}</span>
        <span className="text-menuItem">{menuItem.title}</span>
        <div className="text-smallest">
          {menuItem.isExternal && <ExternalIcon />}
        </div>
      </div>
    </li>
  ));

  return (
    <div onClick={toggleMenu}>
      <h1 className="mt-20 md:mt-28 flex items-center gap-3 md:gap-5 ml-5 md:ml-16 text-4xl md:text-5xl"></h1>
      <ul className="md:text-username text-xl mt-8 md:mt-12">
        {menuItemsList}
      </ul>
    </div>
  );
};
