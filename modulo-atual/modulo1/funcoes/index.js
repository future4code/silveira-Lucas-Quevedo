

const nome = prompt('Qual é o seu nome?');
const email = prompt('Qual é o seu e-mail?');

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`);

const comidasPreferidas = ["pizza", "churrasco", "x-bacon", "banana", "Chocolate"];
console.log(comidasPreferidas);

console.log(`Essas são as minhas comidas preferidas: 
    ${comidasPreferidas[0]},
    ${comidasPreferidas[1]},
    ${comidasPreferidas[2]},
    ${comidasPreferidas[3]}, e
    ${comidasPreferidas[4]}`)

    comidasPreferidas[1] = prompt("Qual a sua comida favorita?");

console.log(comidasPreferidas);
let listaDeTarefas = []
listaDeTarefas[0] = prompt("Qual sua 1ª tarefa do dia?");
listaDeTarefas[1] = prompt("Qual sua 2ª tarefa do dia?");
listaDeTarefas[2] = prompt("Qual sua 3ª tarefa do dia?");
console.log(listaDeTarefas);

let removerTarefa = +prompt(`Qual tarefa você já concluiu?
1 - ${listaDeTarefas[0]}
2 - ${listaDeTarefas[1]}
3 - ${listaDeTarefas[2]}`);

listaDeTarefas.splice(removerTarefa - 1, 1);
console.log(`Tarefas ainda não concluídas:
1 - ${listaDeTarefas[0]}
2 - ${listaDeTarefas[1]}`);

////Interpretação de codigo
1.
// a. sem tipo definido

// b. imprime com valor nulo

// c. imprime 11

// d. imprime a variavel 3

// e. Imprime o tamanho da string = 11 e substitui i+1 = 4, por 19. 
//(11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// f. imprime a variavel 9//


//2. //SUBI NUM ÔNIBUS EM MIRROCOS 27//


function minhaFuncao(variavel) {
return variavel * 5    
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

console.log( 'exercicio 1')

function imprimirOla(nome){
    console.log(`Olá, ${nome}` )
}
imprimirOla("lucas")
imprimirOla ("fabio")

console.log ("exercio2")

function somar(a, b){
    const soma = a + b
    return soma
}
console.log(somar(10, 20))

console.log('exercicio 3')
function imprimirOla(nome) {
    console.log(`olá, ${nome}`);
}

