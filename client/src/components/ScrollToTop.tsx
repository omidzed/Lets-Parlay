import { useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Effect to add the window scroll event listener
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="fixed right-2 bottom-5 md:right-20 md:bottom-20 cursor-pointer hover:scale-125 transition-transform opacity-50 md:opacity-100"
          onClick={scrollToTop}>
          <FaArrowCircleUp
            className="text-white text-8xl md:text-9xl" // Adjust text size for icon size
            style={{ fontSize: '2.5rem' }} // Example of inline style for size, adjust as needed
          />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
