export type MoneyLineOdds = {
  favorite: number; // Negative number for favorites
  underdog: number; // Positive number for underdogs
};

export function calculateWinnings(odds: number, betAmount: number): number {
  if (odds > 0) {
    // Positive odds (underdog)
    return betAmount * (odds / 100);
  } else {
    // Negative odds (favorite)
    return betAmount * (100 / Math.abs(odds));
  }
}

// Example usage
const odds: MoneyLineOdds = { favorite: -150, underdog: 200 };
const betAmount: number = 100; // Your wager amount in dollars

const favoriteWinnings: number = calculateWinnings(odds.favorite, betAmount);
const underdogWinnings: number = calculateWinnings(odds.underdog, betAmount);

console.log(
  `Potential winnings for betting $${betAmount} on the favorite: $${favoriteWinnings}`
);
console.log(
  `Potential winnings for betting $${betAmount} on the underdog: $${underdogWinnings}`
);
