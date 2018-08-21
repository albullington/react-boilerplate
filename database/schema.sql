CREATE DATABASE stringlist;

\connect stringlist;

CREATE SCHEMA strings;

CREATE TABLE strings (
  id SERIAL PRIMARY KEY,
  string TEXT
);