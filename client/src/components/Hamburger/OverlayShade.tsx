type OverlayShadeProps = {
  isOpen: boolean;
  toggle: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export function OverlayShade({ isOpen, toggle }: OverlayShadeProps) {
  return (
    <div
      className={`absolute top-0 h-screen w-screen ${
        isOpen ? 'bg-black bg-opacity-50 cursor-pointer' : 'hidden'
      }`}
      onClick={toggle}></div>
  );
}
