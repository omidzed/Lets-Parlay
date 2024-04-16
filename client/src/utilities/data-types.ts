export type ApiEvent = {
  id: string;
  sport_key: string;
  sport_title: string;
  commence_time: string;
  home_team: string;
  away_team: string;
  bookmakers: Bookmaker[];
};

export type Bookmaker = {
  key: string;
  title: string;
  last_update: string;
  markets: Market[];
};

export type Market = {
  key: string;
  last_update: string;
  outcomes: MoneyLine[];
};

export type MoneyLine = {
  name: string;
  price: number;
};

export type OverUnder = [
  { name: string; odds: number },
  { name: string; odds: number }
];

export type Event = {
  commenceTime: string;
  outcomes: [
    { name: string; moneyline: number },
    { name: string; moneyline: number }
  ];
  overUnderOdds: [
    { name: string; overUnderOdds: number },
    { name: string; overUnderOdds: number }
  ];
};

export type MenuItem = {
  title: string;
  path: string;
  icon: JSX.Element;
  isExternal?: boolean;
};

export type IconType = {
  icon: JSX.Element;
};

export type Money = {
  amount: number;
  currency: string;
};

export type BetType = MoneyLine | OverUnder;

export type Bet = {
  id: string;
  betAmount: number;
  pick: string;
  closed: boolean;
  dateTime: string;
  placedAt: string;
  status: string;
};
