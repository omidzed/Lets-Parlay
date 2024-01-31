import type { Event } from '../../pages/HomePage';

type Props = {
  events: Event[];
};

export function OddsTable({ events }: Props) {
  const formatDateTime = (dateTimeString: Date) => {
    // const options = {
    //   year: 'numeric',
    //   month: '2-digit',
    //   day: '2-digit',
    //   hour: '2-digit',
    //   minute: '2-digit',
    // };
    return new Date(dateTimeString).toLocaleDateString();
  };

  const boxStyling =
    'flex my-1 mt-1 text-odds drop-shadow-xl font-bold justify-center items-center rounded-md bg-[#2e2e31] h-[30%] text-red-600 ;';

  const odds = events.map((event) => {
    const { commenceTime, outcomes } = event;

    const moneyline = outcomes[0].moneyline;

    const formattedDateTime = formatDateTime(commenceTime);

    return (
      <div className="flex justify-center mt-6 2xl: w-full h-52">
        <div className="flex py-2 rounded-md bg-[#212123e3] w-[90%] h-46 mt-2">
          <div className="flex-col w-2/5  text-white text-xs">
            <span className="flex text-lg justify-center items-center h-1/3">
              {formattedDateTime}
            </span>
            <span className="name-one"></span>
            <span className="name-two"></span>
          </div>
          <div className="flex-col p-2  w-1/5 text-white text-xs">
            <span className="flex text-lg justify-center items-center h-1/3">
              SPREAD
            </span>
            <span className={boxStyling}></span>
            <span className={boxStyling}></span>
          </div>
          <div className="flex-col p-2 gap-2 w-1/5 text-white text-xs">
            <span className="flex text-lg justify-center items-center h-1/3">
              MONEYLINE
            </span>
            <span className={boxStyling}>{moneyline}</span>
            <span className={boxStyling}>-240</span>
          </div>
          <div className="flex-col p-2 mr-4 justify-center items-center w-1/5 text-white text-xs">
            <span className="flex text-lg justify-center items-center h-1/3">
              TOTAL
            </span>
            <span className="flex my-1 mt-1 text-lg drop-shadow-xl font-bold justify-center items-center rounded-md bg-[#2e2e31] h-[30%] text-red-600"></span>
            <span className={boxStyling}></span>
          </div>
        </div>
      </div>
    );
  });
  return <div>{odds}</div>;
}
