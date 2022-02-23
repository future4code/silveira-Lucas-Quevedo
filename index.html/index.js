/* 1. a) Matheus Nachtergaele
 c) canal globo 14
2.
 a)//a.console.log(cachorro)
//Imprimiu "nome: 'Juca, idade: 3, raca: 'SRD".

//const gato = {...cachorro, nome: "Juba"}
//Imprime as mesmas variáveis de cachorro, porém substitui o nome por Juba.

//const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
//Imprime as mesmas variáveis de gato, porém substitui a letra "a" por "o" = nome: 'Jubo'.

a) através do ...Espalhamento - objetos
b) false, retornou o boolean beckender; 
undefined, retornou um valor não definido;//
/**------------------------------------------------------------------- */

//1.a)//
const pessoa = {
    nome: "lucas",
    apelidos:["lu","lulu", "luluzinha"],
}
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}.`);
//b)//
const apelidosb = {...pessoa, apelidos: ["lucão", "lux", "lux"]}

console.log(apelidosb);
//2.a)
const dados = {
    nome: "lucas",
    idade: 28,
    profissao: "estudante"
}
const dados2 = {
    nome: "Fernando", 
    idade: 32,
    profissao: "Gerente de supermercado", 
}

//b)
function array(objeto) {
        return [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length];
    
    }
    
    console.log(array(dados));
    console.log(array(dados2));
//3.a)
const carrinho = []

//b)// 

    let fruta1 = {
        nome: "Laranja",
        disponibilidade: true
    
    }
    
    let fruta2 = {
        nome: "Melão",
        disponibilidade: true
        
    }
    
    let fruta3 = {
        nome: "Mamão",
        disponibilidade: true
    }
 //c)// 
 function dentroCarrinho(objeto) {
    return carrinho.push(objeto)
}

dentroCarrinho(fruta1);
dentroCarrinho(fruta2);
dentroCarrinho(fruta3);
 //d. 
console.log(carrinho);












semaforo = "verde";

if (semaforo == "verde") {
    mensagem = "Pode passar";
}

semaforo = "vermelho";

if (semaforo == "verde") {
    mensagem = "Pode passar";
} else {
    mensagem = "Pare";
}