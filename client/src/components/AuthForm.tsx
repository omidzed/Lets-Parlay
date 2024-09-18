import { useState, FormEvent, ChangeEvent } from 'react';
import { useModal } from '../hooks/useModal';
import { AlertModal } from './AlertModal';
import { useUser } from '../hooks/useUser';

type Props = {
  action: 'sign-up' | 'sign-in';
  toggleAction: () => void;
};

export const AuthForm = ({ action, toggleAction }: Props) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const { handleSignIn } = useUser();
  const { closeModal, openModal } = useModal();

  const apiUrl = action === 'sign-up' ? '/api/auth/sign-up' : '/api/auth/login';

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const userData =
      action === 'sign-up'
        ? formData
        : { username: formData.username, password: formData.password };

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
        handleSignIn(data); // Switch to the sign-in form if you want
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

      handleSignIn(data);
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
        onSubmit={handleSubmit}
        className="flex flex-col justify-center md:my-6 md:m-8 px-10 py-4">
        <div className="my-4">
          {action === 'sign-up' && (
            <div>
              <label>Name</label>
              <input
                name="name"
                className={styling}
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
                autoComplete="name"
              />
              <input name="funds" value={1} type="hidden" />
            </div>
          )}
          <label>Username</label>
          <input
            name="username"
            className={styling}
            type="text"
            value={formData.username}
            onChange={handleInputChange}
            required
            autoComplete="username"
          />
          <label>Password</label>
          <div className="relative">
            <input
              name="password"
              className={`${styling} w-full`}
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleInputChange}
              required
              autoComplete={
                action === 'sign-up' ? 'new-password' : 'current-password'
              }
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 px-3 flex items-center text-xs leading-5"
              onClick={() => setShowPassword((prev) => !prev)}>
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

      <div className="text-center mt-4 mb-8">
        <p>
          {action === 'sign-in'
            ? 'Not a member yet?'
            : 'Already have an account?'}
        </p>
        <a
          onClick={toggleAction}
          className="font-bold text-[#3d86ec] hover:underline cursor-pointer">
          {action === 'sign-in' ? 'Join Now' : 'Log In'}
        </a>
      </div>
    </div>
  );
};
