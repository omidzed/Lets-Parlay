import type { MenuItem } from '../../utilities/data-types';

type MenuProps = {
  menuItems: MenuItem[];
  onSelect: (MenuItem: MenuItem) => void;
};

export const Menu = ({ menuItems, onSelect }: MenuProps) => {
  const menuItemsList = menuItems.map((menuItem, index) => (
    <li
      className="cursor-pointer"
      key={index}
      onClick={() => onSelect(menuItem)}>
      {menuItem.title}
    </li>
  ));

  return (
    <ul>
      <h1>Menu</h1>
      {menuItemsList}
    </ul>
  );
};
