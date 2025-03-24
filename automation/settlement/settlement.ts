import db from './db';
import config from './config';
import fs from 'fs';
import path from 'path';

// Types for our data
interface User {
  userId: number;
  funds: number;
}

interface Bet {
  betId: number;
  userId: number;
  betAmount: number;
  payout: number | null;
  winner: boolean;
  odds?: number;
  current_balance?: number;
}

// Create a log directory if it doesn't exist
const logDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// Set up logging
const logFile = path.join(
  logDir,
  `settlement_${new Date().toISOString().slice(0, 10)}.log`
);
const logger = {
  log: (message: string): void => {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} - INFO - ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(logFile, logMessage);
  },
  error: (message: string): void => {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} - ERROR - ${message}\n`;
    console.error(logMessage.trim());
    fs.appendFileSync(logFile, logMessage);
  },
};

/**
 * Get bets that need to be settled (status is closed but payout not processed)
 */
async function getBetsToSettle(): Promise<Bet[]> {
  try {
    const result = await db.query(`
      SELECT
        b.betId,
        b.userId,
        b.betAmount,
        b.payout,
        b.winner,
        u.funds as current_balance
      FROM
        bets b
      JOIN
        users u ON b.userId = u.userId
      WHERE
        b.status = 'closed'
        AND b.payout IS NULL
    `);

    logger.log(`Found ${result.rows.length} bets to settle`);
    return result.rows;
  } catch (error) {
    logger.error(
      `Error fetching bets to settle: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
    return [];
  }
}

/**
 * Calculate payout based on bet amount and odds
 * Note: You'll need to add an odds column to your bets table
 */
function calculatePayout(bet: Bet): number {
  // Default odds if not specified (e.g. 1.9 for standard bet)
  const odds = bet.odds || 1.9;

  if (bet.winner) {
    return parseFloat((bet.betAmount * odds).toFixed(2));
  } else {
    return 0;
  }
}

/**
 * Process all bets that need settlement
 */
async function settleBets(): Promise<void> {
  const betsToSettle = await getBetsToSettle();
  const client = await db.pool.connect();

  try {
    await client.query('BEGIN');

    for (const bet of betsToSettle) {
      const payout = calculatePayout(bet);

      // Update bet with payout amount
      await client.query(`UPDATE bets SET payout = $1 WHERE betId = $2`, [
        payout,
        bet.betId,
      ]);

      // Update user balance if there's a payout
      if (payout > 0 && bet.current_balance !== undefined) {
        const newBalance = parseFloat(bet.current_balance.toString()) + payout;
        await client.query(`UPDATE users SET funds = $1 WHERE userId = $2`, [
          newBalance,
          bet.userId,
        ]);

        logger.log(
          `User ${bet.userId} received payout of ${payout} for bet ${bet.betId}`
        );
      }
    }

    await client.query('COMMIT');
    logger.log(`Successfully settled ${betsToSettle.length} bets`);
  } catch (error) {
    await client.query('ROLLBACK');
    logger.error(
      `Error during bet settlement: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  } finally {
    client.release();
  }
}

/**
 * Main function to run the settlement process
 */
async function main(): Promise<void> {
  logger.log('Starting bet settlement process');

  try {
    await settleBets();
    logger.log('Bet settlement completed');
  } catch (error) {
    logger.error(
      `Settlement process failed: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

// Run the settlement process
main();
