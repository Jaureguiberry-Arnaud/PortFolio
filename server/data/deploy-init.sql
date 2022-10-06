/* This script will generate the table for the database */

BEGIN;

CREATE TABLE
    IF NOT EXISTS "user" (
        "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        "pseudo" TEXT NOT NULL UNIQUE,
        "password" TEXT NOT NULL,
        "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
        "updated_at" TIMESTAMPTZ,
    );

CREATE TABLE
    IF NOT EXISTS "project" (
        "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        "name" TEXT NOT NULL UNIQUE,
        "git_url" TEXT NOT NULL UNIQUE,
        "web_url" TEXT,
        "description" TEXT NOT NULL,
        "user_id" INT REFERENCES "user" ("id") DEFAULT 1 ON DELETE CASCADE,
        "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
        "updated_at" TIMESTAMPTZ,
    );

CREATE TABLE
    IF NOT EXISTS "log" (
        "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        "project_id" INT NOT NULL REFERENCES "project" ("id") ON DELETE CASCADE,
        "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
        "updated_at" TIMESTAMPTZ,
    );

COMMIT;