-- SQL script to update bet statuses and outcomes

-- Set the client's minimum message level to warning
SET client_min_messages TO WARNING;

BEGIN;

UPDATE "bets"
SET "status" = 'closed',
    "winner" = true
WHERE "betId" = 2;


COMMIT;
