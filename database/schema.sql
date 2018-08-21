CREATE DATABASE stringlist;

\connect stringlist;

CREATE SCHEMA stringlist;

CREATE TABLE stringlist (
  id SERIAL PRIMARY KEY,
  string TEXT
);