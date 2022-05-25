//escreva o seu código aqui
//1.
function checaTriangulo(a:Number, b:Number, c:Number) {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }
//   console.log(checaTriangulo(1, 5, 9))

//-----------------------------------------------------------------//
//2.
function imprimeTresCoresFavoritas(cor1:string, cor2:string, cor3:string): void{
    //  cor1 = prompt("Insira sua primeira cor favorita")
    //  cor2 = prompt("Insira sua segunda cor favorita")
    //  cor3 = prompt("Insira sua terceira cor favorita")
    console.log([cor1, cor2, cor3])
 }
imprimeTresCoresFavoritas("vermelho", "branco", "amarelo")

//3.
function checaAnoBissexto(ano:number):boolean {
    const cond1 = ano % 400 === 0
    const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
 }
//  console.log(checaAnoBissexto(2023))

//4.
function comparaDoisNumeros(num1:number, num2:number) {
    let maiorNumero;
    let menorNumero;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca = maiorNumero - menorNumero;
  
    return diferenca 
  }

//   console.log(comparaDoisNumeros(3, 10))

//5.
function checaRenovacaoRG(anoAtual:number, anoNascimento:number,anoEmissao:number ):boolean {
    
   
 
    const idade = anoAtual - anoNascimento
    const tempoCarteira = anoAtual - anoEmissao
 
    const cond1 = idade <= 20 && tempoCarteira >= 5
    const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3 = idade > 50 && tempoCarteira >= 15
 
    return (cond1 || cond2 || cond3)
 }
//  console.log(checaRenovacaoRG(2022, 1993, 2015))