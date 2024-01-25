import React, { type FormEvent, useState } from 'react';

export function RegistrationForm() {
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
      console.log('Logged in', user);
    } catch (err) {
      alert(`Error logging in: ${err}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="px-8">
      <form
        onSubmit={handleSubmit}
        className="flex-col justify-center items-center my-6">
        <label>Name</label>

        <input
          autoFocus
          required
          name="name"
          type="text"
          className="border-2 w-full text-padding rounded-md h-10 "
        />

        <label>Username</label>
        <input
          className="border-2  w-full items-center rounded-md h-10 "
          name="username"
          type="text"
        />

        <label>Password</label>
        <input
          className="block border-2 rounded-md w-full h-10 "
          name="password"
          type="password"
        />
        <div className="flex justify-center">
          <input
            className="mt-6 border-2-orange-500 bg-orange-500 text-white px-12 py-4 rounded-md cursor-pointer"
            type="submit"
            value="Create Account"
          />
        </div>
      </form>
      <p className="text-md text-center">Already have an account?</p>
      <a className="flex justify-center font-bold text-md text-orange-500 underline cursor-pointer">
        Sign In
      </a>
    </div>
  );
}
