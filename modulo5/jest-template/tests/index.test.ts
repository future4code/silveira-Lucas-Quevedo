import { verify } from "crypto"
import { Casino, LOCATION, NACIONALITY, performPurchase, User, Users, verifyAge } from "../src"

describe("estou testando", () =>{

    test("testando o valor", () => {
        const user:User = {
            name:"Lucas",
            balance:100
        } 
    
        const result = performPurchase(user, 20)
    
        expect(result).toEqual({
        name: "Lucas",
        balance: 80
    })
    })

    test("testando o valor igual", ()=> {
        const user:User = {
            name:"Lucas",
            balance:100
        }

        const result = performPurchase(user, 50)
        expect(result).toEqual({
            name:"Lucas",
            balance:50
        })
    })

    test("testando o saldo menor que a compra", () => {
        const user:User ={
            name:"Lucas",
            balance:100
        }
            const result = performPurchase(user, 150)

            expect(result).not.toBeDefined()
        
    })

    test("testando nacionalidade", () =>{
        const user:Users[] =[{
            name:"Lucas",
            age:29,
            nacionality:NACIONALITY.BRAZILIAN  
        }]

        const casino: Casino ={
            name: "Lucas" ,
            location:LOCATION.BRAZIL
        }

        const user2:Users[]=[{
            name:"Jhon",
            age:25,
            nacionality:NACIONALITY.AMERICAN
        }]

        const casino2:Casino={
            name:"Jhon",
            location:LOCATION.BRAZIL
        }
        const result = verifyAge(casino, user) 
        expect(result).toEqual({
            brazilians:{
                allowed:[user[0].name], 
                unallowed:[]
            },
            americans:{
                allowed:[],
                unallowed:[]
            }
        })
        const result2 = verifyAge(casino2, user2)

        expect(result2).toEqual({
            brazilians:{
                allowed:[],
                unallowed:[]
            },
            americans:{
                allowed:[user2[0].name],
                unallowed:[]
            }
        })
    })
})