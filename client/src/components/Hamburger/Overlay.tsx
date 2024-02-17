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

// export function OverlayShade({ onClick, toggle }: OverlayShadeProps) {
//   return (
//     <div
//       onClick={toggle}
//       className="absolute top-0 right-0 left-0 bottom-0 h-screen w-screen cursor-pointer"></div>
//   );
// }
//  right-0 bottom-0 left-0
