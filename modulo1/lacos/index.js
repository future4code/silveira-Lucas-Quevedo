//Interpretação de código:
//1. 10;

//2.a) todos os números maiores que 18;
//b) sim é possível, é apenas pedir para o loop começar apartir do zero;

//3.Seria 4 linhas de asteriscos e em cada uma aumentando um asterisco;
/**------------------------------------------------------------------------- */

//Escrita de Código:
//1.
function exercicio1(){
const bichos = Number(prompt("quantos bichos você tem?"))
const resultado = bichos
var array = []

if(bichos >= 1){
    
    for(let i = 0; i <= (bichos -1); i++){
    
    array[i] = prompt("qual o nome dos bixinhos?");
}
}else{
    console.log("que pena você pode adotar um pet! ")
}
console.log(array)
}

//2.a)
function exr2a(array){
    for(let numero of array){
        console.log(numero)
    }
}
function exr2b(array){
    for(let numero of array){
      let divisao = numero /10
    console.log(divisao)
    }   
    }
function exr2c(array){
var numeroPar = []
for(let i = 0;i < array.lenght; i ++){
    if(array[i] % 2 == 0){
    numeroPar = []
    }
}
console.log(numeroPar)
}


function exercicio2(array){
    exr2a(array)
    exr2b(array)
    exr2c(array)
}



var numeros = [10,20,30,40,50]
exercicio2(numeros)

