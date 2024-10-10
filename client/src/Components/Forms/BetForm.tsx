import type { Event } from '../../utils/data-types';
import { FormEvent, useState } from 'react';
import { calculateWinnings } from '../../utils/payout-calculator';
import CurrencyInput from 'react-currency-input-field';
import { useModal } from '../../Hooks/useModal';
import { AlertModal } from '../AlertModal';
import { getToken } from '../../utils/token-storage';
import { useUser } from '../../Hooks/useUser';
import { updateFundsInDB } from '../../utils/updateFundsInDB';

export type BetFormProps = {
  event: Event;
  outcomeIndex: number;
  overUnderIndex: number;
  pick: string;
  dateTime: string;
  status: string;
};

export const BetForm = ({
  event,
  outcomeIndex,
  overUnderIndex,
  pick,
  dateTime,
  status,
}: BetFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [betAmount, setBetAmount] = useState<number>(0);
  const { user, updateFunds } = useUser();
  const { closeModal, openModal } = useModal();
  const token = getToken();
  const timeStamp = new Date().toISOString();

  const handleChange = (value: string | undefined) => {
    if (!value || value === '-') {
      setBetAmount(0);
      return;
    }

    // Convert to integer and handle validation
    const parsedValue = parseInt(value, 10);
    if (isNaN(parsedValue) || parsedValue < 0) {
      setBetAmount(0);
      return;
    }

    // Ensure the value matches our constraints
    const amountNumber = Math.max(
      1, // Minimum bet of 1
      Math.min(999999999, parsedValue) // Maximum bet of 999,999,999
    );
    setBetAmount(amountNumber);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const effectiveBetAmount = betAmount;
    const userId = user?.userId ?? '';
    const authHeader = token ? `Bearer ${token.token}` : '';
    const headers = {
      'Content-Type': 'application/json',
      ...(token && { Authorization: authHeader }),
    };

    if (effectiveBetAmount > (user?.funds ?? 0)) {
      openModal(
        <AlertModal
          message="Your bet amount cannot exceed your funds, please try again or replenish funds!"
          onClose={() => {
            setIsLoading(false);
            closeModal();
          }}
        />,
        'Need more funds to cover bet!'
      );

      setIsLoading(false);
      return;
    }

    const formData = new FormData(e.currentTarget);
    const betData = Object.fromEntries(formData.entries());
    const matchId = event.id;

    const req = {
      method: 'POST',
      headers,
      body: JSON.stringify({
        ...betData,
        userId,
        timeStamp,
        pick,
        dateTime,
        status,
        matchId,
      }),
    };
    try {
      setIsLoading(true);
      const res = await fetch('/api/bets', req);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }
      const fundsAfterBet = (user?.funds ?? 0) - effectiveBetAmount;
      await updateFundsInDB(userId, fundsAfterBet, token?.token);
      updateFunds(fundsAfterBet);

      openModal(
        <AlertModal
          message="You bet was placed successfully!"
          onClose={closeModal}
        />,
        'Successful Bet'
      );
    } catch (err) {
      console.error('Error placing bet:', err);
      alert(`Error placing bet: ${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  const selectedOutcome = event?.outcomes[outcomeIndex];
  const selectedOverUnder = event?.overUnderOdds[overUnderIndex];
  const betOdds = selectedOutcome?.moneyline ?? 0;
  const overUnderOdds = selectedOverUnder?.overUnderOdds ?? 0;

  const calculatePayout = (odds: number, amount: number) =>
    (calculateWinnings(odds, amount) + amount).toFixed(2);

  const winningsOver = selectedOverUnder
    ? calculatePayout(overUnderOdds, betAmount)
    : '0.00';
  const winningsUnder = selectedOverUnder
    ? calculatePayout(overUnderOdds, betAmount)
    : '0.00';
  const winnings = selectedOutcome
    ? calculatePayout(betOdds, betAmount)
    : '0.00';

  const payout =
    winningsOver !== '0.00'
      ? winningsOver
      : winningsUnder !== '0.00'
      ? winningsUnder
      : winnings;

  return (
    <>
      <div className="flex-col justify-center items-center  py-10 pb-6 md:mx-10 w-60">
        <div className="flex justify-center gap-4">
          <span className="basis-1/2 text-right">
            {selectedOutcome?.name ?? selectedOverUnder?.name ?? 'Unknown'}
          </span>
          <span className="basis-1/2 text-left font-bold">
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
            className="flex-col items-center my-2 p-2"
            onSubmit={handleSubmit}>
            <input type="hidden" name="betType" value="moneyline" />
            <input type="hidden" name="status" value="open" />
            <input type="hidden" name="payout" value={payout} />

            <div className="flex gap-5 flex-nowrap justify-center mt-6 mb-2">
              <div className="font-bold basis-1/2 text-right whitespace-nowrap">
                Amount:
              </div>

              <div className="flex flex-nowrap basis-1/2 text-left">
                <span className="ml-1 mr-1">$</span>
                <CurrencyInput
                  className="bg-blue-200 rounded-md pl-1 w-16"
                  name="betAmount"
                  placeholder="0"
                  disableGroupSeparators={true}
                  allowDecimals={false}
                  onValueChange={handleChange}
                  allowNegativeValue={false}
                  min={1}
                  max={999999999}
                  transformRawValue={(rawValue: string) => {
                    // Only allow digits, no decimal points
                    return rawValue.replace(/[^\d]/g, '');
                  }}
                />
              </div>
            </div>

            <div className="flex justify-center gap-5">
              <div className="font-bold basis-1/2 text-right whitespace-nowrap">
                Payout:
              </div>

              <div className="flex basis-1/2 text-left">
                <div className="ml-1">$</div>
                <div className="pl-2">{payout}</div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <button
                className={`mt-7  ${
                  isLoading ? 'bg-blue-400' : 'bg-blue-700'
                } text-white px-8 py-4 rounded-md cursor-pointer`}
                type="submit"
                disabled={isLoading}>
                {isLoading ? 'Betting...' : 'SUBMIT'}
              </button>
              <button
                className={`mt-7  ${
                  isLoading ? 'bg-green-400' : 'bg-green-600'
                } text-white px-8 py-4 rounded-md cursor-pointer`}
                type="submit"
                disabled={isLoading}>
                {isLoading ? 'Betting...' : 'Parlay'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
