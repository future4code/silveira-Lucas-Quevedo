CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

-- 1.a) É a chave que permite fazer referencias entre as tabelas.alter
-- b)
SELECT * FROM Movie;
SELECT * FROM Rating;

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES("001", "Muito engraçado", 8.7, "004");
-- c) Error Code: 1062. Duplicate entry '001' for key 'PRIMARY'	0.203 sec

-- d)
ALTER TABLE Movie DROP COLUMN rating;
-- 2.a) É uma tabela que contém duas novas colunas relacionadas com outras duas Movie e Actor
CREATE TABLE MovieCast (
movie_id VARCHAR (255),
actor_id VARCHAR(255),
FOREIGN KEY (movie_id) REFERENCES Movie(id),
FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
SELECT * FROM Actor;
SELECT * FROM MovieCast;
-- b)
INSERT INTO MovieCast (movie_id, actor_id)
VALUES
("004", "002"),
("004","10"),
("004","1654803064967"),
("004","1654798849127"),
("004","1654803665051");
-- c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`silveira-21814259-lucas-quevedo`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))	0.187 sec


INSERT INTO MovieCast (movie_id, actor_id)
VALUES
("004", 1);

-- d)Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column. Cannot use range access on index 'PRIMARY' due to type or collation conversion on field 'id' To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.	0.172 sec

DELETE FROM Actor WHERE id = 002;

-- 3.a)O operador ON é especifica a coluna da tabela.
SELECT * FROM Movie
INNER JOIN Rating ON Movie.id = Rating.movie_id;

-- b)
SELECT movie_id, rating FROM Movie
INNER JOIN Rating ON movie_id = rating.movie_id
