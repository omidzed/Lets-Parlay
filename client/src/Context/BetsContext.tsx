import React, { createContext, ReactNode, useState, useEffect } from 'react';
import { getToken } from '../utils/token-storage';
import type { Bet } from '../utils/data-types';
import { formatDateTime } from '../utils/format-date-time';

export type BetsContextValues = {
  bets: Bet[];
  setBets: (bets: Bet[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
};

export const BetsContext = createContext<BetsContextValues>({
  bets: [],
  setBets: () => {},
  isLoading: false,
  setIsLoading: () => {},
  error: null,
  setError: () => {},
});

type BetsProviderProps = {
  children: ReactNode;
};

export const BetsProvider: React.FC<BetsProviderProps> = ({ children }) => {
  const [bets, setBets] = useState<Bet[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBets = async () => {
    setIsLoading(true);
    try {
      const token = getToken();
      if (!token) {
        throw new Error('Token not found.');
      }
      const req = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.token}`,
        },
      };
      const res = await fetch('/api/bets', req);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }
      const betsData = await res.json();
      const formattedBets: Bet[] = await Promise.all(
        betsData.map(async (bet: Bet) => {
          const formattedPlacedAt = formatDateTime(bet.placedAt);
          const formattedDateTime = formatDateTime(bet.dateTime);
          const isOpen = 'Open';

          return {
            ...bet,
            dateTime: formattedDateTime,
            placedAt: formattedPlacedAt,
            status: isOpen ? 'Open' : 'Closed',
          };
        })
      );
      setBets(formattedBets);
    } catch (err) {
      setError('Failed to fetch bets.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBets();
  }, []);

  return (
    <BetsContext.Provider
      value={{ bets, setBets, isLoading, setIsLoading, error, setError }}>
      {children}
    </BetsContext.Provider>
  );
};
