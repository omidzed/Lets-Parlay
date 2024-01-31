export type Odds = {
  favorite: number; // Negative number for favorites
  underdog: number; // Positive number for underdogs
};

export const calculateMoneyLineOdds = (
  odds: Odds
): { favoriteProbability: number; underdogProbability: number } => {
  const calculateProbability = (line: number): number => {
    if (line > 0) {
      return (100 / (line + 100)) * 100;
    } else {
      return (-line / (-line + 100)) * 100;
    }
  };

  return {
    favoriteProbability: calculateProbability(odds.favorite),
    underdogProbability: calculateProbability(odds.underdog),
  };
};

const odds = { favorite: -150, underdog: 200 };
const probabilities = calculateMoneyLineOdds(odds);
console.log(probabilities);
