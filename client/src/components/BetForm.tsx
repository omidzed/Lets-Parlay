import type { Event } from '../utilities/data-types';
import { type FormEvent, useState, useContext, useMemo } from 'react';
import { calculateWinnings } from '../utilities/payout-calculator';
import { AppContext } from './AppContext';
import CurrencyInput from 'react-currency-input-field';
import { useModal } from './useModal';

type BetFormProps = {
  event: Event;
  outcomeIndex: number;
  overUnderIndex: number;
  pick: string;
  dateTime: string;
  completed: boolean;
};

export const BetForm = ({
  event,
  outcomeIndex,
  overUnderIndex,
  pick,
  dateTime,
  completed,
}: BetFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [betAmount, setBetAmount] = useState<number>(0);
  const { token, funds, setFunds } = useContext(AppContext);
  const { closeModal } = useModal();

  const handleChange = (value: string | undefined) => {
    const amountNumber = parseFloat(value || '0'); // Default to '0' if value is undefined
    setBetAmount(amountNumber);
  };

  const effectiveBetAmount = betAmount ?? 0;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const authHeader = token ? `Bearer ${token}` : '';
    const headers = {
      'Content-Type': 'application/json',
      ...(token && { Authorization: authHeader }),
    };

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const req = {
      method: 'POST',
      headers,
      body: JSON.stringify({
        ...userData,
        pick,
        dateTime,
        completed,
      }),
    };

    try {
      if (effectiveBetAmount > funds) {
        alert(
          'Your bet amount cannot exceed your funds levels, please try again or replenish funds!'
        );
        setIsLoading(false);
        return;
      }
      const res = await fetch('/api/bets', req);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }
      const fundsAfterBet = funds - effectiveBetAmount;
      setFunds(fundsAfterBet);

      localStorage.setItem('userData', JSON.stringify(userData));

      alert('Bet placed successfully!');
    } catch (err) {
      console.error('Error placing bet:', err);
      alert(`Error placing bet: ${err}`);
    } finally {
      setIsLoading(false);
      closeModal();
    }
  };

  const selectedOutcome = event?.outcomes[outcomeIndex];
  const selectedOverUnder = event?.overUnderOdds[overUnderIndex];
  const betOdds = selectedOutcome?.moneyline ?? 0;
  const overUnderOdds = selectedOverUnder?.overUnderOdds ?? 0;

  const winningsOver = useMemo(
    () =>
      selectedOverUnder && effectiveBetAmount !== undefined
        ? (
            calculateWinnings(overUnderOdds, effectiveBetAmount) +
            effectiveBetAmount
          ).toFixed(2)
        : '0.00',
    [selectedOverUnder, overUnderOdds, effectiveBetAmount]
  );

  const winningsUnder = useMemo(
    () =>
      selectedOverUnder && effectiveBetAmount !== undefined
        ? (
            calculateWinnings(overUnderOdds, effectiveBetAmount) +
            effectiveBetAmount
          ).toFixed(2)
        : '0.00',
    [overUnderOdds, selectedOverUnder, effectiveBetAmount]
  );

  const winnings = useMemo(
    () =>
      selectedOutcome && effectiveBetAmount !== undefined
        ? (
            calculateWinnings(betOdds, effectiveBetAmount) + effectiveBetAmount
          ).toFixed(2)
        : '0.00',
    [selectedOutcome, betOdds, effectiveBetAmount]
  );

  return (
    <>
      {/* <button className="absolute top-2 right-20 text-lg hover:text-white ">
        Parlay
      </button> */}
      <div className="flex-col justify-center items-center  py-10 pb-6 px-12 md:pr-12 md:pl-12">
        <div className="flex justify-center gap-2">
          <span>
            {selectedOutcome?.name ?? selectedOverUnder?.name ?? 'Unknown'}
          </span>
          <span className="font-bold">
            {selectedOverUnder
              ? overUnderOdds > 0
                ? `+${overUnderOdds}`
                : overUnderOdds.toString()
              : betOdds > 0
              ? `+${betOdds}`
              : betOdds.toString()}
          </span>
        </div>
        <div className="flex-col">
          <form
            className="flex-col gap-10 items-center my-2 p-2"
            onSubmit={handleSubmit}>
            <input type="hidden" name="betType" value="moneyline" />
            <input type="hidden" name="completed" value="false" />
            <div className="flex w-full justify-around itesm-center ml-2 mt-6 mb-2">
              <label className="font-bold">Amount : </label>
              <div className="w-2"> </div>
              <div>
                <span className="mr-1">$</span>
                <CurrencyInput
                  className="bg-blue-200 rounded-md ml-1 pl-1 w-16"
                  name="betAmount"
                  placeholder="0.00"
                  defaultValue={0}
                  decimalsLimit={2}
                  onValueChange={handleChange}
                />
              </div>
            </div>

            <div className="flex ml-4">
              <div className="font-bold whitespace-nowrap">Payout :</div>
              <div className="w-3"> </div>
              <div className="flex">
                <div className="ml-1">$</div>
                <div className="pl-2">
                  {winningsOver !== undefined
                    ? winningsOver
                    : winningsUnder !== undefined
                    ? winningsUnder
                    : winnings}
                </div>
              </div>
            </div>
            <input
              className={`mt-7 block ml-4 ${
                isLoading ? 'bg-blue-400' : 'bg-blue-700'
              } text-white px-8 py-4 rounded-md cursor-pointer`}
              type="submit"
              value={isLoading ? 'Betting...' : 'SUBMIT'}
              disabled={isLoading}
            />
          </form>
        </div>
      </div>
    </>
  );
};
