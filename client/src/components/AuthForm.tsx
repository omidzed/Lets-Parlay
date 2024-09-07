import { useState, FormEvent } from 'react';
import { useModal } from '../hooks/useModal';
import { AlertModal } from './AlertModal';

type Props = {
  action: 'sign-up' | 'sign-in';
  onSignIn: (auth: any) => void;
  toggleAction: () => void;
};

export const AuthForm = ({ action, onSignIn, toggleAction }: Props) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const { closeModal, openModal } = useModal();

  const apiUrl = action === 'sign-up' ? '/api/auth/sign-up' : '/api/auth/login';

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const userData =
      action === 'sign-up'
        ? { name, username, password }
        : { username, password };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (!response.ok) throw new Error('Failed to authenticate');

      const data = await response.json();

      if (action === 'sign-up') {
        openModal(
          <AlertModal
            message="Sign-up successful! You can now log in with your new account."
            onClose={() => {
              closeModal();
              toggleAction(); // Switch to the sign-in form if you want
            }}
          />,
          'Congratulations!'
        );
      } else if (action === 'sign-in') {
        onSignIn(data); // Switch to the sign-in form if you want
        openModal(
          <AlertModal
            message="You can begin placing bets by clicking on the green numbers, or visit FAQ for more information!"
            onClose={() => {
              closeModal();
              toggleAction();
            }}
          />,
          `Welcome to Let's Parlay!`
        );
      }
    } catch (error) {
      setError('Authentication failed. Please try again.');
      console.error('Error logging in user:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleGuestCheckIn = async () => {
    try {
      const response = await fetch('/api/auth/guest-check-in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'Guest', password: 'Lje4whWB1mn6' }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to check-in as guest');
      }

      onSignIn(data);
      openModal(
        <AlertModal
          message="You can begin placing bets by clicking on the green numbers, or visit FAQ for more information!"
          onClose={() => {
            closeModal();
            toggleAction();
          }}
        />,
        `Welcome to Let's Parlay!`
      );
    } catch (error) {
      console.error('Error during guest check-in:', error);
      setError('Guest check-in failed. Please try again.');
    }
  };

  const styling =
    'block w-full border-2 border-slate-400 bg-blue-100 rounded-md mb-1 h-10 px-4';

  return (
    <div>
      <form
        className="flex flex-col justify-center md:my-6 md:m-8 px-10 py-4"
        onSubmit={handleSubmit}>
        <div className="my-4">
          {action === 'sign-up' && (
            <div>
              <label>Name</label>
              <input
                className={styling}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete=""
              />
              <input name="funds" value={1} type="hidden" />
            </div>
          )}
          <label>Username</label>
          <input
            className={styling}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete=""
          />
          <label>Password</label>
          <div className="relative">
            <input
              className={`${styling} w-full`}
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete=""
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 px-3 flex items-center text-xs leading-5"
              onClick={togglePasswordVisibility}>
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        {error && <p className="text-red-500 mt-8">{error}</p>}
        <div className="flex justify-center">
          <button
            className=" tracking-wider  bg-blue-700 mt-4 text-white px-4 py-2 rounded-md cursor-pointer"
            type="submit">
            {action === 'sign-up' ? 'Register' : 'Log In'}
          </button>
        </div>

        <div className="flex justify-center mt-2">
          <button
            type="button"
            className="bg-gray-500  text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={handleGuestCheckIn}>
            Guest Check-In
          </button>
        </div>
      </form>

      {action === 'sign-in' ? (
        <div>
          <p className="text-md mt-4 text-center">Not a member yet?</p>
          <a
            onClick={() => toggleAction()}
            className="flex tracking-wide text-logout md:mb-8 mb-6 justify-center items-center font-bold text-md text-[#3d86ec] hover:underline cursor-pointer">
            Join Now
          </a>
        </div>
      ) : (
        <div className=" flex flex-col justify-center items center">
          <p className="text-md text-center">Already have an account?</p>
          <a
            onClick={() => toggleAction()}
            className="tracking-wide font-bold text-center text-md md:mb-8 text-[#3d86ec] underline cursor-pointer">
            Log In
          </a>
        </div>
      )}
    </div>
  );
};
