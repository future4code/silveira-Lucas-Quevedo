//interpretação de códigos


//1.a) O map ira imprimir cada item, index e array de const usuarios;

//2.a) O map imprmiu apenas o item nome da array;

//3.a)o filter imprimirá os os dois primeiros e excluira o "chijo"
//-----------------------------------------------------------------------------------------//

//Escrita de códigos
//1.a)
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 /*const novoArrayC = pets.map((item, index, array) => {
    return item.nome 
 })
 
 console.log(novoArrayC)*/
 //b)const novaArray2 = pets.filter((item, index, array) => {
     //return item.raca === "Salsicha"
    
//})
//console.log(novaArray2)
//c)

/*const novaArray3 = pets.filter((item, index, array) => {
    return item.raca === "Poodle"})
    
      console.log(novaArray3)

       const msg = novaArray3.map = ((item) =>   {
        const msg2 = (`"Você ganhou um cupom de desconto de 10% para tosar o/a ${item.raca}!"`)
     return novaArray3
      })


     console.log(msg)*/
     //2.a)
     const produtos = [
        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
     ]
    /* const nomes = produtos.map((item, index, array) => {
        return item.nome })
        
          console.log(nomes)*/
     //b)
     /*const desconto = produtos.map((item) => {
         const objeto = {nome:item.nome}
         return objeto
     })
     console.log(desconto)*/
     const desconto = produtos.filter((item) => {
         
         return item.categoria ==="Bebidas"
    })
    console.log(desconto)
