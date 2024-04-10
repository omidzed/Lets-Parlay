import { useScrollToTop } from '../hooks/useScrollToTop';
import { FaCircleChevronUp } from 'react-icons/fa6';

export const ScrollTopButton = () => {
  const { isVisible, scrollToTop } = useScrollToTop();

  return (
    <>
      {isVisible && (
        <div
          className="fixed right-2 md:right-20 md:bottom-40 lg:right-30 cursor-pointer hover:scale-125 transition-transform opacity-75 hover:opacity-100"
          onClick={scrollToTop}>
          <FaCircleChevronUp
            className="text-white text-8xl md:text-9xl"
            style={{ fontSize: '2.5rem' }}
          />
        </div>
      )}
    </>
  );
};
