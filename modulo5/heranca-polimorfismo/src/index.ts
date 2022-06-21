//exemplos

//DECLARANDO CLASSES

//instância da classe ou um objeto

//tipagem com classe









//EXERCICIO 1 =============================================
//Transforme o type estudante em uma classe Estudante:

type pessoa = {
    nome: string,
    idade: number
}




//EXERCICIO 2 =============================================
class Estudante {
    //1 - Torne as propriedades da classe Estudantes privadas. 
    nome: string
    matricula: number

    constructor(novoNome: string, novaMatricula: number) {
        this.nome = novoNome
        this.matricula = novaMatricula
    }

    //2 - Adicione os getters para pegar o nome ou matrícula do estudante  e setters para alterar a matrícula do estudante.

}

//3 - Crie uma instância da classe Estudante

//4 - imprima o nome e matrícula do estudante criado.
//1.a)Seria posivél sim 
//b) Imprime uma vez
class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;


    constructor(
        id: string,
        email: string,
        name: string,
        password: string,

    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password

    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    //   public getName(): string {
    //       return this.name
    //   }
    getPassword(): string {
        return this.password
    }
    getintroduceYourself(): string {
        return `Olá, ${this.name}. bom dia!`
    }
}

const usuario = new User("1", "lucas@lucas.com", "Lucas", "lucas123")




//2.a)Uma vez 
//b)Duas vezes


//3.a)Foi possível por que no constructor ela está public
//4.
//5.
class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string,


    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }
    public getPurchaseTotal(): number {
        return this.purchaseTotal
    }

    public getCreditCard(): string {
        return this.creditCard;
    }

}

const showME = new Customer("2", "lucas@gmail.com", "Lucas Quevedo", "123456", "nubank")
//   console.log(showME.getCreditCard())
//   console.log(showME.getEmail())
//   console.log(showME.getId())
// //   console.log(showME.getName())
//   console.log(showME.getPassword())
//   console.log(showME.getPurchaseTotal())
//   console.log(showME.getintroduceYourself())




//Polimorfismo


//1.a) Não foi possível imprimir a função calculateBill

export interface Client {
    name: string;
    // Refere-se ao nome do cliente

    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
    // como se fosse um id

    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês

    calculateBill(): number;
    // Retorna o valor da conta em reais

}
const client: Client = {
    name: "lucas",
    registrationNumber: 200,
    consumedEnergy: 100,
    calculateBill() {
        return 2
    },
}
//   console.log(client)

//2.a)Gerou o seguinte erro: Não é possível criar uma instância de uma classe abstrata.
//b)Criar uma nova classe filha não abstrata e instanciar ela.
export abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    }
}

//3.a)Criar uma nova classe filha não abstrata e instanciar ela.
//b)Place é uma classe porque precisa ter um acesso restrito a um dos seus atributos, o que é impossível de se fazer em interfaces.
//c)Place é abstrata porque não enxergamos uma situação em que seria necessário criar uma instância dessa classe.


export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        // Refere-se ao número de moradores da casa

        cep: string
    ) {
        super(cep);
    }
    public getCepResidence(): string {
        return this.cep
    }
}
const getResidence = new Residence(1, "10052890")
console.log(getResidence.getCepResidence())

export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        // Refere-se à quantidade de andares do lugar

        cep: string
    ) {
        super(cep);
    }
    getCepCommerce() {
        return this.cep
    }
}
const getCommerce = new Commerce(3, "11223345")
console.log(getCommerce.getCepCommerce())

export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        // Refere-se à quantidade de máquinas do local 

        cep: string
    ) {
        super(cep);
    }
    getCepIndustry() {
        return this.cep
    }
}
const getIndustry = new Industry(7, "47869750")
console.log(getIndustry.getCepIndustry())


//4.a)

class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string
    ) {
        super(residentsQuantity, cep)
    }
    getCpf(): string {
        return this.cpf
    }
    calculateBill(): number {
        return this.consumedEnergy * 0.75
    }

}

const result = new ResidentialClient("lucas", 10203040, 500, "02535045890", 3, "025690080")
console.log(result.getCpf())
console.log(result.calculateBill())

//5.a)Muito parecidas praticamente tudo igual, por causa do implements Client
//b)Muda de residentsQuantity para floorsQuantity por causa da class Commerce e muda o documento para cnpj private
class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep)
    }
    getCepCommrcialClient() {
        return this.cep
    }

    calculateBill(): number {
        return this.consumedEnergy * 0.53
    }

}

const result2 = new CommercialClient("João", 102030, 1200, "10203456", 10, "69050730")
console.log(result2.getCepCommrcialClient())
console.log(result2.calculateBill())

//6.a)
//b)
//c)

class IndustrialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private insdustryNumber: string,
        machinesQuantity:number,
        cep:string
    ){
        super( machinesQuantity, cep)
    }
    getCepIndustrialNumber(){
        return this.insdustryNumber
    }

    calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100
    }
    
}
const result3 = new IndustrialClient("Joãzinho", 151417, 300,"262", 15,"151425645687")
console.log(result3.getCepIndustrialNumber())
console.log(result3.calculateBill())