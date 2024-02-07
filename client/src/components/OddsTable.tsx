import type { Event } from '../pages/HomePage';
import { hasToken } from '../utilities/token-storage';
import { formatDateTime } from '../utilities/format-date-time';
import { BetForm } from './BetForm';
import { useModal } from './ModalContext';

type Props = {
  events: Event[];
};

export function OddsTable({ events }: Props) {
  const { openModal } = useModal();

  const betSlip = (event: Event, outcome: 'moneyline' | 'moneylineTwo') => {
    if (!hasToken()) {
      alert('You must be logged in to place bets!');
      return;
    }
    const outcomeIndex = outcome === 'moneyline' ? 0 : 1;
    openModal(<BetForm event={event} index={outcomeIndex} />, 'Bet Slip');
  };

  const style = {
    boxStyling:
      'flex my-1 mt-1 text-xs md:text-odds drop-shadow-xl font-bold justify-center items-center rounded-md bg-[#2e2e31] h-[30%] text-red-600 ;',
    boxStyling2:
      'flex text-xs h-8 m-2 mt-2 md:text-odds drop-shadow-xl justify-center items-center rounded-md bg-[#2e2e31] md:h-[28%] text-[#54D338] ;',
    date: 'text-xs flex md:text-smallest justify-center items-center h-1/4 border-b-[1px]',
    thead:
      'flex text-tiny md:text-smallest justify-center items-center h-1/4 mb-5 border-b-[1px] border-b-[#343541] w-full',
  };

  const odds = events.map((event, index) => {
    const { eventId, commenceTime, outcomes } = event;
    eventId;
    const moneyline = outcomes[0].moneyline;
    const moneylineTwo = outcomes[1].moneyline;
    const formattedDateTime = formatDateTime(commenceTime);
    const nameOne = outcomes[0].name;
    const nameTwo = outcomes[1].name;

    return (
      <div key={index} className="flex justify-center mt-6 w-full lg:h-56">
        <div className="flex w-[90%] h-36 py-2 px-2  rounded-md bg-[#212123e3] md:w-[80%] md:h-56 mt-2">
          <div className="flex-col  w-2/5 text-white text-xl">
            <span className={style.thead}>{formattedDateTime}</span>
            <span className="flex text-xs md:text-lg justify-center items-center h-1/3 ">
              {nameOne}
            </span>
            <span className="flex text-xs md:text-lg justify-center items-center h-1/3">
              {nameTwo}
            </span>
          </div>
          <div className="flex-col w-1/5 text-white text-xs">
            <span className={style.thead}>SPREAD</span>
            <span className={style.boxStyling2}></span>
            <span className={style.boxStyling2}></span>
          </div>
          <div className="flex-col gap-2 w-1/5 text-white text-xs">
            <span className={style.thead}>MONEYLINE</span>
            <span
              onClick={() => betSlip(event, 'moneyline')}
              className={`${style.boxStyling2} cursor-pointer`}>
              {moneyline > 0 ? `+${moneyline}` : moneyline}
            </span>
            <span
              onClick={() => betSlip(event, 'moneylineTwo')}
              className={`${style.boxStyling2} cursor-pointer`}>
              {moneylineTwo > 0 ? `+${moneylineTwo}` : moneylineTwo}
            </span>
          </div>
          <div className="flex-col w-1/5 text-white text-tiny pr-2">
            <span className={style.thead}>TOTAL</span>
            <span className={style.boxStyling2}></span>
            <span className={style.boxStyling2}></span>
          </div>
        </div>
      </div>
    );
  });
  return <div>{odds}</div>;
}
