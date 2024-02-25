import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Rankings = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.open('https://www.ufc.com/rankings', '_blank');
    navigate('/');
  }, [navigate]);

  return <></>;
};
