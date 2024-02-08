import { useState, useEffect } from 'react';
import { getToken } from '../utilities/token-storage';

type Bet = {
  eventId: string;
  betType: string;
  betAmount: number;
};

export function Bets() {
  const [bets, setBets] = useState<Bet[]>([]);
  6;
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBets = async () => {
    try {
      setIsLoading(true);
      const token = getToken();
      if (!token) {
        throw new Error('Token not found.');
      }
      const req = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.token}`,
        },
      };
      const res = await fetch('/api/bets', req);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }
      const bets = await res.json();
      setBets(bets);
      console.log('bets', bets);
    } catch (err) {
      setError('Failed to fetch bets');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBets();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex justify-center">
      <ul className="flex-col ">
        {bets.map((bet) => (
          <li
            key={bet.eventId}
            className="flex text-white text-smaller w-[60%] h-44 p-6  rounded-md bg-[#212123e3]  mt-8">
            Event ID: {bet.eventId} - Bet Type: {bet.betType} - Amount:
            {bet.betAmount}
          </li>
        ))}
      </ul>
    </div>
  );
}
