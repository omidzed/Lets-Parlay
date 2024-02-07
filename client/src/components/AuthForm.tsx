import { useState, FormEvent } from 'react';

const funds = 10000;

type Props = {
  action: 'sign-up' | 'sign-in';
  onSignIn: (auth: any) => void;
  closeModal: () => void;
  toggleAction: () => void;
};

export const AuthForm = ({
  action,
  onSignIn,
  closeModal,
  toggleAction,
}: Props) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [name, setName] = useState<string>('');

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
      alert('Error logging in user: Error: fetch Error 401');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const styling =
    'block w-full border-2 border-slate-400 bg-blue-100 rounded-md mb-4 h-10 px-4';

  return (
    <div>
      <form
        className="flex flex-col justify-center my-6 m-8 mb-0 py-10 px-24"
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
        <div className="relative">
          <input
            className={`${styling} w-full`}
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 px-3 flex items-center text-sm pb-4 leading-5"
            onClick={togglePasswordVisibility}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        <div className="flex justify-center">
          <button
            className=" tracking-wider bg-blue-700 mt-8 text-white px-6 py-4 rounded-md cursor-pointer"
            type="submit">
            {action === 'sign-up' ? 'Sign Up' : 'Sign In'}
          </button>
        </div>
        {error && <p className="text-red-500 mt-8">{error}</p>}
      </form>

      {action === 'sign-in' && (
        <div>
          <p className="text-md text-center">New to LET$PARLAY?</p>
          <a
            onClick={toggleAction}
            className="flex mb-10 justify-center font-bold text-md text-[#3d86ec]
        underline cursor-pointer">
            Register new Account
          </a>
        </div>
      )}

      {action === 'sign-up' && (
        <div>
          <p className="text-md text-center">Already have an account?</p>
          <a
            onClick={toggleAction}
            className="flex justify-center font-bold text-md mb-4 text-[#3d86ec] underline cursor-pointer ">
            Sign In
          </a>
        </div>
      )}
    </div>
  );
};
