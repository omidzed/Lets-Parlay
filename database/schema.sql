-- Set the client's minimum message level to warning to reduce console clutter
set client_min_messages to warning;

-- WARNING: Dropping and recreating the public schema. Use with caution!
drop schema "public" cascade;

create schema "public";

CREATE TABLE "users" (
  "userId" serial PRIMARY KEY,
  "name" text,
  "funds" int,
  "username" text,
  "hashedPassword" text
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
  "payout" NUMERIC,
  "placedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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
