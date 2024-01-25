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
        className="flex-col justify-center items-center my-10">
        <label className="mt-4 pb-1 d-block rounded-md">Name</label>

        <input
          required
          name="name"
          type="text"
          className="border-2 w-full input-b-color text-padding input-b-radius rounded-sm input-height mb-4"
        />

        <label className="mb-2 d-block">Username</label>
        <input
          className="border-2 block w-full items-center rounded-sm"
          name="username"
          type="text"
        />

        <label className="block mt-4">Password</label>
        <input
          className="block border-2 rounded-md w-full "
          name="password"
          type="password"
        />
        <div className="flex justify-center">
          <input
            className="mt-6 border-2-orange-500 bg-orange-500 text-white px-4 py-1 rounded-md cursor-pointer"
            type="submit"
            value="Create Account"
          />
        </div>
      </form>
      <p className="text-sm text-center mt-4">Already have an account?</p>
      <a className="flex justify-center text-md text-orange-500 underline cursor-pointer">
        Sign In
      </a>
    </div>
  );
}