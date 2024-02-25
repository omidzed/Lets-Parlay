import { hasToken } from '../utilities/token-storage';
import { formatDateTime } from '../utilities/format-date-time';
import { BetForm } from './BetForm';
import { useModal } from './useModal';
import type { Event } from '../utilities/data-types';

type Props = {
  filteredEvents: Event[];
};

export const OddsTable = ({ filteredEvents }: Props) => {
  const { openModal } = useModal();

  const betSlip = (event: Event, outcome: 'moneyline' | 'moneylineTwo') => {
    if (!hasToken()) {
      alert('You must be logged in to place bets!');
      return;
    }
    const outcomeIndex = outcome === 'moneyline' ? 0 : 1;
    const pick =
      outcomeIndex === 0 ? event.outcomes[0].name : event.outcomes[1].name;
    const formattedDateTime = formatDateTime(event.commenceTime);

    openModal(
      <BetForm
        event={event}
        index={outcomeIndex}
        pick={pick}
        dateTime={formattedDateTime}
        completed={false}
      />,
      'Bet Slip'
    );
  };

  const style = {
    overUnder:
      'flex whitespace-nowrap text-tiny h-8 m-2 mt-2 md:text-lg  justify-center items-center rounded-md bg-[#2e2e31] md:h-[28%] text-white mr-2 cursor-pointer',
    boxStyling2:
      'flex text-xs h-8 m-2 mt-2 pr-1 md:text-xl  justify-center items-center rounded-md bg-[#2e2e31] md:h-[28%] text-[#54D338] cursor-pointer',
    date: 'flex text-tiny md:text-thead justify-center items-center h-1/4 mb-5 border-b-[1px] border-b-[#343541] w-full',
    thead:
      'flex whitespace-nowrap text-rounds md:text-thead justify-center items-center h-1/4 mb-5 border-b-[1px] border-b-[#343541] w-full',
    rounds:
      'flex text-center justify-center items-center text-rounds h-8 m-2 mt-2 md:text-thead  justify-center items-center rounded-md bg-[#2e2e31] md:h-[28%] text-[#54D338]',
  };

  const handleClick = (name: string) => {
    const hyphenatedName = name.toLowerCase().replace(/\s+/g, '-');
    const url = `https://www.ufc.com/athlete/${hyphenatedName}`;
    window.open(url, '_blank');
  };

  const odds = filteredEvents.map((event, index) => {
    const { commenceTime, outcomes } = event;

    const moneyline = outcomes[0].moneyline;
    const moneylineTwo = outcomes[1].moneyline;
    const formattedDateTime = formatDateTime(commenceTime);
    const nameOne = outcomes[0].name;
    const nameTwo = outcomes[1].name;

    return (
      <div key={index} className="flex justify-center mt-6 w-full lg:h-56">
        <div className="flex w-full h-36 py-2 px-2  rounded-md bg-[#212123e3] md:w-[85%] md:h-56 mt-2">
          <div className="flex w-[35%] text-white text-xl">
            <div className="flex w-full flex-col">
              <span className={style.date}>{formattedDateTime}</span>
              <span
                onClick={() => handleClick(nameOne)}
                className="flex whitespace-nowrap justify-center items-center text-xs md:text-custom h-[28%] cursor-pointer">
                {nameOne}
              </span>
              <span
                onClick={() => handleClick(nameTwo)}
                className="flex whitespace-nowrap justify-center items-center text-xs md:text-custom  h-[33%] cursor-pointer">
                {nameTwo}
              </span>
            </div>
          </div>
          <div className="flex w-[65%] text-white text-xl">
            <div className="flex-col md:w-1/3 text-white text-xs">
              <span className={style.thead}>POINT SPREAD</span>
              <span className={style.boxStyling2}></span>
              <span className={style.boxStyling2}></span>
            </div>
            <div className="flex-col w-1/3 text-white text-xs">
              <span className={style.thead}>MONEYLINE</span>
              <span
                onClick={() => betSlip(event, 'moneyline')}
                className={`${style.boxStyling2} cursor-pointer`}>
                {moneyline > 0 ? `+${moneyline}` : moneyline}
              </span>
              <span
                onClick={() => betSlip(event, 'moneylineTwo')}
                className={style.boxStyling2}>
                {moneylineTwo > 0 ? `+${moneylineTwo}` : moneylineTwo}
              </span>
            </div>
            <div className="flex-col w-[45%] md:w-1/3 text-white text-tiny md:text-xs">
              <span className={style.thead}>ROUNDS +/- </span>
              <span className={style.boxStyling2}>
                <p className={style.overUnder}>O 2.5</p> +120
              </span>
              <span className={style.boxStyling2}>
                <p className={style.overUnder}>U 2.5</p> -150
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <div>{odds}</div>;
};
