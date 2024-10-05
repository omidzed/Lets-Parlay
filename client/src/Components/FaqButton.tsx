import { IoMdHelp } from 'react-icons/io';
import { Link } from 'react-router-dom';

export const FaqButton: React.FC<{ location: { pathname: string } }> = ({
  location,
}) =>
  location.pathname !== '/faq' && (
    <Link to={'/faq'} className={styles.faqLink}>
      <span className={styles.faqIcon}>
        <IoMdHelp className={styles.faqIconSvg} />
      </span>
    </Link>
  );

const styles = {
  faqLink: 'fixed bottom-8 left-4 md:left-16 z-50',
  faqIcon: 'transition-transform',
  faqIconSvg:
    'hidden md:block md:text-extraLarge p-1 text-white-300 transform transition-transform duration-200 ease-in-out hover:bg-black hover:text-white hover:scale-125 border-gray-400 hover:border-yellow-400 border-2 rounded-full opacity-75 hover:opacity-100',
};
