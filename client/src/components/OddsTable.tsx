import { hasToken } from '../utilities/token-storage';
import { formatDateTime } from '../utilities/format-date-time';
import { BetForm } from './BetForm';
import { useModal } from '../hooks/useModal';
import type { Event } from '../utilities/data-types';
import { formatLongName } from '../utilities/format-names';
import { AlertModal } from './AlertModal';

type Props = {
  filteredEvents: Event[];
};

export const OddsTable = ({ filteredEvents }: Props) => {
  const { openModal, closeModal } = useModal();

  const betSlip = (
    event: Event,
    outcome: 'moneyline' | 'moneylineTwo' | '',
    overUnder: 'O 2.5' | 'U 2.5' | ''
  ) => {
    if (!hasToken()) {
      openModal(
        <AlertModal
          message="You must be logged in to place bets!"
          onClose={closeModal}
        />,
        'Log in alert!'
      );
      return;
    }

    let outcomeIndex: number;
    let pick: string;
    let overUnderIndex: number;

    if (outcome === 'moneyline' || outcome === 'moneylineTwo') {
      outcomeIndex = outcome === 'moneyline' ? 0 : 1;
      pick = event.outcomes[outcomeIndex].name;
      overUnderIndex = -1; // Set to -1 or any value that indicates it's not an overUnder pick
    } else {
      outcomeIndex = -1; // Set to -1 or any value that indicates it's not a moneyline pick
      pick = overUnder; // For overUnder picks, set the pick to the provided overUnder value
      overUnderIndex = overUnder === 'O 2.5' ? 0 : 1;
    }

    openModal(
      <BetForm
        event={event}
        outcomeIndex={outcomeIndex}
        overUnderIndex={overUnderIndex}
        pick={pick}
        dateTime={event.commenceTime}
        closed={false}
      />,
      'Bet Slip'
    );
  };

  const style = {
    overUnder:
      'flex whitespace-nowrap md:pr-3 text-tiny md:text-thead sm:pl-4 md:pl-1 h-8 md:m-2 mt-2  lg:text-lg md:justify-between items-center rounded-md bg-[#2e2e31] md:h-[28%] text-[#54D338] md:mr-2 cursor-pointer',
    boxStyling2:
      'flex text-xs h-8 m-2 mt-2 pr-1 md:text-xl  justify-center items-center rounded-md bg-[#2e2e31] md:h-[28%] text-[#54D338] cursor-pointer',
    date: 'flex text-tiny md:text-thead justify-center items-center h-1/4 mb-5 border-b-[1px] border-b-[#343541] w-full',
    thead:
      'flex whitespace-nowrap text-rounds md:text-thead justify-center items-center h-1/4 mb-4 border-b-[1px] border-b-[#343541] w-full',
    rounds:
      'flex md:pl-2 justify-center items-center text-tiny h-8 m-2 mt-2 lg:text-thead  justify-center items-center rounded-md bg-[#2e2e31] text-white md:h-[28%] ',
  };

  const handleClick = (name: string) => {
    const hyphenatedName = name.toLowerCase().replace(/\s+/g, '-');
    const url = `https://www.ufc.com/athlete/${hyphenatedName}`;
    window.open(url, '_blank');
  };

  const odds = filteredEvents.map((event, index) => {
    const { commenceTime, outcomes, overUnderOdds } = event;

    const moneyline = outcomes[0].moneyline;
    const moneylineTwo = outcomes[1].moneyline;
    const formattedDateTime = formatDateTime(commenceTime);
    const nameOne = formatLongName(outcomes[0].name);
    const nameTwo = formatLongName(outcomes[1].name);
    const over = overUnderOdds[0].name;
    const under = overUnderOdds[1].name;
    const overOdds = overUnderOdds[0].overUnderOdds;
    const underOdds = overUnderOdds[1].overUnderOdds;

    return (
      <div key={index} className="flex justify-center mt-12 w-full lg:h-56">
        <div className="flex w-full h-36 py-2 px-2  rounded-md bg-[#212123e3] md:w-[80%] md:h-56 mt-2">
          <div className="flex w-[35%] text-white text-xl">
            <div className="flex w-full flex-col">
              <span className={style.date}>{formattedDateTime}</span>
              <span
                onClick={() => handleClick(nameOne)}
                className="flex whitespace-nowrap justify-center items-center text-tiny md:text-custom h-[28%] cursor-pointer">
                {nameOne}
              </span>
              <span
                onClick={() => handleClick(nameTwo)}
                className="flex gap-2 whitespace-nowrap justify-center items-center text-tiny md:text-custom  h-[33%] cursor-pointer">
                {nameTwo}
              </span>
            </div>
          </div>
          <div className="flex w-[65%] text-white text-xl">
            <div className="flex-col w-[34%] text-white text-xs">
              <span className={style.thead}>PT SPREAD</span>
              <span className={style.boxStyling2}></span>
              <span className={style.boxStyling2}></span>
            </div>
            <div className="flex-col w-[33%]  text-white text-xs">
              <span className={style.thead}>MONEYLINE</span>
              <span
                className={`${style.boxStyling2} cursor-pointer`}
                onClick={() => betSlip(event, 'moneyline', '')}>
                {moneyline > 0 ? `+${moneyline}` : moneyline}
              </span>
              <span
                className={style.boxStyling2}
                onClick={() => betSlip(event, 'moneylineTwo', '')}>
                {moneylineTwo > 0 ? `+${moneylineTwo}` : moneylineTwo}
              </span>
            </div>
            <div className="flex-col w-[32%]  text-white text-tiny md:mr-4 md:text-2xl">
              <span className={style.thead}>ROUNDS +/- </span>
              <span
                className={style.overUnder}
                onClick={() => betSlip(event, '', 'O 2.5')}>
                <span className={style.rounds}>{over}</span>
                {overOdds}
              </span>
              <span
                className={style.overUnder}
                onClick={() => betSlip(event, '', 'U 2.5')}>
                <span className={style.rounds}>{under}</span>
                {underOdds > 0 ? `+${underOdds}` : underOdds}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <div>{odds}</div>;
};
