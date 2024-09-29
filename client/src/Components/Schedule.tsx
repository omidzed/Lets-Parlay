import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Schedule = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.open('https://www.espn.com/mma/schedule/_/league/ufc', '_blank');
    navigate('/');
  }, [navigate]);

  return <></>;
};
