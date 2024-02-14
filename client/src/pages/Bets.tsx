import { useState, useEffect } from 'react';
import { getToken } from '../utilities/token-storage';

type Bet = {
  eventId: string;
  betType: string;
  betAmount: number;
  pick: string;
  completed: boolean;
  dateTime: string;
};

export function Bets() {
  const [bets, setBets] = useState<Bet[]>([]);
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
      const betsData = await res.json();
      const formattedBets: Bet[] = betsData.map((bet: any) => ({
        eventId: bet.eventId,
        betType: bet.betType,
        betAmount: bet.betAmount,
        pick: bet.pick,
        dateTime: bet.dateTime,
        completed: bet.completed,
      }));
      setBets(formattedBets);
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

  const styling =
    'flex gap-8 text-odds md:text-xl justify-between items-center ';

  return (
    <div className="flex gap-4 justify-center">
      <ul className="flex gap-14">
        {bets.map((bet) => (
          <li
            key={bet.eventId}
            className="flex flex-col text-white text-sm   p-6 rounded-md bg-[#212123e3] mt-8">
            <div className={styling}>
              <div className={styling}> Amount: </div>
              <div className={styling}>
                <p>$</p>
                {bet.betAmount}
              </div>
            </div>
            <div className={styling}>
              <div className={styling}> Bet Type:</div>
              <div className={styling}>{bet.betType}</div>
            </div>
            <div className={styling}>
              <div className={styling}> Pick:</div>
              <div className={styling}>{bet.pick}</div>
            </div>
            <div className={styling}>
              <div className={styling}> Date/Time:</div>
              <div className={styling}>{bet.dateTime}</div>
            </div>
            <div className={styling}>
              <div className={styling}> Completed:</div>
              <div className={styling}>{bet.completed.toString()}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// If you or someone you know has a gambling problem and wants help, call 1-800-GAMBLER