import { type FormEvent, useState } from 'react';

export function RegistrationForm({ loginModal }) {
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

      const res = await fetch('/api/auth/sign-up', req);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }
      const user = await res.json();
      console.log('Registered', user);
    } catch (err) {
      alert(`Error logging in: ${err}`);
    } finally {
      setIsLoading(false);
    }
  }

  const styling =
    'block border-2 border-slate-200  input-b-color rounded-md input-b-radius mb-4 h-10 px-4';

  return (
    <div className="px-4">
      <form
        onSubmit={handleSubmit}
        className="flex-col justify-center items-center my-6">
        <label>Name</label>

        <input name="funds" value={100000} type="hidden" />
        <input autoFocus name="name" type="text" className={styling} />

        <label className="mt-2">Username</label>
        <input className={styling} name="username" type="text" />

        <label>Password</label>
        <input className={styling} name="password" type="password" />
        <div className="flex justify-center">
          <input
            className="mt-5 tracking-wider bg-blue-700 text-white px-5 py-6 rounded-md cursor-pointer"
            type="submit"
            value="Create Account"
          />
        </div>
      </form>
      <p className="text-md text-center">Already have an account?</p>
      <a
        onClick={loginModal}
        className="flex justify-center font-bold text-md text-[#3d86ec] underline cursor-pointer">
        Sign In
      </a>
    </div>
  );
}
