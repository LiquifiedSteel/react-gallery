CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/pikachu.png', 'Pikachu!', 'Picture of surprised Pikachu face.'),
('images/Baller.webp', 'Baller!', 'Picture of Roblox Baller.'),
('images/hiking.jpg', 'Hiking!', 'Picture of some idiot hiking in Zion National Park.'),
('images/squirrel.webp', 'Squirrel!', 'Picture of a funny squirrel.');
  