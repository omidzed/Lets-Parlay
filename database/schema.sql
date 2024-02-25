set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.

drop schema "public" cascade;

create schema "public";

CREATE TABLE "events" (
  "eventId" text PRIMARY KEY,
  "commenceTime" date,
  "name-1" text,
  "name-1-odds" int,
  "name-2" text,
  "name-2-odds" int
);

CREATE TABLE "user" (
  "userId" serial PRIMARY KEY,
  "name" text,
  "funds" int,
  "username" text,
  "hashedPassword" text
);

CREATE TABLE "bets" (
  "betId" serial PRIMARY KEY,
  "userId" int,
  "completed" text,
  "dateTime" text,
  "pick" text,
  "betType" text,
  "betAmount" text
);

CREATE TABLE "outcomes" (
  "outComeId" serial PRIMARY KEY,
  "completed" text,
  "winner" text,
  "winMethod" text,
  "payout" int,
  "eventId" text
);

ALTER TABLE "bets" ADD FOREIGN KEY ("userId") REFERENCES "user" ("userId");

-- ALTER TABLE "bets" ADD FOREIGN KEY ("eventId") REFERENCES "events" ("eventId");

ALTER TABLE "outcomes" ADD FOREIGN KEY ("eventId") REFERENCES "events" ("eventId");
