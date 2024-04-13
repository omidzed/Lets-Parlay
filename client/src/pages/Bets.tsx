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
      console.log('betsdata', betsData);
      const formattedBets: Bet[] = betsData.map((bet) => {
        const now = new Date();
        const nowUtc = new Date(
          Date.UTC(
            now.getFullYear(),
            now.getMonth(),
            now.getDate(),
            now.getHours(),
            now.getMinutes(),
            now.getSeconds()
          )
        );
        console.log(nowUtc);
        const isOpen = nowUtc < bet.dateTime;
        return {
          id: uid(bet),
          betType: bet.betType,
          betAmount: bet.betAmount,
          pick: bet.pick,
          dateTime: bet.dateTime,
          closed: !isOpen,
          placedAt: bet.placedAt,
          status: isOpen ? 'Open' : 'Closed',
        };
      });
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
      <div className="mx-auto w-[80%] text-center text-lg md:text-2xl mt-28">
        {error}
      </div>
    );

  const styling =
    'flex gap-6 text-smallest md:text-xl justify-between items-center ';

  return (
    <div className="flex flex-col p-2 gap-4 justify-center">
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
              <div className={styling}>{bet.placedAt}</div>
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
              <div className={styling}>{bet.status}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
