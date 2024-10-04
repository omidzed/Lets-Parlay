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
    const amountNumber = parseFloat(value || '0'); // Default to '0' if value is undefined
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
                  disableGroupSeparators={true}
                  defaultValue={0}
                  decimalsLimit={2}
                  onValueChange={handleChange}
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

// import { FormEvent, useState } from 'react';
// import CurrencyInput from 'react-currency-input-field';
// import { useModal } from '../../Hooks/useModal';
// import { AlertModal } from '../AlertModal';
// import { getToken } from '../../utils/token-storage';
// import { useUser } from '../../Hooks/useUser';
// import { updateFundsInDB } from '../../utils/updateFundsInDB';
// import { calculateWinnings } from '../../utils/payout-calculator';
// import { Event, Outcome, OverUnder } from '../../utils/data-types';

// export type BetFormProps = {
//   event: Event;
//   outcomeOptions: Outcome[]; // Outcomes passed as props
//   overUnderOptions: OverUnder[]; // Over/Under options passed as props
//   pick: string;
//   dateTime: string;
//   status: string;
// };

// export const BetForm = ({
//   event,
//   outcomeIndex,
//   overUnderIndex,
//   pick,
//   dateTime,
//   status,
// }: BetFormProps) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [betAmount1, setBetAmount1] = useState<number>(0);
//   const [betAmount2, setBetAmount2] = useState<number>(0);
//   const [outcomeIndex1, setOutcomeIndex1] = useState<number>(0);
//   const [outcomeIndex2, setOutcomeIndex2] = useState<number>(0);
//   const [isParlayMode, setIsParlayMode] = useState(false);

//   const { user, updateFunds } = useUser();
//   const { closeModal, openModal } = useModal();
//   const token = getToken();
//   const timeStamp = new Date().toISOString();

//   const handleChange1 = (value: string | undefined) => {
//     const amountNumber = parseFloat(value || '0');
//     setBetAmount1(amountNumber);
//   };

//   const handleChange2 = (value: string | undefined) => {
//     const amountNumber = parseFloat(value || '0');
//     setBetAmount2(amountNumber);
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsLoading(true);

//     const totalBetAmount = betAmount1 + (isParlayMode ? betAmount2 : 0);

//     if (totalBetAmount > (user?.funds ?? 0)) {
//       openModal(
//         <AlertModal
//           message="Your total bet amount cannot exceed your funds, please try again!"
//           onClose={() => {
//             setIsLoading(false);
//             closeModal();
//           }}
//         />,
//         'Insufficient Funds'
//       );
//       setIsLoading(false);
//       return;
//     }

//     const matchId = event.id;
//     const userId = user?.userId ?? '';

//     const headers = {
//       'Content-Type': 'application/json',
//       Authorization: token ? `Bearer ${token.token}` : '',
//     };

//     try {
//       const betRequests: Promise<Response>[] = [];

//       const firstBetRequest = fetch('/api/bets', {
//         method: 'POST',
//         headers,
//         body: JSON.stringify({
//           userId,
//           timeStamp,
//           pick: event.outcomeIndex.name, // Use outcome index 1
//           dateTime,
//           status,
//           matchId,
//           betAmount: betAmount1,
//         }),
//       });
//       betRequests.push(firstBetRequest);

//       if (isParlayMode) {
//         const secondBetRequest = fetch('/api/bets', {
//           method: 'POST',
//           headers,
//           body: JSON.stringify({
//             userId,
//             timeStamp,
//             pick: outcomeOptions[outcomeIndex2].name, // Use outcome index 2
//             dateTime,
//             status,
//             matchId,
//             betAmount: betAmount2,
//           }),
//         });
//         betRequests.push(secondBetRequest);
//       }

//       const responses = await Promise.all(betRequests);

//       for (const response of responses) {
//         if (!response.ok) {
//           throw new Error(`Failed to submit bet: ${response.status}`);
//         }
//       }

//       const fundsAfterBet = (user?.funds ?? 0) - totalBetAmount;
//       const updateResponse = await updateFundsInDB(
//         userId,
//         fundsAfterBet,
//         token?.token
//       );

