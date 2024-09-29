type OverlayProps = {
  isOpen: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export const Overlay = ({ isOpen, onClick }: OverlayProps) => {
  return (
    <div
      onClick={onClick}
      className={`fixed top-0 w-full h-full bg-black/75 z-50 cursor-pointer ${
        isOpen ? 'block' : 'hidden'
      }`}></div>
  );
};
