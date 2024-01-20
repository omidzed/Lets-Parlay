// eslint-disable-next-line @typescript-eslint/no-unused-vars -- Used to identify the Request we are extending
import { Request } from 'express';

declare global {
  namespace Express {
    export interface Request {
      /** `User` object populated by `authMiddleware`. */
      user?: {
        userId: number;
      };
    }
  }
}