//       if (updateResponse.success) {
//         updateFunds(fundsAfterBet);
//         openModal(
//           <AlertModal
//             message="Your bet was placed successfully!"
//             onClose={closeModal}
//           />,
//           'Successful Bet'
//         );
//       } else {
//         openModal(
//           <AlertModal
//             message={
//               updateResponse.message ||
//               'Failed to update funds after placing the bet.'
//             }
//             onClose={closeModal}
//           />,
//           'Error Updating Funds'
//         );
//       }
//     } catch (err) {
//       console.error('Error placing bet:', err);
//       alert(`Error placing bet: ${err}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleParlayClick = () => {
//     setIsParlayMode(true);
//   };

//   const calculatePayout = (odds: number, amount: number) =>
//     (calculateWinnings(odds, amount) + amount).toFixed(2);

//   const winnings1 = calculatePayout(
//     outcomeOptions[outcomeIndex1].moneyline,
//     betAmount1
//   );
//   const winnings2 = isParlayMode
//     ? calculatePayout(outcomeOptions[outcomeIndex2].moneyline, betAmount2)
//     : '0.00';

//   return (
//     <div className="flex-col justify-center items-center py-10 pb-6 md:mx-10 w-60">
//       <form className="flex-col items-center my-2 p-2" onSubmit={handleSubmit}>
//         <div className="flex justify-between">
//           <label htmlFor="outcome1">First Bet Outcome:</label>
//           <select
//             id="outcome1"
//             value={outcomeIndex1}
//             onChange={(e) => setOutcomeIndex1(parseInt(e.target.value))}>
//             {outcomeOptions.map((outcome, index) => (
//               <option key={index} value={index}>
//                 {outcome.name} (
//                 {outcome.moneyline > 0
//                   ? `+${outcome.moneyline}`
//                   : outcome.moneyline}
//                 )
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="flex gap-5 flex-nowrap justify-center mt-6 mb-2">
//           <div className="font-bold">Amount:</div>
//           <CurrencyInput
//             className="bg-blue-200 rounded-md pl-1 w-16"
//             name="betAmount1"
//             disableGroupSeparators={true}
//             decimalsLimit={2}
//             onValueChange={handleChange1}
//           />
//         </div>

//         {isParlayMode && (
//           <>
//             <div className="flex justify-between">
//               <label htmlFor="outcome2">Second Bet Outcome:</label>
//               <select
//                 id="outcome2"
//                 value={outcomeIndex2}
//                 onChange={(e) => setOutcomeIndex2(parseInt(e.target.value))}>
//                 {outcomeOptions.map((outcome, index) => (
//                   <option key={index} value={index}>
//                     {outcome.name} (
//                     {outcome.moneyline > 0
//                       ? `+${outcome.moneyline}`
//                       : outcome.moneyline}
//                     )
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="flex gap-5 flex-nowrap justify-center mt-6 mb-2">
//               <div className="font-bold">Parlay Amount:</div>
//               <CurrencyInput
//                 className="bg-blue-200 rounded-md pl-1 w-16"
//                 name="betAmount2"
//                 disableGroupSeparators={true}
//                 decimalsLimit={2}
//                 onValueChange={handleChange2}
//               />
//             </div>

//             <div className="flex justify-center gap-5">
//               <div className="font-bold">Parlay Payout:</div>
//               <div>{winnings2}</div>
//             </div>
//           </>
//         )}

//         <div className="flex justify-center gap-5">
//           <div className="font-bold">Payout:</div>
//           <div>{winnings1}</div>
//         </div>

//         <div className="flex flex-col justify-center">
//           <button
//             className={`mt-7 ${
//               isLoading ? 'bg-blue-400' : 'bg-blue-700'
//             } text-white px-8 py-4 rounded-md`}
//             type="submit"
//             disabled={isLoading}>
//             {isLoading ? 'Betting...' : 'Submit'}
//           </button>

//           {!isParlayMode && (
//             <button
//               onClick={handleParlayClick}
//               className="mt-7 bg-green-600 text-white px-8 py-4 rounded-md"
//               type="button">
//               Parlay
//             </button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };
