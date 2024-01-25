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
    <form
      onSubmit={handleSubmit}
      className="flex-col justify-center items-center px-5">
      <label>
        Username
        <input
          className="border-2 block w-5/6 items-center"
          name="username"
          type="text"
        />
      </label>
      <label>
        Password
        <input className="border-2 block" name="password" type="password" />
      </label>
      <input type="submit" value="Sign Up" />
    </form>
  );
}
