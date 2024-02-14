import { useState, FormEvent } from 'react';

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
  const [funds, setFunds] = useState<number>(100000);

  const [error, setError] = useState('');

  const apiUrl = action === 'sign-up' ? '/api/auth/sign-up' : '/api/auth/login';

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const userData =
      action === 'sign-up'
        ? { username, password, name, funds }
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
        setFunds(100000);
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

  const handleGuestCheckIn = () => {
    const guestData = {
      username: 'guest$user',
      name: 'Guest',
      funds: 900000,
      password: 'pass1234',
    };
    localStorage.setItem('isGuest', 'true');
    localStorage.setItem('guestData', JSON.stringify(guestData));
    onSignIn({
      user: guestData,
      token: 'guest-session',
    });
    closeModal();
  };

  const styling =
    'block w-full border-2 border-slate-400 bg-blue-100 rounded-md mb-1 h-10 px-4';

  return (
    <div>
      <form
        className="flex flex-col justify-center my-6 m-8 px-4  md:px-14 py-6"
        onSubmit={handleSubmit}>
        <div className="mb-4 mt-2">
          {action === 'sign-up' && (
            <div>
              <label>Name</label>
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
          <label>Username</label>
          <input
            className={styling}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>Password</label>
          <div className="relative">
            <input
              className={`${styling} w-full`}
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 px-3 flex items-center text-xs leading-5"
              onClick={togglePasswordVisibility}>
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className=" tracking-wider w-full bg-blue-700 mt-8 text-white px-6 py-4 rounded-md cursor-pointer"
            type="submit">
            {action === 'sign-up' ? 'REGISTER' : 'LOGIN'}
          </button>
        </div>
        {error && <p className="text-red-500 mt-8">{error}</p>}
        <div className="flex justify-center mt-2">
          <button
            className="bg-gray-500 w-full text-white px-6 py-4 rounded-md cursor-pointer"
            onClick={handleGuestCheckIn}>
            Guest Check-In
          </button>
        </div>
      </form>

      {action === 'sign-in' ? (
        <div>
          <p className="text-md text-center">NOT A MEMBER YET?</p>
          <a
            onClick={() => toggleAction()}
            className="flex tracking-wide text-logout mb-10 justify-center items-center font-bold text-md text-[#3d86ec] underline cursor-pointer">
            JOIN NOW
          </a>
        </div>
      ) : (
        <div className=" flex flex-col justify-center items center">
          <p className="text-md text-center">ALREADY HAVE AN ACCOUNT?</p>
          <a
            onClick={() => toggleAction()}
            className="tracking-wide font-bold text-center text-md mb-4 text-[#3d86ec] underline cursor-pointer">
            SIGN IN
          </a>
        </div>
      )}
    </div>
  );
};
