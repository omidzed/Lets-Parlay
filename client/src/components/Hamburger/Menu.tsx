import type { MenuItem } from '../../utilities/data-types';
import { IoMenu } from 'react-icons/io5';

type MenuProps = {
  toggleMenu: () => void;
  onSelect: (menuItemPath: string) => void;
  menuItems: MenuItem[];
};

export const Menu = ({ onSelect, toggleMenu, menuItems }: MenuProps) => {
  const menuItemsList = menuItems.map((menuItem) => (
    <li
      key={menuItem.title}
      className="md:ml-18 ml-8 mb-2 md:mb-4 cursor-pointer"
      onClick={() => onSelect(menuItem.path)}>
      <div className="flex gap-2 md:gap-4 items-center cursor-pointer">
        <span className="text-thead text-red-500">{menuItem.icon}</span>{' '}
        <span className="text-menuItem">{menuItem.title}</span>
      </div>
    </li>
  ));

  return (
    <div onClick={toggleMenu}>
      <h1 className="mt-16 md:mt-28 flex items-center gap-3 md:gap-4 ml-5 md:ml-16 text-4xl md:text-5xl text-red-500">
        <IoMenu size={25} color="white" /> Menu
      </h1>
      <ul className="md:text-username text-xl mt-12 md:mt-12">
        {menuItemsList}
      </ul>
    </div>
  );
};
