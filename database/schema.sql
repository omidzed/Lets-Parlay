set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "events" (
  "eventId" serial PRIMARY KEY,
  "apiId" text,
  "sportTitle" text,
  "date" date,
  "homeTeam" text,
  "awayTeam" text
);

CREATE TABLE "user" (
  "userId" serial PRIMARY KEY,
  "name" text,
  "username" text,
  "hashedPassword" text
);

CREATE TABLE "bets" (
  "betId" serial PRIMARY KEY,
  "betAuthor" int,
  "eventId" int,
  "betType" text,
  "betAmount" int
);

CREATE TABLE "outcomes" (
  "outComeId" serial PRIMARY KEY,
  "name" text,
  "price" int,
  "eventId" int
);

ALTER TABLE "bets" ADD FOREIGN KEY ("betAuthor") REFERENCES "user" ("userId");

ALTER TABLE "bets" ADD FOREIGN KEY ("eventId") REFERENCES "events" ("eventId");

ALTER TABLE "outcomes" ADD FOREIGN KEY ("price") REFERENCES "bets" ("betId");

ALTER TABLE "outcomes" ADD FOREIGN KEY ("eventId") REFERENCES "events" ("eventId");
