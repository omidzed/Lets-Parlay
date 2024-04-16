import { FaCircleChevronLeft } from 'react-icons/fa6';

type BackButtonProps = {
  toggleMenu: () => void;
};

export const BackButton = ({ toggleMenu }: BackButtonProps) => {
  return (
    <div>
      <FaCircleChevronLeft onClick={toggleMenu} />
    </div>
  );
};
