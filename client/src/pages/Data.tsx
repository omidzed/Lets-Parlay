import { useEffect, useState, useRef } from 'react';

// type Fight = {
//   commence_time: string;
//   completed: boolean;
//   home_team: string;
//   away_team: string;
// };

type Bookmaker = {
  key: string;
  title: string;
  markets: Market[];
};

type Event = {
  id: string;
  sport_key: string;
  sport_title: string;
  commence_time: string;
  home_team: string;
  away_team: string;
  bookmakers: Bookmaker[];
};

type Outcome = {
  name: string;
  price: number;
};

type Market = {
  key: string;
  outcomes: Outcome[];
};
// type ApiResponse = Fight[];

export function Odds() {
  const [data, setData] = useState<Event[] | null>(null);
  const fetchedRef = useRef(false);

  useEffect(() => {
    if (!fetchedRef.current) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            'https://api.the-odds-api.com/v4/sports/mma_mixed_martial_arts/odds/?apiKey=92e9e45ffad129163005d31aa7443f13&regions=us&markets=h2h&oddsFormat=american'
          );
          const result = await response.json();
          setData(result);
          console.log('result', result);
          const filtered = result.map((event) => {
            const [firstBookmaker] = event.bookmakers; // Take the first bookmaker
            return { ...event, bookmakers: [firstBookmaker] }; // Replace the bookmakers array with only the first one
          });
          console.log('filterred', filtered);
          fetchedRef.current = true; // Mark as fetched
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }
  }, []);
  console.log('data', data);

  // const getDraftKingsOdds = (data: Event[]): { [key: string]: Market[] } => {
  //   const draftKingsOdds: { [key: string]: Market[] } = {};

  //   data.forEach((event) => {
  //     const draftKings = event.bookmakers.find((b) => b.key === 'draftkings');
  //     if (draftKings) {
  //       draftKingsOdds[event.id] = draftKings.markets;
  //     }
  //   });

  //   return draftKingsOdds;
  // };

  // const odds = getDraftKingsOdds(data);
  // console.log('odds', odds);

  //   return <></>;
  // }

  // Example usage in a React component
  // const MyComponent: React.FC = () => {
  // Assume `data` is the fetched response
  // const processedData = processResponse(data);
  // console.log(processedData);
  // Render your component using `processedData`

  return <></>;
}
// export default MyComponent;
