import type { Event } from '../utilities/data-types';
import { type FormEvent, useState, useContext } from 'react';
import { calculateWinnings } from '../utilities/payout-calculator';
import { AppContext } from './AppContext';
import type { Money } from '../utilities/data-types';
import CurrencyInput from 'react-currency-input-field';

type BetFormProps = {
  event: Event;
  index: number;
  pick: string;
  dateTime: string;
  completed: boolean;
};

export const BetForm = ({
  event,
  index,
  pick,
  dateTime,
  completed,
}: BetFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [betAmount, setBetAmount] = useState<Money>({
    amount: 0,
    currency: 'USD',
  });

  const { token, setFunds } = useContext(AppContext);

  const handleChange = (value: string | undefined) => {
    const amountValue = value ? parseFloat(value) : 0;
    setBetAmount((prev) => ({ ...prev, amount: amountValue }));
    console.log(amountValue);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const userDataString = localStorage.getItem('token');
    if (!userDataString) {
      alert('User data not found in localStorage.');
      return;
    }

    const userData = JSON.parse(userDataString);
    const currentFunds: number = userData.user.funds;
    console.log('cFunds', currentFunds);

    const authHeader = token ? `Bearer ${token}` : '';
    const headers = {
      'Content-Type': 'application/json',
      ...(token && { Authorization: authHeader }),
    };

    const formData = new FormData(event.currentTarget);
    const betData = Object.fromEntries(formData.entries());
    const req = {
      method: 'POST',
      headers,
      body: JSON.stringify({
        ...betData,
        pick,
        dateTime,
        completed,
      }),
    };

    try {
      const res = await fetch('/api/bets', req);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }

      const fundsAfterBet = currentFunds - betAmount.amount;
      setFunds(fundsAfterBet);

      localStorage.setItem('userData', JSON.stringify(userData));

      alert('Bet placed successfully!');
    } catch (err) {
      console.error('Error placing bet:', err);
      alert(`Error placing bet: ${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  const selectedOutcome = event?.outcomes[index];
  const betOdds = selectedOutcome?.moneyline ?? 0;
  const winnings =
    selectedOutcome && betAmount !== undefined
      ? (
          calculateWinnings(betOdds, betAmount.amount) + betAmount.amount
        ).toFixed(2)
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
                placeholder="0.00"
                defaultValue={0}
                decimalsLimit={2}
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
};
