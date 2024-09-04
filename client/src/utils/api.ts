export type User = {
  name: string;
  userId: number;
  username: string;
  funds: number;
};

export type Auth = {
  user: User;
  token: string;
};

export type Guest = {
  username: string;
  name: string;
  funds: number;
};

export type GuestAuth = {
  guestData: Guest;
  token: { name: string; funds: number };
};

//Signs in a user
export const signIn = async (
  username: string,
  password: string
): Promise<Auth> => {
  return await signUpOrIn('sign-in', username, password);
};

//Signs up a user
export async function signUp(
  username: string,
  password: string
): Promise<User> {
  return await signUpOrIn('sign-up', username, password);
}

//Signs up or signs in depending on the action
async function signUpOrIn(
  action: 'sign-up',
  username: string,
  password: string
): Promise<User>;

async function signUpOrIn(
  action: 'sign-in',
  username: string,
  password: string
): Promise<Auth>;

async function signUpOrIn(
  action: 'sign-up' | 'sign-in',
  username: string,
  password: string
): Promise<User | Auth> {
  const req = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  };
  const res = await fetch(`/api/auth/${action}`, req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}
