import { validateEmpytProperties } from "../src/validateEmpytProperties"

describe("teste unitario", () =>{
    test("teste", () =>{
        const empytPropertiesString = {name:""}
        const result = validateEmpytProperties(empytPropertiesString)
        expect(result.isValid).toBe(false)
        expect(result.errors.length).toBe(1)
        expect(result.errors[0]).toEqual({key:"name", values:""})
    })
})