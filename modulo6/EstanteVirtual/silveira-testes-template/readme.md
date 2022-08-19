Documentação da API:
https://documenter.getpostman.com/view/20354224/VUjMoRe5

Sobre o projeto:
Projeto desenvolvido por: Lucas Moraes de Quevedo. Estante Virtual, uma API REST em Ruby para o COB (Comitê Olímico Brasileiro), que será responsável por marcar e dizer os vencedores das seguintes modalidades:

100m rasos: Menor tempo vence
Lançamento de Dardo: Maior distância vence

CADASTRO COMPETIÇÃO
O usuário precisa preencher os campos: Competição e condição realizar o cadastro da competição. É necessário o preenchimento de todos os campos para a finalização da função. Aqui, o id é gerado automático.

CADASTRO ATLETA
O usuário precisa preencher os campos: Name para realizar o cadastro. É necessário o preenchimento de todos os campos para a finalização da função. Aqui, o id.

CADASTRO DE RESULTADOS
O usuário precisa preencher os campos: id_competition, id_athlete, value e unity . O campo de id_competition é o id da tabela de competição criada, id_athlete é o id da tabela de atleta criado, value é passado comforme o resultado do atleta e unity é pré determinado se é s ou m,  É necessário o preenchimento de todos os campos para a finalização da função. Aqui, o id.


VISUALIZAR DETALHES SOBRE AS COMPETIÇÔES
Para visualizar detalhes sobre a banda, é necessário passar o id_competition da competição por body.

Tecnologias utilizadas:
Node.js
Typescript
MYSQL
Programação Orientada à Objetos
Postman
Git


Linguagens e libs utilizadas:
Typescript
mysql
dotenv
express
knex
bcryptjs
uuid
jsonwebtoken
moment
