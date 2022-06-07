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
 SELECT AVG(salary) FROM Actor WHERE gender = "female";
 
 -- 6.a)
 ALTER TABLE Movie ADD playing_limit_date VARCHAR(255) ;
 SELECT * FROM Movie;
 
 -- b) 
 ALTER TABLE Movie CHANGE rating rating FLOAT;
 
 -- c)
 INSERT INTO Movie (id, title, synopsis, realese_Date, rating, playing_limit_date)
 VALUES(
 2,
 "Tropa de elite",
 "Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano. Ele precisa cumprir as ordens enquanto procura por um substituto para ficar em seu lugar. Em meio a um tiroteio, Nascimento e sua equipe resgatam Neto e Matias, dois aspirantes a oficiais da PM. Ansiosos para entrar em ação e impressionados com a eficiência de seus salvadores, os dois se candidatam ao curso de formação da Tropa de Elite."
 "2007-10-20",
 8.5

 );
 