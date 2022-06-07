CREATE TABLE Actor(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6)

);
-- a)varchar (255) quer dizer o tamanho maximo para um coluna;
-- b) show databeses informou minha matricula, ou seja o meu banco de dados, show tables mostrou a tabela que criei;
-- c)describe, mostra as propriedades que a tabela pede(id, name, salary, birth_date, gender)
SHOW DATABASES;
SHOW TABLES;
DESCRIBE Actor;
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
-- 2.a)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("002", "Gloria Pires", 1200000,"1963-08-23","female" );
-- b)Código de erro: 1062 entrada duplicada 002, não pode haver dois identificadores repetidos
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "lucas",
  400000,
  "1948-08-25", 
  "male"
);
-- c)  Código de erro: 1136. A contagem de colunas não contagem de valor de correspondência na linha 1 0,172 seg
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000
  );
  -- d) Código do erro: 1364. O campo 'name' não possui um valor padrão 0,172 seg
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
-- e) Código do erro: 1292. Valor de data incorreto : '1950' para a coluna 'birth_date' na linha 1 0,172 seg
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
-- f) adicionei os campos que faltavam
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

 INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

SELECT * FROM Actor;
-- 3. a)
SELECT id, name from Actor WHERE gender = "male";
-- b)
SELECT id, name from Actor WHERE name = "Tony Ramos";
-- c) mostra os campos null
SELECT id, name from Actor WHERE gender = "invalid";
-- d)
SELECT id, name, salary from Actor WHERE salary  < 500000;
-- f) Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos' 0,157 seg
SELECT id, nome from Actor WHERE id = "002";
SELECT id, name from Actor WHERE id = "002";

-- 4.a) seleciona o nome que contém a ou j e com o salario menor que 300000
SELECT * FROM Actor
WHERE (name LIKE "A%" OR NAME LIKE "J*") AND salary < 300000;
-- b)
SELECT * FROM Actor
WHERE (name LIKE "A%" ) AND salary < 350000;
-- c)
SELECT * FROM Actor
WHERE (name LIKE "A%" OR NAME LIKE "a" OR NAME LIKE "g" OR NAME LIKE "G") ;
-- d)
SELECT * FROM Actor
WHERE (name LIKE "A%" OR NAME LIKE "a" OR NAME LIKE "g" OR NAME LIKE "G") AND salary BETWEEN 300000 AND 900000;

-- 5.a)
CREATE TABLE Movie(
id VARCHAR (255) PRIMARY KEY,
title VARCHAR (255) NOT NULL,
synopsis TEXT NOT NULL,
realese_Date DATE NOT NULL,
rating INT NOT NULL
);

-- b)
INSERT INTO Movie (id, title, synopsis, realese_Date, rating)
VALUES (
"004",
"Deus é brasileiro",
 "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9

);
-- 6.a)

SELECT id, title, rating FROM Movie WHERE id = "004";

-- b)

SELECT * FROM Movie WHERE title = "Deus é Brasileiro";

-- c)
SELECT id, title, synopsis FROM Movie WHERE rating > 7;

-- 7.a)
SELECT * FROM Movie
WHERE title LIKE "%vida%";

-- b)
SELECT * FROM Movie
WHERE title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%";
      
-- c) 
SELECT * FROM MOVIE
WHERE release_date < "2020-05-04";

-- d)
SELECT * FROM MOVIE
WHERE release_date < "2020-05-04" AND 
      (title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;
-- Aprofundamento SQL ----------------------------------------------------------------------------------------------------------------------
      
ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";


-- 1.a) Removeria a coluna salary
-- b) Esse comando redeclara a coluna gender para sex com apenas 6 caracteres;
-- c) Esse comando redeclara com o mesmo nome a coluna
-- d)
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

SELECT * FROM Actor;

-- 2.a)
UPDATE Actor
SET
 name = "Moacir Franco",
 birth_date = "1993-06-08"
 WHERE id = 003;
 
 SET SQL_SAFE_UPDATES = 0;
 -- b)
 
 UPDATE Actor
 SET 
 name = "JULIANA PAES"
 WHERE name = "juliana paes";
 
 UPDATE Actor
 SET 
 name = "Juliana Paes"
 WHERE name = "JULIANA PAES";
 
 -- c)
 UPDATE Actor 
 SET 
 id = 10,
 name = "Lucas",
 salary = 5000,
 birth_date = "1993-06-08",
 gender = "male"
 WHERE id = 005;
 
 -- d) Coluna desconhecida 'nome' na 'lista de campos'
 UPDATE Actor
 SET
 nome = "luiza"
 WHERE id = 15;
 
 -- 3.a)
 DELETE FROM Actor WHERE name = "Fernanda Montenegro";
 -- b)
 DELETE FROM Actor WHERE gender = "male" AND salary > 100000;
 
 -- 4.a)
 SELECT COUNT(*) FROM Actor WHERE gender = "female";
 SELECT AVG (salary) FROm Actor ;
 SELECT MAX(salary) FROM Actor;
 
 
 -- b)
 SELECT MIN(salary) FROM Actor WHERE gender = "female";
 
 -- c)
 SELECT COUNT(*) FROM Actor WHERE gender = "female";
 
 -- d)
 SELECT SUM(salary) FROM Actor;
 
 
 -- 5.a) SELECT COUNT(*), gender FROM Actor GROUP BY gender - quer dizer que seleciona todos os generos de Actor e agrupa eles juntos
 
 -- b)
 SELECT * FROM Actor ORDER BY name DESC;
 
 -- c) 
 SELECT * FROM Actor ORDER BY salary DESC;
 
 -- d)
 SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
 
 -- e) 
 SELECT AVG(salary) FROM Actor WHERE gender = "female"
 
 
 
 
 








