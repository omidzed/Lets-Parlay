-- Set the client's minimum message level to warning to reduce console clutter
set
  client_min_messages to warning;

-- WARNING: Dropping and recreating the public schema. Use with caution!
drop schema "public" cascade;

create schema "public";

CREATE TABLE "users" (
  "userId" serial PRIMARY KEY,
  "name" text,
  "funds" numeric,
  "username" text,
  "hashedPassword" text,
  "isAdmin" boolean DEFAULT false
);

CREATE TYPE bet_status AS ENUM ('open', 'closed', 'canceled');

CREATE TABLE "bets" (
  "betId" serial PRIMARY KEY,
  "userId" int REFERENCES "users" ("userId"),
  "status" bet_status NOT NULL DEFAULT 'open',
  "dateTime" text,
  "pick" text,
  "winner" boolean,
  "betType" text,
  "betAmount" int NOT NULL,
  "payout" numeric,
  "placedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "matchId" text,
  "odds" numeric DEFAULT 1.9
);

CREATE TABLE "fighters" (
  "fighterId" SERIAL PRIMARY KEY,
  "name" VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE "divisions" (
  "divisionId" SERIAL PRIMARY KEY,
  "name" VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE "rankings" (
  "rankingId" SERIAL PRIMARY KEY,
  "divisionId" INT REFERENCES "divisions" ("divisionId"),
  "fighterId" INT REFERENCES "fighters" ("fighterId"),
  "rank" INT,
  "isChampion" BOOLEAN DEFAULT FALSE,
  "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table to log scraped data
CREATE TABLE IF NOT EXISTS scraped_data_log (
  id SERIAL PRIMARY KEY,
  source VARCHAR(50) NOT NULL,
  event_name TEXT NOT NULL,
  processed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fights_count INTEGER,
  success BOOLEAN DEFAULT TRUE
);

-- Table to store fight match information
CREATE TABLE IF NOT EXISTS matches (
  matchId TEXT PRIMARY KEY,
  fighter1Id INT REFERENCES fighters("fighterId"),
  fighter2Id INT REFERENCES fighters("fighterId"),
  eventName TEXT NOT NULL,
  eventDate TIMESTAMP,
  result TEXT,
  winner INT REFERENCES fighters("fighterId"),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
