import { atackerPerform, Character, validateCharacter } from "../src/validateCharacters"

describe("Testando valores dos personagens", () =>{
    test("testando nome vazio", () =>{
        
        const result = validateCharacter({
            name:"", 
            life: 1500,
            strength: 300,
            defense: 500,})
        expect(result).toBe(false)
    })

    test("testando se a vida for 0", () =>{
        const result = validateCharacter({
            name:"Scorpion", 
            life: 0,
            strength: 300,
            defense: 500,})
        expect(result).toBe(false)
    })

    test("testando se todos estiverem populados corretamente", () =>{
        const result = validateCharacter({
            name:"Scorpion",
            life:1400,
            strength:200,
            defense:300
        })
        expect(result).toBe(true)
    })

    test("testando a força de ataque", () =>{
        const atacker:Character =({
            name:"Scorpion",
            life:1400,
            strength:800,
            defense:300
        })

        const defender:Character =({
            name:"Sub-zero",
            life:1000,
            strength:200,
            defense:300
        })
            const mokado = jest.fn(() =>{
                return true
            })

            atackerPerform(atacker, defender, mokado)
            expect(defender.life).toBe(500)
            expect(mokado).toBeCalled()
            expect(mokado).toBeCalledTimes(2)
        
    })
})