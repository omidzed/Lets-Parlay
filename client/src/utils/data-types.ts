export type ApiEvent = {
  id: string;
  sport_key: string;
  sport_title: string;
  commence_time: string;
  home_team: string;
  away_team: string;
  bookmakers: Bookmaker[];
};

export type Event = {
  id: string;
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
  betId: string;
  eventId: string;
  betAmount: number;
  pick: string;
  dateTime: string;
  status: string;
  userId: number;
  placedAt: string;
  betType: string;
  payout: string;
  winner: boolean;
  matchId: string;
};

export type Auth = {
  username: string;
  password: string;
  name: string;
  funds: number;
  user: User;
  token: string;
  isAdmin: boolean;
};

export type User = {
  userId: number;
  name: string;
  username: string;
  hashedPassword: string;
  funds: number;
  isAdmin: boolean;
};

export type ActionType = 'sign-up' | 'sign-in';
