import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from './Hamburger/Spinner';

export const Schedule = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      window.open('https://www.espn.com/mma/schedule/_/league/ufc', '_blank');
      navigate('/');
    }, 500);
  }, [navigate]);

  return <Spinner />;
};
