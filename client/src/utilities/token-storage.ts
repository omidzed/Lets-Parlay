export type User = {
  funds: any;
  userId: number;
  username: string;
  hashedPassword: string;
  name: string;
};

export type Token = {
  token: string;
  user: User;
  funds: number;
};

export type GuestToken = {
  token: string;
  name: string;
  funds: number;
};

/**
 * Stores the JWT token in local storage.
 * @param token The JWT token to store.
 */
export const storeToken = (token: Token): void => {
  localStorage.setItem('token', JSON.stringify(token));
};
/**
 *
 * Retrieves the JWT token from local storage.
 * @returns The JWT token or null if it doesn't exist.
 */
export const getToken = () => {
  const tokenString = localStorage.getItem('token');
  if (tokenString !== null) {
    return JSON.parse(tokenString);
  } else return null;
};

/**
 * Removes the JWT token from local storage.
 */
export const removeToken = (): void => {
  localStorage.removeItem('token');
};

/**
 * Utility function to check if a token is stored.
 * @returns boolean indicating if a token is stored.
 */
export const hasToken = (): boolean => {
  return getGuestToken() !== null;
};

export const getGuestToken = () => {
  const tokenString = localStorage.getItem('token');
  if (tokenString !== null) {
    return JSON.parse(tokenString);
  } else return null;
};
