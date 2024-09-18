import type { Bet } from '../utils/data-types';
import { getToken } from '../utils/token-storage';
import { formatDateTime } from '../utils/format-date-time';
import { useBets } from '../hooks/useBets';
import { styling } from './Bets';

export const SettleBets = () => {
  const token = getToken();
  const { bets, setBets, isLoading } = useBets();

  bets.map((bet: Bet) => {
    return {
      ...bet,
    };
  });

  const handleWinnerChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    betId: string
  ) => {
    const newWinnerStatus = event.target.checked;
    const updatedBets = bets.map((bet) => {
      if (bet.betId === betId) {
        return { ...bet, winner: newWinnerStatus };
      }
      return bet;
    });
    setBets(updatedBets);
  };

  const updateBetWinner = async (bet: Bet) => {
    try {
      const response = await fetch(`/api/bets/${bet.betId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token?.token}`,
        },
        body: JSON.stringify({
          winner: bet.winner,
          status: 'closed', // Set the status as Closed when updating
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to settle bet.');
      }
      const settledBet = await response.json();
      console.log('Bet settled:', settledBet);
      setBets(
        bets.map((b) => (b.betId === bet.betId ? { ...b, ...settledBet } : b))
      );
    } catch (error) {
      console.error('Error settling bet:', error);
    }
  };

  const handleSubmit = (event, betId: string) => {
    event.preventDefault();
    const betToUpdate = bets.find((bet) => bet.betId === betId);
    if (betToUpdate) {
      betToUpdate.winner = betToUpdate.winner; // Ensure winner is set from checkbox
      updateBetWinner(betToUpdate);
    }
  };

  return (
    <div className="flex flex-col p-2 gap-4 items-center justify-center">
      {isLoading && (
        <p className="flex justify-center text-xl md:text-4xl py-40 px-2">
          Loading bets...
        </p>
      )}
      {!isLoading && bets.length === 0 && (
        <p className="flex justify-center text-xl md:text-4xl py-40 px-2">
          No recorded bets at the moment.
        </p>
      )}
      <ul className="flex justify-center md:justify-start md:gap-10 md:px-20 mx-10 md:mx-20 flex-wrap">
        {bets.map((bet) => (
          <li
            key={bet.betId}
            className="flex flex-col text-white text-sm w-120 md:w-96 p-6 rounded-md bg-[#212123e3] mt-8">
            <form onSubmit={(e) => handleSubmit(e, bet.betId)}>
              <div className={styling}>
                <div className={styling}>Bet date/time:</div>
                <div className={styling}>{formatDateTime(bet.placedAt)}</div>
              </div>
              <div className={styling}>
                <div className={styling}>Amount:</div>
                <div className={styling}>${bet.betAmount}</div>
              </div>
              <div className={styling}>
                <div className={styling}>Pick:</div>
                <div className={styling}>{bet.pick}</div>
              </div>
              <div className={styling}>
                <div className={styling}>Fight date/time:</div>
                <div className={styling}>{formatDateTime(bet.dateTime)}</div>
              </div>
              <div className={styling}>
                <div className={styling}>Status:</div>
                <div className={styling}>{bet.status}</div>
              </div>
              <div className={styling}>
                <div className={styling}>Payout:</div>
                <div
                  className={`${styling} ${
                    bet.winner ? 'text-green-500' : ''
                  }`}>
                  {bet.winner && '+ '}
                  {bet.payout}
                </div>
              </div>
              <div className={styling}>
                <label
                  htmlFor={`toggle-winner-${bet.betId}`}
                  className={styling}>
                  Winner:
                </label>
                <input
                  type="checkbox"
                  id={`toggle-winner-${bet.betId}`}
                  checked={bet.winner || false}
                  onChange={(event) => handleWinnerChange(event, bet.betId)}
                  className="toggle-checkbox"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Settle Bet
              </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
};
