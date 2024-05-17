// randomOverUnderOdds.ts
export const getOverUnderOdds = (): number => {
  // Choose randomly between negative and positive ranges
  const sign = Math.random() < 0.5 ? -1 : 1;

  // Generate a random number from 10 to 20 (these will be the tens digit)
  const tens = Math.floor(Math.random() * 11) + 10;

  // Return the final number, ensuring it skips two-digit ranges and is a multiple of 10
  return sign * tens * 10;
};
