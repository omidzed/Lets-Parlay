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
          className="fixed right-2 bottom-10 opacity-80 hover:opacity-100 md:right-10 md:bottom-8 lg:right-30 cursor-pointer hover:scale-125 transition-transform">
          <FaCircleChevronUp
            className={`text-large ${
              isActive
                ? ' opacity-100 rounded-full hover:text-gray-600 hover:bg-yellow-500 hover:scale-110 '
                : 'opacity-100'
            }`}
          />
        </div>
      )}
    </>
  );
};
