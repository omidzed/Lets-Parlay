export const generateRealisticOverUnderOdds = (isOver: boolean): number => {
  const oddsArray = [-250, -200, -175, -150, -110, 110, 150, 200, 250, 400, 500];

  const randomIndex = Math.floor(Math.random() * oddsArray.length);
  return oddsArray[randomIndex];
};
