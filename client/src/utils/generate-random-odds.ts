export const generateRealisticOverUnderOdds = (isOver: boolean): string => {
  // MMA over/under 2.5 rounds typically have odds in these ranges
  // Over odds usually between -200 to +160
  // Under odds usually between -160 to +180

  const generateNumber = (): string => {
    let num: number;

    if (isOver) {
      // Over 2.5 rounds is more commonly the favorite
      const isOverFavorite = Math.random() < 0.7; // 70% chance of being favorite

      if (isOverFavorite) {
        // Generate favorite odds: -110 to -200
        num = -(Math.floor(Math.random() * 10) * 10 + 110);
      } else {
        // Generate underdog odds: +110 to +160
        num = Math.floor(Math.random() * 6) * 10 + 110;
      }
    } else {
      // Under 2.5 rounds
      const isUnderFavorite = Math.random() < 0.3; // 30% chance of being favorite

      if (isUnderFavorite) {
        // Generate favorite odds: -110 to -160
        num = -(Math.floor(Math.random() * 6) * 10 + 110);
      } else {
        // Generate underdog odds: +110 to +180
        num = Math.floor(Math.random() * 8) * 10 + 110;
      }
    }

    // Format the number with appropriate sign
    return num.toString();
  };

  return generateNumber();
};

// Usage example in your events mapping:
overUnderOdds: [
  { name: 'O 2.5', overUnderOdds: generateRealisticOverUnderOdds(true) },
  { name: 'U 2.5', overUnderOdds: generateRealisticOverUnderOdds(false) },
];
