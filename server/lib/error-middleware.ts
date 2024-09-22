import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { ClientError } from './client-error.js';
import pg from 'pg';
import argon2 from 'argon2';

export function errorMiddleware(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error(err); // Log all errors for debugging

  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else if (err instanceof jwt.JsonWebTokenError) {
    res.status(401).json({ error: 'Invalid access token' });
  } else if (err instanceof jwt.TokenExpiredError) {
    res.status(401).json({ error: 'Access token has expired' });
  } else if (err instanceof pg.DatabaseError) {
    res.status(500).json({ error: 'Database error', message: err.message });
  } else if (err instanceof Error && err.name === 'ArgonHashError') {
    res.status(500).json({ error: 'Password hashing error' });
  } else if (err instanceof TypeError) {
    res.status(400).json({ error: 'Invalid input', message: err.message });
  } else if (err instanceof SyntaxError) {
    res.status(400).json({ error: 'Invalid JSON', message: err.message });
  } else if (err instanceof Error) {
    res.status(500).json({
      error: 'An unexpected error occurred',
      message: err.message,
    });
  } else {
    res.status(500).json({
      error: 'An unknown error occurred',
    });
  }
}
