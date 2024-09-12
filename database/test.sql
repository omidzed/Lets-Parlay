-- Set the client's minimum message level to warning
SET
  client_min_messages TO WARNING;

BEGIN;

-- Insert a new bet with parameters for each field managed by the API
INSERT INTO
  "bets" (
    "userId",
    -- Assuming you have the user ID from your session or test parameter
    "pick",
    -- The choice on which the bet is placed
    "dateTime",
    -- When the bet applies, such as the start of an event
    "betType",
    -- Type of bet (e.g., moneyline, over/under)
    "betAmount",
    "payout",
    "placedAt" -- How much is being bet
  )
VALUES
  (
    1,
    -- Example user ID, replace with actual test user ID or parameter
    'Brady',
    -- Example pick
    '2024-09-07T16:00:00Z',
    -- Example dateTime
    'moneyline',
    -- Example betType
    1000,
    1500,
    '2024-09-07T16:00:00Z' -- Example betAmount
  );

COMMIT;
