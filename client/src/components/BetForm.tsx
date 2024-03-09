import type { Event } from '../utilities/data-types';
import { type FormEvent, useState, useContext } from 'react';
import { calculateWinnings } from '../utilities/payout-calculator';
import { AppContext } from './AppContext';
import CurrencyInput from 'react-currency-input-field';
import { useModal } from './useModal';
import { AlertModal } from './AlertModal';
//import { formatLongName } from '../utilities/format-names';

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
  const { closeModal, openModal } = useModal();

  const handleChange = (value: string | undefined) => {
    const amountNumber = parseFloat(value || '0'); // Default to '0' if value is undefined
    setBetAmount(amountNumber);
  };

  const effectiveBetAmount = betAmount ?? 0;
  const timeStamp = new Date().toISOString();

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
        timeStamp,
        pick,
        dateTime,
        completed,
      }),
    };

    try {
      if (effectiveBetAmount > funds) {
        openModal(
          <AlertModal
            message="Your bet amount cannot exceed your funds levels, please try again or replenish funds!"
            onClose={closeModal}
          />,
          'Need more funds to cover bet!'
        );
        console.log('a');

        setIsLoading(false);
      }
      const res = await fetch('/api/bets', req);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }
      const fundsAfterBet = funds - effectiveBetAmount;
      setFunds(fundsAfterBet);

      localStorage.setItem('userData', JSON.stringify(userData));

      openModal(
        <AlertModal
          message="You bet was placed successfully!"
          onClose={closeModal}
        />,
        ''
      );
      console.log('b');
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

  const calculatePayout = (odds: number, amount: number) =>
    (calculateWinnings(odds, amount) + amount).toFixed(2);

  const winningsOver = selectedOverUnder
    ? calculatePayout(overUnderOdds, effectiveBetAmount)
    : '0.00';
  const winningsUnder = selectedOverUnder
    ? calculatePayout(overUnderOdds, effectiveBetAmount)
    : '0.00';
  const winnings = selectedOutcome
    ? calculatePayout(betOdds, effectiveBetAmount)
    : '0.00';

  // Determine the payout based on the type of bet
  const payout =
    winningsOver !== '0.00'
      ? winningsOver
      : winningsUnder !== '0.00'
      ? winningsUnder
      : winnings;

  // const payout =
  //   winningsOver !== undefined
  //     ? winningsOver
  //     : winningsUnder !== undefined
  //     ? winningsUnder
  //     : winnings;

  console.log('payout', payout);

  return (
    <>
      <button className="absolute top-2 right-20 text-lg hover:text-white ">
        Parlay
      </button>
      <div className="flex-col justify-center items-center  py-10 pb-6 md:mx-20">
        <div className="flex justify-center gap-2">
          <span className="flex ">
            {selectedOutcome?.name ?? selectedOverUnder?.name ?? 'Unknown'}
          </span>
          <span className="font-bold w-1/2">
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
            <div className="flex justify-center items-center w-full mt-6 mb-2">
              <div className="font-bold w-1/3">Amount:</div>
              <div className="w-1/3">
                <span className="mr-1">$</span>
                <CurrencyInput
                  className="bg-blue-200 rounded-md pl-1 w-16"
                  name="betAmount"
                  defaultValue={0}
                  decimalsLimit={2}
                  onValueChange={handleChange}
                />
              </div>
            </div>

            <div className="flex ml-4">
              <div className="font-bold whitespace-nowrap">Payout:</div>
              <div className="w-3"> </div>
              <div className="flex">
                <div className="ml-1">$</div>
                <div className="pl-2">{payout}</div>
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
