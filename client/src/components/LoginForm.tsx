import { type FormEvent, useState } from 'react';
import { storeToken } from '../utilities/token-storage';

type LoginFormProps = {
  onSubmit: () => void;
  hasToken: boolean;
  registerModal;
};

export function LoginForm({
  onSubmit,
  hasToken,
  registerModal,
}: LoginFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      setIsLoading(!isLoading);
      const formData = new FormData(event.currentTarget);
      const userData = Object.fromEntries(formData.entries());
      const req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      };
      const res = await fetch('/api/auth/login', req);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }
      const user = await res.json();
      storeToken(user);
      onSubmit();
    } catch (err) {
      alert(`Error logging in user: ${err}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="py-6 px-6">
      <form
        data-hastoken={hasToken}
        onSubmit={handleSubmit}
        className="flex-col justify-center items-center gap-4 my-2 m-8">
        <div>
          <label className="mb-1"> Username</label>
          <input
            autoFocus
            required
            name="username"
            type="text"
            className="block border-2 bg-blue-200 border-slate-400 input-b-color text-padding rounded-md
            input-b-radius mb-4 h-10 px-4"
          />

          <label className="mb-1">Password</label>
          <input
            required
            name="password"
            type="password"
            className="block border-2 bg-blue-200 border-slate-400 rounded-md w-full h-10 px-4"
          />
        </div>

        <div className="flex justify-center">
          <input
            className="tracking-wider mt-7 mb-5 border-2-blue-600 bg-blue-700 text-white px-8
            py-4 rounded-md cursor-pointer"
            type="submit"
            value="LOGIN"
          />
        </div>
      </form>
      <p className="text-md text-center">New to LET$PARLAY?</p>
      <a
        onClick={registerModal}
        className="flex justify-center font-bold text-md text-[#3d86ec]
        underline cursor-pointer w-100">
        Register new Account
      </a>
    </div>
  );
}
