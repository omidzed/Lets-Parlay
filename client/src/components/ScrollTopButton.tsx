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
          className="fixed right-2 md:right-20 md:bottom-40 lg:right-30 cursor-pointer hover:scale-125 transition-transform opacity-75 hover:opacity-100">
          <FaCircleChevronUp
            className={`text-4xl md:text-5xl ${
              isActive
                ? 'bg-gradient-to-r from-yellow-500 to-green-500 rounded-full'
                : 'text-white'
            }`}
          />
        </div>
      )}
    </>
  );
};
