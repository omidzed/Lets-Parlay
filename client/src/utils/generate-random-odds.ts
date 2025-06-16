export const generateOverUnderOdds = (): number[] => {
  const oddsArray: number[] = [-250, -200, -175, -150, -110, 110, 150, 175, 200, 250];
  const generatedOdds: number[] = [];

  while (generatedOdds.length < 2) {
    const randomIndex = Math.floor(Math.random() * oddsArray.length);
    const newOdd = oddsArray[randomIndex];

    if (!generatedOdds.includes(newOdd)) {
      generatedOdds.push(newOdd)
    }
  }
  return generatedOdds;
};
