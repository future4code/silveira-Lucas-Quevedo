import { performPurchase, User } from "."

test("testando o valor", () => {
    const user:User = {
        name:"Lucas",
        balance:100
    } 

    const result = performPurchase(user, 40)

    expect(result).toEqual({
    name: "Lucas",
    balance: 60
})
})