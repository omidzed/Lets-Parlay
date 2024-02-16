export const FAQ = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="max-w-4xl mx-auto text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 md:space-y-6">
          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              What is a Moneyline Bet in MMA?
            </h3>
            <p className="text-sm md:text-base">
              A Moneyline bet in MMA is a wager placed on who you believe will
              win the fight. Each fighter is given odds, which indicate the
              likelihood of them winning the match. Betting on the favorite will
              yield less return on investment, while betting on the underdog can
              result in a higher payout if they win.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              How Do Parlay Bets Work?
            </h3>
            <p className="text-sm md:text-base">
              Parlay bets involve combining two or more picks into a single bet.
              All selections within the parlay must win for the bet to be
              successful. Parlays offer higher payouts than betting on single
              matches due to the increased difficulty of predicting multiple
              outcomes correctly.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              What Are Total Rounds Bets?
            </h3>
            <p className="text-sm md:text-base">
              Total Rounds bets are wagers on how long the fight will last. The
              bookmaker sets a "total" for the number of rounds a fight is
              expected to go, and you can bet on whether the actual number of
              rounds will be over or under that total.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              Are the Funds in This App Real?
            </h3>
            <p className="text-sm md:text-base">
              No, the funds used in our app are purely virtual and have no
              real-world value. Our platform is designed for recreational and
              educational purposes, allowing users to practice and learn about
              MMA betting without financial risk.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              What is the Purpose of the App?
            </h3>
            <p className="text-sm md:text-base">
              The primary purpose of our app is to provide a fun, risk-free
              environment for MMA fans to engage with the sport in a new way.
              It's an excellent way for beginners to get acquainted with betting
              concepts and for experienced bettors to test strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
