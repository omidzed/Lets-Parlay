import { useState, FormEvent, ChangeEvent } from 'react';
import { useModal } from '../../Hooks/useModal';
import { AlertModal } from '../AlertModal';
import { useUser } from '../../Hooks/useUser';

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

  const styling = {
    label: 'absolute bottom-8 left-3 z-50 bg-white px-1 text-small',
    input: 'block w-full border border-slate-400 rounded-md mb-1 h-10 px-4',
    blueButton:
      'transition duration-300 ease-in-out w-full tracking-wider bg-blue-600 hover:bg-blue-800 mt-4 text-white py-1.5 rounded-md cursor-pointer',
    grayButton:
      'transition duration-300 ease-in-out w-full bg-gray-600 hover:bg-gray-500 text-white px-4 py-1.5 rounded-md cursor-pointer',
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center md:my-6 md:m-8 px-10 py-4 lg:min-w-80">
        <div className="my-4 flex flex-col gap-4">
          {action === 'sign-up' && (
            <div className="relative">
              <label className={styling.label}>Name</label>
              <input
                name="name"
                className={styling.input}
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
                autoComplete="name"
              />
              <input name="funds" value={1} type="hidden" />
            </div>
          )}
          <div className="relative">
            <label className={styling.label}>Username</label>
            <input
              name="username"
              className={styling.input}
              type="text"
              value={formData.username}
              onChange={handleInputChange}
              required
              autoComplete="username"
            />
          </div>
          <div className="relative">
            <label className={styling.label}>Password</label>
            <div className="relative">
              <input
                name="password"
                className={`${styling.input} w-full`}
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleInputChange}
                required
                autoComplete={
                  action === 'sign-up' ? 'new-password' : 'current-password'
                }
              />
            </div>
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
            className={styling.blueButton}
            type="submit">
            {action === 'sign-up' ? 'Register' : 'Log In'}
          </button>
        </div>

        <div className="flex justify-center mt-2">
          <button
            type="button"
            className={styling.grayButton}
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
          className="transition duration-300 ease-in-out font-bold text-blue-600 hover:underline cursor-pointer">
          {action === 'sign-in' ? 'Join Now' : 'Log In'}
        </a>
      </div>
    </div>
  );
};
