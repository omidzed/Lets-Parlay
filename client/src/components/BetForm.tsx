import type { Event } from '../utilities/data-types';
import { type FormEvent, useState, useContext } from 'react';
import { calculateWinnings } from '../utilities/payout-calculator';
import CurrencyInput from 'react-currency-input-field';
import { AppContext } from './AppContext';

type BetFormProps = {
  event: Event;
  index: number;
  pick: string;
  dateTime: string;
  completed: boolean;
};

type Money = {
  amount: number;
  currency: string;
};

export function BetForm({
  event,
  index,
  pick,
  dateTime,
  completed,
}: BetFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [betAmount, setBetAmount] = useState<Money>({
    amount: 0,
    currency: 'USD',
  });

  const { funds, setFunds, token } = useContext(AppContext);
  //const isGuest = localStorage.getItem('isGuest') === 'true';

  function handleChange(value: string | undefined) {
    const amountValue = value ? parseFloat(value) : 0;
    setBetAmount((prevState) => ({
      ...prevState,
      amount: amountValue,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const authHeader = token ? `Bearer ${token}` : '';
    const headers = {
      'Content-Type': 'application/json',
      ...(token && { Authorization: authHeader }),
    };

    const formData = new FormData(event.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    const req = {
      method: 'POST',
      headers,
      body: JSON.stringify({
        ...userData,
        completed,
        dateTime,
        pick,
      }),
    };

    try {
      const res = await fetch('/api/bets', req);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }

      // if (isGuest) {
      const fundsAfterBet = funds - betAmount.amount * 100;
      setFunds(fundsAfterBet);
      console.log('fundsafter', fundsAfterBet);

      alert('Bet placed successfully!');
    } catch (err) {
      console.error('Error placing bet:', err);
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
    <div className="flex-col justify-center items-center pr-12 py-10 pb-6 pl-16">
      <div className="flex justify-center gap-2 mr-6">
        <span>{selectedOutcome.name}</span>
        <span className="font-bold">
          {betOdds > 0 ? `+${betOdds}` : betOdds}
        </span>
      </div>
      <div className="flex-col">
        <form
          className="flex-col gap-10 block justify-end items-center my-2 p-2"
          onSubmit={handleSubmit}>
          <input type="hidden" name="betType" value="moneyline" />
          <input type="hidden" name="completed" value="false" />
          <div className="flex gap-2 justify-end mt-6 mb-2">
            <label className="font-bold">Amount : </label>
            <div>
              <span className="mr-1">$</span>
              <CurrencyInput
                className="bg-blue-200 rounded-md px-1 w-16"
                name="betAmount"
                type="money"
                decimalsLimit={2}
                value={betAmount.amount.toString()}
                onValueChange={handleChange}
              />
            </div>
          </div>
          <div className="flex gap-4 w-10">
            <div className="font-bold whitespace-nowrap">Payout :</div>
            <div className="flex">
              <div className="mr-2">$</div>
              {winnings}
            </div>
          </div>
          <input
            className={`mt-7 block ${
              isLoading ? 'bg-blue-400' : 'bg-blue-700'
            } text-white px-8 py-4 rounded-md cursor-pointer`}
            type="submit"
            value={isLoading ? 'Betting...' : 'SUBMIT'}
            disabled={isLoading}
          />
        </form>
      </div>
    </div>
  );
}
