import { Request, Response } from 'express';
import { existsSync } from 'node:fs';

/**
 * Serves React's index.html if no api route matches.
 *
 * Implementation note:
 * When the final project is deployed, this Express server becomes responsible
 * for serving the React files. (In development, the Vite server does this.)
 * When navigating in the client, if the user refreshes the page, the browser will send
 * the URL to this Express server instead of to React Router.
 * Catching everything that doesn't match a route and serving index.html allows
 * React Router to manage the routing.
 *
 * This middleware also checks for the case where the project is only partially deployed.
 * For example, during the initial deployment there will be no React frontend since
 * that is built and pushed by the GitHub deploy Action. If it detects that situation,
 * it sends a helpful message.
 */
export function defaultMiddleware(reactStaticDir: string) {
  function handleDefault(_req: Request, res: Response) {
    if (!existsSync(reactStaticDir)) {
      res.sendFile(new URL('./no-client.html', import.meta.url).pathname);
      return;
    }
    res.sendFile(`${reactStaticDir}/index.html`);
  }

  return handleDefault;
}
