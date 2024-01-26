/**
 * Stores the JWT token in local storage.
 * @param token The JWT token to store.
 */
export const storeToken = (token: string): void => {
  localStorage.setItem('token', token);
};

/**
 * Retrieves the JWT token from local storage.
 * @returns The JWT token or null if it doesn't exist.
 */
export const getToken = (): string | null => {
  return localStorage.getItem('token');
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
  return getToken() !== null;
};
