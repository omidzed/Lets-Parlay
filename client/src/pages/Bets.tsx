import type { Bet } from '../utils/data-types';
import { formatDateTime } from '../utils/format-date-time';
import { useBets } from '../hooks/useBets';

export const styling =
  'flex gap-6 my-1 text-answer md:text-thead justify-between items-center';

export const Bets = () => {
  const { bets, isLoading } = useBets();

  bets.map((bet: Bet) => {
    const formattedPlacedAt = formatDateTime(bet.placedAt);
    const formattedDateTime = formatDateTime(bet.dateTime);
    const isOpen = 'Open';
    return {
      betId: bet.betId,
      userId: bet.userId,
      betType: bet.betType,
      betAmount: bet.betAmount,
      pick: bet.pick,
      dateTime: formattedDateTime,
      placedAt: formattedPlacedAt,
      status: isOpen ? 'Open' : 'Closed',
      payout: bet.payout,
      winner: bet.winner,
      mathId: bet.matchId,
    };
  });

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
            className="flex flex-col text-white text-sm w-120 md:w-96  p-6 rounded-md bg-[#212123e3] mt-8">
            <div className={styling}>
              <div className={styling}> Bet date/time: </div>
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
              <div className={styling}>Fight date/time:</div>
              <div className={styling}>{bet.dateTime}</div>
            </div>
            <div className={styling}>
              <div className={styling}>Status:</div>
              <div className={styling}>{bet.status}</div>
            </div>
            <div className={styling}>
              <div className={styling}>Payout:</div>
              <div className={styling}>{bet.payout}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
