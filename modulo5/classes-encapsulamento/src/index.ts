

//1.a) O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.

//b)Messagem foi impressa uma vez no console
//c)Usando Getters e Setters


  class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
       transactions:Transaction[]
    ) 
    {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
       this.transactions = transactions
    }
    public getCpf(){
        console.log(this.cpf)
    } 
    public getName(){
        console.log(this.name)
    } 
    public getAge(){
        console.log(this.age)
    } 

    public setCpf(novoCpf:string){
        this.cpf = novoCpf
        console.log(this.cpf)
    }

    public setName(novoName:string){
        this.name = novoName
        console.log(this.name)
    }

    public setAge(novoAge:number){
        this.age = novoAge
        console.log(this.age)
    }
}
  

 

  
  class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }
    public getDate(){
        
        console.log(this.date)
    }

    public getValue(){
        
        console.log(this.value)
    }

    public getDescription(){
       
        console.log(this.description)
    }
}
const result = new Transaction ("2022-06-20", 10, "Dia de objetos de classe")
result.getDate()
result.getValue()
result.getDescription()


const resultado = new UserAccount("111-222-333-44", "Fulaniho", 29, [result])
resultado.getCpf()
resultado.getName()
resultado.getAge()

//3.

class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }

    public getAccount(){
        console.log(this.accounts)
    }
  
  }

  const bank = new UserAccount ("111-111-111-11", "João", 25, [result])
  bank.getCpf()
  bank.getName()
  bank.getAge()
  
  