import { IoIosCloseCircleOutline } from 'react-icons/io';

type BackButtonProps = {
  toggleMenu: () => void;
};

export const BackButton = ({ toggleMenu }: BackButtonProps) => {
  return (
    <div>
      <IoIosCloseCircleOutline onClick={toggleMenu} size={35} />
    </div>
  );
};
