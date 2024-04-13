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
  const authHeader = req.get('authorization');
  console.log('AuthMiddleware hit', req.path);

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log('Authorization header missing or malformed');
    throw new ClientError(401, 'Authentication required');
  }

  const token = authHeader.split('Bearer ')[1];
  console.log('Extracted Token:', token);

  try {
    const payload = jwt.verify(token, secret);
    console.log('Token verified, payload:', payload);
    req.user = payload as Request['user'];

    next();
  } catch (error) {
    throw new ClientError(401, 'Invalid token');
  }
}
