import { getUserByIdMocks } from "./mocks/getUserByIdMocks"

describe("getUserById", () =>{
    test("teste de erro no id", async () =>{
       
        try {
            await new getUserByIdMocks().getUserById("abc") 
        } catch (error:any) {
            expect(error.statusCode).toBe(404)
            expect(error.message).toEqual("usuário não encontrado")
            
        }finally{
            expect.assertions(2)
        }
    })

    test("Should return respective user when id is registered", async () => {
        expect.assertions(2)
        
        try {
          const getUserById = jest.fn(
            (id: string) => new getUserByIdMocks().getUserById(id)
          )
            
          const result = await getUserById("idUser1")
    
          expect(getUserById).toHaveBeenCalledWith("idUser1")
          expect(result).toEqual({
            id: "idUser1",
            name: "lucas",
            email: "lucas@gmail.com",
            role: "NORMAL",
          })
        } catch (error:any) {
          console.log(error.message)
        }
    
})

})
