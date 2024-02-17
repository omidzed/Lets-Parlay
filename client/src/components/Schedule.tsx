import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from './Hamburger/Spinner';

export const Schedule = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      window.open(
        'https://en.wikipedia.org/wiki/List_of_UFC_events#Scheduled_events',
        '_blank'
      );
      navigate('/');
    }, 500);
  }, [navigate]);

  return <Spinner />;
};
