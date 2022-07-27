import express from "express";
import { ProductsController } from "../controller/ProductsController";






export const userRouter = express.Router();

userRouter.post("/signupProducts", new ProductsController().signupProducts);

