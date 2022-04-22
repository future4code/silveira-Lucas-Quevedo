
/**1.a) O código pede um número pra o usuario que dividido por 2 deve ser exato, se sim "passou no teste" senão "não passou no teste*/
//b) números pares
//c) números impáres

//2.a) O código serve para mostrar o valor da fruta escolhida
//b) 5
//c) O preço da fruta pêra é 5


//3.a) Está pedindo pra o usuario digitar um número 
//b) Esse número passou no teste
//c) O erro acontece por console.log(mensagem), estar fora do if



//---------------------------------------------------------------------//

//Exercicios de escrita

//1.a)b)C)

//const idade = prompt('Qual é a sua idade?')
//const resultado = Number(idade)

//if(resultado >= 18) {
 //   console.log("Pode dirigir!")
//} else{
 //   console.log("Não pode dirigir!")
//}

//2.
//const turno = prompt("Qual turno você estuda? responda M(matutino), V(vespertino), N(noturno)"); 
//const resultado = turno
//if(turno == "M"){
  //  console.log("Bom dia")
//} else if (turno == "V"){
 //   console.log("Boa tarde!")
//} else (turno == "N")
  //  {console.log("Boa noite!")
//}


/*3)const turno1 = prompt("Qual turno você estuda? responda M(matutino), V(vespertino), N(noturno)")
const resultado2 = turno1
switch (turno1){
    case "M":
        console.log("Bom dia")
        break
        case "V":
            console.log("Boa tarde!")
            break
            case "N":
                ("Boa noite!")   
}*/


const filme = prompt("Qual genêro de filme irá assistir?");
const precoIgresso = Number(prompt("Qual o preço do ingresso?"));
 function cinema(filme, precoIgresso){
     if(filme === "fantasia" && precoIgresso <= 15){

     console.log("bom filme!") 
 }else{
console.log("escolha outro filme!")
    }}
cinema(filme, precoIgresso)


