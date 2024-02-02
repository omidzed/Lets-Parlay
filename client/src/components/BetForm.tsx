import type { Event } from '../pages/HomePage';
import { type FormEvent, useState } from 'react';
import { calculateWinnings } from '../utilities/payout-calculator';
import CurrencyInput from 'react-currency-input-field';
import { getToken } from '../utilities/token-storage';

type BetFormProps = {
  event: Event;
};

export function BetForm({ event }: BetFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      setIsLoading(!isLoading);
      const formData = new FormData(event.currentTarget);
      const userData = Object.fromEntries(formData.entries());
      const req = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${getToken().token}`,
        },
        body: JSON.stringify(userData),
      };
      const res = await fetch('/api/bets', req);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }
      const user = await res.json();
      alert('Bet placed successfully!');
      console.log('Bet placed successfully!', user);
    } catch (err) {
      alert(`Error placing bet: ${err}`);
    } finally {
      setIsLoading(false);
    }
  }

  const betOdds = event.outcomes[0].moneyline;
  const winnings = calculateWinnings(betOdds, 100);
  console.log('winnings', winnings);

  return (
    <>
      <ul>
        <li>{event.outcomes[0].name}</li>
        <li>
          {event.outcomes[0].moneyline > 0
            ? `+${event.outcomes[0].moneyline}`
            : event.outcomes[0].moneyline}
        </li>
        <li>
          <form
            className="flex-col block justify-center items-center gap-2 my-2 p-2 mt-4"
            onSubmit={handleSubmit}>
            <input type="hidden" name="betType" value="moneyline" />
            <input type="hidden" name="eventId" value={event.eventId} />
            <label className="mr-4">Amount</label>
            <CurrencyInput
              name="betAmount"
              autoFocus
              placeholder="0.00"
              decimalsLimit={4}
            />
            <div> Expected Payout $ {winnings}</div>
            <input
              className="mt-7 block bg-blue-700 text-white px-8
            py-4 rounded-md cursor-pointer"
              type="submit"
              value="Submit"
            />
          </form>
        </li>
      </ul>
    </>
  );
}
