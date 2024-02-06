import { useState, FormEvent } from 'react';

type Props = {
  action: 'sign-up' | 'sign-in';
  onSignIn: (auth: any) => void;
  closeModal: () => void;
};

export const AuthForm = ({ action, onSignIn, closeModal }: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [funds, setFunds] = useState('');
  const [error, setError] = useState('');

  const apiUrl = action === 'sign-up' ? '/api/auth/sign-up' : '/api/auth/login';

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const userData =
      action === 'sign-up'
        ? { username, password, name, funds: Number(funds) }
        : { username, password };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (!response.ok) throw new Error('Failed to authenticate');

      const data = await response.json();

      if (action === 'sign-in') {
        onSignIn(data);
      }

      closeModal();
    } catch (error) {
      setError('Authentication failed. Please try again.');
    }
  };

  const styling =
    'block border-2 border-slate-400 bg-blue-200  input-b-color rounded-md input-b-radius mb-4 h-10 px-4';

  return (
    <div>
      <form
        className="flex-col justify-center items-center my-6 m-8"
        onSubmit={handleSubmit}>
        {action === 'sign-up' && (
          <div>
            <label className="mt-2">Name</label>
            <input
              className={styling}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input name="funds" value={100000} type="hidden" />
          </div>
        )}
        <label className="mt-2">Username</label>
        <input
          className={styling}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label className="mt-2">Password</label>
        <input name="password" type="password" />
        <input
          className={styling}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="flex justify-center">
          <button
            className="mt-5 tracking-wider bg-blue-700 text-white px-5 py-6 rounded-md cursor-pointer"
            type="submit">
            {action === 'sign-up' ? 'Sign Up' : 'Sign In'}
          </button>
        </div>
        {error && <p>{error}</p>}
      </form>

      {action === 'sign-in' && (
        <div>
          <p className="text-md text-center">New to LET$PARLAY?</p>
          <a
            className="flex justify-center font-bold text-md text-[#3d86ec]
        underline cursor-pointer">
            Register new Account
          </a>
        </div>
      )}

      {action === 'sign-up' && (
        <div>
          <p className="text-md text-center">Already have an account?</p>
          <a className="flex justify-center font-bold text-md text-[#3d86ec] underline cursor-pointer ">
            Sign In
          </a>
        </div>
      )}
    </div>
  );
};
