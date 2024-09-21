import { createContext, ReactNode, useState, useEffect } from 'react';
import type { Bet } from '../utils/data-types';
import { getToken } from '../utils/token-storage';

export type BetsContextValues = {
  bets: Bet[];
  setBets: (bets: Bet[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
  refreshBets: () => Promise<void>;
  updateBetStatus: (
    betId: string,
    status: string,
    winner: boolean
  ) => Promise<void>;
};

export const BetsContext = createContext<BetsContextValues>({
  bets: [],
  setBets: () => {},
  isLoading: false,
  setIsLoading: () => {},
  error: null,
  setError: () => {},
  refreshBets: async () => {},
  updateBetStatus: async () => {},
});

type BetsProviderProps = {
  children: ReactNode;
};

export const BetsProvider: React.FC<BetsProviderProps> = ({ children }) => {
  const [bets, setBets] = useState<Bet[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBets = async () => {
    const token = getToken();
    if (!token) {
      console.log('no token Betcontext');
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const req = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token?.token}`,
        },
      };

      // const isAdmin = token?.user.
      const endpoint = token.user.isAdmin ? '/api/admin/bets' : '/api/bets';

      const res = await fetch(endpoint, req);
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`fetch Error ${res.status}: ${errorText}`);
      }

      const betsData = await res.json();
      setBets(betsData);
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

  const refreshBets = async () => {
    await fetchBets();
  };

  const updateBetStatus = async (
    betId: string,
    status: string,
    winner: boolean
  ) => {
    const token = getToken();
    if (!token) {
      console.log('no token BetsContext');
      return;
    }

    try {
      const res = await fetch(`/api/admin/bets/${betId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.token}`,
        },
        body: JSON.stringify({ status, winner }),
      });

      if (!res.ok) {
        throw new Error('Failed to update bet status');
      }

      await refreshBets();
    } catch (err) {
      setError('Failed to update bet status.');
      console.error(err);
    }
  };

  return (
    <BetsContext.Provider
      value={{
        bets,
        setBets,
        isLoading,
        setIsLoading,
        error,
        setError,
        refreshBets,
        updateBetStatus,
      }}>
      {children}
    </BetsContext.Provider>
  );
};
