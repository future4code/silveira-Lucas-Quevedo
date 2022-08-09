import { ClientDataBase } from "../data/ClientDataBase";
import { PaymentDatabase } from "../data/PaymentDatabase";
import { inputPaymetInputDTO, Payment } from "../model/Payment";
import Authenticator from "../services/Authenticator";
import { IdGenerator } from "../services/idGenerator";
import ValidatorCreditCard from "../services/ValidatorCredit";
import StatusMock from "../services/Status.Mock";


export class PaymentBusiness{
    payment = async (input:inputPaymetInputDTO, auth:string ) =>{
        try {
            const {clientId, amount, type, cardHolderName, cardNumber, cardExpirationDate, cardCvv} = input 

            if(!auth){
                throw new Error("authorization denied!");
            }

            if(!clientId || !amount || !type){
               throw new Error("fill in the fields correctly!");
            }

           const authentication = new Authenticator().getData(auth)
            
           if(!authentication){
            throw new Error("invalid authentication!");
           }
           
           const clientDB = await new ClientDataBase().getId(authentication.id)

        
           const id = new IdGenerator().generate()

           if (type !== "credit card" && type !== "boleto") {
            throw new Error("Entered type is invalid, fill in 'credit card' or 'boleto' values.")
        }

        if (type === "boleto") {
            const status = "processando"
            const paymentCode = `34191.79001 01043.510047 91020.150008 6 906700${amount}`

            const newPayment = new Payment(id, status, clientDB.getId(), clientId, amount, type)

             new PaymentDatabase().create(newPayment)
            return { newPayment,  paymentCode}
        }

        if (type === "credit card") {
            if (!cardHolderName || !cardNumber || !cardExpirationDate || !cardCvv) {
                throw new Error("Entered type is invalid, fill in 'cardHolderName','cardNumber','cardExpirationDate' e 'cardCvv'")
            }
            const validCard = await new ValidatorCreditCard().validCreditCard(cardNumber)
            const validCvv = await new ValidatorCreditCard().validateCVV(cardNumber, cardCvv)


            if (validCard === false || validCvv === false) {
                throw new Error("The credit card number or cvv is invalid!")
            }
            
            const date = cardExpirationDate.split("/")

            const validExpirationDate = new ValidatorCreditCard().validExpirationDate(date)

            if (validExpirationDate === false) {
                throw new Error("Cartão com data de vencimento expirada")
            }

            const status = new StatusMock().generate(amount)

            const newPayment = new Payment(id, status, clientDB.getId(), clientId, amount, type, cardHolderName, cardNumber, cardExpirationDate, cardCvv)

            await new PaymentDatabase().create(newPayment)

            return newPayment
        }
    
        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage);
            
        }
    }  
    getPayment = async (input:any) =>{
        try {
            const { id, token } = input 

            if (!token) {
                throw new Error("authorization denied!")
            }
            if (!id) {
                throw new Error("enter payment ID!")
            }
        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage);
        }

        const Payment = await new PaymentDatabase().getPayment(input.id)
            if (!Payment) {
                throw new Error("Payment not found, check if id is correct!")
            }
            return Payment
    }
}