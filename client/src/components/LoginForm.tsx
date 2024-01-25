import React, { type FormEvent, useState } from 'react';

export function LoginForm() {
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
      const newUser = await res.json();
      console.log('Registered', newUser);
    } catch (err) {
      alert(`Error registering user: ${err}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="px-8">
      <form
        onSubmit={handleSubmit}
        className="flex-col gap-4 justify-center items-center my-20">
        <div>
          <label className="margin-bottom-1"> Username</label>

          <input
            required
            name="username"
            type="text"
            className="border-2 w-full input-b-color text-padding rounded-md input-b-radius mb-4 d-block"
          />

          <label className="margin-bottom-1 d-block">Password</label>
          <input
            required
            name="password"
            type="password"
            className="block border-2                                                                                                                                                                                                                                   DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    DDDDDDDDDDDDDDDDDDDDDDDDDDDDDD                                                                                                                                                                                                                                                                                                                                                                                       DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               d w-full "
          />
        </div>

        <div className="flex justify-center">
          <input
            className="mt-6 border-2-orange-500 bg-orange-500 text-white px-4 py-1 rounded-md cursor-pointer"
            type="submit"
            value="LOGIN"
          />
        </div>
      </form>
      <p className="text-sm text-center mt-4">New to LETsPARLAY?</p>
      <a className="flex justify-center text-md text-orange-500 underline cursor-pointer w-100">
        Register new Account
      </a>
    </div>
  );
}
