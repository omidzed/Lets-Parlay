import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { ClientError } from './client-error.js';

const secret = process.env.TOKEN_SECRET ?? '';
if (!secret) throw new Error('TOKEN_SECRET not found in env');

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // The token will be in the Authorization header with the format `Bearer ${token}`
  const token = req.get('authorization')?.split('Bearer ')[1];
  if (!token) {
    throw new ClientError(401, 'authentication required');
  }
  req.user = jwt.verify(token, secret) as Request['user'];
  next();
}
