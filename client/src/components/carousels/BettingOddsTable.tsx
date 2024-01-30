export function BettingOddsTable() {
  const boxStyling =
    'flex my-1 mt-1 justify-center items-center rounded-md bg-zinc-700 h-[30%] text-red-600';

  return (
    <div className="flex justify-center mt-6 2xl: w-2/3 h-52">
      <div className="flex py-2 rounded-md bg-zinc-800 w-[90%] h-48 mt-2">
        <div className="flex-col w-2/5 text-white text-xs">
          <span className="flex justify-center items-center h-1/3">Date</span>
          <span className=""></span>
          <span className=""></span>
        </div>
        <div className="flex-col p-2  w-1/5 text-white text-xs">
          <span className="flex justify-center items-center h-1/3">SPREAD</span>
          <span className={boxStyling}></span>
          <span className={boxStyling}></span>
        </div>
        <div className="flex-col p-2 gap-2 w-1/5 text-white text-xs">
          <span className="flex justify-center items-center h-1/3">
            MONEYLINE
          </span>
          <span className={boxStyling}>+170</span>
          <span className={boxStyling}>-240</span>
        </div>
        <div className="flex-col p-2 justify-center items-center w-1/5 text-white text-xs">
          <span className="flex justify-center items-center h-1/3">TOTAL</span>
          <span className={boxStyling}></span>
          <span className={boxStyling}></span>
        </div>
      </div>
    </div>
  );
}
