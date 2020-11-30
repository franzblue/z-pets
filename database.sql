
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
"id" SERIAL PRIMARY KEY,
"username" VARCHAR(255) UNIQUE NOT NULL,
"password" VARCHAR (1000) NOT NULL,
"admin" BOOLEAN DEFAULT FALSE, 
"last_logged" TIMESTAMP
);

CREATE TABLE "z-pet" (
"id" SERIAL PRIMARY KEY, 
"name" VARCHAR(255) NOT NULL,
"temperament" VARCHAR(255),
"birthday" DATE, 
"age" INTEGER DEFAULT 0,
"weight" INTEGER,
"health" INTEGER CHECK (health > -1 AND health <101) DEFAULT 100, 
"happy" INTEGER CHECK (happy > -1 AND happy <101) DEFAULT 100,
"energy" INTEGER CHECK (energy > -1 AND energy <101) DEFAULT 100, 
"crickets_eaten" INTEGER DEFAULT 0,
"user_id" INTEGER REFERENCES "user" ON DELETE CASCADE
);

CREATE TABLE "image" (
"id" SERIAL PRIMARY KEY, 
"name" VARCHAR(255) NOT NULL,
"alt" VARCHAR(255)
);

INSERT INTO "image" ("name", "alt") VALUES ('images/boat.jpg', 'boat');
INSERT INTO "image" ("name", "alt") VALUES ('images/fall.jpg', 'fall');
INSERT INTO "image" ("name", "alt") VALUES ('images/greenpark.jpg', 'park');
INSERT INTO "image" ("name", "alt") VALUES ('images/oceanrock.jpg', 'ocean');
INSERT INTO "image" ("name", "alt") VALUES ('images/petals.jpg', 'petals');
INSERT INTO "image" ("name", "alt") VALUES ('images/plains.jpg', 'plains');