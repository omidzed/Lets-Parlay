import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from './Hamburger/Spinner';

export const Rankings = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Open the rankings URL in a new tab and navigate back to the homepage after a short delay
    setTimeout(() => {
      window.open('https://www.ufc.com/rankings', '_blank');
      // Use navigate to go back to the homepage
      navigate('/');
    }, 500); // Adjust delay as needed for the spinner visibility

    // No cleanup function needed in this case
  }, [navigate]);

  // Show the spinner while waiting
  return <Spinner />;
};
