import { useScrollToTop } from '../hooks/useScrollToTop';
import { FaCircleChevronUp } from 'react-icons/fa6';
import { useState, useEffect } from 'react';

export const ScrollTopButton = () => {
  const { isVisible, scrollToTop } = useScrollToTop();
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(true); // Activate the icon color change
    scrollToTop();
  };

  // Effect to reset icon color when not visible or after scroll
  useEffect(() => {
    if (!isVisible) {
      setIsActive(false);
    }
  }, [isVisible]); // Depend on isVisible to reset the color
  return (
    <>
      {isVisible && (
        <div
          onClick={handleClick}
          className="fixed right-2 bottom-10 opacity-80 hover:opacity-100 md:right-10 md:bottom-44 lg:right-30 cursor-pointer hover:scale-150 transition-transform">
          <FaCircleChevronUp
            className={`text-4xl ${
              isActive
                ? 'bg-gradient-to-r from-yellow-400 to-green-400 opacity-100 rounded-full'
                : 'opacity-100'
            }`}
          />
        </div>
      )}
    </>
  );
};
