import { useState, useEffect } from 'react';
import { getToken } from '../utilities/token-storage';
import { uid } from 'react-uid';
import type { Bet } from '../utilities/data-types';

export const Bets = () => {
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
        id: uid(bet),
        eventId: bet.eventId,
        betType: bet.betType,
        betAmount: bet.betAmount,
        pick: bet.pick,
        dateTime: bet.dateTime,
        completed: bet.completed,
        timeStamp: bet.timeStamp,
      }));
      setBets(formattedBets);
    } catch (err) {
      setError(
        'No bets data to show, please log in or use Guest Check-In in order to place/view bets!'
      );
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchBets();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div className="mx-auto w-[95%] text-lg md:text-3xl mt-28">{error}</div>
    );
  //const timeStamp = new Date().toISOString();

  const styling =
    'flex gap-6 text-smallest md:text-xl justify-between items-center ';

  return (
    <div className="flex flex-col p-6 gap-4 justify-center">
      <p className="flex justify-center text-white text-smallest px-4 md:px-40 md:text-bigger">
        If you or someone you know has a gambling problem and wants help, call
        1-800-GAMBLER.
      </p>
      {bets.length === 0 && (
        <p className="flex justify-center text-xl md:text-4xl py-40 px-2">
          No recorded bets at the moment.
        </p>
      )}
      <ul className="flex justify-start md:gap-10 md:px-20 mx-10 md:mx-20 flex-wrap">
        {bets.map((bet) => (
          <li
            key={bet.id}
            className="flex flex-col text-white text-sm w-120 md:w-96  p-6 rounded-md bg-[#212123e3] mt-8">
            <div className={styling}>
              <div className={styling}> Bet time/date: </div>
              <div className={styling}>{bet.timeStamp}</div>
            </div>
            <div className={styling}>
              <div className={styling}> Amount: </div>
              <div className={styling}>${bet.betAmount}</div>
            </div>
            <div className={styling}>
              <div className={styling}> Pick:</div>
              <div className={styling}>{bet.pick}</div>
            </div>
            <div className={styling}>
              <div className={styling}> Fight Time:</div>
              <div className={styling}>{bet.dateTime}</div>
            </div>
            <div className={styling}>
              <div className={styling}>Status:</div>
              <div className={styling}>
                {bet.completed === false ? 'Closed' : 'Open'}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
