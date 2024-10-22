import { formatDateTime } from '../utils/format-date-time';
import { BetForm } from './Forms/BetForm';
import { useModal } from '../Hooks/useModal';
import type { Event } from '../utils/data-types';
import { formatLongName } from '../utils/format-names';
import { AlertModal } from './AlertModal';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useUser } from '../Hooks/useUser';
//import { ParlayForm } from "./Forms/ParlayForm";

type Props = {
  filteredEvents: Event[] | undefined;
};

export const OddsTable = ({ filteredEvents }: Props) => {
  const { openModal, closeModal } = useModal();
  const { user } = useUser();

  const betSlip = (
    event: Event,
    outcome: 'moneyline' | 'moneylineTwo' | '',
    overUnder: 'O 2.5' | 'U 2.5' | ''
  ) => {
    if (!user) {
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
        status="open"
      />,
      'Bet Slip'
    );
  };

  const handleClick = (name: string) => {
    const hyphenatedName = name.toLowerCase().replace(/\s+/g, '-');
    const url = `https://www.ufc.com/athlete/${hyphenatedName}`;
    window.open(url, '_blank');
  };

  const odds = filteredEvents?.map((event, index) => {
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
      <div key={index} className="flex justify-center my-4 w-full lg:h-56">
        <div className="flex w-full h-32 py-2 rounded-lg bg-[#212123e3] md:w-[90%] md:h-56">
          <div className="flex w-1/2 md:w-[35%] text-white text-xl">
            <div className="flex w-full flex-col ">
              <span
                className={`${style.date} full-width-border px-2  border border-t-0 border-r-0 border-l-0 border-[#2d2d31e3]`}>
                {formattedDateTime}
              </span>
              <span
                onClick={() => handleClick(nameOne)}
                className="flex whitespace-nowrap justify-center gap-2 items-center text-tiny md:text-custom h-[28%] cursor-pointer">
                {nameOne} <FaExternalLinkAlt color="grey" size={8} />
              </span>
              <span
                onClick={() => handleClick(nameTwo)}
                className="flex gap-2 whitespace-nowrap justify-center items-center text-tiny md:text-custom  h-[33%] cursor-pointer">
                {nameTwo} <FaExternalLinkAlt color="grey" size={8} />
              </span>
            </div>
          </div>
          <div className="flex w-1/2 md:w-[65%] text-white text-xl">
            <div className="hidden md:block flex-col w-1/3 text-white text-xs">
              <span
                className={`${style.thead} full-width-border px-2  border border-t-0 border-r-0 border-l-0 border-[#2d2d31e3]`}>
                PT SPREAD
              </span>
              <span className={style.spread}></span>
              <span className={style.spread}></span>
            </div>
            <div className="flex-col  w-1/2 md:w-1/3 text-white text-xs">
              <span
                className={`${style.thead} full-width-border pl-7 px-2 border border-t-0 border-r-0 border-l-0 border-[#2d2d31e3]`}>
                MONEYLINE
              </span>
              <span
                className={`${style.boxStyling} cursor-pointer`}
                onClick={() => betSlip(event, 'moneyline', '')}>
                {moneyline > 0 ? `+${moneyline}` : moneyline}
              </span>
              <span
                className={style.boxStyling}
                onClick={() => betSlip(event, 'moneylineTwo', '')}>
                {moneylineTwo > 0 ? `+${moneylineTwo}` : moneylineTwo}
              </span>
            </div>
            <div className="flex-col  w-1/2 md:w-1/3  text-white text-tiny md:text-2xl">
              <span
                className={`${style.thead} full-width-border pl-4 border border-t-0 border-r-0 border-l-0 border-[#2d2d31e3]`}>
                ROUNDS +/-
              </span>
              <div
                className={`group ${style.overUnder}`}
                onClick={() => betSlip(event, '', 'O 2.5')}>
                <span className={style.rounds}>{over}</span>
                <span className="md:pr-4">{overOdds}</span>
              </div>
              <div
                className={`group ${style.overUnder}`}
                onClick={() => betSlip(event, '', 'U 2.5')}>
                <span className={style.rounds}>{under}</span>
                <span className="md:pr-4">
                  {underOdds > 0 ? `+${underOdds}` : underOdds}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <div>{odds}</div>;
};

const style = {
  rounds:
    'flex gap-2 pl-2 md:ml-1 mr-1 justify-between items-center text-tiny h-7 group-hover:bg-[#063d64] lg:text-thead justify-center items-center rounded-md bg-[#2e2e31] text-white md:h-[28%]',
  overUnder:
    'flex whitespace-nowrap w-[80%] text-tiny md:text-thead sm:pl-4 md:pl-1 h-7 mt-2 lg:text-lg md:justify-between hover:bg-[#063d64] items-center rounded-md bg-[#2e2e31] md:h-[28%] text-[#54D338] cursor-pointer',
  boxStyling:
    'flex text-xs h-7 m-2 mt-2 md:text-xl w-[80%] justify-center items-center rounded-md bg-[#2e2e31] hover:bg-[#063d64] md:h-[28%] text-[#54D338] cursor-pointer',
  spread:
    'flex text-xs h-7 m-2 mt-2 md:text-xl w-[80%] justify-center items-center rounded-md bg-[#2e2e31]  md:h-[28%] text-[#54D338] ',
  date: 'flex text-tiny md:text-thead justify-center items-center h-1/4 mb-5 w-full date-thead-container',
  thead:
    'flex pr-7 whitespace-nowrap text-rounds md:text-thead justify-center items-center h-1/4 mb-4 w-full date-thead-container',
};
