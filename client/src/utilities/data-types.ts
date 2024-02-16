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
  outcomes: Outcome[];
};

export type Outcome = {
  name: string;
  price: number;
};

export type Event = {
  commenceTime: string;
  outcomes: [
    { name: string; moneyline: number },
    { name: string; moneyline: number }
  ];
};

export type MenuItem = { title: string; path: string };
