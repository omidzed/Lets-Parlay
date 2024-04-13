set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.

drop schema "public" cascade;

create schema "public";

CREATE TABLE "user" (
  "userId" serial PRIMARY KEY,
  "name" text,
  "funds" int,
  "username" text,
  "hashedPassword" text
);

CREATE TABLE "bets" (
  "betId" serial PRIMARY KEY,
  "userId" int REFERENCES "user" ("userId"),
  "closed" boolean NOT NULL,
  "dateTime" text,
  "pick" text,
  "betType" text,
  "betAmount" int NOT NULL,
  "placedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "results" (
  "resultId" serial PRIMARY KEY,
  "closed" text,
  "winner" text,
  "winMethod" text,
  "payout" int,
  "eventId" text
);

CREATE TABLE "rankings" (
    "id" SERIAL PRIMARY KEY,
    "division" VARCHAR(255),
    "rank" INT,
    "fighter_name" VARCHAR(255),
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE "bets" ADD FOREIGN KEY ("userId") REFERENCES "user" ("userId");

--ALTER TABLE "results" ADD FOREIGN KEY ("betId") REFERENCES "bets" ("betId");
 --"placedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
