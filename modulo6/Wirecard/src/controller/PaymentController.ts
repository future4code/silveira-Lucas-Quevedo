import { Request, Response } from "express";
import { PaymentBusiness } from "../business/PaymentBusiness";
import { inputPaymetInputDTO } from "../model/Payment";

export class PaymentController {
    payment = async (req:Request, res:Response) =>{
        try {
            const {clientId, amount, type, cardHolderName, cardNumber, cardExpirationDate, cardCvv} = req.body
            const auth = req.headers.authorization as string
            const input:inputPaymetInputDTO={
                clientId,
                amount,
                type,
                cardHolderName,
                cardNumber,
                cardExpirationDate,
                cardCvv
            }
            const result = await new PaymentBusiness().payment(input, auth)
            res.status(201).send({message: result})
        } catch (error:any) {
            res.status(400).send({message:error.message || error.sqlMessage})
            
        }
    }
    getPaymenteController = async (req:Request, res:Response) =>{
        try {
            const token = req.headers.authorization as string
            const id = req.body

            const input ={
                id,
                token
            }

            const result = await new PaymentBusiness().getPayment(input)
            res.status(200).send({message:result})
        } catch (error:any) {
            res.status(400).send({message:error.message || error.sqlMessage})
        }
    }
   

}