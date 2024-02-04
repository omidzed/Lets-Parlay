import type { Event } from '../pages/HomePage';
import { type FormEvent, useState } from 'react';
import { calculateWinnings } from '../utilities/payout-calculator';
import CurrencyInput from 'react-currency-input-field';
import { getToken } from '../utilities/token-storage';

type BetFormProps = {
  event: Event;
  index: number;
};

type Money = {
  amount: number;
  currency: string;
};

export function BetForm({ event, index }: BetFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [betAmount, setBetAmount] = useState<Money>({
    amount: 0,
    currency: 'USD',
  });

  function handleChange(value: string | undefined) {
    const amountValue = value ? parseFloat(value) : 0;
    setBetAmount((prevState) => ({
      ...prevState,
      amount: amountValue,
    }));
  }

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
  const selectedOutcome = event?.outcomes[index];
  const betOdds = selectedOutcome?.moneyline ?? 0;
  const winnings = selectedOutcome
    ? (calculateWinnings(betOdds, betAmount.amount) + betAmount.amount).toFixed(
        2
      )
    : '0.00';

  return (
    <div className="flex-col justify-center items-center p-10">
      <div className="flex gap-2">
        <span>{selectedOutcome.name}</span>
        <span className="font-bold">
          {betOdds > 0 ? `+${betOdds}` : betOdds}
        </span>
      </div>
      <div className="flex">
        <form
          className="flex-col block justify-center items-center gap-2 my-2 p-2 mt-4"
          onSubmit={handleSubmit}>
          <input type="hidden" name="betType" value="moneyline" />
          <input type="hidden" name="eventId" value={event.eventId} />
          <div className="flex gap-2">
            <label className="font-bold">Amount : </label>
            <div>
              <span className="mr-1">$</span>
              <CurrencyInput
                className="bg-blue-200 rounded-md px-1 w-12"
                name="betAmount"
                type="money"
                decimalsLimit={2}
                value={betAmount.amount.toString()}
                onValueChange={handleChange}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="font-bold">Payout :</div> <div>${winnings}</div>
          </div>
          <input
            className="mt-7 block bg-blue-700 text-white px-8
            py-4 rounded-md cursor-pointer"
            type="submit"
            value="SUBMIT"
          />
        </form>
      </div>
    </div>
  );
}
