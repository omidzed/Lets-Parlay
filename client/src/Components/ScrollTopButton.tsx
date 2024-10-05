import { useScrollToTop } from "../Hooks/useScrollToTop";
import { FaCircleChevronUp } from 'react-icons/fa6';
import { useState, useEffect } from 'react';

export const ScrollTopButton = () => {
  const { isVisible, scrollToTop } = useScrollToTop();
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(true);
    scrollToTop();
  };

  useEffect(() => {
    if (!isVisible) {
      setIsActive(false);
    }
  }, [isVisible]);
  return (
    <>
      {isVisible && (
        <div
          onClick={handleClick}
          className="fixed right-2 bottom-10 opacity-70 hover:opacity-100 md:right-14 md:bottom-8 lg:right-30 cursor-pointer hover:scale-125 transition-transform">
          <FaCircleChevronUp
            size={35}
            className={`text-large ${
              isActive
                ? ' opacity-100 rounded-full'
                : 'opacity-100'
            }`}
          />
        </div>
      )}
    </>
  );
};
